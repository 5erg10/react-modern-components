import { SVGProps } from "react";

export type FilePptVariant = "duotone" | "fill" | "light";

export interface FilePptProps extends SVGProps<SVGSVGElement> {
  variant?: FilePptVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M224,152.53a8.17,8.17,0,0,1-8.25,7.47H204v47.73a8.17,8.17,0,0,1-7.47,8.25,8,8,0,0,1-8.53-8V160H176.27a8.17,8.17,0,0,1-8.25-7.47,8,8,0,0,1,8-8.53h40A8,8,0,0,1,224,152.53ZM92,172.85C91.54,188.08,78.64,200,63.4,200H56v7.73A8.17,8.17,0,0,1,48.53,216,8,8,0,0,1,40,208V152a8,8,0,0,1,8-8H64A28,28,0,0,1,92,172.85Zm-16-2A12.25,12.25,0,0,0,63.65,160H56v24h8A12,12,0,0,0,76,170.84Zm84,2C159.54,188.08,146.64,200,131.4,200H124v7.73a8.17,8.17,0,0,1-7.47,8.25,8,8,0,0,1-8.53-8V152a8,8,0,0,1,8-8h16A28,28,0,0,1,160,172.85Zm-16-2A12.25,12.25,0,0,0,131.65,160H124v24h8A12,12,0,0,0,144,170.84ZM40,116V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v28a4,4,0,0,1-4,4H44A4,4,0,0,1,40,116ZM152,88h44L152,44Z\"/>";
const LIGHT_INNER     = "<path d=\"M222,152a6,6,0,0,1-6,6H202v50a6,6,0,0,1-12,0V158H176a6,6,0,0,1,0-12h40A6,6,0,0,1,222,152ZM90,172a26,26,0,0,1-26,26H54v10a6,6,0,0,1-12,0V152a6,6,0,0,1,6-6H64A26,26,0,0,1,90,172Zm-12,0a14,14,0,0,0-14-14H54v28H64A14,14,0,0,0,78,172Zm80,0a26,26,0,0,1-26,26H122v10a6,6,0,0,1-12,0V152a6,6,0,0,1,6-6h16A26,26,0,0,1,158,172Zm-12,0a14,14,0,0,0-14-14H122v28h10A14,14,0,0,0,146,172ZM42,112V40A14,14,0,0,1,56,26h96a6,6,0,0,1,4.25,1.76l56,56A6,6,0,0,1,214,88v24a6,6,0,0,1-12,0V94H152a6,6,0,0,1-6-6V38H56a2,2,0,0,0-2,2v72a6,6,0,0,1-12,0ZM158,82h35.52L158,46.48Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M224,152a8,8,0,0,1-8,8H204v48a8,8,0,0,1-16,0V160H176a8,8,0,0,1,0-16h40A8,8,0,0,1,224,152ZM92,172a28,28,0,0,1-28,28H56v8a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8H64A28,28,0,0,1,92,172Zm-16,0a12,12,0,0,0-12-12H56v24h8A12,12,0,0,0,76,172Zm84,0a28,28,0,0,1-28,28h-8v8a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8h16A28,28,0,0,1,160,172Zm-16,0a12,12,0,0,0-12-12h-8v24h8A12,12,0,0,0,144,172ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.69L160,51.31Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,88H152V32Z\"/>";

export const FilePpt = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: FilePptProps) => {
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
