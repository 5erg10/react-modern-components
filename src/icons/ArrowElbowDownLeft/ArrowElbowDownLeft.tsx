import { SVGProps } from "react";

export type ArrowElbowDownLeftVariant = "duotone" | "fill" | "light";

export interface ArrowElbowDownLeftProps extends SVGProps<SVGSVGElement> {
  variant?: ArrowElbowDownLeftVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M200,32V176a8,8,0,0,1-8,8H104v40a8,8,0,0,1-13.66,5.66l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,104,128v40h80V32a8,8,0,0,1,16,0Z\"/>";
const LIGHT_INNER     = "<path d=\"M198,32V176a6,6,0,0,1-6,6H62.49l37.75,37.76a6,6,0,1,1-8.48,8.48l-48-48a6,6,0,0,1,0-8.48l48-48a6,6,0,1,1,8.48,8.48L62.49,170H186V32a6,6,0,0,1,12,0Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M192,24a8,8,0,0,0-8,8V168H104V128a8,8,0,0,0-13.66-5.66l-48,48a8,8,0,0,0,0,11.32l48,48A8,8,0,0,0,104,224V184h88a8,8,0,0,0,8-8V32A8,8,0,0,0,192,24ZM88,204.69,59.31,176,88,147.31Z\"/>";
const SECONDARY_PATHS = "<path d=\"M96,128v96L48,176Z\"/>";

export const ArrowElbowDownLeft = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ArrowElbowDownLeftProps) => {
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
