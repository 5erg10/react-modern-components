import { SVGProps } from "react";

export type AlignTopSimpleVariant = "duotone" | "fill" | "light";

export interface AlignTopSimpleProps extends SVGProps<SVGSVGElement> {
  variant?: AlignTopSimpleVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,32a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H200A8,8,0,0,1,208,32ZM160,56H96A16,16,0,0,0,80,72V224a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16V72A16,16,0,0,0,160,56Z\"/>";
const LIGHT_INNER     = "<path d=\"M206,32a6,6,0,0,1-6,6H56a6,6,0,0,1,0-12H200A6,6,0,0,1,206,32ZM174,72V224a14,14,0,0,1-14,14H96a14,14,0,0,1-14-14V72A14,14,0,0,1,96,58h64A14,14,0,0,1,174,72Zm-12,0a2,2,0,0,0-2-2H96a2,2,0,0,0-2,2V224a2,2,0,0,0,2,2h64a2,2,0,0,0,2-2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M208,32a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H200A8,8,0,0,1,208,32ZM176,72V224a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16V72A16,16,0,0,1,96,56h64A16,16,0,0,1,176,72Zm-16,0H96V224h64Z\"/>";
const SECONDARY_PATHS = "<path d=\"M168,72V224a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h64A8,8,0,0,1,168,72Z\"/>";

export const AlignTopSimple = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: AlignTopSimpleProps) => {
  const svgStyle = { width: "1em", height: "1em", ...style };

  if (variant === "fill") return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill={primaryColor} style={svgStyle} {...props}>
      <g dangerouslySetInnerHTML={{ __html: FILL_INNER }} />
    </svg>
  );

  if (variant === "light") return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill={primaryColor} style={svgStyle} {...props}>
      <g dangerouslySetInnerHTML={{ __html: LIGHT_INNER }} />
    </svg>
  );

  const secColor   = secondaryColor ?? primaryColor;
  const secOpacity = secondaryColor ? 1 : 0.2;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" style={svgStyle} {...props}>
      <g fill={secColor} opacity={secOpacity} dangerouslySetInnerHTML={{ __html: SECONDARY_PATHS }} />
      <g fill={primaryColor} dangerouslySetInnerHTML={{ __html: PRIMARY_PATHS }} />
    </svg>
  );
};
