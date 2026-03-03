import { SVGProps } from "react";

export type GenderMaleVariant = "duotone" | "fill" | "light";

export interface GenderMaleProps extends SVGProps<SVGSVGElement> {
  variant?: GenderMaleVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M152,140a36,36,0,1,1-36-36A36,36,0,0,1,152,140ZM216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40ZM192,72a8,8,0,0,0-8-8H152a8,8,0,0,0,0,16h12.69l-18,18A52.08,52.08,0,1,0,158,109.35l18-18V104a8,8,0,0,0,16,0Z\"/>";
const LIGHT_INNER     = "<path d=\"M216,34H168a6,6,0,0,0,0,12h33.52L154.72,92.79a78,78,0,1,0,4.42,114.4h0a78.11,78.11,0,0,0,4.07-105.91L210,54.49V88a6,6,0,0,0,12,0V40A6,6,0,0,0,216,34ZM150.66,198.7a66,66,0,1,1,0-93.36A66.1,66.1,0,0,1,150.66,198.7Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M216,32H168a8,8,0,0,0,0,16h28.69L154.62,90.07a80,80,0,1,0,11.31,11.31L208,59.32V88a8,8,0,0,0,16,0V40A8,8,0,0,0,216,32ZM149.24,197.29a64,64,0,1,1,0-90.53A64.1,64.1,0,0,1,149.24,197.29Z\"/>";
const SECONDARY_PATHS = "<path d=\"M154.91,202.91a72,72,0,1,1,0-101.82A72,72,0,0,1,154.91,202.91Z\"/>";

export const GenderMale = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: GenderMaleProps) => {
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
