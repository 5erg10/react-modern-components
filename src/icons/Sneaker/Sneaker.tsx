import { SVGProps } from "react";

export type SneakerVariant = "duotone" | "fill" | "light";

export interface SneakerProps extends SVGProps<SVGSVGElement> {
  variant?: SneakerVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M228.65,129.11l-28.06-9.35a4,4,0,0,0-2.63,0l-43.23,15.72A8.14,8.14,0,0,1,152,136a8,8,0,0,1-7.71-5.88,8.17,8.17,0,0,1,5.22-9.73L168,113.67a2.54,2.54,0,0,0-.06-4.8,23.93,23.93,0,0,1-8.8-5.25,4,4,0,0,0-4.17-.91l-24.22,8.8a8,8,0,0,1-10.44-5.39,8.17,8.17,0,0,1,5.22-9.73L146,88.93a4,4,0,0,0,2.31-5.34l-3.06-7.16a4,4,0,0,0-5.05-2.19l-25.5,9.27a8,8,0,0,1-10.44-5.39,8.17,8.17,0,0,1,5.22-9.73l24-8.73a4,4,0,0,0,2.31-5.33L130.39,41.6s0-.07,0-.1A16,16,0,0,0,110.25,33L34.53,60.49A16.05,16.05,0,0,0,24,75.53V192a16,16,0,0,0,16,16H240a16,16,0,0,0,16-16V167.06A40,40,0,0,0,228.65,129.11ZM240,192H40V176H240Z\"/>";
const LIGHT_INNER     = "<path d=\"M228,131l-60.73-20.24a26,26,0,0,1-15.51-14L128.51,42.31a14,14,0,0,0-17.57-7.47L35.22,62.37A14.05,14.05,0,0,0,26,75.53V192a14,14,0,0,0,14,14H240a14,14,0,0,0,14-14V167.06A38,38,0,0,0,228,131ZM39.32,73.65,115,46.12a1.81,1.81,0,0,1,.68-.12,2,2,0,0,1,1.79,1.11l8,18.68L102,74.36A6,6,0,0,0,104,86a5.92,5.92,0,0,0,2-.37l24.18-8.79,6.31,14.76L118,98.36A6,6,0,0,0,120,110a6.15,6.15,0,0,0,2-.36l19.26-7a38,38,0,0,0,10.57,13.21L134,122.36A6,6,0,0,0,136,134a6.15,6.15,0,0,0,2.05-.36l28.64-10.42,57.53,19.18A25.94,25.94,0,0,1,241.49,162H38V75.53A2,2,0,0,1,39.32,73.65ZM240,194H40a2,2,0,0,1-2-2V174H242v18A2,2,0,0,1,240,194Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M228.65,129.11l-60.73-20.24a24,24,0,0,1-14.32-13L130.39,41.6s0-.07,0-.1A16,16,0,0,0,110.25,33L34.53,60.49A16.05,16.05,0,0,0,24,75.53V192a16,16,0,0,0,16,16H240a16,16,0,0,0,16-16V167.06A40,40,0,0,0,228.65,129.11ZM40,75.53,115.72,48l7.11,16.63-21.56,7.85A8,8,0,0,0,104,88a7.91,7.91,0,0,0,2.73-.49l22.4-8.14,4.74,11.07-16.6,6A8,8,0,0,0,120,112a7.91,7.91,0,0,0,2.73-.49l17.6-6.4a40.06,40.06,0,0,0,7.68,10l-14.74,5.36A8,8,0,0,0,136,136a8.14,8.14,0,0,0,2.73-.48l28-10.18,56.87,18.95A24,24,0,0,1,238.93,160H40ZM240,192H40V176H240Z\"/>";
const SECONDARY_PATHS = "<path d=\"M248,167.06V168H32V75.54A8,8,0,0,1,37.27,68L113,40.48a8,8,0,0,1,10,4.27L146.27,99.1a32,32,0,0,0,19.12,17.36l60.73,20.25A32,32,0,0,1,248,167.06Z\"/>";

export const Sneaker = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: SneakerProps) => {
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
