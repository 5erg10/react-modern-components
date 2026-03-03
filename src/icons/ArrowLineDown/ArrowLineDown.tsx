import { SVGProps } from "react";

export type ArrowLineDownVariant = "duotone" | "fill" | "light";

export interface ArrowLineDownProps extends SVGProps<SVGSVGElement> {
  variant?: ArrowLineDownVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M50.34,117.66A8,8,0,0,1,56,104h64V32a8,8,0,0,1,16,0v72h64a8,8,0,0,1,5.66,13.66l-72,72a8,8,0,0,1-11.32,0ZM216,208H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z\"/>";
const LIGHT_INNER     = "<path d=\"M51.76,116.24a6,6,0,0,1,8.48-8.48L122,169.51V32a6,6,0,0,1,12,0V169.51l61.76-61.75a6,6,0,0,1,8.48,8.48l-72,72a6,6,0,0,1-8.48,0ZM216,210H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M122.34,189.66a8,8,0,0,0,11.32,0l72-72A8,8,0,0,0,200,104H136V32a8,8,0,0,0-16,0v72H56a8,8,0,0,0-5.66,13.66ZM180.69,120,128,172.69,75.31,120ZM224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,216Z\"/>";
const SECONDARY_PATHS = "<path d=\"M200,112l-72,72L56,112Z\"/>";

export const ArrowLineDown = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ArrowLineDownProps) => {
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
