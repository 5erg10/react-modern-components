import fs from "fs";
import path from "path";

const componentsDir = path.resolve("./src/components");
const registryPath = path.resolve("./sandbox/registry.tsx");
const pkgPath = path.resolve("./package.json");

// ─── 1. Leer componentes del filesystem ──────────────────────────────────────
const components = fs
  .readdirSync(componentsDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name); // e.g. ["Button", "Modal"]

// ─── 2. Actualizar package.json exports ──────────────────────────────────────
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));

const exportsObj = {
  ".": {
    types: "./dist/index.d.ts",
    import: "./dist/index.es.js",
    require: "./dist/index.cjs.js",
  },
};

components.forEach((name) => {
  const lower = name.toLowerCase();
  exportsObj[`./${lower}`] = {
    types: `./dist/components/${name}/index.d.ts`,
    style: `./dist/components/${name}/${name}.css`,
    import: `./dist/components/${name}/index.es.js`,
    require: `./dist/components/${name}/index.cjs.js`,
  };
});

pkg.exports = exportsObj;
pkg.sideEffects = ["**/*.css"];
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");
console.log("✅ package.json exports actualizados");

// ─── 3. Sincronizar registry.tsx ──────────────────────────────────────────────

/**
 * Parsea el archivo *.types.tsx de un componente y extrae sus props.
 * Soporta:
 *   - prop?: string
 *   - prop: boolean
 *   - prop?: "a" | "b" | "c"   -> type select con options
 *   - prop?: number
 *   - prop: () => void          -> ignorado (callbacks)
 */
function parseProps(name) {
  const typesFile = path.join(componentsDir, name, `${name}.types.tsx`);
  if (!fs.existsSync(typesFile)) return [];

  const src = fs.readFileSync(typesFile, "utf-8");
  const props = [];

  // Match cada línea de prop dentro de la interface
  const propRegex = /^\s+(\w+)(\?)?:\s+(.+?);?\s*$/gm;
  let match;

  while ((match = propRegex.exec(src)) !== null) {
    const propName = match[1];
    const optional = !!match[2];
    const rawType = match[3].trim();

    // Ignorar callbacks y React nodes complejos
    if (rawType.includes("=>") || rawType.startsWith("React.")) continue;
    // Ignorar props heredadas que no son literales
    if (propName === "children" && rawType === "ReactNode") {
      props.push({ name: "children", type: "string", required: false, defaultValue: `${name} content` });
      continue;
    }

    // Union de string literals -> select
    if (rawType.includes('"')) {
      const options = [...rawType.matchAll(/"([^"]+)"/g)].map((m) => m[1]);
      if (options.length > 0) {
        props.push({ name: propName, type: "select", options, required: !optional, defaultValue: options[0] });
        continue;
      }
    }

    if (rawType === "boolean") {
      props.push({ name: propName, type: "boolean", required: !optional, defaultValue: false });
      continue;
    }
    if (rawType === "number") {
      props.push({ name: propName, type: "number", required: !optional, defaultValue: 0 });
      continue;
    }
    if (rawType === "string") {
      props.push({ name: propName, type: "string", required: !optional, defaultValue: "" });
      continue;
    }
    // Tipo complejo (e.g. () => void, HTMLElement, etc.) -> omitir
  }

  return props;
}

/**
 * Genera el bloque TypeScript de una ComponentEntry para un componente nuevo.
 */
function generateEntry(name, props) {
  const id = name.toLowerCase();
  const entryName = `${name}Entry`;

  // Props definitions array
  const propDefs = props
    .map((p) => {
      const lines = [
        `      name: "${p.name}",`,
        `      type: "${p.type}",`,
        p.options ? `      options: [${p.options.map((o) => `"${o}"`).join(", ")}],` : null,
        `      description: "",`,
        `      defaultValue: ${JSON.stringify(p.defaultValue)},`,
        p.required ? `      required: true,` : null,
      ].filter(Boolean);
      return `    {\n${lines.join("\n")}\n    }`;
    })
    .join(",\n");

  // render: spread all prop values onto the component
  const spreadProps = props
    .map((p) => {
      if (p.type === "boolean") return `      ${p.name}={values["${p.name}"] as boolean}`;
      if (p.type === "number") return `      ${p.name}={values["${p.name}"] as number}`;
      if (p.type === "select") return `      ${p.name}={values["${p.name}"] as any}`;
      if (p.name === "children") return null; // handled separately
      return `      ${p.name}={String(values["${p.name}"])}`;
    })
    .filter(Boolean)
    .join("\n");

  const childrenProp = props.find((p) => p.name === "children");
  const renderInner = childrenProp
    ? `<${name}\n${spreadProps}\n    >\n      {String(values["children"])}\n    </${name}>`
    : `<${name}\n${spreadProps}\n    />`;

  // generateCode: build JSX string from current values
  const codeProps = props
    .filter((p) => p.name !== "children")
    .map((p) => {
      if (p.type === "boolean") return `  const ${p.name}Prop = values["${p.name}"] ? " ${p.name}" : "";`;
      if (p.type === "select") return `  const ${p.name}Prop = \` ${p.name}="\${values["${p.name}"]}"\`;`;
      return `  const ${p.name}Prop = values["${p.name}"] ? \` ${p.name}="\${values["${p.name}"]}"\` : "";`;
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

// ─── 4. Leer registry actual y detectar qué componentes ya existen ────────────
let registrySrc = fs.readFileSync(registryPath, "utf-8");

// Los componentes ya registrados son los que aparecen en el array final
const registeredRegex = /export const componentRegistry[\s\S]*?=\s*\[([\s\S]*?)\];/;
const registeredMatch = registrySrc.match(registeredRegex);
const alreadyRegistered = new Set(
  registeredMatch
    ? [...registeredMatch[1].matchAll(/(\w+)Entry/g)].map((m) => m[1])
    : []
);

console.log("🔍 Componentes ya en el registry:", [...alreadyRegistered].join(", "));

// ─── 5. Detectar componentes nuevos ──────────────────────────────────────────
const newComponents = components.filter((name) => !alreadyRegistered.has(name));

if (newComponents.length === 0) {
  console.log("✅ Registry ya está al día, no hay componentes nuevos.");
  process.exit(0);
}

console.log("✨ Componentes nuevos detectados:", newComponents.join(", "));

// ─── 6. Insertar imports de los componentes nuevos ───────────────────────────
// Buscar el bloque de imports al inicio y añadir los nuevos al final
const lastImportIdx = registrySrc.lastIndexOf("\nimport ");
const endOfLastImport = registrySrc.indexOf("\n", lastImportIdx + 1);

const newImports = newComponents
  .map((name) => `import { ${name} } from "../src/components/${name}";`)
  .join("\n");

registrySrc =
  registrySrc.slice(0, endOfLastImport) +
  "\n" + newImports +
  registrySrc.slice(endOfLastImport);

// ─── 7. Insertar entradas generadas antes del array final ────────────────────
const registryArrayMarker = "export const componentRegistry: ComponentEntry[] = [";
const markerIdx = registrySrc.indexOf(registryArrayMarker);

const generatedBlocks = newComponents
  .map((name) => generateEntry(name, parseProps(name)))
  .join("\n");

registrySrc =
  registrySrc.slice(0, markerIdx) +
  generatedBlocks + "\n" +
  registrySrc.slice(markerIdx);

// ─── 8. Añadir nuevos entries al array final ─────────────────────────────────
// Insertar justo antes del cierre ];
const closingIdx = registrySrc.lastIndexOf("];");
const newEntryRefs = newComponents.map((name) => `  ${name}Entry`).join(",\n");

registrySrc =
  registrySrc.slice(0, closingIdx) +
  ",\n" + newEntryRefs + "\n" +
  registrySrc.slice(closingIdx);

// ─── 9. Escribir registry actualizado ────────────────────────────────────────
fs.writeFileSync(registryPath, registrySrc);
console.log("✅ registry.tsx actualizado con:", newComponents.join(", "));
