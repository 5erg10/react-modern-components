import fs from "fs";
import path from "path";

const componentsDir = path.resolve("./src/components");
const registryPath  = path.resolve("./sandbox/registry.tsx");

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

// Parsea el .types.tsx y devuelve un array de props con type, options y required.
// description y defaultValue se dejan vacíos — los preservaremos del registry.
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
      if (options.length > 0) { props.push({ name: propName, type: "select", options, required: !optional }); continue; }
    }

    if (resolved === "boolean") { props.push({ name: propName, type: "boolean", required: !optional, options: null }); continue; }
    if (resolved === "number")  { props.push({ name: propName, type: "number",  required: !optional, options: null }); continue; }
    if (resolved === "string")  { props.push({ name: propName, type: "string",  required: !optional, options: null }); continue; }
  }

  return props;
}

// ─── 2. Extraer props existentes del registry ────────────────────────────────
// Devuelve un Map<propName, { description, defaultValue, multiline }> para
// poder preservar esos valores al reconstruir el bloque.

function extractExistingProps(entryBlock) {
  const propsMatch = entryBlock.match(/props:\s*\[([\s\S]*?)\],\s*\n\s*render:/);
  if (!propsMatch) return new Map();

  const body = propsMatch[1];
  const map  = new Map();

  // Cada prop es un objeto { ... } separado por comas al mismo nivel
  const propBlocks = body.split(/\n\s*\},?\s*\n\s*\{/).map((b) => "{" + b.replace(/^\s*\{/, "") + "}");

  for (const block of propBlocks) {
    const nameMatch = block.match(/name:\s*"([^"]+)"/);
    if (!nameMatch) continue;
    const propName = nameMatch[1];

    const descMatch     = block.match(/description:\s*"([^"]*)"/);
    const defaultMatch  = block.match(/defaultValue:\s*([^,\n]+)/);
    const multilineMatch = block.match(/multiline:\s*(true|false)/);

    map.set(propName, {
      description:  descMatch    ? descMatch[1]                    : "",
      defaultValue: defaultMatch ? defaultMatch[1].trim()          : '""',
      multiline:    multilineMatch ? multilineMatch[1] === "true"  : false,
    });
  }

  return map;
}

// ─── 3. Comparación profunda de props ────────────────────────────────────────
// Compara name + type + options + required. description y defaultValue se
// preservan del registry, por eso no entran en la comparación.

function propsSignature(props) {
  return JSON.stringify(
    props.map((p) => ({
      name:     p.name,
      type:     p.type,
      options:  p.options ? [...p.options].sort() : null,
      required: p.required,
    })).sort((a, b) => a.name.localeCompare(b.name))
  );
}

// ─── 4. Generadores de secciones ─────────────────────────────────────────────

function buildPropDefs(freshProps, existingMap) {
  if (freshProps.length === 0) return "\n  ";

  return "\n" + freshProps.map((p) => {
    // Preservar description y defaultValue si la prop ya existía
    const existing     = existingMap.get(p.name);
    const description  = existing ? existing.description  : "";
    const defaultValue = existing ? existing.defaultValue : defaultForType(p);
    const multiline    = p.name === "children" || (existing?.multiline ?? false);

    let s = "    {\n";
    s += "      name: \"" + p.name + "\",\n";
    s += "      type: \"" + p.type + "\",\n";
    if (p.options) s += "      options: [" + p.options.map((o) => "\"" + o + "\"").join(", ") + "],\n";
    s += "      description: \"" + description + "\",\n";
    s += "      defaultValue: " + defaultValue + ",\n";
    if (p.required)  s += "      required: true,\n";
    if (multiline)   s += "      multiline: true,\n";
    s += "    }";
    return s;
  }).join(",\n") + "\n  ";
}

function defaultForType(p) {
  if (p.type === "boolean") return "false";
  if (p.type === "number")  return "0";
  if (p.type === "select")  return "\"" + (p.options?.[0] ?? "") + "\"";
  return "\"" + p.name + "\"";
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

  const returnLine = childrenProp
    ? "    return `<" + name + interpolations + ">$" + "{values[\"children\"]}</" + name + ">`);"
    : "    return `<" + name + interpolations + " />`;";

  return (propVarLines ? propVarLines + "\n" : "") + returnLine;
}

// ─── 5. Extraer el bloque Entry de cualquier componente ──────────────────────
// Busca "const <Name>Entry: ComponentEntry = {" y captura hasta el "}" de cierre
// al mismo nivel de indentación (línea que empieza por "};").

function extractEntryBlock(src, name) {
  const startMarker = "const " + name + "Entry: ComponentEntry = {";
  const startIdx = src.indexOf(startMarker);
  if (startIdx === -1) return null;

  // Avanzar desde el inicio del bloque hasta encontrar el "};" de cierre
  let depth = 0;
  let i = startIdx;
  while (i < src.length) {
    if (src[i] === "{") depth++;
    if (src[i] === "}") {
      depth--;
      if (depth === 0) {
        // Incluir el ";" y el salto de línea final
        const endIdx = src.indexOf(";", i);
        return src.slice(startIdx, endIdx + 1);
      }
    }
    i++;
  }
  return null;
}

// ─── 6. Leer registry y componentes ──────────────────────────────────────────
let registrySrc = fs.readFileSync(registryPath, "utf-8");

const components = fs
  .readdirSync(componentsDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

// ─── 7. Iterar y sincronizar ──────────────────────────────────────────────────
let totalUpdated = 0;

for (const name of components) {
  const existingBlock = extractEntryBlock(registrySrc, name);
  if (!existingBlock) {
    console.log("⚠️  " + name + ": no se encontró ningún Entry en el registry, se omite.");
    continue;
  }

  const freshProps    = parsePropsFromTypes(name);
  const existingMap   = extractExistingProps(existingBlock);

  // Comparación profunda: name + type + options + required
  const existingPropsForSig = [...existingMap.entries()].map(([pName]) => {
    // Reconstruir la firma desde el bloque existente para comparar
    const propsMatch = existingBlock.match(/props:\s*\[([\s\S]*?)\],\s*\n\s*render:/);
    if (!propsMatch) return { name: pName, type: "string", options: null, required: false };
    const body = propsMatch[1];
    const propBlockRe = new RegExp('name:\\s*"' + pName + '"[\\s\\S]*?(?=\\n\\s*\\{|\\n\\s*\\])', 'g');
    const pb = propBlockRe.exec(body)?.[0] ?? "";
    const type     = pb.match(/type:\s*"([^"]+)"/)?.[1] ?? "string";
    const options  = pb.includes("options:") ? [...pb.matchAll(/"([^"]+)"/g)].slice(1).map((x) => x[1]) : null;
    const required = pb.includes("required: true");
    return { name: pName, type, options, required };
  });

  if (propsSignature(freshProps) === propsSignature(existingPropsForSig)) {
    console.log("⏭️  " + name + ": sin cambios, se omite.");
    continue;
  }

  console.log("🔄 " + name + ": cambios detectados, actualizando props / render / generateCode...");

  // Reconstruir secciones preservando description y defaultValue existentes
  const newPropDefs     = buildPropDefs(freshProps, existingMap);
  const newRender       = buildRender(name, freshProps);
  const newGenerateCode = buildGenerateCode(name, freshProps);

  let updatedBlock = existingBlock;

  // Reemplazar props
  updatedBlock = updatedBlock.replace(
    /props:\s*\[[\s\S]*?\],\s*\n(\s*render:)/,
    "props: [" + newPropDefs + "],\n  render:"
  );

  // Reemplazar render
  updatedBlock = updatedBlock.replace(
    /render:\s*\(\{[^}]*\}\)\s*=>\s*[\s\S]*?,\s*\n(\s*generateCode:)/,
    "render: ({ values }) => (\n    " + newRender + "\n  ),\n  generateCode:"
  );

  // Reemplazar generateCode
  updatedBlock = updatedBlock.replace(
    /generateCode:\s*\([^)]*\)\s*=>\s*\{[\s\S]*?\},\n\};/,
    "generateCode: (values) => {\n" + newGenerateCode + "\n  },\n};"
  );

  registrySrc = registrySrc.replace(existingBlock, updatedBlock);
  totalUpdated++;
}

// ─── 8. Escribir solo si hubo cambios ────────────────────────────────────────
if (totalUpdated > 0) {
  fs.writeFileSync(registryPath, registrySrc);
  console.log("\n✅ registry.tsx actualizado: " + totalUpdated + " componente(s) sincronizado(s).\n");
} else {
  console.log("\n✅ registry.tsx ya estaba al día, no se realizaron cambios.\n");
}
