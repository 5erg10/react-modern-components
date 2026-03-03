import { SVGProps } from "react";

export type ControlVariant = "duotone" | "fill" | "light";

export interface ControlProps extends SVGProps<SVGSVGElement> {
  variant?: ControlVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M207.39,123.06A8,8,0,0,1,200,128H56a8,8,0,0,1-5.66-13.66l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,207.39,123.06Z\"/>";
const LIGHT_INNER     = "<path d=\"M204.24,124.24a6,6,0,0,1-8.48,0L128,56.49,60.24,124.24a6,6,0,0,1-8.48-8.48l72-72a6,6,0,0,1,8.48,0l72,72A6,6,0,0,1,204.24,124.24Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M205.66,114.34l-72-72a8,8,0,0,0-11.32,0l-72,72A8,8,0,0,0,56,128H200a8,8,0,0,0,5.66-13.66ZM75.31,112,128,59.31,180.69,112Z\"/>";
const SECONDARY_PATHS = "<path d=\"M200,120H56l72-72Z\"/>";

export const Control = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ControlProps) => {
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
