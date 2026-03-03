import { SVGProps } from "react";

export type ArrowBendRightUpVariant = "duotone" | "fill" | "light";

export interface ArrowBendRightUpProps extends SVGProps<SVGSVGElement> {
  variant?: ArrowBendRightUpVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M207.39,83.06A8,8,0,0,1,200,88H160v40A104.11,104.11,0,0,1,56,232a8,8,0,0,1,0-16,88.1,88.1,0,0,0,88-88V88H104a8,8,0,0,1-5.66-13.66l48-48a8,8,0,0,1,11.32,0l48,48A8,8,0,0,1,207.39,83.06Z\"/>";
const LIGHT_INNER     = "<path d=\"M204.24,84.24a6,6,0,0,1-8.48,0L158,46.49V128A102.12,102.12,0,0,1,56,230a6,6,0,0,1,0-12,90.1,90.1,0,0,0,90-90V46.49L108.24,84.24a6,6,0,0,1-8.48-8.48l48-48a6,6,0,0,1,8.48,0l48,48A6,6,0,0,1,204.24,84.24Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M205.66,74.34l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,104,88h40v40a88.1,88.1,0,0,1-88,88,8,8,0,0,0,0,16A104.11,104.11,0,0,0,160,128V88h40a8,8,0,0,0,5.66-13.66ZM123.31,72,152,43.31,180.69,72Z\"/>";
const SECONDARY_PATHS = "<path d=\"M200,80H104l48-48Z\"/>";

export const ArrowBendRightUp = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ArrowBendRightUpProps) => {
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
