import { SVGProps } from "react";

export type ArrowBendLeftDownVariant = "duotone" | "fill" | "light";

export interface ArrowBendLeftDownProps extends SVGProps<SVGSVGElement> {
  variant?: ArrowBendLeftDownVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,32a8,8,0,0,1-8,8,88.1,88.1,0,0,0-88,88v40h40a8,8,0,0,1,5.66,13.66l-48,48a8,8,0,0,1-11.32,0l-48-48A8,8,0,0,1,56,168H96V128A104.11,104.11,0,0,1,200,24,8,8,0,0,1,208,32Z\"/>";
const LIGHT_INNER     = "<path d=\"M206,32a6,6,0,0,1-6,6,90.1,90.1,0,0,0-90,90v81.51l37.76-37.75a6,6,0,0,1,8.48,8.48l-48,48a6,6,0,0,1-8.48,0l-48-48a6,6,0,0,1,8.48-8.48L98,209.51V128A102.12,102.12,0,0,1,200,26,6,6,0,0,1,206,32Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M200,24A104.11,104.11,0,0,0,96,128v40H56a8,8,0,0,0-5.66,13.66l48,48a8,8,0,0,0,11.32,0l48-48A8,8,0,0,0,152,168H112V128a88.1,88.1,0,0,1,88-88,8,8,0,0,0,0-16ZM104,212.69,75.31,184h57.38Z\"/>";
const SECONDARY_PATHS = "<path d=\"M152,176l-48,48L56,176Z\"/>";

export const ArrowBendLeftDown = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ArrowBendLeftDownProps) => {
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
