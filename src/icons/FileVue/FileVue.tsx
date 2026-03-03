import { SVGProps } from "react";

export type FileVueVariant = "duotone" | "fill" | "light";

export interface FileVueProps extends SVGProps<SVGSVGElement> {
  variant?: FileVueVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M213.66,82.34l-56-56A8,8,0,0,0,152,24h-96a16,16,0,0,0-16,16v76a4,4,0,0,0,4,4H212a4,4,0,0,0,4-4V88A8,8,0,0,0,213.66,82.34ZM152,88V44l44,44ZM87.36,155,67.47,210.69a8,8,0,0,1-15.08,0L32.5,155A8.21,8.21,0,0,1,37,144.55a8,8,0,0,1,10.46,4.76l12.47,34.9,12.47-34.9a8,8,0,0,1,10.46-4.76A8.22,8.22,0,0,1,87.36,155ZM184,160v12h15.73a8.19,8.19,0,0,1,8.26,7.47,8,8,0,0,1-8,8.53H184v12h23.73a8.18,8.18,0,0,1,8.26,7.47,8,8,0,0,1-8,8.53H176a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h31.74a8.18,8.18,0,0,1,8.26,7.47,8,8,0,0,1-8,8.53Zm-32-8v37.45c0,14.14-11.07,26.12-25.22,26.54A26,26,0,0,1,100,190V152.27a8.18,8.18,0,0,1,7.47-8.25,8,8,0,0,1,8.54,8v37.65A10.23,10.23,0,0,0,125.27,200,10,10,0,0,0,136,190V152.27a8.18,8.18,0,0,1,7.47-8.25A8,8,0,0,1,152,152Z\"/>";
const LIGHT_INNER     = "<path d=\"M85.65,154l-20,56a6,6,0,0,1-11.3,0l-20-56a6,6,0,1,1,11.3-4L60,190.16,74.35,150a6,6,0,0,1,11.3,4ZM208,158a6,6,0,0,0,0-12H176a6,6,0,0,0-6,6v56a6,6,0,0,0,6,6h32a6,6,0,0,0,0-12H182V186h18a6,6,0,0,0,0-12H182V158Zm-64-12a6,6,0,0,0-6,6v38a12,12,0,0,1-24,0V152a6,6,0,0,0-12,0v38a24,24,0,0,0,48,0V152A6,6,0,0,0,144,146Zm70-58v24a6,6,0,0,1-12,0V94H152a6,6,0,0,1-6-6V38H56a2,2,0,0,0-2,2v72a6,6,0,0,1-12,0V40A14,14,0,0,1,56,26h96a6,6,0,0,1,4.25,1.76l56,56A6,6,0,0,1,214,88Zm-20.48-6L158,46.48V82Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M87.54,154.69l-20,56a8,8,0,0,1-15.07,0l-20-56a8,8,0,0,1,15.07-5.38L60,184.21l12.47-34.9a8,8,0,0,1,15.07,5.38ZM208,160a8,8,0,0,0,0-16H176a8,8,0,0,0-8,8v56a8,8,0,0,0,8,8h32a8,8,0,0,0,0-16H184V188h16a8,8,0,0,0,0-16H184V160Zm-64-16a8,8,0,0,0-8,8v38a10,10,0,0,1-20,0V152a8,8,0,0,0-16,0v38a26,26,0,0,0,52,0V152A8,8,0,0,0,144,144Zm72-56v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-27.31-8L160,51.31V80Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,88H152V32Z\"/>";

export const FileVue = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: FileVueProps) => {
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
