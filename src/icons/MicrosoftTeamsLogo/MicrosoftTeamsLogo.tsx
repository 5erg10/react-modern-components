import { SVGProps } from "react";

export type MicrosoftTeamsLogoVariant = "duotone" | "fill" | "light";

export interface MicrosoftTeamsLogoProps extends SVGProps<SVGSVGElement> {
  variant?: MicrosoftTeamsLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M219.26,80h-7.57A31.71,31.71,0,0,0,216,64a32,32,0,0,0-45.88-28.85A40,40,0,0,0,96.81,64H40A16,16,0,0,0,24,80v96a16,16,0,0,0,16,16H76.67a64,64,0,0,0,118.7-.15A40,40,0,0,0,232,152V92.74A12.76,12.76,0,0,0,219.26,80ZM136,32a24,24,0,0,1,15.07,42.68A16,16,0,0,0,136,64H113.38A24,24,0,0,1,136,32ZM88,160a8,8,0,0,1-8-8V112H72a8,8,0,0,1,0-16h32a8,8,0,0,1,0,16H96v40A8,8,0,0,1,88,160Zm96,8a48,48,0,0,1-89.56,24H136a16,16,0,0,0,16-16V96h32Zm0-88H168a39.89,39.89,0,0,0,7.6-29.6A16,16,0,1,1,184,80Zm32,72a24,24,0,0,1-16.36,22.75A62.76,62.76,0,0,0,200,168V96h16Z\"/>";
const LIGHT_INNER     = "<path d=\"M82,110H72a6,6,0,0,1,0-12h32a6,6,0,0,1,0,12H94v42a6,6,0,0,1-12,0ZM230,92.74V152A38.05,38.05,0,0,1,194,190,62,62,0,0,1,78,190H40a14,14,0,0,1-14-14V80A14,14,0,0,1,40,66H99.34a38,38,0,0,1,70-28.19A30,30,0,0,1,208,82h11.28A10.75,10.75,0,0,1,230,92.74ZM173.42,49.45A37.28,37.28,0,0,1,174,56a38,38,0,0,1-10.28,26H184a18,18,0,1,0-10.58-32.55ZM112,66h24a14,14,0,0,1,13.84,12A26,26,0,1,0,112,66ZM40,178h96a2,2,0,0,0,2-2V80a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2v96A2,2,0,0,0,40,178Zm146-10V96a2,2,0,0,0-2-2H150v82a14,14,0,0,1-14,14H91.1A50,50,0,0,0,186,168Zm32-74H197.84a14.71,14.71,0,0,1,.16,2v72a62.69,62.69,0,0,1-.72,9.46A26,26,0,0,0,218,152Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M80,152V112H72a8,8,0,0,1,0-16h32a8,8,0,0,1,0,16H96v40a8,8,0,0,1-16,0ZM232,92.74V152a40,40,0,0,1-36.63,39.85,64,64,0,0,1-118.7.15H40a16,16,0,0,1-16-16V80A16,16,0,0,1,40,64H96.81a40,40,0,0,1,73.31-28.85A32,32,0,0,1,211.69,80h7.57A12.76,12.76,0,0,1,232,92.74ZM175.6,50.4A39.89,39.89,0,0,1,168,80h16a16,16,0,1,0-8.4-29.6ZM113.38,64H136a16,16,0,0,1,15.07,10.68A24,24,0,1,0,113.38,64ZM40,176h96V80H40Zm144-8V96H152v80a16,16,0,0,1-16,16H94.44A48,48,0,0,0,184,168Zm32-72H200v72a62.76,62.76,0,0,1-.36,6.75A24,24,0,0,0,216,152Z\"/>";
const SECONDARY_PATHS = "<path d=\"M144,80v96a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h96A8,8,0,0,1,144,80Z\"/>";

export const MicrosoftTeamsLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: MicrosoftTeamsLogoProps) => {
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
