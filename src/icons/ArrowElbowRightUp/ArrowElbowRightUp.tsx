import { SVGProps } from "react";

export type ArrowElbowRightUpVariant = "duotone" | "fill" | "light";

export interface ArrowElbowRightUpProps extends SVGProps<SVGSVGElement> {
  variant?: ArrowElbowRightUpVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M223.39,99.06A8,8,0,0,1,216,104H176v88a8,8,0,0,1-8,8H24a8,8,0,0,1,0-16H160V104H120a8,8,0,0,1-5.66-13.66l48-48a8,8,0,0,1,11.32,0l48,48A8,8,0,0,1,223.39,99.06Z\"/>";
const LIGHT_INNER     = "<path d=\"M220.24,100.24a6,6,0,0,1-8.48,0L174,62.49V192a6,6,0,0,1-6,6H24a6,6,0,0,1,0-12H162V62.49l-37.76,37.75a6,6,0,0,1-8.48-8.48l48-48a6,6,0,0,1,8.48,0l48,48A6,6,0,0,1,220.24,100.24Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M221.66,90.34l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,120,104h40v80H24a8,8,0,0,0,0,16H168a8,8,0,0,0,8-8V104h40a8,8,0,0,0,5.66-13.66ZM139.31,88,168,59.31,196.69,88Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,96H120l48-48Z\"/>";

export const ArrowElbowRightUp = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ArrowElbowRightUpProps) => {
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
