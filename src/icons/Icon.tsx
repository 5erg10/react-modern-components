// AUTO-GENERATED — do not edit manually. Run: npm run generate-icons
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
    console.warn(`[Icon] Unknown icon: "${name}"`);
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
