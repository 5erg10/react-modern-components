import fs from "fs";
import path from "path";
import chalk from "chalk";

const iconsDir = path.resolve("./public/icons");
const outDir   = path.resolve("./src/icons");
const variants = ["duotone", "fill", "light"];

// ─── Helpers ──────────────────────────────────────────────────────────────────

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
    if (/opacity\s*=\s*["']0\.2["']/.test(el)) secondaryEls.push(cleaned);
    else primaryEls.push(cleaned);
  }
  return { primary: primaryEls.join(""), secondary: secondaryEls.join("") };
}

function cleanFill(inner) {
  return inner.replace(/\s*fill\s*=\s*["']currentColor["']/g, "");
}

// ─── Leer iconos ──────────────────────────────────────────────────────────────

const baseNames = fs
  .readdirSync(path.join(iconsDir, "duotone"))
  .filter((f) => f.endsWith(".svg"))
  .map((f) => f.replace("-duotone.svg", ""));

console.log(chalk.grey(`\n${baseNames.length} iconos encontrados. Generando...\n`));
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// ─── Construir el mapa de datos ───────────────────────────────────────────────
// { "address-book": { viewBox, duotone: {primary, secondary}, fill, light } }

const iconMap = {};
let skipped = 0;

for (const base of baseNames) {
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

  const parsed = {};
  for (const v of variants) parsed[v] = extractSvgContent(svgData[v]);

  const { primary, secondary } = parseDuotonePaths(parsed["duotone"].inner);

  iconMap[base] = {
    viewBox:  parsed["duotone"].viewBox,
    duotone:  { primary, secondary },
    fill:     cleanFill(parsed["fill"].inner),
    light:    cleanFill(parsed["light"].inner),
  };
}

// ─── Escribir icons-data.ts ───────────────────────────────────────────────────

const dataLines = [
  `// AUTO-GENERATED — do not edit manually. Run: npm run generate-icons`,
  `export type IconVariant = "duotone" | "fill" | "light";`,
  ``,
  `export interface IconData {`,
  `  viewBox: string;`,
  `  duotone: { primary: string; secondary: string };`,
  `  fill: string;`,
  `  light: string;`,
  `}`,
  ``,
  `export const iconsData: Record<string, IconData> = {`,
];

for (const [name, data] of Object.entries(iconMap)) {
  // Escape backticks in SVG path strings
  const esc = (s) => s.replace(/`/g, "\\`").replace(/\$/g, "\\$");
  dataLines.push(`  "${name}": {`);
  dataLines.push(`    viewBox: "${data.viewBox}",`);
  dataLines.push(`    duotone: {`);
  dataLines.push(`      primary:   \`${esc(data.duotone.primary)}\`,`);
  dataLines.push(`      secondary: \`${esc(data.duotone.secondary)}\`,`);
  dataLines.push(`    },`);
  dataLines.push(`    fill:  \`${esc(data.fill)}\`,`);
  dataLines.push(`    light: \`${esc(data.light)}\`,`);
  dataLines.push(`  },`);
}

dataLines.push(`};`);
dataLines.push(``);
dataLines.push(`export const iconNames = Object.keys(iconsData) as string[];`);
dataLines.push(``);

fs.writeFileSync(path.join(outDir, "icons-data.ts"), dataLines.join("\n"));

// ─── Escribir Icon.tsx ────────────────────────────────────────────────────────

const iconTsx = `// AUTO-GENERATED — do not edit manually. Run: npm run generate-icons
import { SVGProps } from "react";
import { iconsData, IconVariant } from "./icons-data";

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  /** Icon name in kebab-case, e.g. "address-book" */
  name: string;
  variant?: IconVariant;
  /** Primary color — applies to all variants */
  primaryColor?: string;
  /** Secondary color — only applies to variant="duotone" */
  secondaryColor?: string;
}

export const Icon = ({
  name,
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: IconProps) => {
  const data = iconsData[name];

  if (!data) {
    console.warn(\`[Icon] Unknown icon: "\${name}"\`);
    return null;
  }

  const svgStyle = { width: "1em", height: "1em", ...style };

  if (variant === "fill") return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={data.viewBox} fill={primaryColor} style={svgStyle} {...props}>
      <g dangerouslySetInnerHTML={{ __html: data.fill }} />
    </svg>
  );

  if (variant === "light") return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={data.viewBox} fill={primaryColor} style={svgStyle} {...props}>
      <g dangerouslySetInnerHTML={{ __html: data.light }} />
    </svg>
  );

  // duotone
  const secColor   = secondaryColor ?? primaryColor;
  const secOpacity = secondaryColor ? 1 : 0.2;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={data.viewBox} fill="none" style={svgStyle} {...props}>
      <g fill={secColor} opacity={secOpacity} dangerouslySetInnerHTML={{ __html: data.duotone.secondary }} />
      <g fill={primaryColor} dangerouslySetInnerHTML={{ __html: data.duotone.primary }} />
    </svg>
  );
};
`;

fs.writeFileSync(path.join(outDir, "Icon.tsx"), iconTsx);

// ─── Escribir index.ts del barrel ────────────────────────────────────────────

const indexTs = `// AUTO-GENERATED — do not edit manually. Run: npm run generate-icons
export { Icon } from "./Icon";
export type { IconProps } from "./Icon";
export { iconsData, iconNames } from "./icons-data";
export type { IconData, IconVariant } from "./icons-data";
`;

fs.writeFileSync(path.join(outDir, "index.ts"), indexTs);

// ─── Resumen ─────────────────────────────────────────────────────────────────

const total = Object.keys(iconMap).length;
console.log(chalk.green(`✅ ${total} iconos generados → src/icons/icons-data.ts + Icon.tsx`));
if (skipped > 0) console.log(chalk.yellow(`⚠️  ${skipped} iconos omitidos por variantes faltantes.`));
console.log(chalk.grey(`\nUso: <Icon name="address-book" variant="duotone" />\n`));
