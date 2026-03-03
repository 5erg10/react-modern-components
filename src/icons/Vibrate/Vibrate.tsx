import { SVGProps } from "react";

export type VibrateVariant = "duotone" | "fill" | "light";

export interface VibrateProps extends SVGProps<SVGSVGElement> {
  variant?: VibrateVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M184,56V200a24,24,0,0,1-24,24H96a24,24,0,0,1-24-24V56A24,24,0,0,1,96,32h64A24,24,0,0,1,184,56Zm24,24a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8,8,0,0,0,208,80Zm32,16a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V104A8,8,0,0,0,240,96ZM48,80a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8,8,0,0,0,48,80ZM16,96a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V104A8,8,0,0,0,16,96Z\"/>";
const LIGHT_INNER     = "<path d=\"M160,34H96A22,22,0,0,0,74,56V200a22,22,0,0,0,22,22h64a22,22,0,0,0,22-22V56A22,22,0,0,0,160,34Zm10,166a10,10,0,0,1-10,10H96a10,10,0,0,1-10-10V56A10,10,0,0,1,96,46h64a10,10,0,0,1,10,10ZM214,88v80a6,6,0,0,1-12,0V88a6,6,0,0,1,12,0Zm32,16v48a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0ZM54,88v80a6,6,0,0,1-12,0V88a6,6,0,0,1,12,0ZM22,104v48a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M160,32H96A24,24,0,0,0,72,56V200a24,24,0,0,0,24,24h64a24,24,0,0,0,24-24V56A24,24,0,0,0,160,32Zm8,168a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8ZM216,88v80a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Zm32,16v48a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0ZM56,88v80a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0ZM24,104v48a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z\"/>";
const SECONDARY_PATHS = "<path d=\"M176,56V200a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16V56A16,16,0,0,1,96,40h64A16,16,0,0,1,176,56Z\"/>";

export const Vibrate = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: VibrateProps) => {
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
