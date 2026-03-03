import { SVGProps } from "react";

export type BreadVariant = "duotone" | "fill" | "light";

export interface BreadProps extends SVGProps<SVGSVGElement> {
  variant?: BreadVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M200,40H48a40,40,0,0,0-16,76.65V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V116.65A40,40,0,0,0,200,40Zm-56,64a8,8,0,0,0,0,16v80H48V120a8,8,0,0,0,0-16,24,24,0,0,1,0-48h96a24,24,0,0,1,0,48Z\"/>";
const LIGHT_INNER     = "<path d=\"M238,80a38,38,0,0,0-38-38H48a38,38,0,0,0-14,73.32V200a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V115.32A38.07,38.07,0,0,0,238,80ZM46,200V118c.66,0,1.33,0,2,0a6,6,0,0,0,0-12,26,26,0,0,1,0-52h96a26,26,0,0,1,0,52,6,6,0,0,0,0,12c.67,0,1.34,0,2,0V200a2,2,0,0,1-2,2H48A2,2,0,0,1,46,200Zm154-94a6,6,0,0,0,0,12c.67,0,1.34,0,2,0V200a2,2,0,0,1-2,2H157.84a14.71,14.71,0,0,0,.16-2V115.32A38,38,0,0,0,171.68,54H200a26,26,0,0,1,0,52Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M240,80a40,40,0,0,0-40-40H48a40,40,0,0,0-16,76.65V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V116.65A40.06,40.06,0,0,0,240,80ZM48,120a8,8,0,0,0,0-16,24,24,0,0,1,0-48h96a24,24,0,0,1,0,48,8,8,0,0,0,0,16v80H48Zm152-16a8,8,0,0,0,0,16v80H160V116.65A40,40,0,0,0,176,56h24a24,24,0,0,1,0,48Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,111v89a8,8,0,0,1-8,8H144a8,8,0,0,0,8-8V111a32,32,0,0,0-8-63h56a32,32,0,0,1,8,63Z\"/>";

export const Bread = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BreadProps) => {
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
