import { SVGProps } from "react";

export type DotsThreeOutlineVariant = "duotone" | "fill" | "light";

export interface DotsThreeOutlineProps extends SVGProps<SVGSVGElement> {
  variant?: DotsThreeOutlineVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128ZM48,100a28,28,0,1,0,28,28A28,28,0,0,0,48,100Zm160,0a28,28,0,1,0,28,28A28,28,0,0,0,208,100Z\"/>";
const LIGHT_INNER     = "<path d=\"M128,98a30,30,0,1,0,30,30A30,30,0,0,0,128,98Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,128,146ZM48,98a30,30,0,1,0,30,30A30,30,0,0,0,48,98Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,48,146ZM208,98a30,30,0,1,0,30,30A30,30,0,0,0,208,98Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,208,146Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144ZM48,96a32,32,0,1,0,32,32A32,32,0,0,0,48,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,48,144ZM208,96a32,32,0,1,0,32,32A32,32,0,0,0,208,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,208,144Z\"/>";
const SECONDARY_PATHS = "<path d=\"M152,128a24,24,0,1,1-24-24A24,24,0,0,1,152,128ZM48,104a24,24,0,1,0,24,24A24,24,0,0,0,48,104Zm160,0a24,24,0,1,0,24,24A24,24,0,0,0,208,104Z\"/>";

export const DotsThreeOutline = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: DotsThreeOutlineProps) => {
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
