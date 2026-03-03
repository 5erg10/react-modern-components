import { SVGProps } from "react";

export type PatreonLogoVariant = "duotone" | "fill" | "light";

export interface PatreonLogoProps extends SVGProps<SVGSVGElement> {
  variant?: PatreonLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M232,93.17c0,41-29.69,52.47-53.55,61.67-8.41,3.24-16.35,6.3-22.21,10.28-11.39,7.72-18.59,21.78-25.55,35.38-9.94,19.42-20.23,39.5-43.17,39.5-12.91,0-24.61-11.64-33.85-33.66s-14.31-51-13.61-77.45c1.08-40.65,14.58-62.68,25.7-74,14.95-15.2,35.24-25.3,58.68-29.2,21.79-3.62,44.14-1.38,62.93,6.3C215.73,43.6,232,65.9,232,93.17Z\"/>";
const LIGHT_INNER     = "<path d=\"M186.61,33.84c-18.45-7.54-40.41-9.74-61.84-6.17-23,3.82-42.93,13.72-57.58,28.62C56.31,67.36,43.13,88.94,42.06,128.94c-.69,26.23,4.34,54.87,13.46,76.62,8.77,20.92,20.13,32.44,32,32.44,21.72,0,31.72-19.53,41.39-38.41,7.08-13.82,14.4-28.11,26.21-36.12h0c6-4.11,14.09-7.21,22.61-10.5C201,144,230,132.81,230,93.17,230,66.75,214.19,45.13,186.61,33.84Zm-13.2,107.94c-9.17,3.54-17.84,6.88-25,11.76-14.36,9.73-22.75,26.12-30.15,40.58C109.47,211.23,101.9,226,87.52,226c-5,0-13.18-6.59-20.94-25.08-8.49-20.26-13.17-47-12.52-71.66.75-28.16,8.45-51.09,21.69-64.55,18.45-18.78,44.57-26.65,68.86-26.65A100.32,100.32,0,0,1,182.07,45C213.33,57.74,218,80.65,218,93.17,218,124.58,196.34,132.93,173.41,141.78Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M187.37,32c-18.79-7.68-41.14-9.92-62.93-6.3-23.44,3.9-43.73,14-58.68,29.2-11.12,11.32-24.62,33.35-25.7,74-.7,26.49,4.39,55.44,13.61,77.45S74.61,240,87.52,240c22.94,0,33.23-20.08,43.17-39.5,7-13.6,14.16-27.66,25.55-35.38,5.86-4,13.8-7,22.21-10.28,23.86-9.2,53.55-20.66,53.55-61.67C232,65.9,215.73,43.6,187.37,32ZM172.69,139.91c-9.28,3.58-18.05,7-25.43,12-14.78,10-23.3,26.66-30.81,41.33C106.67,212.3,100.05,224,87.52,224c-4.52,0-12.18-7.37-19.09-23.85-8.39-20-13-46.49-12.37-70.83.73-27.66,8.23-50.11,21.11-63.21C95.23,47.74,120.79,40,144.57,40a98.48,98.48,0,0,1,36.74,6.76c13,5.3,34.69,18.38,34.69,46.37C216,123.21,195.93,131,172.69,139.91Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,93.16c0,49-48.17,49-72.25,65.34C121.88,178.76,119.64,232,87.52,232s-61.74-125-16-171.51C119.64,11.49,224,27.82,224,93.16Z\"/>";

export const PatreonLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PatreonLogoProps) => {
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
