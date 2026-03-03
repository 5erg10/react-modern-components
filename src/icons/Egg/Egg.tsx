import { SVGProps } from "react";

export type EggVariant = "duotone" | "fill" | "light";

export interface EggProps extends SVGProps<SVGSVGElement> {
  variant?: EggVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216,152a88,88,0,0,1-176,0c0-30.77,10.7-64.46,29.34-92.44C87.53,32.29,109.46,16,128,16s40.47,16.29,58.66,43.56C205.3,87.54,216,121.23,216,152Z\"/>";
const LIGHT_INNER     = "<path d=\"M185,60.67C167.18,34,145.87,18,128,18S88.82,34,71,60.67C52.57,88.32,42,121.61,42,152a86,86,0,0,0,172,0C214,121.61,203.43,88.32,185,60.67ZM128,226a74.09,74.09,0,0,1-74-74c0-28.08,9.84-58.94,27-84.67C96.11,44.65,114.56,30,128,30s31.89,14.65,47,37.33c17.15,25.73,27,56.59,27,84.67A74.09,74.09,0,0,1,128,226Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M186.66,59.56C168.47,32.29,146.54,16,128,16S87.53,32.29,69.34,59.56C50.7,87.54,40,121.23,40,152a88,88,0,0,0,176,0C216,121.23,205.3,87.54,186.66,59.56ZM128,224a72.08,72.08,0,0,1-72-72c0-27.69,9.72-58.15,26.66-83.56C97.19,46.64,115.41,32,128,32s30.81,14.64,45.34,36.44C190.28,93.85,200,124.31,200,152A72.08,72.08,0,0,1,128,224Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z\"/>";

export const Egg = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: EggProps) => {
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
