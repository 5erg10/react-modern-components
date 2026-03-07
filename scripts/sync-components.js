import fs from "fs";
import path from "path";
import { confirm } from "@inquirer/prompts";
import chalk from "chalk";

const componentsDir         = path.resolve("./src/components");
const registryComponentsDir = path.resolve("./sandbox/registryComponents");

// ─── 1. Helpers de parseo de types ───────────────────────────────────────────

function stripComments(src) {
  return src
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\/\/[^\n]*/g, "");
}

function extractTypeAliases(src) {
  const aliases = {};
  const re = /\btype\s+(\w+)\s*=\s*([^;]+);/g;
  let m;
  while ((m = re.exec(src)) !== null) aliases[m[1]] = m[2].trim();
  return aliases;
}

function resolveType(raw, aliases) {
  return aliases[raw.trim()] ?? raw.trim();
}

// Extrae el cuerpo de "interface XxxProps ... { ... }" contando llaves,
// para no romperse con genéricos como ButtonHTMLAttributes<HTMLButtonElement>.
function extractInterfaceBody(src) {
  const ifaceStart = src.search(/\binterface\s+\w+Props\b/);
  if (ifaceStart === -1) return src;

  let i = ifaceStart;
  while (i < src.length && src[i] !== "{") i++;
  if (i >= src.length) return src;

  let depth = 0;
  const bodyStart = i + 1;
  let bodyEnd = -1;
  for (; i < src.length; i++) {
    if (src[i] === "{") depth++;
    if (src[i] === "}") { depth--; if (depth === 0) { bodyEnd = i; break; } }
  }
  return bodyEnd === -1 ? src : src.slice(bodyStart, bodyEnd);
}

// Devuelve un Map<propName, { type, options, required }>
function parsePropsFromTypes(name) {
  const typesFile = path.join(componentsDir, name, `${name}.types.tsx`);
  if (!fs.existsSync(typesFile)) return new Map();

  const raw     = fs.readFileSync(typesFile, "utf-8");
  const src     = stripComments(raw);
  const aliases = extractTypeAliases(src);
  const body    = extractInterfaceBody(src);
  const map     = new Map();

  const propRe = /^\s{1,8}(\w+)(\?)?\s*:\s*(.+?)\s*;?,?\s*$/gm;
  let m;

  while ((m = propRe.exec(body)) !== null) {
    const propName = m[1];
    const optional = !!m[2];
    const resolved = resolveType(m[3], aliases);

    if (resolved.includes("=>") || resolved.startsWith("React.")) continue;

    if (propName === "children") {
      map.set("children", { type: "string", required: false, options: null });
      continue;
    }

    const quotedUnion = [...resolved.matchAll(/["']([^"']+)["']/g)].map((x) => x[1]);
    if (quotedUnion.length > 0) {
      map.set(propName, { type: "select", options: quotedUnion, required: !optional });
      continue;
    }

    if (resolved === "boolean") { map.set(propName, { type: "boolean", required: !optional, options: null }); continue; }
    if (resolved === "number")  { map.set(propName, { type: "number",  required: !optional, options: null }); continue; }
    if (resolved === "string")  { map.set(propName, { type: "string",  required: !optional, options: null }); continue; }
  }

  return map;
}

// ─── 2. Parsear props existentes en el Entry file ────────────────────────────
// Devuelve Map<name, { propName, type, options, required, description, defaultValue, multiline }>

// Extrae el body del array props: [ ... ] contando corchetes,
// para no romperse cuando alguna prop tiene options: ["a", "b", ...].
function extractPropsArrayBody(src) {
  const marker = "props: [";
  const markerIdx = src.indexOf(marker);
  if (markerIdx === -1) return null;

  const arrayStart = markerIdx + marker.length - 1; // índice del '['
  let depth = 0;
  let bodyStart = arrayStart + 1;
  let bodyEnd = -1;
  for (let i = arrayStart; i < src.length; i++) {
    if (src[i] === "[") depth++;
    if (src[i] === "]") { depth--; if (depth === 0) { bodyEnd = i; break; } }
  }
  return bodyEnd === -1 ? null : src.slice(bodyStart, bodyEnd);
}

function parseExistingProps(entrySrc) {
  const body = extractPropsArrayBody(entrySrc);
  if (body === null) return new Map();

  const map = new Map();

  // Dividir en bloques { ... } al nivel superior
  const blocks = [];
  let depth = 0, start = -1;
  for (let i = 0; i < body.length; i++) {
    if (body[i] === "{") { if (depth === 0) start = i; depth++; }
    if (body[i] === "}") {
      depth--;
      if (depth === 0 && start !== -1) { blocks.push(body.slice(start, i + 1)); start = -1; }
    }
  }

  for (const block of blocks) {
    const nameMatch = block.match(/\bname:\s*["']([^"']+)["']/);
    if (!nameMatch) continue;
    const entryName = nameMatch[1];

    const propNameMatch  = block.match(/\bpropName:\s*["']([^"']*)["']/);
    const typeMatch      = block.match(/\btype:\s*["']([^"']+)["']/);
    const optionsMatch   = block.match(/\boptions:\s*\[([^\]]*)\]/);
    const descMatch      = block.match(/\bdescription:\s*"([^"]*)"/);
    const defaultMatch   = block.match(/\bdefaultValue:\s*([^,\n}]+)/);
    const requiredMatch  = block.match(/\brequired:\s*(true|false)/);
    const multilineMatch = block.match(/\bmultiline:\s*(true|false)/);

    const options = optionsMatch
      ? [...optionsMatch[1].matchAll(/["']([^"']+)["']/g)].map((x) => x[1])
      : null;

    map.set(entryName, {
      propName:     propNameMatch  ? propNameMatch[1]               : entryName,
      type:         typeMatch      ? typeMatch[1]                   : "string",
      options,
      required:     requiredMatch  ? requiredMatch[1] === "true"    : false,
      description:  descMatch      ? descMatch[1]                   : "",
      defaultValue: defaultMatch   ? defaultMatch[1].trim()         : '""',
      multiline:    multilineMatch ? multilineMatch[1] === "true"   : false,
    });
  }

  return map;
}

// ─── 3. Comparación ──────────────────────────────────────────────────────────
// propName === '' | 'native'  → prop manual/nativa, se ignora completamente.
// propName no existe en types → REMOVE.
// propName existe pero cambió → UPDATE.
// prop en types sin referencia en propName → ADD.

function isIgnoredPropName(pn) {
  return !pn || pn === "native";
}

function propNeedsUpdate(entryProp, freshFromTypes) {
  if (entryProp.type !== freshFromTypes.type) return true;
  if (entryProp.required !== freshFromTypes.required) return true;
  const fOpts = freshFromTypes.options ? [...freshFromTypes.options].sort().join(",") : "";
  const eOpts = entryProp.options      ? [...entryProp.options].sort().join(",")      : "";
  return fOpts !== eOpts;
}

function collectChanges(typesMap, existingMap) {
  const changes = [];

  for (const [entryName, entryProp] of existingMap) {
    const pn = entryProp.propName;
    if (isIgnoredPropName(pn)) continue;

    const fromTypes = typesMap.get(pn);
    if (!fromTypes) {
      changes.push({ kind: "remove", name: entryName, propName: pn });
    } else if (propNeedsUpdate(entryProp, fromTypes)) {
      changes.push({ kind: "update", name: entryName, propName: pn, fresh: fromTypes, existing: entryProp });
    }
  }

  const referencedPropNames = new Set(
    [...existingMap.values()]
      .map((p) => p.propName)
      .filter((pn) => !isIgnoredPropName(pn))
  );
  for (const [typePropName, freshProp] of typesMap) {
    if (!referencedPropNames.has(typePropName)) {
      changes.push({ kind: "add", propName: typePropName, fresh: freshProp });
    }
  }

  return changes;
}

// ─── 4. Helpers de valores por defecto y descripción ─────────────────────────

function defaultValueFor(propName, p) {
  if (p.type === "boolean")    return "false";
  if (p.type === "number")     return "0";
  if (p.type === "select")     return '"' + (p.options?.[0] ?? "") + '"';
  if (propName === "children") return '"content"';
  return '"' + propName + '"';
}

function descriptionFor(propName, p) {
  if (propName === "children") return "Content rendered inside the component.";
  if (p.type === "boolean")    return "When true, enables the " + propName + " behaviour.";
  if (p.type === "select")     return "Controls the " + propName + " of the component.";
  if (p.type === "number")     return "Numeric value for " + propName + ".";
  return "Value for the " + propName + " prop.";
}

// ─── 5. Construir array final de props ───────────────────────────────────────

function applyChangesToPropsArray(typesMap, existingMap, changes) {
  const removeSet = new Set(changes.filter((c) => c.kind === "remove").map((c) => c.name));
  const updateMap = new Map(changes.filter((c) => c.kind === "update").map((c) => [c.name, c]));
  const addList   = changes.filter((c) => c.kind === "add");

  const result = [];

  for (const [entryName, entryProp] of existingMap) {
    if (removeSet.has(entryName)) continue;

    const upd = updateMap.get(entryName);
    if (upd) {
      const sameType = upd.fresh.type === entryProp.type;
      result.push({
        name:         entryName,
        propName:     upd.propName,
        type:         upd.fresh.type,
        options:      upd.fresh.options,
        required:     upd.fresh.required,
        description:  sameType ? entryProp.description  : descriptionFor(upd.propName, upd.fresh),
        defaultValue: sameType ? entryProp.defaultValue  : defaultValueFor(upd.propName, upd.fresh),
        multiline:    entryProp.multiline,
      });
    } else {
      result.push({ name: entryName, ...entryProp });
    }
  }

  for (const c of addList) {
    result.push({
      name:         c.propName,
      propName:     c.propName,
      type:         c.fresh.type,
      options:      c.fresh.options,
      required:     c.fresh.required,
      description:  descriptionFor(c.propName, c.fresh),
      defaultValue: defaultValueFor(c.propName, c.fresh),
      multiline:    c.propName === "children",
    });
  }

  return result;
}

// ─── 6. Constructores de secciones ───────────────────────────────────────────

function buildPropsSection(propsArray) {
  const lines = propsArray.map((p) => {
    let s = "    { ";
    s += 'name: "' + p.name + '", ';
    s += "propName: '" + p.propName + "', ";
    s += 'type: "' + p.type + '", ';
    if (p.options) s += "options: [" + p.options.map((o) => '"' + o + '"').join(", ") + "], ";
    s += 'description: "' + p.description + '", ';
    s += "defaultValue: " + p.defaultValue;
    if (p.required)  s += ", required: true";
    if (p.multiline) s += ", multiline: true";
    s += " }";
    return s;
  });

  return "  props: [\n" + lines.join(",\n") + "\n  ]";
}

function buildRenderSection(name, propsArray) {
  const managed      = propsArray.filter((p) => !isIgnoredPropName(p.propName) && p.name !== "children");
  const childrenProp = propsArray.find((p) => p.name === "children" && !isIgnoredPropName(p.propName));

  const spreadLines = managed.map((p) => {
    const valuePart =
      p.type === "boolean" ? 'values["' + p.name + '"] as boolean' :
      p.type === "number"  ? 'values["' + p.name + '"] as number'  :
      p.type === "select"  ? 'values["' + p.name + '"] as any'     :
                             'String(values["' + p.name + '"])';
    return "      " + p.propName + "={" + valuePart + "}";
  }).join("\n");

  let inner;
  if (childrenProp) {
    inner = "<" + name + "\n" + spreadLines + "\n    >\n      {String(values[\"children\"])}\n    </" + name + ">";
  } else {
    inner = "<" + name + (spreadLines ? "\n" + spreadLines + "\n    " : "") + "/>";
  }

  return "  render: ({ values }) => (\n    " + inner + "\n  )";
}

function buildGenerateCodeSection(name, propsArray) {
  const managed      = propsArray.filter((p) => !isIgnoredPropName(p.propName) && p.name !== "children");
  const childrenProp = propsArray.find((p) => p.name === "children" && !isIgnoredPropName(p.propName));

  const propVarLines = managed.map((p) => {
    if (p.type === "boolean")
      return "    const " + p.propName + "Prop = values[\"" + p.name + "\"] ? \" " + p.propName + "\" : \"\";";
    if (p.type === "select")
      return "    const " + p.propName + "Prop = ` " + p.propName + "=\"$" + "{values[\"" + p.name + "\"]}\"`;";
    return "    const " + p.propName + "Prop = values[\"" + p.name + "\"] ? ` " + p.propName + "=\"$" + "{String(values[\"" + p.name + "\"])}\"` : \"\";";
  }).join("\n");

  const interpolations = managed.map((p) => "$" + "{" + p.propName + "Prop}").join("");

  const returnLine = childrenProp
    ? "    return `<" + name + interpolations + ">$" + "{values[\"children\"]}</" + name + ">`;"
    : "    return `<" + name + interpolations + " />`;";

  return "  generateCode: (values) => {\n" + (propVarLines ? propVarLines + "\n" : "") + returnLine + "\n  }";
}

// ─── 7. Reemplazos en el fichero ─────────────────────────────────────────────

function replacePropsSectionInFile(src, newPropsSection) {
  const propsStart = src.indexOf("  props: [");
  if (propsStart === -1) return src;

  const renderMarker = "\n  render:";
  const renderIdx = src.indexOf(renderMarker, propsStart);
  if (renderIdx === -1) return src;

  let closingBracket = renderIdx - 1;
  while (closingBracket > propsStart && src[closingBracket] !== "]") closingBracket--;

  return src.slice(0, propsStart) + newPropsSection + src.slice(closingBracket + 1);
}

function replaceRenderSectionInFile(src, newRenderSection) {
  const renderStart = src.indexOf("  render: ");
  if (renderStart === -1) return src;

  const gcMarker = "\n  generateCode:";
  const gcIdx = src.indexOf(gcMarker, renderStart);
  if (gcIdx === -1) return src;

  let comma = gcIdx - 1;
  while (comma > renderStart && src[comma] !== ",") comma--;

  return src.slice(0, renderStart) + newRenderSection + src.slice(comma);
}

function replaceGenerateCodeSectionInFile(src, newGcSection) {
  const gcStart = src.indexOf("  generateCode: ");
  if (gcStart === -1) return src;

  const entryClose = src.lastIndexOf("\n};");
  if (entryClose === -1) return src;

  let gcEnd = entryClose;
  while (gcEnd > gcStart && (src[gcEnd - 1] === "," || src[gcEnd - 1] === "\n")) gcEnd--;

  return src.slice(0, gcStart) + newGcSection + src.slice(gcEnd);
}

// ─── 8. Main ─────────────────────────────────────────────────────────────────

const components = fs
  .readdirSync(componentsDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

let totalUpdated = 0;
let totalSkipped = 0;

for (const name of components) {
  const entryFile = fs
    .readdirSync(registryComponentsDir)
    .find(
      (f) =>
        f.endsWith("Entry.tsx") &&
        path.basename(f, "Entry.tsx").toLowerCase() === name.toLowerCase()
    );

  if (!entryFile) {
    console.log(chalk.yellow("⚠️  " + name + ": no se encontró fichero Entry en registryComponents/, se omite."));
    continue;
  }

  const entryPath   = path.join(registryComponentsDir, entryFile);
  const typesMap    = parsePropsFromTypes(name);
  const entrySrc    = fs.readFileSync(entryPath, "utf-8");
  const existingMap = parseExistingProps(entrySrc);
  const changes     = collectChanges(typesMap, existingMap);

  if (changes.length === 0) {
    console.log(chalk.grey("⏭️  " + name + ": sin cambios."));
    continue;
  }

  // ── Mostrar resumen de cambios ──────────────────────────────────────────
  console.log("\n" + chalk.bold.cyan("─── " + name + " ───────────────────────────────────────"));

  for (const c of changes) {
    if (c.kind === "add") {
      console.log(
        chalk.green("  ➕ Nueva prop: ") +
        chalk.white(c.propName) +
        chalk.grey(" (type: " + c.fresh.type + (c.fresh.options ? ", options: [" + c.fresh.options.join(", ") + "]" : "") + ")")
      );
    } else if (c.kind === "update") {
      const typeChanged    = c.fresh.type !== c.existing.type;
      const optionsChanged = JSON.stringify((c.fresh.options ?? []).sort()) !== JSON.stringify((c.existing.options ?? []).sort());
      const reqChanged     = c.fresh.required !== c.existing.required;
      const details = [
        typeChanged    ? chalk.grey("type: ")     + chalk.yellow(c.existing.type)                                    + chalk.grey(" → ") + chalk.white(c.fresh.type)                                   : null,
        optionsChanged ? chalk.grey("options: ")  + chalk.yellow("[" + (c.existing.options ?? []).join(", ") + "]") + chalk.grey(" → ") + chalk.white("[" + (c.fresh.options ?? []).join(", ") + "]") : null,
        reqChanged     ? chalk.grey("required: ") + chalk.yellow(String(c.existing.required))                        + chalk.grey(" → ") + chalk.white(String(c.fresh.required))                        : null,
      ].filter(Boolean).join("  ");
      console.log(
        chalk.yellow("  ✏️  Prop modificada: ") +
        chalk.white(c.name) + chalk.grey(" (propName: " + c.propName + ")") +
        "  " + details
      );
    } else if (c.kind === "remove") {
      console.log(
        chalk.red("  ➖ Prop eliminada: ") +
        chalk.white(c.name) + chalk.grey(" (propName: " + c.propName + " ya no existe en types.tsx)")
      );
    }
  }

  console.log(chalk.grey("  Fichero: sandbox/registryComponents/" + entryFile));

  // ── Confirmación ───────────────────────────────────────────────────────
  const apply = await confirm({
    message: "¿Aplicar estos cambios en " + name + "?",
    default: true,
  });

  if (!apply) {
    console.log(chalk.grey("  ↩️  Omitido.\n"));
    totalSkipped++;
    continue;
  }

  // ── Aplicar ────────────────────────────────────────────────────────────
  const propsArray       = applyChangesToPropsArray(typesMap, existingMap, changes);
  const newPropsSection  = buildPropsSection(propsArray);
  const newRenderSection = buildRenderSection(name, propsArray);
  const newGcSection     = buildGenerateCodeSection(name, propsArray);

  let updatedSrc = entrySrc;
  updatedSrc = replacePropsSectionInFile(updatedSrc, newPropsSection);
  updatedSrc = replaceRenderSectionInFile(updatedSrc, newRenderSection);
  updatedSrc = replaceGenerateCodeSectionInFile(updatedSrc, newGcSection);

  fs.writeFileSync(entryPath, updatedSrc);
  totalUpdated++;
  console.log(chalk.green("  ✅ " + entryFile + " actualizado.\n"));
}

// ─── 9. Resumen final ────────────────────────────────────────────────────────
console.log(chalk.bold("\n──────────────────────────────────────────────────"));
if (totalUpdated > 0) {
  console.log(chalk.green("✅ Sync completado: " + totalUpdated + " componente(s) actualizado(s)" + (totalSkipped > 0 ? ", " + totalSkipped + " omitido(s)" : "") + "."));
} else {
  console.log(chalk.grey("✅ Sin cambios aplicados" + (totalSkipped > 0 ? " (" + totalSkipped + " omitido(s) manualmente)" : "") + "."));
}
console.log("");
