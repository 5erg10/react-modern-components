import fs from "fs";
import path from "path";

const componentsDir = path.resolve("./src/components");
const registryPath  = path.resolve("./sandbox/registry.tsx");

// ─── 1. Helpers de parseo de types (igual que en generate-exports.js) ─────────

function stripComments(src) {
  return src
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\/\/[^\n]*/g, "");
}

function extractTypeAliases(src) {
  const aliases = {};
  const re = /\btype\s+(\w+)\s*=\s*([^;]+);/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    aliases[m[1]] = m[2].trim();
  }
  return aliases;
}

function resolveType(raw, aliases) {
  return aliases[raw.trim()] ?? raw.trim();
}

function parseProps(name) {
  const typesFile = path.join(componentsDir, name, `${name}.types.tsx`);
  if (!fs.existsSync(typesFile)) return [];

  const raw     = fs.readFileSync(typesFile, "utf-8");
  const src     = stripComments(raw);
  const aliases = extractTypeAliases(src);
  const props   = [];

  const ifaceMatch = src.match(/interface\s+\w+Props[^{]*\{([\s\S]*?)\}/);
  const body = ifaceMatch ? ifaceMatch[1] : src;

  const propRe = /^\s{1,8}(\w+)(\?)?:\s+(.+?)\s*;?\s*$/gm;
  let m;

  while ((m = propRe.exec(body)) !== null) {
    const propName = m[1];
    const optional = !!m[2];
    const resolved = resolveType(m[3], aliases);

    if (resolved.includes("=>") || resolved.startsWith("React.")) continue;

    if (propName === "children") {
      props.push({ name: "children", type: "string", required: false, defaultValue: name + " content", multiline: true });
      continue;
    }

    if (resolved.includes('"')) {
      const options = [...resolved.matchAll(/"([^"]+)"/g)].map((x) => x[1]);
      if (options.length > 0) {
        props.push({ name: propName, type: "select", options, required: !optional, defaultValue: options[0] });
        continue;
      }
    }

    if (resolved === "boolean") { props.push({ name: propName, type: "boolean", required: !optional, defaultValue: false }); continue; }
    if (resolved === "number")  { props.push({ name: propName, type: "number",  required: !optional, defaultValue: 0 });     continue; }
    if (resolved === "string")  { props.push({ name: propName, type: "string",  required: !optional, defaultValue: propName }}); continue; }
  }

  return props;
}

// ─── 2. Generador de las secciones props / render / generateCode ──────────────
// Misma lógica que generate-exports.js pero devuelve las tres partes por separado
// para poder hacer cirugía en el bloque existente.

function buildPropDefs(props) {
  if (props.length === 0) return "\n  ";
  return "\n" + props.map((p) => {
    let s = "    {\n";
    s += "      name: \"" + p.name + "\",\n";
    s += "      type: \"" + p.type + "\",\n";
    if (p.options) s += "      options: [" + p.options.map((o) => "\"" + o + "\"").join(", ") + "],\n";
    s += "      description: \"\",\n";
    s += "      defaultValue: " + JSON.stringify(p.defaultValue) + ",\n";
    if (p.required)  s += "      required: true,\n";
    if (p.multiline) s += "      multiline: true,\n";
    s += "    }";
    return s;
  }).join(",\n") + "\n  ";
}

function buildRender(name, props) {
  const nonChildren  = props.filter((p) => p.name !== "children");
  const childrenProp = props.find((p) => p.name === "children");

  const spreadLines = nonChildren.map((p) => {
    if (p.type === "boolean") return "      " + p.name + "={values[\"" + p.name + "\"] as boolean}";
    if (p.type === "number")  return "      " + p.name + "={values[\"" + p.name + "\"] as number}";
    if (p.type === "select")  return "      " + p.name + "={values[\"" + p.name + "\"] as any}";
    return "      " + p.name + "={String(values[\"" + p.name + "\"])}";
  }).join("\n");

  if (childrenProp) {
    return "<" + name + "\n" + spreadLines + "\n    >\n      {String(values[\"children\"])}\n    </" + name + ">";
  }
  return "<" + name + (spreadLines ? "\n" + spreadLines + "\n    " : "") + "/>";
}

function buildGenerateCode(name, props) {
  const nonChildren  = props.filter((p) => p.name !== "children");
  const childrenProp = props.find((p) => p.name === "children");

  const propVarLines = nonChildren.map((p) => {
    if (p.type === "boolean") return "    const " + p.name + "Prop = values[\"" + p.name + "\"] ? \" " + p.name + "\" : \"\";";
    if (p.type === "select")  return "    const " + p.name + "Prop = ` " + p.name + "=\"$" + "{values[\"" + p.name + "\"]}\"`;";
    return "    const " + p.name + "Prop = values[\"" + p.name + "\"] ? ` " + p.name + "=\"$" + "{String(values[\"" + p.name + "\"])}\"` : \"\";";
  }).join("\n");

  const interpolations = nonChildren.map((p) => "$" + "{" + p.name + "Prop}").join("");

  let returnLine;
  if (childrenProp) {
    returnLine = "    return `<" + name + interpolations + ">$" + "{values[\"children\"]}</" + name + ">`;";
  } else {
    returnLine = "    return `<" + name + interpolations + " />`;";
  }

  return (propVarLines ? propVarLines + "\n" : "") + returnLine;
}

// ─── 3. Extraer props que ya están en un bloque Entry del registry ────────────
// Parsea los nombres de props del bloque "props: [ ... ]" existente en el registry.

function extractRegistryPropNames(entryBlock) {
  const propsMatch = entryBlock.match(/props:\s*\[([\s\S]*?)\],\s*\n\s*render:/);
  if (!propsMatch) return [];
  const body = propsMatch[1];
  return [...body.matchAll(/name:\s*"([^"]+)"/g)].map((m) => m[1]);
}

// ─── 4. Leer registry ────────────────────────────────────────────────────────
let registrySrc = fs.readFileSync(registryPath, "utf-8");

// ─── 5. Obtener todos los componentes del filesystem ─────────────────────────
const components = fs
  .readdirSync(componentsDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

// ─── 6. Para cada componente AUTO-GENERATED, comparar y actualizar si hay cambios
let totalUpdated = 0;

for (const name of components) {
  // Solo operamos sobre bloques marcados como AUTO-GENERATED
  const blockRegex = new RegExp(
    "\\/\\* AUTO-GENERATED: " + name + "[\\s\\S]*?\\*\\/\\n" +
    "const " + name + "Entry[\\s\\S]*?\\n\\};",
    "g"
  );

  const match = blockRegex.exec(registrySrc);
  if (!match) continue; // componente no auto-generado (Button, Modal…), lo saltamos

  const existingBlock = match[0];
  const currentPropNames = extractRegistryPropNames(existingBlock).sort().join(",");
  const freshProps = parseProps(name);
  const freshPropNames = freshProps.map((p) => p.name).sort().join(",");

  if (currentPropNames === freshPropNames) {
    console.log("⏭️  " + name + ": sin cambios en props, se omite.");
    continue;
  }

  console.log("🔄 " + name + ": props cambiadas (" + (currentPropNames || "ninguna") + ") → (" + (freshPropNames || "ninguna") + "). Actualizando...");

  // Reconstruir las tres secciones del bloque
  const newPropDefs     = buildPropDefs(freshProps);
  const newRender       = buildRender(name, freshProps);
  const newGenerateCode = buildGenerateCode(name, freshProps);

  // Sustituir props
  let updatedBlock = existingBlock.replace(
    /props:\s*\[[\s\S]*?\],\s*\n(\s*render:)/,
    "props: [" + newPropDefs + "],\n  render:"
  );

  // Sustituir render (desde el render: hasta el generateCode:)
  updatedBlock = updatedBlock.replace(
    /render:\s*\(\{[^}]*\}\)\s*=>\s*\([\s\S]*?\),\s*\n(\s*generateCode:)/,
    "render: ({ values }) => (\n    " + newRender + "\n  ),\n  generateCode:"
  );

  // Sustituir generateCode (desde el generateCode: hasta el cierre };)
  updatedBlock = updatedBlock.replace(
    /generateCode:\s*\([^)]*\)\s*=>\s*\{[\s\S]*?\},\n\};/,
    "generateCode: (values) => {\n" + newGenerateCode + "\n  },\n};"
  );

  registrySrc = registrySrc.replace(existingBlock, updatedBlock);
  totalUpdated++;
}

// ─── 7. Escribir solo si hubo cambios ────────────────────────────────────────
if (totalUpdated > 0) {
  fs.writeFileSync(registryPath, registrySrc);
  console.log("\n✅ registry.tsx actualizado: " + totalUpdated + " componente(s) sincronizado(s).\n");
} else {
  console.log("\n✅ registry.tsx ya estaba al día, no se realizaron cambios.\n");
}
