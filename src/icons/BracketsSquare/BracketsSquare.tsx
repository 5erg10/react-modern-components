import { SVGProps } from "react";

export type BracketsSquareVariant = "duotone" | "fill" | "light";

export interface BracketsSquareProps extends SVGProps<SVGSVGElement> {
  variant?: BracketsSquareVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM104,176a8,8,0,0,1,0,16H72a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H80v96Zm88,8a8,8,0,0,1-8,8H152a8,8,0,0,1,0-16h24V80H152a8,8,0,0,1,0-16h32a8,8,0,0,1,8,8Z\"/>";
const LIGHT_INNER     = "<path d=\"M46,46V210H80a6,6,0,0,1,0,12H40a6,6,0,0,1-6-6V40a6,6,0,0,1,6-6H80a6,6,0,0,1,0,12ZM216,34H176a6,6,0,0,0,0,12h34V210H176a6,6,0,0,0,0,12h40a6,6,0,0,0,6-6V40A6,6,0,0,0,216,34Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M48,48V208H80a8,8,0,0,1,0,16H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H80a8,8,0,0,1,0,16ZM216,32H176a8,8,0,0,0,0,16h32V208H176a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,40V216H40V40Z\"/>";

export const BracketsSquare = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BracketsSquareProps) => {
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
