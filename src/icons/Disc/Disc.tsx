import { SVGProps } from "react";

export type DiscVariant = "duotone" | "fill" | "light";

export interface DiscProps extends SVGProps<SVGSVGElement> {
  variant?: DiscVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M188.3,43.31a8,8,0,0,0-.65-.5c-.23-.16-.47-.31-.71-.45a103.85,103.85,0,1,0,1.36,1ZM128,152a24,24,0,1,1,24-24A24,24,0,0,1,128,152Zm88-24c0,2.47-.11,4.92-.31,7.34L168,126.92a39.83,39.83,0,0,0-11-26.41l27.78-39.67A87.8,87.8,0,0,1,216,128Z\"/>";
const LIGHT_INNER     = "<path d=\"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm37.52,96a37.79,37.79,0,0,0-6.76-16.27l37-36.95A89.61,89.61,0,0,1,217.8,122ZM154,128a26,26,0,1,1-26-26A26,26,0,0,1,154,128Zm-26,90A90,90,0,1,1,187.22,60.29L150.27,97.24A38,38,0,1,0,165.52,134H217.8A90.12,90.12,0,0,1,128,218Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm39.2,96a39.77,39.77,0,0,0-5.84-14l34.23-34.24a87.54,87.54,0,0,1,20,48.28ZM152,128a24,24,0,1,1-24-24A24,24,0,0,1,152,128Zm-24,88A88,88,0,1,1,184.28,60.4L150,94.64A40,40,0,1,0,167.2,136h48.43A88.11,88.11,0,0,1,128,216Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,128a96,96,0,1,1-28.12-67.88l-45.25,45.25h0A32,32,0,1,0,160,128Z\"/>";

export const Disc = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: DiscProps) => {
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
