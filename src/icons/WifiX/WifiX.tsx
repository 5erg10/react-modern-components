import { SVGProps } from "react";

export type WifiXVariant = "duotone" | "fill" | "light";

export interface WifiXProps extends SVGProps<SVGSVGElement> {
  variant?: WifiXVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M229.66,98.34a8,8,0,0,1-11.32,11.32L200,91.31l-18.34,18.35a8,8,0,0,1-11.32-11.32L188.69,80,170.34,61.66a8,8,0,0,1,11.32-11.32L200,68.69l18.34-18.35a8,8,0,0,1,11.32,11.32L211.31,80ZM206.85,131a32.75,32.75,0,0,1-4.15-3.14,4,4,0,0,0-5.37,0,32,32,0,0,1-45.18-45.18,4,4,0,0,0,0-5.34A32,32,0,0,1,149,38.91a4,4,0,0,0-3.11-6.08Q137,32,128,32A186.67,186.67,0,0,0,14.28,70.1,15.93,15.93,0,0,0,8.11,80.91,15.65,15.65,0,0,0,11.65,92.8l104,125.43A15.93,15.93,0,0,0,128,224h0a15.93,15.93,0,0,0,12.31-5.77l67.45-81.31A4,4,0,0,0,206.85,131Z\"/>";
const LIGHT_INNER     = "<path d=\"M138,204a10,10,0,1,1-10-10A10,10,0,0,1,138,204ZM208.48,80l19.76-19.76a6,6,0,0,0-8.48-8.48L200,71.52,180.24,51.76a6,6,0,0,0-8.48,8.48L191.52,80,171.76,99.76a6,6,0,1,0,8.48,8.48L200,88.48l19.76,19.76a6,6,0,0,0,8.48-8.48Zm-36.95,80.15a74,74,0,0,0-87.06,0,6,6,0,0,0,7.06,9.7,62,62,0,0,1,72.94,0,6,6,0,0,0,8.38-1.32A6,6,0,0,0,171.53,160.15Zm-35.82-98a6,6,0,0,0,.58-12c-2.75-.13-5.54-.2-8.29-.2A170.32,170.32,0,0,0,20.19,88.55a6,6,0,1,0,7.62,9.27A158.26,158.26,0,0,1,128,62C130.56,62,133.16,62.06,135.71,62.18Zm-.12,48.08a6,6,0,1,0,.82-12c-2.79-.19-5.62-.29-8.41-.29a120.75,120.75,0,0,0-75.73,26.34,6,6,0,0,0,7.46,9.41A108.78,108.78,0,0,1,128,110C130.52,110,133.08,110.09,135.59,110.26Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M229.66,98.34a8,8,0,0,1-11.32,11.32L200,91.31l-18.34,18.35a8,8,0,0,1-11.32-11.32L188.69,80,170.34,61.66a8,8,0,0,1,11.32-11.32L200,68.69l18.34-18.35a8,8,0,0,1,11.32,11.32L211.31,80Zm-33.06,39.5a8,8,0,0,0-11.27,1L128,208,24.09,82.74A170.76,170.76,0,0,1,128,48c2.54,0,5.11.06,7.65.17a8,8,0,0,0,.7-16c-2.77-.12-5.58-.18-8.35-.18A186.67,186.67,0,0,0,14.28,70.1,15.93,15.93,0,0,0,8.11,80.91,15.65,15.65,0,0,0,11.65,92.8l104,125.43A15.93,15.93,0,0,0,128,224h0a15.93,15.93,0,0,0,12.31-5.77l57.34-69.12A8,8,0,0,0,196.6,137.84Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224.39,104.34,134.15,213.12a8,8,0,0,1-12.3,0L17.8,87.69a7.79,7.79,0,0,1,1.31-11.21A179.58,179.58,0,0,1,128,40a181.82,181.82,0,0,1,33.06,3,7.94,7.94,0,0,1,4.17,2.21L224,104Z\"/>";

export const WifiX = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: WifiXProps) => {
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
