import { SVGProps } from "react";

export type SupersetProperOfVariant = "duotone" | "fill" | "light";

export interface SupersetProperOfProps extends SVGProps<SVGSVGElement> {
  variant?: SupersetProperOfVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM128,192H80a8,8,0,0,1,0-16h48a48,48,0,0,0,0-96H80a8,8,0,0,1,0-16h48a64,64,0,0,1,0,128Z\"/>";
const LIGHT_INNER     = "<path d=\"M222,128a86.1,86.1,0,0,1-86,86H64a6,6,0,0,1,0-12h72a74,74,0,0,0,0-148H64a6,6,0,0,1,0-12h72A86.1,86.1,0,0,1,222,128Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M224,128a88.1,88.1,0,0,1-88,88H64a8,8,0,0,1,0-16h72a72,72,0,0,0,0-144H64a8,8,0,0,1,0-16h72A88.1,88.1,0,0,1,224,128Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,128a80,80,0,0,1-80,80H64V48h72A80,80,0,0,1,216,128Z\"/>";

export const SupersetProperOf = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: SupersetProperOfProps) => {
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
