import { SVGProps } from "react";

export type MagnetStraightVariant = "duotone" | "fill" | "light";

export interface MagnetStraightProps extends SVGProps<SVGSVGElement> {
  variant?: MagnetStraightVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M200,40H160a16,16,0,0,0-16,16v88a16,16,0,0,1-32,0V56A16,16,0,0,0,96,40H56A16,16,0,0,0,40,56v88a88,88,0,0,0,88,88h.67c48.15-.36,87.33-40.29,87.33-89V56A16,16,0,0,0,200,40Zm0,16V96H160V56ZM96,56V96H56V56Z\"/>";
const LIGHT_INNER     = "<path d=\"M200,42H160a14,14,0,0,0-14,14v88a18,18,0,0,1-36,0V56A14,14,0,0,0,96,42H56A14,14,0,0,0,42,56v88a86,86,0,0,0,86,86h.65c47.06-.35,85.35-39.38,85.35-87V56A14,14,0,0,0,200,42ZM160,54h40a2,2,0,0,1,2,2V90H158V56A2,2,0,0,1,160,54ZM56,54H96a2,2,0,0,1,2,2V90H54V56A2,2,0,0,1,56,54Zm72.56,164H128a74,74,0,0,1-74-74V102H98v42a30,30,0,0,0,60,0V102h44v41C202,184.05,169.06,217.7,128.56,218Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M200,40H160a16,16,0,0,0-16,16v88a16,16,0,0,1-32,0V56A16,16,0,0,0,96,40H56A16,16,0,0,0,40,56v88a88,88,0,0,0,88,88h.67c48.15-.36,87.33-40.29,87.33-89V56A16,16,0,0,0,200,40Zm0,16V88H160V56ZM96,56V88H56V56Zm32.55,160A72,72,0,0,1,56,144V104H96v40a32,32,0,0,0,64,0V104h40v39C200,183,168,215.71,128.55,216Z\"/>";
const SECONDARY_PATHS = "<path d=\"M104,56V96H48V56a8,8,0,0,1,8-8H96A8,8,0,0,1,104,56Zm96-8H160a8,8,0,0,0-8,8V96h56V56A8,8,0,0,0,200,48Z\"/>";

export const MagnetStraight = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: MagnetStraightProps) => {
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
