import fs from "fs";
import path from "path";
import { select } from '@inquirer/prompts';

const componentsDir        = path.resolve("./src/components");
const registryComponentsDir = path.resolve("./sandbox/registryComponents");
const registryIndexPath    = path.resolve("./sandbox/registryComponents/index.ts");
const pkgPath              = path.resolve("./package.json");

const iconsByCategory = {
  ui:     "🧩",
  input:  "📱",
  modal:  "🎞️",
  tabla:  "📋",
  button: "🛎️",
};

const category = await select({
  message: 'Introduce la categoria del componente: ',
  choices: [
    { name: "Ui",     value: "ui"     },
    { name: "Input",  value: "input"  },
    { name: "Modal",  value: "modal"  },
    { name: "Table",  value: "tabla"  },
    { name: "Button", value: "button" },
  ],
});

console.log('category: ', category);

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

// ─── 4. Generador del fichero registryComponents/${name}Entry.tsx ─────────────
function generateEntryFile(name, props) {
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

  // ── Fichero completo ──────────────────────────────────────────────────────
  let file = "";
  file += "import { " + name + " } from \"../../src/components/" + name + "\";\n";
  file += "import { ComponentEntry } from \"../registry\";\n";
  file += "\n";
  file += "export const " + entryName + ": ComponentEntry = {\n";
  file += "  id: \"" + id + "\",\n";
  file += "  name: \"" + name + "\",\n";
  file += "  icon: \"" + iconsByCategory[category] + "\",\n";
  file += "  category: \"" + category + "\",\n";
  file += "  description: \"" + name + " component.\",\n";
  file += "  props: [\n" + propDefs + "\n  ],\n";
  file += "  render: ({ values }) => (\n    " + renderInner + "\n  ),\n";
  file += "  generateCode: (values) => {\n";
  file += propVarLines + "\n";
  file += returnLine + "\n";
  file += "  },\n";
  file += "};\n";

  return file;
}

// ─── 5. Detectar componentes ya registrados ───────────────────────────────────
// Un componente está registrado si ya existe su fichero en registryComponents/
if (!fs.existsSync(registryComponentsDir)) {
  fs.mkdirSync(registryComponentsDir, { recursive: true });
}

const existingEntryFiles = new Set(
  fs.readdirSync(registryComponentsDir)
    .filter((f) => f.endsWith("Entry.tsx"))
    .map((f) => {
      // "buttonEntry.tsx" → "Button"  (capitalizar primera letra)
      const base = path.basename(f, "Entry.tsx");
      return base.charAt(0).toUpperCase() + base.slice(1);
    })
);

console.log("🔍 Componentes ya en el registry:", [...existingEntryFiles].join(", ") || "(ninguno)");

// ─── 6. Detectar componentes nuevos ──────────────────────────────────────────
const newComponents = components.filter((name) => !existingEntryFiles.has(name));

if (newComponents.length === 0) {
  console.log("✅ Registry ya está al día, no hay componentes nuevos.");
  process.exit(0);
}

console.log("✨ Componentes nuevos detectados:", newComponents.join(", "));

// ─── 7. Crear fichero por cada componente nuevo ───────────────────────────────
for (const name of newComponents) {
  const fileName   = name.toLowerCase() + "Entry.tsx";
  const filePath   = path.join(registryComponentsDir, fileName);
  const fileContent = generateEntryFile(name, parseProps(name));

  fs.writeFileSync(filePath, fileContent);
  console.log("✅ Creado:", `sandbox/registryComponents/${fileName}`);
}

// ─── 8. Actualizar sandbox/registryComponents/index.ts ───────────────────────
// Leer el index existente (o partir de vacío) y añadir solo las líneas nuevas.
let indexContent = fs.existsSync(registryIndexPath)
  ? fs.readFileSync(registryIndexPath, "utf-8")
  : "";

for (const name of newComponents) {
  const entryName  = name + "Entry";
  const importLine = `export { ${entryName} } from "./${name.toLowerCase()}Entry";\n`;

  if (!indexContent.includes(importLine.trim())) {
    indexContent += importLine;
  }
}

fs.writeFileSync(registryIndexPath, indexContent);
console.log("✅ sandbox/registryComponents/index.ts actualizado");

// ─── 9. Actualizar src/index.ts ──────────────────────────────────────────────
const srcIndexPath  = path.resolve("./src/index.ts");
const srcIndexContent = components
  .map((name) => `export { ${name} } from "./components/${name}";`)
  .join("\n") + "\n";

fs.writeFileSync(srcIndexPath, srcIndexContent);
console.log("✅ src/index.ts actualizado con:", components.join(", "));
