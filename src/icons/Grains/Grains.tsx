import { SVGProps } from "react";

export type GrainsVariant = "duotone" | "fill" | "light";

export interface GrainsProps extends SVGProps<SVGSVGElement> {
  variant?: GrainsVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,56a87.52,87.52,0,0,0-31.84,6c-14.32-29.7-43.25-44.46-44.57-45.13a8,8,0,0,0-7.16,0C123.1,17.51,94.17,32.27,79.85,62A87.52,87.52,0,0,0,48,56a8,8,0,0,0-8,8v80a88.12,88.12,0,0,0,75.48,87.1,4,4,0,0,0,4.52-4V176.27a8.18,8.18,0,0,1,7.47-8.25,8,8,0,0,1,8.53,8v51.14a4,4,0,0,0,4.52,4A88.12,88.12,0,0,0,216,144V64A8,8,0,0,0,208,56Zm-88,93.46a88,88,0,0,0-64-37.09V72.44A72.1,72.1,0,0,1,120,144Zm8-42.1A88.61,88.61,0,0,0,94.16,69.11c9.21-19.21,26.4-31.33,33.84-35.9,7.45,4.58,24.63,16.7,33.84,35.9A88.61,88.61,0,0,0,128,107.36Zm72,5a88,88,0,0,0-64,37.09V144a72.1,72.1,0,0,1,64-71.56Z\"/>";
const LIGHT_INNER     = "<path d=\"M208,58a85.48,85.48,0,0,0-32.84,6.53C161.45,34.31,132,19.3,130.68,18.63a6,6,0,0,0-5.36,0c-1.33.67-30.77,15.68-44.48,45.9A85.51,85.51,0,0,0,48,58a6,6,0,0,0-6,6v80a86,86,0,0,0,172,0V64A6,6,0,0,0,208,58ZM122,217.76A74.1,74.1,0,0,1,54,144V126.24A74.1,74.1,0,0,1,122,200Zm0-61.51a86.1,86.1,0,0,0-68-42v-44A74.11,74.11,0,0,1,122,144ZM91.58,69.91c9.66-21.6,29.27-34.78,36.42-39,7.16,4.25,26.76,17.43,36.41,39A86.5,86.5,0,0,0,128,112.5,86.47,86.47,0,0,0,91.58,69.91ZM202,144a74.1,74.1,0,0,1-68,73.76V200a74.1,74.1,0,0,1,68-73.76Zm0-29.77a86.1,86.1,0,0,0-68,42V144a74.11,74.11,0,0,1,68-73.76Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M208,56a87.53,87.53,0,0,0-31.85,6c-14.32-29.7-43.25-44.46-44.57-45.13a8,8,0,0,0-7.16,0c-1.33.67-30.25,15.43-44.57,45.13A87.53,87.53,0,0,0,48,56a8,8,0,0,0-8,8v80a88,88,0,0,0,176,0V64A8,8,0,0,0,208,56ZM120,215.56A72.1,72.1,0,0,1,56,144V128.44A72.1,72.1,0,0,1,120,200Zm0-66.1a88,88,0,0,0-64-37.09V72.44A72.1,72.1,0,0,1,120,144ZM94.15,69.11C103.37,49.89,120.58,37.76,128,33.2c7.44,4.54,24.6,16.6,33.84,35.91A88.51,88.51,0,0,0,128,107.36,88.51,88.51,0,0,0,94.15,69.11ZM200,144a72.1,72.1,0,0,1-64,71.56V200a72.1,72.1,0,0,1,64-71.56Zm0-31.63a88,88,0,0,0-64,37.09V144a72.1,72.1,0,0,1,64-71.56Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,64v56a80,80,0,0,0-80,80,80,80,0,0,0-80-80V64a79.67,79.67,0,0,1,36.05,8.59v0C95.62,40.19,128,24,128,24S160.39,40.19,172,72.58h0A79.6,79.6,0,0,1,208,64Z\"/>";

export const Grains = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: GrainsProps) => {
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
