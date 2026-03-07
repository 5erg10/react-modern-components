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

function parsePropsFromTypes(name) {
  const typesFile = path.join(componentsDir, name, `${name}.types.tsx`);
  if (!fs.existsSync(typesFile)) return [];

  const raw     = fs.readFileSync(typesFile, "utf-8");
  const src     = stripComments(raw);
  const aliases = extractTypeAliases(src);
  const props   = [];

  const ifaceMatch = src.match(/interface\s+\w+Props[^{]*\{([\s\S]*?)\}/);
  const body = ifaceMatch ? ifaceMatch[1] : src;
  const propRe = /^\s{1,8}(\w+)(\?)?\s*:\s*(.+?)\s*;?\s*$/gm;
  let m;

  while ((m = propRe.exec(body)) !== null) {
    const propName = m[1];
    const optional = !!m[2];
    const resolved = resolveType(m[3], aliases);

    if (resolved.includes("=>") || resolved.startsWith("React.")) continue;

    if (propName === "children") {
      props.push({ name: "children", type: "string", required: false, options: null });
      continue;
    }

    if (resolved.includes('"')) {
      const options = [...resolved.matchAll(/"([^"]+)"/g)].map((x) => x[1]);
      if (options.length > 0) {
        props.push({ name: propName, type: "select", options, required: !optional });
        continue;
      }
    }

    if (resolved === "boolean") { props.push({ name: propName, type: "boolean", required: !optional, options: null }); continue; }
    if (resolved === "number")  { props.push({ name: propName, type: "number",  required: !optional, options: null }); continue; }
    if (resolved === "string")  { props.push({ name: propName, type: "string",  required: !optional, options: null }); continue; }
  }

  return props;
}

// ─── 2. Parsear props existentes en el Entry file ────────────────────────────

function parseExistingProps(entrySrc) {
  const propsMatch = entrySrc.match(/\bprops:\s*\[([\s\S]*?)\],\s*\n\s*render:/);
  if (!propsMatch) return new Map();

  const body = propsMatch[1];
  const map  = new Map();

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
    const nameMatch = block.match(/\bname:\s*"([^"]+)"/);
    if (!nameMatch) continue;
    const propName = nameMatch[1];

    const typeMatch      = block.match(/\btype:\s*"([^"]+)"/);
    const optionsMatch   = block.match(/\boptions:\s*\[([^\]]*)\]/);
    const descMatch      = block.match(/\bdescription:\s*"([^"]*)"/);
    const defaultMatch   = block.match(/\bdefaultValue:\s*([^,\n]+)/);
    const requiredMatch  = block.match(/\brequired:\s*(true|false)/);
    const multilineMatch = block.match(/\bmultiline:\s*(true|false)/);

    const options = optionsMatch
      ? [...optionsMatch[1].matchAll(/"([^"]+)"/g)].map((x) => x[1])
      : null;

    map.set(propName, {
      type:         typeMatch      ? typeMatch[1]                  : "string",
      options,
      required:     requiredMatch  ? requiredMatch[1] === "true"   : false,
      description:  descMatch      ? descMatch[1]                  : "",
      defaultValue: defaultMatch   ? defaultMatch[1].trim()        : '""',
      multiline:    multilineMatch ? multilineMatch[1] === "true"  : false,
    });
  }

  return map;
}

// ─── 3. Comparación ──────────────────────────────────────────────────────────

function propNeedsUpdate(fresh, existing) {
  if (!existing) return true;
  if (fresh.type !== existing.type) return true;
  if (fresh.required !== existing.required) return true;
  const fOpts = fresh.options    ? [...fresh.options].sort().join(",")    : "";
  const eOpts = existing.options ? [...existing.options].sort().join(",") : "";
  return fOpts !== eOpts;
}

function collectChanges(freshProps, existingMap) {
  const changes = [];
  for (const fp of freshProps) {
    const ex = existingMap.get(fp.name);
    if (!ex) {
      changes.push({ kind: "add", prop: fp });
    } else if (propNeedsUpdate(fp, ex)) {
      changes.push({ kind: "update", prop: fp, existing: ex });
    }
  }
  for (const eName of existingMap.keys()) {
    if (!freshProps.find((fp) => fp.name === eName)) {
      changes.push({ kind: "remove", name: eName });
    }
  }
  return changes;
}

// ─── 4. Helpers de valores por defecto y descripción ─────────────────────────

function defaultValueFor(p) {
  if (p.type === "boolean")    return "false";
  if (p.type === "number")     return "0";
  if (p.type === "select")     return '"' + (p.options?.[0] ?? "") + '"';
  if (p.name === "children")   return '"content"';
  return '"' + p.name + '"';
}

function descriptionFor(p) {
  if (p.name === "children") return "Content rendered inside the component.";
  if (p.type === "boolean")  return "When true, enables the " + p.name + " behaviour.";
  if (p.type === "select")   return "Controls the " + p.name + " of the component.";
  if (p.type === "number")   return "Numeric value for " + p.name + ".";
  return "Value for the " + p.name + " prop.";
}

// ─── 5. Constructores de secciones ───────────────────────────────────────────

function buildPropsSection(freshProps, existingMap) {
  const lines = freshProps.map((p) => {
    const existing  = existingMap.get(p.name);
    const sameType  = existing && existing.type === p.type;
    const desc      = sameType ? existing.description  : descriptionFor(p);
    const defVal    = sameType ? existing.defaultValue  : defaultValueFor(p);
    const multiline = p.name === "children" || (sameType && (existing?.multiline ?? false));

    let s = "    { ";
    s += 'name: "' + p.name + '", ';
    s += 'type: "' + p.type + '", ';
    if (p.options) s += "options: [" + p.options.map((o) => '"' + o + '"').join(", ") + "], ";
    s += 'description: "' + desc + '", ';
    s += "defaultValue: " + defVal;
    if (p.required)  s += ", required: true";
    if (multiline)   s += ", multiline: true";
    s += " }";
    return s;
  });

  return "  props: [\n" + lines.join(",\n") + "\n  ]";
}

function buildRenderSection(name, freshProps) {
  const nonChildren  = freshProps.filter((p) => p.name !== "children");
  const childrenProp = freshProps.find((p) => p.name === "children");

  const spreadLines = nonChildren.map((p) => {
    if (p.type === "boolean") return "      " + p.name + "={values[\"" + p.name + "\"] as boolean}";
    if (p.type === "number")  return "      " + p.name + "={values[\"" + p.name + "\"] as number}";
    if (p.type === "select")  return "      " + p.name + "={values[\"" + p.name + "\"] as any}";
    return                           "      " + p.name + "={String(values[\"" + p.name + "\"])}";
  }).join("\n");

  let inner;
  if (childrenProp) {
    inner = "<" + name + "\n" + spreadLines + "\n    >\n      {String(values[\"children\"])}\n    </" + name + ">";
  } else {
    inner = "<" + name + (spreadLines ? "\n" + spreadLines + "\n    " : "") + "/>";
  }

  return "  render: ({ values }) => (\n    " + inner + "\n  )";
}

function buildGenerateCodeSection(name, freshProps) {
  const nonChildren  = freshProps.filter((p) => p.name !== "children");
  const childrenProp = freshProps.find((p) => p.name === "children");

  const propVarLines = nonChildren.map((p) => {
    if (p.type === "boolean")
      return "    const " + p.name + "Prop = values[\"" + p.name + "\"] ? \" " + p.name + "\" : \"\";";
    if (p.type === "select")
      return "    const " + p.name + "Prop = ` " + p.name + "=\"$" + "{values[\"" + p.name + "\"]}\"`;";
    return "    const " + p.name + "Prop = values[\"" + p.name + "\"] ? ` " + p.name + "=\"$" + "{String(values[\"" + p.name + "\"])}\"` : \"\";";
  }).join("\n");

  const interpolations = nonChildren.map((p) => "$" + "{" + p.name + "Prop}").join("");

  const returnLine = childrenProp
    ? "    return `<" + name + interpolations + ">$" + "{values[\"children\"]}</" + name + ">`;"
    : "    return `<" + name + interpolations + " />`;";

  return "  generateCode: (values) => {\n" + (propVarLines ? propVarLines + "\n" : "") + returnLine + "\n  }";
}

// ─── 6. Reemplazos en el fichero ─────────────────────────────────────────────

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

// ─── 7. Main ─────────────────────────────────────────────────────────────────

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

  const entryPath  = path.join(registryComponentsDir, entryFile);
  const freshProps = parsePropsFromTypes(name);
  const entrySrc   = fs.readFileSync(entryPath, "utf-8");
  const existingMap = parseExistingProps(entrySrc);
  const changes    = collectChanges(freshProps, existingMap);

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
        chalk.white(c.prop.name) +
        chalk.grey(" (type: " + c.prop.type + (c.prop.options ? ", options: [" + c.prop.options.join(", ") + "]" : "") + ")")
      );
    } else if (c.kind === "update") {
      const typeChanged    = c.prop.type !== c.existing.type;
      const optionsChanged = JSON.stringify((c.prop.options ?? []).sort()) !== JSON.stringify((c.existing.options ?? []).sort());
      const reqChanged     = c.prop.required !== c.existing.required;
      const details = [
        typeChanged    ? chalk.grey("type: ") + chalk.yellow(c.existing.type) + chalk.grey(" → ") + chalk.white(c.prop.type) : null,
        optionsChanged ? chalk.grey("options: ") + chalk.yellow("[" + (c.existing.options ?? []).join(", ") + "]") + chalk.grey(" → ") + chalk.white("[" + (c.prop.options ?? []).join(", ") + "]") : null,
        reqChanged     ? chalk.grey("required: ") + chalk.yellow(String(c.existing.required)) + chalk.grey(" → ") + chalk.white(String(c.prop.required)) : null,
      ].filter(Boolean).join("  ");
      console.log(chalk.yellow("  ✏️  Prop modificada: ") + chalk.white(c.prop.name) + "  " + details);
    } else if (c.kind === "remove") {
      console.log(chalk.red("  ➖ Prop eliminada: ") + chalk.white(c.name));
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
  const newPropsSection  = buildPropsSection(freshProps, existingMap);
  const newRenderSection = buildRenderSection(name, freshProps);
  const newGcSection     = buildGenerateCodeSection(name, freshProps);

  let updatedSrc = entrySrc;
  updatedSrc = replacePropsSectionInFile(updatedSrc, newPropsSection);
  updatedSrc = replaceRenderSectionInFile(updatedSrc, newRenderSection);
  updatedSrc = replaceGenerateCodeSectionInFile(updatedSrc, newGcSection);

  fs.writeFileSync(entryPath, updatedSrc);
  totalUpdated++;
  console.log(chalk.green("  ✅ " + entryFile + " actualizado.\n"));
}

// ─── 8. Resumen final ────────────────────────────────────────────────────────
console.log(chalk.bold("\n──────────────────────────────────────────────────"));
if (totalUpdated > 0) {
  console.log(chalk.green("✅ Sync completado: " + totalUpdated + " componente(s) actualizado(s)" + (totalSkipped > 0 ? ", " + totalSkipped + " omitido(s)" : "") + "."));
} else {
  console.log(chalk.grey("✅ Sin cambios aplicados" + (totalSkipped > 0 ? " (" + totalSkipped + " omitido(s) manualmente)" : "") + "."));
}
console.log("");
