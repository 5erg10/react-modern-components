import { SVGProps } from "react";

export type GhostVariant = "duotone" | "fill" | "light";

export interface GhostProps extends SVGProps<SVGSVGElement> {
  variant?: GhostVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M128,24a96.11,96.11,0,0,0-96,96v96a8,8,0,0,0,13.07,6.19l24.26-19.85L93.6,222.19a8,8,0,0,0,10.13,0L128,202.34l24.27,19.85a8,8,0,0,0,10.13,0l24.27-19.85,24.26,19.85A8,8,0,0,0,224,216V120A96.11,96.11,0,0,0,128,24ZM100,128a12,12,0,1,1,12-12A12,12,0,0,1,100,128Zm56,0a12,12,0,1,1,12-12A12,12,0,0,1,156,128Z\"/>";
const LIGHT_INNER     = "<path d=\"M110,116a10,10,0,1,1-10-10A10,10,0,0,1,110,116Zm46-10a10,10,0,1,0,10,10A10,10,0,0,0,156,106Zm66,14v96a6,6,0,0,1-9.8,4.64l-25.53-20.89-25.54,20.89a6,6,0,0,1-7.6,0L128,199.75l-25.53,20.89a6,6,0,0,1-7.6,0L69.33,199.75,43.8,220.64A6,6,0,0,1,34,216V120a94,94,0,0,1,188,0Zm-12,0a82,82,0,0,0-164,0v83.34l19.53-16a6,6,0,0,1,7.6,0l25.54,20.89,25.53-20.89a6,6,0,0,1,7.6,0l25.53,20.89,25.54-20.89a6,6,0,0,1,7.6,0l19.53,16Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M112,116a12,12,0,1,1-12-12A12,12,0,0,1,112,116Zm44-12a12,12,0,1,0,12,12A12,12,0,0,0,156,104Zm68,16v96a8,8,0,0,1-13.07,6.19l-24.26-19.85L162.4,222.19a8,8,0,0,1-10.13,0L128,202.34l-24.27,19.85a8,8,0,0,1-10.13,0L69.33,202.34,45.07,222.19A8,8,0,0,1,32,216V120a96,96,0,0,1,192,0Zm-16,0a80,80,0,0,0-160,0v79.12l16.27-13.31a8,8,0,0,1,10.13,0l24.27,19.85,24.26-19.85a8,8,0,0,1,10.14,0l24.26,19.85,24.27-19.85a8,8,0,0,1,10.13,0L208,199.12Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,120v96l-29.33-24-29.34,24L128,192,98.67,216,69.33,192,40,216V120a88,88,0,0,1,176,0Z\"/>";

export const Ghost = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: GhostProps) => {
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
