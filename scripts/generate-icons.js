import fs from "fs";
import path from "path";
import chalk from "chalk";

const iconsDir = path.resolve("./public/icons");
const outDir   = path.resolve("./src/icons");
const variants = ["duotone", "fill", "light"];

function toPascalCase(kebab) {
  return kebab.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join("");
}

function extractSvgContent(raw) {
  const inner = raw.replace(/<svg[^>]*>/, "").replace(/<\/svg>/, "").trim();
  const viewBoxMatch = raw.match(/viewBox="([^"]+)"/);
  return { inner, viewBox: viewBoxMatch ? viewBoxMatch[1] : "0 0 256 256" };
}

function parseDuotonePaths(inner) {
  const elementRe = /<(path|circle|rect|ellipse|line|polyline|polygon)(\s[^>]*)?(\/?>)/g;
  const secondaryEls = [];
  const primaryEls   = [];
  let m;
  while ((m = elementRe.exec(inner)) !== null) {
    const el = m[0];
    const cleaned = el
      .replace(/\s*opacity\s*=\s*["'][^"']*["']/g, "")
      .replace(/\s*fill\s*=\s*["'][^"']*["']/g, "");
    if (/opacity\s*=\s*["']0\.2["']/.test(el)) {
      secondaryEls.push(cleaned);
    } else {
      primaryEls.push(cleaned);
    }
  }
  return {
    primaryPaths:   primaryEls.join(""),
    secondaryPaths: secondaryEls.join(""),
  };
}

function cleanFill(inner) {
  return inner.replace(/\s*fill\s*=\s*["']currentColor["']/g, "");
}

const baseNames = fs
  .readdirSync(path.join(iconsDir, "duotone"))
  .filter((f) => f.endsWith(".svg"))
  .map((f) => f.replace("-duotone.svg", ""));

console.log(chalk.grey(`\n${baseNames.length} iconos encontrados. Generando componentes...\n`));

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
      console.warn(chalk.yellow(`  Falta variante "${variant}" para "${base}", se omite.`));
      allExist = false;
      break;
    }
    svgData[variant] = fs.readFileSync(svgPath, "utf-8");
  }

  if (!allExist) { skipped++; continue; }
  if (!fs.existsSync(componentDir)) fs.mkdirSync(componentDir, { recursive: true });

  const parsed = {};
  for (const v of variants) {
    parsed[v] = extractSvgContent(svgData[v]);
  }

  const viewBox = parsed["duotone"].viewBox;
  const { primaryPaths, secondaryPaths } = parseDuotonePaths(parsed["duotone"].inner);
  const fillInner  = cleanFill(parsed["fill"].inner);
  const lightInner = cleanFill(parsed["light"].inner);

  // dangerouslySetInnerHTML is intentional here: SVG path strings are static
  // build-time content from our own files, not user input.
  // It is the only way to make the fill prop on the parent <g> re-apply
  // correctly when primaryColor / secondaryColor props change at runtime.
  const lines = [
    `import { SVGProps } from "react";`,
    ``,
    `export type ${componentName}Variant = "duotone" | "fill" | "light";`,
    ``,
    `export interface ${componentName}Props extends SVGProps<SVGSVGElement> {`,
    `  variant?: ${componentName}Variant;`,
    `  primaryColor?: string;`,
    `  secondaryColor?: string;`,
    `}`,
    ``,
    `const FILL_INNER      = "${fillInner.replace(/"/g, '\\"')}";`,
    `const LIGHT_INNER     = "${lightInner.replace(/"/g, '\\"')}";`,
    `const PRIMARY_PATHS   = "${primaryPaths.replace(/"/g, '\\"')}";`,
    `const SECONDARY_PATHS = "${secondaryPaths.replace(/"/g, '\\"')}";`,
    ``,
    `export const ${componentName} = ({`,
    `  variant = "duotone",`,
    `  primaryColor = "currentColor",`,
    `  secondaryColor,`,
    `  style,`,
    `  ...props`,
    `}: ${componentName}Props) => {`,
    `  const svgStyle = { width: "1em", height: "1em", ...style };`,
    ``,
    `  if (variant === "fill") return (`,
    `    <svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" fill={primaryColor} style={svgStyle} {...props}>`,
    `      <g dangerouslySetInnerHTML={{ __html: FILL_INNER }} />`,
    `    </svg>`,
    `  );`,
    ``,
    `  if (variant === "light") return (`,
    `    <svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" fill={primaryColor} style={svgStyle} {...props}>`,
    `      <g dangerouslySetInnerHTML={{ __html: LIGHT_INNER }} />`,
    `    </svg>`,
    `  );`,
    ``,
    `  const secColor   = secondaryColor ?? primaryColor;`,
    `  const secOpacity = secondaryColor ? 1 : 0.2;`,
    `  return (`,
    `    <svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" fill="none" style={svgStyle} {...props}>`,
    `      <g fill={secColor} opacity={secOpacity} dangerouslySetInnerHTML={{ __html: SECONDARY_PATHS }} />`,
    `      <g fill={primaryColor} dangerouslySetInnerHTML={{ __html: PRIMARY_PATHS }} />`,
    `    </svg>`,
    `  );`,
    `};`,
    ``,
  ];

  const indexTs = [
    `export { ${componentName} } from "./${componentName}";`,
    `export type { ${componentName}Props, ${componentName}Variant } from "./${componentName}";`,
    ``,
  ].join("\n");

  fs.writeFileSync(path.join(componentDir, `${componentName}.tsx`), lines.join("\n"));
  fs.writeFileSync(path.join(componentDir, "index.ts"), indexTs);

  exportLines.push(`export { ${componentName} } from "./${componentName}";`);
  exportLines.push(`export type { ${componentName}Props, ${componentName}Variant } from "./${componentName}";`);
  generated++;
}

fs.writeFileSync(path.join(outDir, "index.ts"), exportLines.join("\n") + "\n");

console.log(chalk.green(`${generated} componentes generados en src/icons/`));
if (skipped > 0) console.log(chalk.yellow(`${skipped} iconos omitidos por variantes faltantes.`));
