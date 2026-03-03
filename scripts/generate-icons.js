import fs from "fs";
import path from "path";
import chalk from "chalk";

const iconsDir = path.resolve("./public/icons");
const outDir   = path.resolve("./src/icons");
const variants = ["duotone", "fill", "light"];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function toPascalCase(kebab) {
  return kebab.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join("");
}

function extractSvgContent(raw) {
  const inner = raw.replace(/<svg[^>]*>/, "").replace(/<\/svg>/, "").trim();
  const viewBoxMatch = raw.match(/viewBox="([^"]+)"/);
  return { inner, viewBox: viewBoxMatch ? viewBoxMatch[1] : "0 0 256 256" };
}

// Para duotone: separa el path con opacity="0.2" (capa secundaria)
// del path principal. Devuelve { primaryPath, secondaryPath } como strings JSX-ready.
function parseDuotonePaths(inner) {
  // Extraer todos los elementos del SVG
  const elementRe = /<(path|circle|rect|ellipse|line|polyline|polygon)[^/]*(\/?>|>[\s\S]*?<\/\1>)/g;
  const elements = [];
  let m;
  while ((m = elementRe.exec(inner)) !== null) elements.push(m[0]);

  const secondaryEls = [];
  const primaryEls   = [];

  for (const el of elements) {
    if (/opacity\s*=\s*["']0\.2["']/.test(el)) {
      // Eliminar fill heredado del svg raíz y opacity para controlarlo desde React
      const cleaned = el
        .replace(/\s*opacity\s*=\s*["'][^"']*["']/g, "")
        .replace(/\s*fill\s*=\s*["']currentColor["']/g, "");
      secondaryEls.push(cleaned);
    } else {
      const cleaned = el.replace(/\s*fill\s*=\s*["']currentColor["']/g, "");
      primaryEls.push(cleaned);
    }
  }

  return {
    primaryPaths:   primaryEls.join(""),
    secondaryPaths: secondaryEls.join(""),
  };
}

// ─── Leer iconos disponibles ──────────────────────────────────────────────────

const baseNames = fs
  .readdirSync(path.join(iconsDir, "duotone"))
  .filter((f) => f.endsWith(".svg"))
  .map((f) => f.replace("-duotone.svg", ""));

console.log(chalk.grey(`\n📦 ${baseNames.length} iconos encontrados. Generando componentes...\n`));

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

let generated = 0;
let skipped   = 0;
const exportLines = [];

for (const base of baseNames) {
  const componentName = toPascalCase(base);
  const componentDir  = path.join(outDir, componentName);

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

  if (!fs.existsSync(componentDir)) fs.mkdirSync(componentDir, { recursive: true });

  const parsed = {};
  for (const variant of variants) {
    parsed[variant] = extractSvgContent(svgData[variant]);
  }

  const viewBox = parsed["duotone"].viewBox;
  const { primaryPaths, secondaryPaths } = parseDuotonePaths(parsed["duotone"].inner);

  // Contenido fill y light sin fill heredado (siguen usando currentColor del svg raíz)
  const fillInner  = parsed["fill"].inner.replace(/\s*fill\s*=\s*["']currentColor["']/g, "");
  const lightInner = parsed["light"].inner.replace(/\s*fill\s*=\s*["']currentColor["']/g, "");

  const tsx = [
    `import { SVGProps } from "react";`,
    ``,
    `export type ${componentName}Variant = "duotone" | "fill" | "light";`,
    ``,
    `export interface ${componentName}Props extends SVGProps<SVGSVGElement> {`,
    `  variant?: ${componentName}Variant;`,
    `  /** Color principal (fill/light) o capa primaria (duotone) */`,
    `  primaryColor?: string;`,
    `  /** Color de la capa secundaria — solo aplica en variant="duotone" */`,
    `  secondaryColor?: string;`,
    `}`,
    ``,
    `export const ${componentName} = ({`,
    `  variant = "duotone",`,
    `  primaryColor = "currentColor",`,
    `  secondaryColor,`,
    `  ...props`,
    `}: ${componentName}Props) => {`,
    `  const shared = {`,
    `    xmlns: "http://www.w3.org/2000/svg",`,
    `    viewBox: "${viewBox}",`,
    `    width: "1em",`,
    `    height: "1em",`,
    `    ...props,`,
    `  };`,
    ``,
    `  if (variant === "fill") {`,
    `    return (`,
    `      <svg {...shared} fill={primaryColor}>`,
    `        ${fillInner}`,
    `      </svg>`,
    `    );`,
    `  }`,
    ``,
    `  if (variant === "light") {`,
    `    return (`,
    `      <svg {...shared} fill={primaryColor}>`,
    `        ${lightInner}`,
    `      </svg>`,
    `    );`,
    `  }`,
    ``,
    `  // duotone: capa secundaria con secondaryColor (o primaryColor al 20% de opacidad como fallback)`,
    `  const secColor = secondaryColor ?? primaryColor;`,
    `  return (`,
    `    <svg {...shared} fill="none">`,
    `      <g fill={secColor} opacity={secondaryColor ? 1 : 0.2}>${secondaryPaths}</g>`,
    `      <g fill={primaryColor}>${primaryPaths}</g>`,
    `    </svg>`,
    `  );`,
    `};`,
    ``,
  ].join("\n");

  const indexTs = `export { ${componentName} } from "./${componentName}";\nexport type { ${componentName}Props, ${componentName}Variant } from "./${componentName}";\n`;

  fs.writeFileSync(path.join(componentDir, `${componentName}.tsx`), tsx);
  fs.writeFileSync(path.join(componentDir, "index.ts"), indexTs);

  exportLines.push(`export { ${componentName} } from "./${componentName}";`);
  exportLines.push(`export type { ${componentName}Props, ${componentName}Variant } from "./${componentName}";`);
  generated++;
}

fs.writeFileSync(path.join(outDir, "index.ts"), exportLines.join("\n") + "\n");

console.log(chalk.green(`✅ ${generated} componentes de icono generados en src/icons/`));
if (skipped > 0) console.log(chalk.yellow(`⚠️  ${skipped} iconos omitidos por variantes faltantes.`));
console.log(chalk.grey(`\nRecuerda ejecutar "${chalk.white("npm run build")}" para incluirlos en el bundle.\n`));
