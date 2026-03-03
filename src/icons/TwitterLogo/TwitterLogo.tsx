import { SVGProps } from "react";

export type TwitterLogoVariant = "duotone" | "fill" | "light";

export interface TwitterLogoProps extends SVGProps<SVGSVGElement> {
  variant?: TwitterLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M245.66,77.66l-29.9,29.9C209.72,177.58,150.67,232,80,232c-14.52,0-26.49-2.3-35.58-6.84-7.33-3.67-10.33-7.6-11.08-8.72a8,8,0,0,1,3.85-11.93c.26-.1,24.24-9.31,39.47-26.84a110.93,110.93,0,0,1-21.88-24.2c-12.4-18.41-26.28-50.39-22-98.18a8,8,0,0,1,13.65-4.92c.35.35,33.28,33.1,73.54,43.72V88a47.87,47.87,0,0,1,14.36-34.3A46.87,46.87,0,0,1,168.1,40a48.66,48.66,0,0,1,41.47,24H240a8,8,0,0,1,5.66,13.66Z\"/>";
const LIGHT_INNER     = "<path d=\"M245.54,69.71A6,6,0,0,0,240,66H208.4a46.6,46.6,0,0,0-40.33-24,44.93,44.93,0,0,0-32.31,13.12A45.92,45.92,0,0,0,122,88v8.66c-42-10-76.6-44.52-77-44.88A6,6,0,0,0,34.8,55.46c-4.25,47.22,9.42,78.75,21.64,96.89a107.71,107.71,0,0,0,23.07,25c-15.49,19-41.34,28.89-41.62,29a6,6,0,0,0-2.88,9C36,216.83,45.78,230,80,230c69.88,0,128.23-54,133.82-123.34l30.42-30.41A6,6,0,0,0,245.54,69.71ZM203.76,99.76a6,6,0,0,0-1.75,3.86C197.93,167.76,144.33,218,80,218c-14,0-22.76-2.41-28.06-4.8,11.3-5.68,29.72-16.88,41.05-33.87a6,6,0,0,0,.85-4.67A6,6,0,0,0,91,170.82c-.13-.08-13.13-7.86-25-25.72C52,124,45.31,98.43,46,68.88c14.88,12.6,45.57,35.09,81,41a6,6,0,0,0,7-5.92V88a34,34,0,0,1,10.19-24.34A33.05,33.05,0,0,1,167.93,54c13.43.17,26,8.37,31.24,20.4a6,6,0,0,0,5.5,3.6h20.84Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M247.39,68.94A8,8,0,0,0,240,64H209.57A48.65,48.65,0,0,0,168.1,40a46.87,46.87,0,0,0-33.74,13.7A47.87,47.87,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.3,47.79,9.57,79.77,22,98.18a110.92,110.92,0,0,0,21.89,24.2C61.43,195.2,37.45,204.41,37.2,204.51a8,8,0,0,0-3.85,11.93c.74,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.68,0,129.72-54.42,135.76-124.44l29.9-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.52-6.25,27.56-17,37.88-32.48a8,8,0,0,0-2.61-11.34c-.13-.08-12.86-7.74-24.48-25.29C54.54,124.11,48,100.38,48,73.09c16,13,45.25,33.18,78.69,38.8A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.89,30.89,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z\"/>";
const SECONDARY_PATHS = "<path d=\"M240,72l-32,32c-4.26,66.84-60.08,120-128,120-32,0-40-12-40-12s32-12,48-36c0,0-55.15-32-47.22-120,0,0,39.66,40,87.22,48V88c0-22,18-40.27,40-40a40.74,40.74,0,0,1,36.67,24Z\"/>";

export const TwitterLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: TwitterLogoProps) => {
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
