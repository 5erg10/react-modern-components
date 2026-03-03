import { SVGProps } from "react";

export type BackpackVariant = "duotone" | "fill" | "light";

export interface BackpackProps extends SVGProps<SVGSVGElement> {
  variant?: BackpackVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M168,40.58V32A24,24,0,0,0,144,8H112A24,24,0,0,0,88,32v8.58A56.09,56.09,0,0,0,40,96V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V96A56.09,56.09,0,0,0,168,40.58ZM104,32a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8v8H104Zm8,40h32a8,8,0,0,1,0,16H112a8,8,0,0,1,0-16Zm64,144H80V176h56v8a8,8,0,0,0,16,0v-8h24Zm0-56H80v-8a16,16,0,0,1,16-16h64a16,16,0,0,1,16,16Z\"/>";
const LIGHT_INNER     = "<path d=\"M166,42.34V32a22,22,0,0,0-22-22H112A22,22,0,0,0,90,32V42.34A54.07,54.07,0,0,0,42,96V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V96A54.07,54.07,0,0,0,166,42.34ZM112,22h32a10,10,0,0,1,10,10V42H102V32A10,10,0,0,1,112,22Zm58,140H86V152a10,10,0,0,1,10-10h64a10,10,0,0,1,10,10ZM86,174h52v10a6,6,0,0,0,12,0V174h20v44H86Zm116,42a2,2,0,0,1-2,2H182V152a22,22,0,0,0-22-22H96a22,22,0,0,0-22,22v66H56a2,2,0,0,1-2-2V96A42,42,0,0,1,96,54h64a42,42,0,0,1,42,42ZM150,88a6,6,0,0,1-6,6H112a6,6,0,0,1,0-12h32A6,6,0,0,1,150,88Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M168,40.58V32A24,24,0,0,0,144,8H112A24,24,0,0,0,88,32v8.58A56.09,56.09,0,0,0,40,96V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V96A56.09,56.09,0,0,0,168,40.58ZM112,24h32a8,8,0,0,1,8,8v8H104V32A8,8,0,0,1,112,24Zm56,136H88v-8a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8ZM88,176h48v8a8,8,0,0,0,16,0v-8h16v40H88Zm112,40H184V152a24,24,0,0,0-24-24H96a24,24,0,0,0-24,24v64H56V96A40,40,0,0,1,96,56h64a40,40,0,0,1,40,40V216ZM152,88a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,88Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,96V216a8,8,0,0,1-8,8H176V152a16,16,0,0,0-16-16H96a16,16,0,0,0-16,16v72H56a8,8,0,0,1-8-8V96A48,48,0,0,1,96,48h64A48,48,0,0,1,208,96Z\"/>";

export const Backpack = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BackpackProps) => {
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
