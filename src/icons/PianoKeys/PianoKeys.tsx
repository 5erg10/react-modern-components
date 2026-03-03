import { SVGProps } from "react";

export type PianoKeysVariant = "duotone" | "fill" | "light";

export interface PianoKeysProps extends SVGProps<SVGSVGElement> {
  variant?: PianoKeysVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM88,208H48V48H72v96a8,8,0,0,0,8,8h8Zm64,0H104V152h8a8,8,0,0,0,8-8V48h16v96a8,8,0,0,0,8,8h8Zm56,0H168V152h8a8,8,0,0,0,8-8V48h24V208Z\"/>";
const LIGHT_INNER     = "<path d=\"M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM78,46h28v92H78Zm34,104a6,6,0,0,0,6-6V46h20v98a6,6,0,0,0,6,6h10v60H102V150Zm38-12V46h28v92ZM46,208V48a2,2,0,0,1,2-2H66v98a6,6,0,0,0,6,6H90v60H48A2,2,0,0,1,46,208Zm164,0a2,2,0,0,1-2,2H166V150h18a6,6,0,0,0,6-6V46h18a2,2,0,0,1,2,2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM80,48h24v88H80Zm32,104a8,8,0,0,0,8-8V48h16v96a8,8,0,0,0,8,8h8v56H104V152Zm40-16V48h24v88ZM48,48H64v96a8,8,0,0,0,8,8H88v56H48ZM208,208H168V152h16a8,8,0,0,0,8-8V48h16V208Z\"/>";
const SECONDARY_PATHS = "<path d=\"M184,40V144H144V40ZM72,144h40V40H72Z\"/>";

export const PianoKeys = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PianoKeysProps) => {
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
