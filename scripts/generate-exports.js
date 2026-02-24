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

/**
 * Elimina comentarios JSDoc (/** ... *​/) y de línea (//) del source
 * antes de parsear, para que no interfieran con el regex de props.
 */
function stripComments(src) {
  return src
    .replace(/\/\*[\s\S]*?\*\//g, "")   // bloque /* ... */
    .replace(/\/\/[^\n]*/g, "");         // línea // ...
}

/**
 * Extrae todos los type aliases del source como mapa nombre -> valor raw.
 *   type BadgeVariant = "default" | "success";  →  { BadgeVariant: '"default" | "success"' }
 */
function extractTypeAliases(src) {
  const aliases = {};
  const re = /\btype\s+(\w+)\s*=\s*([^;]+);/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    aliases[m[1]] = m[2].trim();
  }
  return aliases;
}

/**
 * Resuelve un rawType contra el mapa de aliases (un nivel de profundidad).
 */
function resolveType(raw, aliases) {
  const trimmed = raw.trim();
  return aliases[trimmed] ?? trimmed;
}

/**
 * Parsea el *.types.tsx de un componente y devuelve un array de PropDef.
 * Soporta:
 *   - inline unions:        prop?: "a" | "b"
 *   - type alias unions:    prop?: BadgeVariant  (resuelto a "a" | "b")
 *   - boolean / string / number
 *   - callbacks () => void  → ignorados
 */
function parseProps(name) {
  const typesFile = path.join(componentsDir, name, `${name}.types.tsx`);
  if (!fs.existsSync(typesFile)) return [];

  const raw     = fs.readFileSync(typesFile, "utf-8");
  const src     = stripComments(raw);
  const aliases = extractTypeAliases(src);
  const props   = [];

  // Extraer únicamente el cuerpo de la interface principal (Props)
  const ifaceMatch = src.match(/interface\s+\w+Props[^{]*\{([\s\S]*?)\}/);
  const body = ifaceMatch ? ifaceMatch[1] : src;

  // Cada prop: "  name?: type"
  const propRe = /^\s{1,8}(\w+)(\?)?:\s+(.+?)\s*;?\s*$/gm;
  let m;

  while ((m = propRe.exec(body)) !== null) {
    const propName = m[1];
    const optional = !!m[2];
    const resolved = resolveType(m[3], aliases);

    // Ignorar callbacks y tipos React complejos
    if (resolved.includes("=>") || resolved.startsWith("React.")) continue;

    // children: ReactNode  → tratar como string editable en el sandbox
    if (propName === "children") {
      props.push({ name: "children", type: "string", required: false, defaultValue: `${name} content`, multiline: true });
      continue;
    }

    // Union de string literals  →  select
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
      props.push({ name: propName, type: "number",  required: !optional, defaultValue: 0 });
      continue;
    }
    if (resolved === "string") {
      props.push({ name: propName, type: "string",  required: !optional, defaultValue: propName });
      continue;
    }
    // Tipo complejo no manejado (HTMLElement, etc.) → omitir
  }

  return props;
}

// ─── 4. Generador de entradas de registry ────────────────────────────────────
function generateEntry(name, props) {
  const id        = name.toLowerCase();
  const entryName = `${name}Entry`;

  // Array de PropDef para el registry
  const propDefs = props
    .map((p) => {
      const lines = [
        `      name: "${p.name}",`,
        `      type: "${p.type}",`,
        p.options   ? `      options: [${p.options.map((o) => `"${o}"`).join(", ")}],` : null,
        `      description: "",`,
        `      defaultValue: ${JSON.stringify(p.defaultValue)},`,
        p.required  ? `      required: true,`  : null,
        p.multiline ? `      multiline: true,` : null,
      ].filter(Boolean);
      return `    {\n${lines.join("\n")}\n    }`;
    })
    .join(",\n");

  // JSX props para el render
  const spreadProps = props
    .filter((p) => p.name !== "children")
    .map((p) => {
      if (p.type === "boolean") return `      ${p.name}={values["${p.name}"] as boolean}`;
      if (p.type === "number")  return `      ${p.name}={values["${p.name}"] as number}`;
      if (p.type === "select")  return `      ${p.name}={values["${p.name}"] as any}`;
      return `      ${p.name}={String(values["${p.name}"])}`;
    })
    .join("\n");

  const childrenProp = props.find((p) => p.name === "children");
  const renderInner  = childrenProp
    ? `<${name}\n${spreadProps}\n    >\n      {String(values["children"])}\n    </${name}>`
    : `<${name}\n${spreadProps}\n    />`;

  // generateCode
  const codeProps = props
    .filter((p) => p.name !== "children")
    .map((p) => {
      if (p.type === "boolean") return `    const ${p.name}Prop = values["${p.name}"] ? " ${p.name}" : "";`;
      if (p.type === "select")  return `    const ${p.name}Prop = \` ${p.name}="\${values["${p.name}"]}"\`;`;
      return `    const ${p.name}Prop = values["${p.name}"] ? \` ${p.name}="\${values["${p.name}"]}"\` : "";`;
    })
    .join("\n");

  const codePropStr = props
    .filter((p) => p.name !== "children")
    .map((p) => `\${${p.name}Prop}`)
    .join("");

  const codeReturn = childrenProp
    ? `return \`<${name}\${codePropStr}>\${values["children"]}</${name}>\`;`
    : `return \`<${name}\${codePropStr} />\`;`;

  return `/* AUTO-GENERATED: ${name} — edit render/generateCode as needed */
const ${entryName}: ComponentEntry = {
  id: "${id}",
  name: "${name}",
  icon: "🧩",
  category: "ui",
  description: "${name} component.",
  props: [\n${propDefs}\n  ],
  render: ({ values }) => (
    ${renderInner}
  ),
  generateCode: (values) => {
${codeProps}
    ${codeReturn}
  },
};
`;
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
// Recorre línea a línea para encontrar el final del último bloque de imports,
// independientemente de líneas en blanco o comentarios entre medio.
const lines    = registrySrc.split("\n");
let lastImportLineIdx = -1;
lines.forEach((line, i) => {
  if (line.startsWith("import ")) lastImportLineIdx = i;
});

const newImportLines = newComponents
  .map((name) => `import { ${name} } from "../src/components/${name}";`);

// Insertar las nuevas líneas justo después del último import
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
// Busca el cierre ]; del array componentRegistry específicamente
const arrayStart  = registrySrc.indexOf(registryArrayMarker);
const closingIdx  = registrySrc.indexOf("];", arrayStart);
const newEntryRefs = newComponents.map((name) => `  ${name}Entry`).join(",\n");

registrySrc =
  registrySrc.slice(0, closingIdx) +
  ",\n" + newEntryRefs + "\n" +
  registrySrc.slice(closingIdx);

// ─── 10. Escribir ─────────────────────────────────────────────────────────────
fs.writeFileSync(registryPath, registrySrc);
console.log("✅ registry.tsx actualizado con:", newComponents.join(", "));
