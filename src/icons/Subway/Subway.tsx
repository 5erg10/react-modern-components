import { SVGProps } from "react";

export type SubwayVariant = "duotone" | "fill" | "light";

export interface SubwayProps extends SVGProps<SVGSVGElement> {
  variant?: SubwayVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M156,176V152h20v16a8,8,0,0,1-8,8Zm-16,0V152H116v24Zm36-88a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v48h96ZM152,24H104A72,72,0,0,0,32,96V208a8,8,0,0,0,8,8H76.58a4,4,0,0,0,3.58-2.21L91.06,192H88a24,24,0,0,1-24-24V88A24,24,0,0,1,88,64h80a24,24,0,0,1,24,24v80a24,24,0,0,1-24,24h-3.06l10.9,21.79a4,4,0,0,0,3.58,2.21H216a8,8,0,0,0,8-8V96A72,72,0,0,0,152,24Zm-4.94,168H108.94l-9.1,18.21a4,4,0,0,0,3.58,5.79h49.16a4,4,0,0,0,3.58-5.79ZM80,168a8,8,0,0,0,8,8h12V152H80Z\"/>";
const LIGHT_INNER     = "<path d=\"M222,96V208a6,6,0,0,1-12,0V96a58.07,58.07,0,0,0-58-58H104A58.07,58.07,0,0,0,46,96V208a6,6,0,0,1-12,0V96a70.08,70.08,0,0,1,70-70h48A70.08,70.08,0,0,1,222,96Zm-40,0v72a22,22,0,0,1-20.33,21.93l3.7,7.39a6,6,0,0,1-10.74,5.36L148.29,190H107.71l-6.34,12.68a6,6,0,1,1-10.74-5.36l3.7-7.39A22,22,0,0,1,74,168V96A22,22,0,0,1,96,74h64A22,22,0,0,1,182,96ZM86,96v50h84V96a10,10,0,0,0-10-10H96A10,10,0,0,0,86,96Zm32,62v20h20V158ZM96,178h10V158H86v10A10,10,0,0,0,96,178Zm74-10V158H150v20h10A10,10,0,0,0,170,168Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M224,96V208a8,8,0,0,1-16,0V96a56.06,56.06,0,0,0-56-56H104A56.06,56.06,0,0,0,48,96V208a8,8,0,0,1-16,0V96a72.08,72.08,0,0,1,72-72h48A72.08,72.08,0,0,1,224,96Zm-40,0v72a24,24,0,0,1-19.29,23.53l2.45,4.89a8,8,0,0,1-14.32,7.16L147.06,192H108.94l-5.78,11.58a8,8,0,0,1-14.32-7.16l2.45-4.89A24,24,0,0,1,72,168V96A24,24,0,0,1,96,72h64A24,24,0,0,1,184,96ZM88,96v48h80V96a8,8,0,0,0-8-8H96A8,8,0,0,0,88,96Zm32,64v16h16V160ZM96,176h8V160H88v8A8,8,0,0,0,96,176Zm72-8v-8H152v16h8A8,8,0,0,0,168,168Z\"/>";
const SECONDARY_PATHS = "<path d=\"M152,32H104A64,64,0,0,0,40,96V208H216V96A64,64,0,0,0,152,32Zm24,136a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16V96A16,16,0,0,1,96,80h64a16,16,0,0,1,16,16Z\"/>";

export const Subway = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: SubwayProps) => {
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
