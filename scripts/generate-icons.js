import fs from "fs";
import path from "path";
import chalk from "chalk";

const iconsDir    = path.resolve("./public/icons");
const outDir      = path.resolve("./src/icons");
const variants    = ["duotone", "fill", "light"];

// ─── Helpers ──────────────────────────────────────────────────────────────────

// "address-book-tabs" → "AddressBookTabs"
function toPascalCase(kebab) {
  return kebab
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
}

// Extrae el contenido interior del <svg> y limpia atributos de raíz
// para que podamos controlar width/height/className desde React.
function extractSvgContent(raw) {
  // Quitar la etiqueta <svg ...> de apertura y </svg> de cierre
  const inner = raw
    .replace(/<svg[^>]*>/, "")
    .replace(/<\/svg>/, "")
    .trim();

  // Extraer atributos de interés del svg raíz
  const viewBoxMatch = raw.match(/viewBox="([^"]+)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : "0 0 256 256";

  return { inner, viewBox };
}

// ─── Leer iconos disponibles ──────────────────────────────────────────────────

const baseNames = fs
  .readdirSync(path.join(iconsDir, "duotone"))
  .filter((f) => f.endsWith(".svg"))
  .map((f) => f.replace("-duotone.svg", ""));

console.log(chalk.grey(`\n📦 ${baseNames.length} iconos encontrados. Generando componentes...\n`));

// ─── Crear directorio de salida ───────────────────────────────────────────────
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

let generated = 0;
let skipped   = 0;
const exportLines = [];

for (const base of baseNames) {
  const componentName = toPascalCase(base);
  const componentDir  = path.join(outDir, componentName);

  // Leer los 3 SVGs
  const svgData = {};
  let allExist = true;

  for (const variant of variants) {
    const svgPath = path.join(iconsDir, variant, `${base}-${variant}.svg`);
    if (!fs.existsSync(svgPath)) {
      console.warn(chalk.yellow(`  ⚠️  Falta variante "${variant}" para "${base}", se omite.`));
      allExist = false;
      break;
    }
    svgData[variant] = fs.readFileSync(svgPath, "utf-8");
  }

  if (!allExist) { skipped++; continue; }

  // Crear carpeta del icono
  if (!fs.existsSync(componentDir)) fs.mkdirSync(componentDir, { recursive: true });

  // Extraer contenidos SVG para cada variante
  const parsed = {};
  for (const variant of variants) {
    parsed[variant] = extractSvgContent(svgData[variant]);
  }

  // Usamos el viewBox de la variante duotone (son iguales en todos)
  const viewBox = parsed["duotone"].viewBox;

  // ── Generar el .tsx del componente ──────────────────────────────────────────
  // Cada variante es una rama del switch. El SVG se inlinea directamente.
  // width/height se controlan vía CSS (font-size: 1em), color vía currentColor.
  const tsx = [
    `import { SVGProps } from "react";`,
    ``,
    `export type ${componentName}Variant = "duotone" | "fill" | "light";`,
    ``,
    `export interface ${componentName}Props extends SVGProps<SVGSVGElement> {`,
    `  variant?: ${componentName}Variant;`,
    `}`,
    ``,
    `export const ${componentName} = ({ variant = "duotone", ...props }: ${componentName}Props) => {`,
    `  const shared = {`,
    `    xmlns: "http://www.w3.org/2000/svg",`,
    `    viewBox: "${viewBox}",`,
    `    fill: "currentColor",`,
    `    width: "1em",`,
    `    height: "1em",`,
    `    ...props,`,
    `  };`,
    ``,
    `  switch (variant) {`,
    `    case "fill":`,
    `      return <svg {...shared}>${parsed["fill"].inner}</svg>;`,
    `    case "light":`,
    `      return <svg {...shared}>${parsed["light"].inner}</svg>;`,
    `    case "duotone":`,
    `    default:`,
    `      return <svg {...shared}>${parsed["duotone"].inner}</svg>;`,
    `  }`,
    `};`,
    ``,
  ].join("\n");

  // ── index.ts del icono ───────────────────────────────────────────────────────
  const indexTs = `export { ${componentName} } from "./${componentName}";\nexport type { ${componentName}Props, ${componentName}Variant } from "./${componentName}";\n`;

  fs.writeFileSync(path.join(componentDir, `${componentName}.tsx`), tsx);
  fs.writeFileSync(path.join(componentDir, "index.ts"), indexTs);

  exportLines.push(`export { ${componentName} } from "./${componentName}";`);
  exportLines.push(`export type { ${componentName}Props, ${componentName}Variant } from "./${componentName}";`);
  generated++;
}

// ─── Barrel principal src/icons/index.ts ─────────────────────────────────────
fs.writeFileSync(path.join(outDir, "index.ts"), exportLines.join("\n") + "\n");

// ─── Resumen ─────────────────────────────────────────────────────────────────
console.log(chalk.green(`✅ ${generated} componentes de icono generados en src/icons/`));
if (skipped > 0) console.log(chalk.yellow(`⚠️  ${skipped} iconos omitidos por variantes faltantes.`));
console.log(chalk.grey(`\nRecuerda ejecutar "${chalk.white("npm run build")}" para incluirlos en el bundle.\n`));
