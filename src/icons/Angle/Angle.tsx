import { SVGProps } from "react";

export type AngleVariant = "duotone" | "fill" | "light";

export interface AngleProps extends SVGProps<SVGSVGElement> {
  variant?: AngleVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM112,88a64.07,64.07,0,0,1,64,64,8,8,0,0,1-16,0,48.05,48.05,0,0,0-48-48,8,8,0,0,1,0-16Zm88,104H80a8,8,0,0,1-8-8V104H56a8,8,0,0,1,0-16H72V72a8,8,0,0,1,16,0V176H200a8,8,0,0,1,0,16Z\"/>";
const LIGHT_INNER     = "<path d=\"M98,72a6,6,0,0,1,6-6A102.12,102.12,0,0,1,206,168a6,6,0,0,1-12,0,90.1,90.1,0,0,0-90-90A6,6,0,0,1,98,72ZM240,194H78V32a6,6,0,0,0-12,0V66H32a6,6,0,0,0,0,12H66V200a6,6,0,0,0,6,6H240a6,6,0,0,0,0-12Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M96,72a8,8,0,0,1,8-8A104.11,104.11,0,0,1,208,168a8,8,0,0,1-16,0,88.1,88.1,0,0,0-88-88A8,8,0,0,1,96,72ZM240,192H80V32a8,8,0,0,0-16,0V64H32a8,8,0,0,0,0,16H64V200a8,8,0,0,0,8,8H240a8,8,0,0,0,0-16Z\"/>";
const SECONDARY_PATHS = "<path d=\"M200,168v32H72V72h32A96,96,0,0,1,200,168Z\"/>";

export const Angle = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: AngleProps) => {
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
