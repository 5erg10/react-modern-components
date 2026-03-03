import { SVGProps } from "react";

export type ArrowULeftDownVariant = "duotone" | "fill" | "light";

export interface ArrowULeftDownProps extends SVGProps<SVGSVGElement> {
  variant?: ArrowULeftDownVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,88v88a8,8,0,0,1-16,0V88a48,48,0,0,0-96,0v80h40a8,8,0,0,1,5.66,13.66l-48,48a8,8,0,0,1-11.32,0l-48-48A8,8,0,0,1,40,168H80V88a64,64,0,0,1,128,0Z\"/>";
const LIGHT_INNER     = "<path d=\"M206,88v88a6,6,0,0,1-12,0V88A50,50,0,0,0,94,88V209.51l37.76-37.75a6,6,0,0,1,8.48,8.48l-48,48a6,6,0,0,1-8.48,0l-48-48a6,6,0,0,1,8.48-8.48L82,209.51V88a62,62,0,0,1,124,0Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M144,24A64.07,64.07,0,0,0,80,88v80H40a8,8,0,0,0-5.66,13.66l48,48a8,8,0,0,0,11.32,0l48-48A8,8,0,0,0,136,168H96V88a48,48,0,0,1,96,0v88a8,8,0,0,0,16,0V88A64.07,64.07,0,0,0,144,24ZM88,212.69,59.31,184h57.38Z\"/>";
const SECONDARY_PATHS = "<path d=\"M136,176,88,224,40,176Z\"/>";

export const ArrowULeftDown = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ArrowULeftDownProps) => {
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
