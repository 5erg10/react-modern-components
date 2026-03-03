import { SVGProps } from "react";

export type AlienVariant = "duotone" | "fill" | "light";

export interface AlienProps extends SVGProps<SVGSVGElement> {
  variant?: AlienVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M128,16a96.11,96.11,0,0,0-96,96c0,24,12.56,55.06,33.61,83,21.18,28.15,44.5,45,62.39,45s41.21-16.81,62.39-45c21.05-28,33.61-59,33.61-83A96.11,96.11,0,0,0,128,16ZM64,116a12,12,0,0,1,12-12,36,36,0,0,1,36,36,12,12,0,0,1-12,12A36,36,0,0,1,64,116Zm80,84H112a8,8,0,0,1,0-16h32a8,8,0,0,1,0,16Zm12-48a12,12,0,0,1-12-12,36,36,0,0,1,36-36,12,12,0,0,1,12,12A36,36,0,0,1,156,152Z\"/>";
const LIGHT_INNER     = "<path d=\"M128,18a94.11,94.11,0,0,0-94,94c0,23.6,12.41,54.2,33.21,81.83C83.27,215.18,107.68,238,128,238s44.73-22.82,60.79-44.17C209.59,166.2,222,135.6,222,112A94.11,94.11,0,0,0,128,18Zm51.21,168.62C161.48,210.17,140.91,226,128,226s-33.48-15.83-51.21-39.38C57.8,161.37,46,132.78,46,112a82,82,0,0,1,164,0C210,132.78,198.2,161.37,179.21,186.62ZM118,136A38,38,0,0,0,80,98a14,14,0,0,0-14,14,38,38,0,0,0,38,38A14,14,0,0,0,118,136Zm-14,2a26,26,0,0,1-26-26,2,2,0,0,1,2-2,26,26,0,0,1,26,26A2,2,0,0,1,104,138Zm72-40a38,38,0,0,0-38,38,14,14,0,0,0,14,14,38,38,0,0,0,38-38A14,14,0,0,0,176,98Zm-24,40a2,2,0,0,1-2-2,26,26,0,0,1,26-26,2,2,0,0,1,2,2A26,26,0,0,1,152,138Zm-2,46a6,6,0,0,1-6,6H112a6,6,0,0,1,0-12h32A6,6,0,0,1,150,184Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M128,16a96.11,96.11,0,0,0-96,96c0,24,12.56,55.06,33.61,83,21.18,28.15,44.5,45,62.39,45s41.21-16.81,62.39-45c21.05-28,33.61-59,33.61-83A96.11,96.11,0,0,0,128,16Zm49.61,169.42C160.24,208.49,140.31,224,128,224s-32.24-15.51-49.61-38.58C59.65,160.5,48,132.37,48,112a80,80,0,0,1,160,0C208,132.37,196.35,160.5,177.61,185.42ZM120,136A40,40,0,0,0,80,96a16,16,0,0,0-16,16,40,40,0,0,0,40,40A16,16,0,0,0,120,136ZM80,112a24,24,0,0,1,24,24h0A24,24,0,0,1,80,112Zm96-16a40,40,0,0,0-40,40,16,16,0,0,0,16,16,40,40,0,0,0,40-40A16,16,0,0,0,176,96Zm-24,40a24,24,0,0,1,24-24A24,24,0,0,1,152,136Zm0,48a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,184Z\"/>";
const SECONDARY_PATHS = "<path d=\"M128,24a88,88,0,0,0-88,88c0,48.6,56,120,88,120s88-71.4,88-120A88,88,0,0,0,128,24ZM104,144a32,32,0,0,1-32-32,8,8,0,0,1,8-8,32,32,0,0,1,32,32A8,8,0,0,1,104,144Zm48,0a8,8,0,0,1-8-8,32,32,0,0,1,32-32,8,8,0,0,1,8,8A32,32,0,0,1,152,144Z\"/>";

export const Alien = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: AlienProps) => {
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
