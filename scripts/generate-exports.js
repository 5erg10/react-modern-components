import fs from "fs";
import path from "path";
import { select } from '@inquirer/prompts';

const componentsDir         = path.resolve("./src/components");
const registryComponentsDir = path.resolve("./sandbox/registryComponents");
const registryIndexPath     = path.resolve("./sandbox/registryComponents/index.ts");
const pkgPath               = path.resolve("./package.json");

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
      props.push({ name: "children", type: "string", required: false, defaultValue: `${name} content`, multiline: true });
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
  const entryName = `${name}Entry`;

  // ── PropDefs ──────────────────────────────────────────────────────────────
  const propDefs = props.map((p) => {
    const optionsLine = p.options
      ? `options: [${p.options.map((o) => `"${o}"`).join(", ")}],`
      : "";
    const requiredLine  = p.required  ? `required: true,`  : "";
    const multilineLine = p.multiline ? `multiline: true,` : "";

    return (
      `{
        name: "${p.name}",
        type: "${p.type}",
        ${optionsLine}
        description: "",
        defaultValue: ${JSON.stringify(p.defaultValue)},
        ${requiredLine}
        ${multilineLine}
      }`
    );
  }).join(",\n");

  // ── render ────────────────────────────────────────────────────────────────
  const nonChildren  = props.filter((p) => p.name !== "children");
  const childrenProp = props.find((p) => p.name === "children");

  const spreadLines = nonChildren.map((p) => {
    if (p.type === "boolean") return `      ${p.name}={values["${p.name}"] as boolean}`;
    if (p.type === "number")  return `      ${p.name}={values["${p.name}"] as number}`;
    if (p.type === "select")  return `      ${p.name}={values["${p.name}"] as any}`;
    return                           `      ${p.name}={String(values["${p.name}"])}`;
  }).join("\n");

  const renderInner = childrenProp
    ? `<${name}\n${spreadLines}\n    >\n      {String(values["children"])}\n    </${name}>`
    : `<${name}\n${spreadLines}\n    />`;

  // ── generateCode ──────────────────────────────────────────────────────────
  const propVarLines = nonChildren.map((p) => {
    if (p.type === "boolean") return `values["${p.name}"] ? " ${p.name}" : "";`;
    if (p.type === "select")  return `\` ${p.name}="\${values["${p.name}"]}"\`;`;
    return                           `values["${p.name}"] ? \` ${p.name}="\${String(values["${p.name}"])}"\` : "";`;
  }).join("\n");

  const returnLine = childrenProp
    ? `return \`<${name}>
          \${values["children"]}
      </${name}>\``
    : `return \`<${name}/>\``;

  // ── Fichero completo ──────────────────────────────────────────────────────
  return (
  ` import { ${name} } from "../../src/components/${name}";
    import { ComponentEntry } from "../registry";
    export const ${entryName}: ComponentEntry = {
        id: "${id}",
        name: "${name}",
        icon: "${iconsByCategory[category]}",
        category: "${category}",
        description: "${name} component.",
        props: [${propDefs}],
        render: ({ values }) => {
          return (
            ${renderInner}
          )  
        },
        generateCode: (values) => {
          const props = [
            ${propVarLines}
          ].filter(p => p !== "").join("\\n ");
          ${returnLine}
      },
    };`
  );
}

// ─── 5. Detectar componentes ya registrados ───────────────────────────────────
// Un componente está registrado si ya existe su fichero en registryComponents/
if (!fs.existsSync(registryComponentsDir)) {
  fs.mkdirSync(registryComponentsDir, { recursive: true });
}

// Construir un mapa componentName -> fileBaseName preservando el casing del
// fichero en disco. Ej: "digitalClockEntry.tsx" -> "DigitalClock": "digitalClockEntry"
function fileNameToComponentName(fileName) {
  const base = path.basename(fileName, "Entry.tsx");
  return base.charAt(0).toUpperCase() + base.slice(1);
}

const existingEntries = new Map(
  fs.readdirSync(registryComponentsDir)
    .filter((f) => f.endsWith("Entry.tsx"))
    .map((f) => {
      const fileBase = path.basename(f, ".tsx"); // "digitalClockEntry"
      const compName = fileNameToComponentName(f); // "DigitalClock"
      return [compName, fileBase];
    })
);

console.log("🔍 Componentes ya en el registry:", [...existingEntries.keys()].join(", ") || "(ninguno)");

// ─── 6. Detectar componentes nuevos ──────────────────────────────────────────
const newComponents = components.filter((name) => !existingEntries.has(name));

if (newComponents.length === 0) {
  console.log("✅ Registry ya está al día, no hay componentes nuevos.");
  process.exit(0);
}

console.log("✨ Componentes nuevos detectados:", newComponents.join(", "));

// ─── 7. Crear fichero por cada componente nuevo ───────────────────────────────
for (const name of newComponents) {
  const fileBase    = `${name.toLowerCase()}Entry`;
  const fileName    = `${fileBase}.tsx`;
  const filePath    = path.join(registryComponentsDir, fileName);
  const fileContent = generateEntryFile(name, parseProps(name));

  fs.writeFileSync(filePath, fileContent);
  existingEntries.set(name, fileBase);
  console.log("✅ Creado:", `sandbox/registryComponents/${fileName}`);
}

// ─── 8. Reescribir sandbox/registryComponents/index.ts (orden alfabético) ──────
// Reconstruye el fichero completo con la estructura acordada:
//   - un import por componente (comillas simples, orden alfabético)
//   - export const COMPS = [...] con los mismos nombres en el mismo orden
const sortedNames = [...existingEntries.keys()]
  .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

const importLines = sortedNames
  .map((name) => `import { ${name}Entry } from './${existingEntries.get(name)}';`)
  .join("\n");

const compsItems = sortedNames
  .map((name) => `    ${name}Entry`)
  .join(",\n");

const indexContent = `${importLines}\n\nexport const COMPS = [\n${compsItems}\n];`;

fs.writeFileSync(registryIndexPath, indexContent);
console.log("✅ sandbox/registryComponents/index.ts actualizado (orden alfabético)");

// ─── 9. Actualizar src/index.ts ──────────────────────────────────────────────
const srcIndexPath    = path.resolve("./src/index.ts");
const srcIndexContent = components
  .map((name) => `export { ${name} } from "./components/${name}";`)
  .join("\n") + "\n";

fs.writeFileSync(srcIndexPath, srcIndexContent);
console.log("✅ src/index.ts actualizado con:", components.join(", "));
