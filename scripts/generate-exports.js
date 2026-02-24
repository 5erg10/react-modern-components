import fs from "fs";
import path from "path";

const componentsDir = path.resolve("./src/components");
const registryPath  = path.resolve("./sandbox/registry.tsx");
const pkgPath       = path.resolve("./package.json");

// ─── 1. Leer componentes del filesystem ──────────────────────────────────────
const components = fs
  .readdirSync(componentsDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

// ─── 2. Actualizar package.json exports ──────────────────────────────────────
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));

const exportsObj = {
  ".": {
    types:   "./dist/index.d.ts",
    import:  "./dist/index.es.js",
    require: "./dist/index.cjs.js",
  },
};

components.forEach((name) => {
  const lower = name.toLowerCase();
  exportsObj[`./${lower}`] = {
    types:   `./dist/components/${name}/index.d.ts`,
    style:   `./dist/components/${name}/${name}.css`,
    import:  `./dist/components/${name}/index.es.js`,
    require: `./dist/components/${name}/index.cjs.js`,
  };
});

pkg.exports     = exportsObj;
pkg.sideEffects = ["**/*.css"];
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");
console.log("✅ package.json exports actualizados");

// ─── 3. Helpers de parseo ─────────────────────────────────────────────────────

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
  const trimmed = raw.trim();
  return aliases[trimmed] ?? trimmed;
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

    if (resolved === "boolean") {
      props.push({ name: propName, type: "boolean", required: !optional, defaultValue: false });
      continue;
    }
    if (resolved === "number") {
      props.push({ name: propName, type: "number", required: !optional, defaultValue: 0 });
      continue;
    }
    if (resolved === "string") {
      props.push({ name: propName, type: "string", required: !optional, defaultValue: propName });
      continue;
    }
  }

  return props;
}

// ─── 4. Generador de entradas de registry ────────────────────────────────────
// Todo el código TypeScript generado usa concatenación de strings (+),
// nunca template literals anidados, para que los ${ } queden como texto
// literal en el archivo de salida y no se evalúen durante el script.
function generateEntry(name, props) {
  const id        = name.toLowerCase();
  const entryName = name + "Entry";

  // ── PropDefs ──────────────────────────────────────────────────────────────
  const propDefs = props.map((p) => {
    let s = "    {\n";
    s += "      name: \"" + p.name + "\",\n";
    s += "      type: \"" + p.type + "\",\n";
    if (p.options) {
      s += "      options: [" + p.options.map((o) => "\"" + o + "\"").join(", ") + "],\n";
    }
    s += "      description: \"\",\n";
    s += "      defaultValue: " + JSON.stringify(p.defaultValue) + ",\n";
    if (p.required)  s += "      required: true,\n";
    if (p.multiline) s += "      multiline: true,\n";
    s += "    }";
    return s;
  }).join(",\n");

  // ── render ────────────────────────────────────────────────────────────────
  const nonChildren  = props.filter((p) => p.name !== "children");
  const childrenProp = props.find((p) => p.name === "children");

  const spreadLines = nonChildren.map((p) => {
    if (p.type === "boolean") return "      " + p.name + "={values[\"" + p.name + "\"] as boolean}";
    if (p.type === "number")  return "      " + p.name + "={values[\"" + p.name + "\"] as number}";
    if (p.type === "select")  return "      " + p.name + "={values[\"" + p.name + "\"] as any}";
    return "      " + p.name + "={String(values[\"" + p.name + "\"])}";
  }).join("\n");

  let renderInner;
  if (childrenProp) {
    renderInner  = "<" + name + "\n" + spreadLines + "\n    >\n";
    renderInner += "      {String(values[\"children\"])}\n";
    renderInner += "    </" + name + ">";
  } else {
    renderInner = "<" + name + "\n" + spreadLines + "\n    />";
  }

  // ── generateCode ──────────────────────────────────────────────────────────
  const propVarLines = nonChildren.map((p) => {
    if (p.type === "boolean") {
      return "    const " + p.name + "Prop = values[\"" + p.name + "\"] ? \" " + p.name + "\" : \"\";";
    }
    if (p.type === "select") {
      return "    const " + p.name + "Prop = ` " + p.name + "=\"$" + "{values[\"" + p.name + "\"]}\"`;";
    }
    return "    const " + p.name + "Prop = values[\"" + p.name + "\"] ? ` " + p.name + "=\"$" + "{String(values[\"" + p.name + "\"])}\"` : \"\";";
  }).join("\n");

  const interpolations = nonChildren
    .map((p) => "$" + "{" + p.name + "Prop}")
    .join("");

  let returnLine;
  if (childrenProp) {
    returnLine = "    return `<" + name + interpolations + ">$" + "{values[\"children\"]}</" + name + ">`;";
  } else {
    returnLine = "    return `<" + name + interpolations + " />`;";
  }

  let entry = "";
  entry += "/* AUTO-GENERATED: " + name + " — edit render/generateCode as needed */\n";
  entry += "const " + entryName + ": ComponentEntry = {\n";
  entry += "  id: \"" + id + "\",\n";
  entry += "  name: \"" + name + "\",\n";
  entry += "  icon: \"🧩\",\n";
  entry += "  category: \"ui\",\n";
  entry += "  description: \"" + name + " component.\",\n";
  entry += "  props: [\n" + propDefs + "\n  ],\n";
  entry += "  render: ({ values }) => (\n    " + renderInner + "\n  ),\n";
  entry += "  generateCode: (values) => {\n";
  entry += propVarLines + "\n";
  entry += returnLine + "\n";
  entry += "  },\n";
  entry += "};\n";

  return entry;
}

// ─── 5. Leer registry y detectar componentes ya registrados ──────────────────
let registrySrc = fs.readFileSync(registryPath, "utf-8");

const registeredRegex = /export const componentRegistry[\s\S]*?=\s*\[([\s\S]*?)\];/;
const registeredMatch = registrySrc.match(registeredRegex);
const alreadyRegistered = new Set(
  registeredMatch
    ? [...registeredMatch[1].matchAll(/(\w+)Entry/g)].map((m) => m[1])
    : []
);

console.log("🔍 Componentes ya en el registry:", [...alreadyRegistered].join(", ") || "(ninguno)");

// ─── 6. Detectar componentes nuevos ──────────────────────────────────────────
const newComponents = components.filter((name) => !alreadyRegistered.has(name));

if (newComponents.length === 0) {
  console.log("✅ Registry ya está al día, no hay componentes nuevos.");
  process.exit(0);
}

console.log("✨ Componentes nuevos detectados:", newComponents.join(", "));

// ─── 7. Insertar imports ──────────────────────────────────────────────────────
const lines = registrySrc.split("\n");
let lastImportLineIdx = -1;
lines.forEach((line, i) => {
  if (line.startsWith("import ")) lastImportLineIdx = i;
});

const newImportLines = newComponents
  .map((name) => "import { " + name + " } from \"../src/components/" + name + "\";");

lines.splice(lastImportLineIdx + 1, 0, ...newImportLines);
registrySrc = lines.join("\n");

// ─── 8. Insertar bloques de entrada antes del array ──────────────────────────
const registryArrayMarker = "export const componentRegistry: ComponentEntry[] = [";
const markerIdx = registrySrc.indexOf(registryArrayMarker);

const generatedBlocks = newComponents
  .map((name) => generateEntry(name, parseProps(name)))
  .join("\n");

registrySrc =
  registrySrc.slice(0, markerIdx) +
  generatedBlocks + "\n" +
  registrySrc.slice(markerIdx);

// ─── 9. Añadir referencias al array ──────────────────────────────────────────
// Estrategia: reconstruir el array completo en lugar de hacer inserción
// posicional, para tener control total sobre el formato y evitar líneas
// en blanco o comas extra independientemente de cómo esté el array original.
const arrayStart  = registrySrc.indexOf(registryArrayMarker);
const closingIdx  = registrySrc.indexOf("];", arrayStart);
const arrayBody   = registrySrc.slice(arrayStart + registryArrayMarker.length, closingIdx);

// Extraer nombres de Entry ya existentes preservando el orden original
const existingRefs = [...arrayBody.matchAll(/(\w+Entry)/g)].map((m) => m[1]);

// Añadir los nuevos al final
const allRefs = [
  ...existingRefs,
  ...newComponents.map((name) => name + "Entry"),
];

const newArrayBody = "\n" + allRefs.map((ref) => "  " + ref).join(",\n") + "\n";

registrySrc =
  registrySrc.slice(0, arrayStart + registryArrayMarker.length) +
  newArrayBody +
  registrySrc.slice(closingIdx);

// ─── 10. Escribir ─────────────────────────────────────────────────────────────
fs.writeFileSync(registryPath, registrySrc);
console.log("✅ registry.tsx actualizado con:", newComponents.join(", "));
