import { SVGProps } from "react";

export type CaretLineDownVariant = "duotone" | "fill" | "light";

export interface CaretLineDownProps extends SVGProps<SVGSVGElement> {
  variant?: CaretLineDownVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M42.34,77.66A8,8,0,0,1,48,64H208a8,8,0,0,1,5.66,13.66l-80,80a8,8,0,0,1-11.32,0ZM208,184H48a8,8,0,0,0,0,16H208a8,8,0,0,0,0-16Z\"/>";
const LIGHT_INNER     = "<path d=\"M43.76,76.24a6,6,0,0,1,8.48-8.48L128,143.51l75.76-75.75a6,6,0,0,1,8.48,8.48l-80,80a6,6,0,0,1-8.48,0ZM208,186H48a6,6,0,0,0,0,12H208a6,6,0,0,0,0-12Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M122.34,157.66a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,208,64H48a8,8,0,0,0-5.66,13.66ZM188.69,80,128,140.69,67.31,80ZM216,192a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16H208A8,8,0,0,1,216,192Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,72l-80,80L48,72Z\"/>";

export const CaretLineDown = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CaretLineDownProps) => {
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
