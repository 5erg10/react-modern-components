import { SVGProps } from "react";

export type SuitcaseRollingVariant = "duotone" | "fill" | "light";

export interface SuitcaseRollingProps extends SVGProps<SVGSVGElement> {
  variant?: SuitcaseRollingVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M192,48H168V24A24,24,0,0,0,144,0H112A24,24,0,0,0,88,24V48H64A16,16,0,0,0,48,64V208a16,16,0,0,0,16,16H80v16a8,8,0,0,0,16,0V224h64v16a8,8,0,0,0,16,0V224h16a16,16,0,0,0,16-16V64A16,16,0,0,0,192,48ZM96,192a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Zm40,0a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0ZM152,48H104V24a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8Zm24,144a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Z\"/>";
const LIGHT_INNER     = "<path d=\"M102,88v96a6,6,0,0,1-12,0V88a6,6,0,0,1,12,0Zm26-6a6,6,0,0,0-6,6v96a6,6,0,0,0,12,0V88A6,6,0,0,0,128,82Zm32,0a6,6,0,0,0-6,6v96a6,6,0,0,0,12,0V88A6,6,0,0,0,160,82Zm46-18V208a14,14,0,0,1-14,14H174v18a6,6,0,0,1-12,0V222H94v18a6,6,0,0,1-12,0V222H64a14,14,0,0,1-14-14V64A14,14,0,0,1,64,50H90V24A22,22,0,0,1,112,2h32a22,22,0,0,1,22,22V50h26A14,14,0,0,1,206,64ZM102,50h52V24a10,10,0,0,0-10-10H112a10,10,0,0,0-10,10Zm92,14a2,2,0,0,0-2-2H64a2,2,0,0,0-2,2V208a2,2,0,0,0,2,2H192a2,2,0,0,0,2-2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M104,88v96a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Zm24-8a8,8,0,0,0-8,8v96a8,8,0,0,0,16,0V88A8,8,0,0,0,128,80Zm32,0a8,8,0,0,0-8,8v96a8,8,0,0,0,16,0V88A8,8,0,0,0,160,80Zm48-16V208a16,16,0,0,1-16,16H176v16a8,8,0,0,1-16,0V224H96v16a8,8,0,0,1-16,0V224H64a16,16,0,0,1-16-16V64A16,16,0,0,1,64,48H88V24A24,24,0,0,1,112,0h32a24,24,0,0,1,24,24V48h24A16,16,0,0,1,208,64ZM104,48h48V24a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8Zm88,160V64H64V208H192Z\"/>";
const SECONDARY_PATHS = "<path d=\"M200,64V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H192A8,8,0,0,1,200,64Z\"/>";

export const SuitcaseRolling = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: SuitcaseRollingProps) => {
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
