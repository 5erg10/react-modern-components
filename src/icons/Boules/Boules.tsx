import { SVGProps } from "react";

export type BoulesVariant = "duotone" | "fill" | "light";

export interface BoulesProps extends SVGProps<SVGSVGElement> {
  variant?: BoulesVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M232,128c0,56.63-47.38,104-104,104a103.67,103.67,0,0,1-31.52-4.89,4,4,0,0,1-1.62-6.65L220.46,94.85a4,4,0,0,1,6.65,1.62A103.69,103.69,0,0,1,232,128ZM215.84,72.39a103.16,103.16,0,0,0-6.06-8.56,4,4,0,0,0-6-.33L63.5,203.82a4,4,0,0,0,.33,6,103.16,103.16,0,0,0,8.56,6.06,4,4,0,0,0,5-.54L215.3,77.39A4,4,0,0,0,215.84,72.39ZM192.17,46.22a103.16,103.16,0,0,0-8.56-6.06,4,4,0,0,0-5,.54L40.7,178.62a4,4,0,0,0-.54,5,103.16,103.16,0,0,0,6.06,8.56,4,4,0,0,0,6,.33L192.5,52.18A4,4,0,0,0,192.17,46.22ZM159.53,28.89A103.67,103.67,0,0,0,128,24C71.38,24,24,71.37,24,128a103.69,103.69,0,0,0,4.89,31.53,4,4,0,0,0,6.65,1.62L161.15,35.54A4,4,0,0,0,159.53,28.89Z\"/>";
const LIGHT_INNER     = "<path d=\"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm59.22,34.29L60.29,187.22a90.21,90.21,0,0,1-12.53-18.49l121-121A90.21,90.21,0,0,1,187.22,60.29Zm8.49,8.49a90.21,90.21,0,0,1,12.53,18.49l-121,121a90.21,90.21,0,0,1-18.49-12.53ZM128,38a89.67,89.67,0,0,1,28.79,4.72L42.72,156.79A90,90,0,0,1,128,38Zm0,180a89.67,89.67,0,0,1-28.79-4.72L213.28,99.21A90,90,0,0,1,128,218Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56.28,36.41L60.4,184.28A88.33,88.33,0,0,1,50.21,169.1L169.1,50.21A87.8,87.8,0,0,1,184.28,60.41Zm11.31,11.31a87.8,87.8,0,0,1,10.2,15.18L86.9,205.79a87.8,87.8,0,0,1-15.18-10.2ZM128,40a87.81,87.81,0,0,1,25.05,3.64L43.64,153.05A88,88,0,0,1,128,40Zm0,176a87.81,87.81,0,0,1-25-3.64L212.36,103A88,88,0,0,1,128,216Z\"/>";
const SECONDARY_PATHS = "<path d=\"M215.52,88.48l-127,127a96.47,96.47,0,0,1-48-48l127-127A96.47,96.47,0,0,1,215.52,88.48Z\"/>";

export const Boules = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BoulesProps) => {
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
