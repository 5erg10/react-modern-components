import { SVGProps } from "react";

export type GolfVariant = "duotone" | "fill" | "light";

export interface GolfProps extends SVGProps<SVGSVGElement> {
  variant?: GolfVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M175.47,197.14a8,8,0,0,1-4.61,10.33A125.91,125.91,0,0,1,136,215.68V248a8,8,0,0,1-16,0V215.68a125.91,125.91,0,0,1-34.86-8.21,8,8,0,1,1,5.72-14.94C104,197.56,116.15,200,128,200s24-2.44,37.14-7.47A8,8,0,0,1,175.47,197.14ZM216,96A88,88,0,1,1,128,8,88.1,88.1,0,0,1,216,96Zm-72,36a12,12,0,1,0-12,12A12,12,0,0,0,144,132Zm32-32a12,12,0,1,0-12,12A12,12,0,0,0,176,100Z\"/>";
const LIGHT_INNER     = "<path d=\"M174,100a10,10,0,1,1-10-10A10,10,0,0,1,174,100Zm-42,22a10,10,0,1,0,10,10A10,10,0,0,0,132,122Zm82-26a86,86,0,1,1-86-86A86.1,86.1,0,0,1,214,96Zm-12,0a74,74,0,1,0-74,74A74.09,74.09,0,0,0,202,96Zm-36.14,98.4c-13.38,5.11-25.77,7.6-37.86,7.6s-24.48-2.49-37.86-7.6a6,6,0,1,0-4.28,11.2A122.32,122.32,0,0,0,122,213.81V248a6,6,0,0,0,12,0V213.81a122.32,122.32,0,0,0,36.14-8.21,6,6,0,0,0-4.28-11.2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M176,100a12,12,0,1,1-12-12A12,12,0,0,1,176,100Zm-44,20a12,12,0,1,0,12,12A12,12,0,0,0,132,120Zm84-24A88,88,0,1,1,128,8,88.1,88.1,0,0,1,216,96Zm-16,0a72,72,0,1,0-72,72A72.08,72.08,0,0,0,200,96Zm-34.86,96.53C152,197.56,139.85,200,128,200s-24-2.44-37.14-7.47a8,8,0,1,0-5.72,14.94A125.91,125.91,0,0,0,120,215.68V248a8,8,0,0,0,16,0V215.68a125.91,125.91,0,0,0,34.86-8.21,8,8,0,1,0-5.72-14.94Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,96a80,80,0,1,1-80-80A80,80,0,0,1,208,96Z\"/>";

export const Golf = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: GolfProps) => {
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
