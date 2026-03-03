import { SVGProps } from "react";

export type GenderFemaleVariant = "duotone" | "fill" | "light";

export interface GenderFemaleProps extends SVGProps<SVGSVGElement> {
  variant?: GenderFemaleVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M128,144a40,40,0,1,1,40-40A40,40,0,0,1,128,144ZM216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40ZM136,176V159.42a56,56,0,1,0-16,0V176H96a8,8,0,0,0,0,16h24v16a8,8,0,0,0,16,0V192h24a8,8,0,0,0,0-16Z\"/>";
const LIGHT_INNER     = "<path d=\"M206,96a78,78,0,1,0-84,77.75V202H88a6,6,0,0,0,0,12h34v26a6,6,0,0,0,12,0V214h34a6,6,0,0,0,0-12H134V173.75A78.09,78.09,0,0,0,206,96ZM62,96a66,66,0,1,1,66,66A66.08,66.08,0,0,1,62,96Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M208,96a80,80,0,1,0-88,79.6V200H88a8,8,0,0,0,0,16h32v24a8,8,0,0,0,16,0V216h32a8,8,0,0,0,0-16H136V175.6A80.11,80.11,0,0,0,208,96ZM64,96a64,64,0,1,1,64,64A64.07,64.07,0,0,1,64,96Z\"/>";
const SECONDARY_PATHS = "<path d=\"M200,96a72,72,0,1,1-72-72A72,72,0,0,1,200,96Z\"/>";

export const GenderFemale = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: GenderFemaleProps) => {
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
