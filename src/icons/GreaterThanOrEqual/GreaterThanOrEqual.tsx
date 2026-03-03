import { SVGProps } from "react";

export type GreaterThanOrEqualVariant = "duotone" | "fill" | "light";

export interface GreaterThanOrEqualProps extends SVGProps<SVGSVGElement> {
  variant?: GreaterThanOrEqualVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,184H80a8,8,0,0,1,0-16H184a8,8,0,0,1,0,16Zm2.35-64.35-104,32a8,8,0,1,1-4.7-15.3L156.8,112,77.65,87.65a8,8,0,0,1,4.7-15.3l104,32a8,8,0,0,1,0,15.3Z\"/>";
const LIGHT_INNER     = "<path d=\"M53.93,154.37,190.64,104,53.93,53.63a6,6,0,1,1,4.15-11.26l152,56a6,6,0,0,1,0,11.26l-152,56A6.09,6.09,0,0,1,56,166a6,6,0,0,1-2.07-11.63ZM208,194H56a6,6,0,0,0,0,12H208a6,6,0,0,0,0-12Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M53.24,152.49,184.86,104,53.24,55.51a8,8,0,1,1,5.53-15l152,56a8,8,0,0,1,0,15l-152,56A8.13,8.13,0,0,1,56,168a8,8,0,0,1-2.76-15.51ZM208,192H56a8,8,0,0,0,0,16H208a8,8,0,0,0,0-16Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,104,56,160V48Z\"/>";

export const GreaterThanOrEqual = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: GreaterThanOrEqualProps) => {
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
