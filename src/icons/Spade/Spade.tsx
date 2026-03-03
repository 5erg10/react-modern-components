import { SVGProps } from "react";

export type SpadeVariant = "duotone" | "fill" | "light";

export interface SpadeProps extends SVGProps<SVGSVGElement> {
  variant?: SpadeVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M232,136a56,56,0,0,1-83.4,48.82l11.06,36.88A8,8,0,0,1,152,232H104a8,8,0,0,1-7.66-10.3l11.06-36.88A56,56,0,0,1,24,136c0-32,17.65-62.84,51-89.27a234.14,234.14,0,0,1,49.89-30.11,7.93,7.93,0,0,1,6.16,0A234.14,234.14,0,0,1,181,46.73C214.35,73.16,232,104,232,136Z\"/>";
const LIGHT_INNER     = "<path d=\"M179.84,51.39a284.14,284.14,0,0,0-49.16-32.76,6,6,0,0,0-5.36,0A284.14,284.14,0,0,0,76.16,51.39C42.88,79.13,26,107.59,26,136a54,54,0,0,0,75.24,49.65l-11,36.63A6,6,0,0,0,96,230h64a6,6,0,0,0,5.75-7.72l-11-36.63A54,54,0,0,0,230,136C230,107.59,213.12,79.13,179.84,51.39ZM176,178a42,42,0,0,1-27.6-10.34,6,6,0,0,0-9.69,6.24L151.94,218H104.06l13.23-44.1a6,6,0,0,0-9.69-6.24A42,42,0,0,1,38,136c0-53.73,74.77-97,90-105.22C143.24,39,218,82.2,218,136A42,42,0,0,1,176,178Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M131.58,16.85a8,8,0,0,0-7.16,0C120.32,18.9,24,67.84,24,136a56,56,0,0,0,74.15,53L88.34,221.7A8,8,0,0,0,96,232h64a8,8,0,0,0,7.66-10.3L157.85,189A56,56,0,0,0,232,136C232,67.84,135.68,18.9,131.58,16.85ZM176,176a40,40,0,0,1-26.29-9.85,8,8,0,0,0-12.92,8.33L149.25,216h-42.5l12.46-41.52a8,8,0,0,0-12.92-8.33A40,40,0,0,1,40,136c0-29.88,24.41-56.55,44.89-73.66A279.13,279.13,0,0,1,128,33.06a279.13,279.13,0,0,1,43.11,29.28C208.21,93.34,216,119.51,216,136A40,40,0,0,1,176,176Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,136a48,48,0,0,1-79.55,36.18L160,224H96l15.55-51.82A48,48,0,0,1,32,136c0-64,96-112,96-112S224,72,224,136Z\"/>";

export const Spade = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: SpadeProps) => {
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
