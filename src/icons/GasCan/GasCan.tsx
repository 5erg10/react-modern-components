import { SVGProps } from "react";

export type GasCanVariant = "duotone" | "fill" | "light";

export interface GasCanProps extends SVGProps<SVGSVGElement> {
  variant?: GasCanVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M200,24H123.31A15.86,15.86,0,0,0,112,28.69L101.66,39,91.31,28.69a16,16,0,0,0-22.62,0l-24,24a16,16,0,0,0,0,22.62L55,85.66,44.69,96A15.86,15.86,0,0,0,40,107.31V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM56,64,80,40,90.34,50.34l-24,24ZM180.8,185.6a8,8,0,1,1-9.6,12.8L128,166,84.8,198.4a8,8,0,0,1-9.6-12.8L114.67,156,75.2,126.4a8,8,0,0,1,9.6-12.8L128,146l43.2-32.4a8,8,0,0,1,9.6,12.8L141.33,156ZM176,72H136a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z\"/>";
const LIGHT_INNER     = "<path d=\"M200,26H123.31a13.94,13.94,0,0,0-9.9,4.1L101.66,41.86,89.9,30.1a14,14,0,0,0-19.8,0l-24,24a14,14,0,0,0,0,19.8L57.86,85.66,46.1,97.41a13.94,13.94,0,0,0-4.1,9.9V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V40A14,14,0,0,0,200,26ZM54.59,65.41a2,2,0,0,1,0-2.82l24-24a2,2,0,0,1,2.82,0L93.17,50.34,66.34,77.17ZM202,216a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V107.31a2,2,0,0,1,.59-1.41l16-16h0L105.9,54.59h0l16-16a2,2,0,0,1,1.41-.59H200a2,2,0,0,1,2,2ZM182,64a6,6,0,0,1-6,6H136a6,6,0,0,1,0-12h40A6,6,0,0,1,182,64Zm-2.4,60.8L138,156l41.6,31.2a6,6,0,1,1-7.2,9.6L128,163.5,83.6,196.8a6,6,0,0,1-7.2-9.6L118,156,76.4,124.8a6,6,0,0,1,7.2-9.6L128,148.5l44.4-33.3a6,6,0,1,1,7.2,9.6Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M200,24H123.31A15.86,15.86,0,0,0,112,28.69L101.66,39,91.31,28.69a16,16,0,0,0-22.62,0l-24,24a16,16,0,0,0,0,22.62L55,85.66,44.69,96A15.86,15.86,0,0,0,40,107.31V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM56,64,80,40,90.34,50.34l-24,24ZM200,216H56V107.31l16-16h0L123.31,40H200ZM128,64a8,8,0,0,1,8-8h40a8,8,0,0,1,0,16H136A8,8,0,0,1,128,64Zm52.8,62.4L141.33,156l39.47,29.6a8,8,0,1,1-9.6,12.8L128,166,84.8,198.4a8,8,0,0,1-9.6-12.8L114.67,156,75.2,126.4a8,8,0,0,1,9.6-12.8L128,146l43.2-32.4a8,8,0,0,1,9.6,12.8Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,40V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V107.31a8,8,0,0,1,2.34-5.65l67.32-67.32A8,8,0,0,1,123.31,32H200A8,8,0,0,1,208,40Z\"/>";

export const GasCan = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: GasCanProps) => {
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
