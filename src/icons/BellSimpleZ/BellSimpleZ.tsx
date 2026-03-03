import { SVGProps } from "react";

export type BellSimpleZVariant = "duotone" | "fill" | "light";

export interface BellSimpleZProps extends SVGProps<SVGSVGElement> {
  variant?: BellSimpleZVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M168,224a8,8,0,0,1-8,8H96a8,8,0,1,1,0-16h64A8,8,0,0,1,168,224Zm53.85-32A15.8,15.8,0,0,1,208,200H48a16,16,0,0,1-13.8-24.06C39.75,166.38,48,139.34,48,104a80,80,0,1,1,160,0c0,35.33,8.26,62.38,13.81,71.94A15.89,15.89,0,0,1,221.84,192ZM152,144a8,8,0,0,0-8-8H127l23.7-35.56A8,8,0,0,0,144,88H112a8,8,0,0,0,0,16h17.05l-23.7,35.56A8,8,0,0,0,112,152h32A8,8,0,0,0,152,144Z\"/>";
const LIGHT_INNER     = "<path d=\"M166,224a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,224Zm-22-86H123.21L149,99.33A6,6,0,0,0,144,90H112a6,6,0,0,0,0,12h20.79L107,140.67a6,6,0,0,0,5,9.33h32a6,6,0,0,0,0-12Zm76.11,53a13.83,13.83,0,0,1-12.1,7H48a14,14,0,0,1-12.06-21.06C41.59,167.2,50,139.74,50,104a78,78,0,1,1,156,0c0,35.73,8.42,63.2,14.08,72.94A13.9,13.9,0,0,1,220.11,191Zm-10.41-8C202.13,170,194,139.68,194,104a66,66,0,1,0-132,0c0,35.69-8.14,66-15.71,79a2,2,0,0,0,0,2,1.9,1.9,0,0,0,1.7,1H208a1.9,1.9,0,0,0,1.7-1A2,2,0,0,0,209.7,183Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M168,224a8,8,0,0,1-8,8H96a8,8,0,1,1,0-16h64A8,8,0,0,1,168,224Zm-24-88H127l23.7-35.56A8,8,0,0,0,144,88H112a8,8,0,0,0,0,16h17.05l-23.7,35.56A8,8,0,0,0,112,152h32a8,8,0,0,0,0-16Zm77.84,56A15.8,15.8,0,0,1,208,200H48a16,16,0,0,1-13.8-24.06C39.75,166.38,48,139.34,48,104a80,80,0,1,1,160,0c0,35.33,8.26,62.38,13.81,71.94A15.89,15.89,0,0,1,221.84,192ZM208,184c-7.73-13.27-16-43.95-16-80a64,64,0,1,0-128,0c0,36.06-8.28,66.74-16,80Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104a72,72,0,0,1,144,0c0,35.82,8.3,64.6,14.9,76A8,8,0,0,1,208,192Z\"/>";

export const BellSimpleZ = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BellSimpleZProps) => {
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
