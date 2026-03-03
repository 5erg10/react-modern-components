import { SVGProps } from "react";

export type FlameVariant = "duotone" | "fill" | "light";

export interface FlameProps extends SVGProps<SVGSVGElement> {
  variant?: FlameVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M173.79,51.48a221.25,221.25,0,0,0-41.67-34.34,8,8,0,0,0-8.24,0A221.25,221.25,0,0,0,82.21,51.48C54.59,80.48,40,112.47,40,144a88,88,0,0,0,176,0C216,112.47,201.41,80.48,173.79,51.48ZM96,184c0-27.67,22.53-47.28,32-54.3,9.48,7,32,26.63,32,54.3a32,32,0,0,1-64,0Z\"/>";
const LIGHT_INNER     = "<path d=\"M172.34,52.86a218.34,218.34,0,0,0-41.25-34,6,6,0,0,0-6.18,0,218.34,218.34,0,0,0-41.25,34C56.4,81.48,42,113,42,144a86,86,0,0,0,172,0C214,113,199.6,81.48,172.34,52.86ZM94,184c0-29.8,25.11-50.41,34-56.78,8.91,6.35,34,26.87,34,56.78a34.05,34.05,0,0,1-32.25,34c-.59,0-1.16,0-1.75,0s-1.16,0-1.75,0A34.05,34.05,0,0,1,94,184Zm74.42,21.94A45.68,45.68,0,0,0,174,184c0-42.9-41.16-68.09-42.91-69.14a6,6,0,0,0-6.18,0C123.16,115.91,82,141.1,82,184a45.68,45.68,0,0,0,5.58,21.94A74,74,0,0,1,54,144c0-59.83,59.62-103.26,74-112.86,14.39,9.6,74,53,74,112.86A74,74,0,0,1,168.42,205.94Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M173.79,51.48a221.25,221.25,0,0,0-41.67-34.34,8,8,0,0,0-8.24,0A221.25,221.25,0,0,0,82.21,51.48C54.59,80.48,40,112.47,40,144a88,88,0,0,0,176,0C216,112.47,201.41,80.48,173.79,51.48ZM96,184c0-27.67,22.53-47.28,32-54.3,9.48,7,32,26.63,32,54.3a32,32,0,0,1-64,0Zm77.27,15.93A47.8,47.8,0,0,0,176,184c0-44-42.09-69.79-43.88-70.86a8,8,0,0,0-8.24,0C122.09,114.21,80,140,80,184a47.8,47.8,0,0,0,2.73,15.93A71.88,71.88,0,0,1,56,144c0-34.41,20.4-63.15,37.52-81.19A216.21,216.21,0,0,1,128,33.54a215.77,215.77,0,0,1,34.48,29.27C193.49,95.5,200,125,200,144A71.88,71.88,0,0,1,173.27,199.93Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,144A80,80,0,0,1,130.06,224,40,40,0,0,0,168,184c0-40-40-64-40-64s-40,24-40,64A40,40,0,0,0,125.94,224,80,80,0,0,1,48,144c0-72,80-120,80-120S208,72,208,144Z\"/>";

export const Flame = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: FlameProps) => {
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
