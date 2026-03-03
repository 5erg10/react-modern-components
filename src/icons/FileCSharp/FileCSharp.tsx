import { SVGProps } from "react";

export type FileCSharpVariant = "duotone" | "fill" | "light";

export interface FileCSharpProps extends SVGProps<SVGSVGElement> {
  variant?: FileCSharpVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M48,180c0,11,7.18,20,16,20a14.07,14.07,0,0,0,10.07-4.51,8.19,8.19,0,0,1,10.88-.9,8,8,0,0,1,.83,11.81A30.06,30.06,0,0,1,64,216c-17.65,0-32-16.15-32-36s14.35-36,32-36a30,30,0,0,1,21.38,9.19,8.25,8.25,0,0,1,.74,11.09,8,8,0,0,1-11.9.38A14.24,14.24,0,0,0,64,160C55.18,160,48,169,48,180ZM216,88V223.75a8.15,8.15,0,0,1-6.81,8.16A8,8,0,0,1,200,224V124a4,4,0,0,0-4-4H44a4,4,0,0,1-4-4V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-20,0L152,44V88Zm-28,80v16h7.73a8.17,8.17,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53h-8v7.73a8.17,8.17,0,0,1-7.47,8.25,8,8,0,0,1-8.53-8v-8H136v7.73a8.17,8.17,0,0,1-7.47,8.25,8,8,0,0,1-8.53-8v-8h-7.73a8.17,8.17,0,0,1-8.25-7.47,8,8,0,0,1,8-8.53h8V168h-7.73a8.17,8.17,0,0,1-8.25-7.47,8,8,0,0,1,8-8.53h8v-7.73a8.17,8.17,0,0,1,7.47-8.25,8,8,0,0,1,8.53,8v8h16v-7.73a8.17,8.17,0,0,1,7.47-8.25,8,8,0,0,1,8.53,8v8h7.73a8.17,8.17,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53Zm-16,0H136v16h16Z\"/>";
const LIGHT_INNER     = "<path d=\"M46,180c0,12.13,8.07,22,18,22a16.23,16.23,0,0,0,11.67-5.28,6,6,0,0,1,8.66,8.3A28.06,28.06,0,0,1,64,214c-16.54,0-30-15.25-30-34s13.46-34,30-34a28.06,28.06,0,0,1,20.33,9,6,6,0,0,1-8.66,8.3A16.23,16.23,0,0,0,64,158C54.07,158,46,167.87,46,180ZM214,88V224a6,6,0,0,1-12,0V94H152a6,6,0,0,1-6-6V38H56a2,2,0,0,0-2,2v72a6,6,0,0,1-12,0V40A14,14,0,0,1,56,26h96a6,6,0,0,1,4.25,1.76l56,56A6,6,0,0,1,214,88Zm-56-6h35.52L158,46.48Zm8,84v20h10a6,6,0,0,1,0,12H166v10a6,6,0,0,1-12,0V198H134v10a6,6,0,0,1-12,0V198H112a6,6,0,0,1,0-12h10V166H112a6,6,0,0,1,0-12h10V144a6,6,0,0,1,12,0v10h20V144a6,6,0,0,1,12,0v10h10a6,6,0,0,1,0,12Zm-12,0H134v20h20Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M48,180c0,11,7.18,20,16,20a14.18,14.18,0,0,0,10.22-4.66A8,8,0,0,1,85.78,206.4,30.06,30.06,0,0,1,64,216c-17.65,0-32-16.15-32-36s14.35-36,32-36a30.06,30.06,0,0,1,21.78,9.6,8,8,0,0,1-11.56,11.06A14.18,14.18,0,0,0,64,160C55.18,160,48,169,48,180ZM216,88V224a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31Zm8,88v16h8a8,8,0,0,1,0,16h-8v8a8,8,0,0,1-16,0v-8H136v8a8,8,0,0,1-16,0v-8h-8a8,8,0,0,1,0-16h8V168h-8a8,8,0,0,1,0-16h8v-8a8,8,0,0,1,16,0v8h16v-8a8,8,0,0,1,16,0v8h8a8,8,0,0,1,0,16Zm-16,0H136v16h16Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,88H152V32Z\"/>";

export const FileCSharp = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: FileCSharpProps) => {
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
