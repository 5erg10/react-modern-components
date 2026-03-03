import { SVGProps } from "react";

export type BracketsAngleVariant = "duotone" | "fill" | "light";

export interface BracketsAngleProps extends SVGProps<SVGSVGElement> {
  variant?: BracketsAngleVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM103,180A8,8,0,0,1,89.05,188l-32-56a8,8,0,0,1,0-7.94l32-56A8,8,0,0,1,103,76L73.21,128ZM199,132l-32,56a8,8,0,0,1-13.9-7.94l29.74-52L153.05,76A8,8,0,1,1,167,68l32,56A8,8,0,0,1,199,132Z\"/>";
const LIGHT_INNER     = "<path d=\"M85.06,43.22,31.11,128l54,84.78a6,6,0,0,1-1.84,8.28,6,6,0,0,1-8.28-1.84l-56-88a6,6,0,0,1,0-6.44l56-88a6,6,0,0,1,10.12,6.44Zm152,81.56-56-88a6,6,0,1,0-10.12,6.44L224.89,128l-53.95,84.78a6,6,0,0,0,1.84,8.28,6,6,0,0,0,8.28-1.84l56-88A6,6,0,0,0,237.06,124.78Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M86.75,44.3,33.48,128l53.27,83.7a8,8,0,0,1-2.46,11.05A7.91,7.91,0,0,1,80,224a8,8,0,0,1-6.76-3.71l-56-88a8,8,0,0,1,0-8.59l56-88a8,8,0,1,1,13.5,8.59Zm152,79.41-56-88a8,8,0,1,0-13.5,8.59L222.52,128l-53.27,83.7a8,8,0,0,0,2.46,11.05A7.91,7.91,0,0,0,176,224a8,8,0,0,0,6.76-3.71l56-88A8,8,0,0,0,238.75,123.71Z\"/>";
const SECONDARY_PATHS = "<path d=\"M232,128l-56,88H80L24,128,80,40h96Z\"/>";

export const BracketsAngle = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BracketsAngleProps) => {
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
