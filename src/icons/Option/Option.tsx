import { SVGProps } from "react";

export type OptionVariant = "duotone" | "fill" | "light";

export interface OptionProps extends SVGProps<SVGSVGElement> {
  variant?: OptionVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM200,176H152.94a15.92,15.92,0,0,1-14.31-8.84L103.06,96H56a8,8,0,0,1,0-16h47.06a15.92,15.92,0,0,1,14.31,8.84L152.94,160H200a8,8,0,0,1,0,16Zm0-80H152a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Z\"/>";
const LIGHT_INNER     = "<path d=\"M230,192a6,6,0,0,1-6,6H160.94a13.92,13.92,0,0,1-12.52-7.74L96.84,87.11A2,2,0,0,0,95.06,86H32a6,6,0,0,1,0-12H95.06a13.92,13.92,0,0,1,12.52,7.74l51.58,103.15a2,2,0,0,0,1.78,1.11H224A6,6,0,0,1,230,192ZM152,86h72a6,6,0,0,0,0-12H152a6,6,0,0,0,0,12Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M232,192a8,8,0,0,1-8,8H160.94a15.92,15.92,0,0,1-14.31-8.84L95.06,88H32a8,8,0,0,1,0-16H95.06a15.92,15.92,0,0,1,14.31,8.84L160.94,184H224A8,8,0,0,1,232,192ZM152,88h72a8,8,0,0,0,0-16H152a8,8,0,0,0,0,16Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,80V192H48a16,16,0,0,1-16-16V80Z\"/>";

export const Option = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: OptionProps) => {
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
