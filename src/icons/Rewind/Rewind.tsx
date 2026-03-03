import { SVGProps } from "react";

export type RewindVariant = "duotone" | "fill" | "light";

export interface RewindProps extends SVGProps<SVGSVGElement> {
  variant?: RewindVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M232,71.84V184.16a15.92,15.92,0,0,1-24.48,13.34L128,146.86v37.3a15.92,15.92,0,0,1-24.48,13.34L15.33,141.34a15.8,15.8,0,0,1,0-26.68L103.52,58.5A15.91,15.91,0,0,1,128,71.84v37.3L207.52,58.5A15.91,15.91,0,0,1,232,71.84Z\"/>";
const LIGHT_INNER     = "<path d=\"M222.81,59.72a14,14,0,0,0-14.22.46L126,112.79V71.84a13.83,13.83,0,0,0-7.19-12.12,14,14,0,0,0-14.22.46L16.41,116.35a13.79,13.79,0,0,0,0,23.3l88.18,56.17a14,14,0,0,0,14.22.46A13.83,13.83,0,0,0,126,184.16V143.21l82.59,52.61a14,14,0,0,0,14.22.46A13.83,13.83,0,0,0,230,184.16V71.84A13.83,13.83,0,0,0,222.81,59.72ZM114,184.16a1.73,1.73,0,0,1-1,1.59,1.9,1.9,0,0,1-2-.06L22.85,129.53a1.8,1.8,0,0,1,0-3.06L111,70.31a1.87,1.87,0,0,1,1-.32,2,2,0,0,1,1,.26,1.73,1.73,0,0,1,1,1.59Zm104,0a1.73,1.73,0,0,1-1,1.59,1.9,1.9,0,0,1-2-.06l-88.19-56.16a1.8,1.8,0,0,1,0-3.06L215,70.31a1.87,1.87,0,0,1,1-.32,2,2,0,0,1,1,.26,1.73,1.73,0,0,1,1,1.59Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M223.77,58a16,16,0,0,0-16.25.53L128,109.14V71.84A15.91,15.91,0,0,0,103.52,58.5L15.33,114.66a15.8,15.8,0,0,0,0,26.68l88.19,56.16A15.91,15.91,0,0,0,128,184.16v-37.3l79.52,50.64A15.91,15.91,0,0,0,232,184.16V71.84A15.83,15.83,0,0,0,223.77,58ZM112,183.93,24.18,128,112,72.06Zm104,0L128.18,128,216,72.06Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,71.85v112.3a7.91,7.91,0,0,1-12.18,6.59l-88.19-56.15a7.8,7.8,0,0,1,0-13.18l88.19-56.15A7.91,7.91,0,0,1,224,71.85ZM107.82,65.26,19.63,121.41a7.8,7.8,0,0,0,0,13.18l88.19,56.15A7.91,7.91,0,0,0,120,184.15V71.85A7.91,7.91,0,0,0,107.82,65.26Z\"/>";

export const Rewind = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: RewindProps) => {
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
