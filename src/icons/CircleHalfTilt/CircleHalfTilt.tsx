import { SVGProps } from "react";

export type CircleHalfTiltVariant = "duotone" | "fill" | "light";

export interface CircleHalfTiltProps extends SVGProps<SVGSVGElement> {
  variant?: CircleHalfTiltVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM40,128A88,88,0,0,1,190.2,65.8L65.8,190.2A87.76,87.76,0,0,1,40,128Z\"/>";
const LIGHT_INNER     = "<path d=\"M200.12,55.88A102,102,0,1,0,55.88,200.13,102,102,0,1,0,200.12,55.88ZM90,209.62a89.61,89.61,0,0,1-21.23-13.89L90,174.49Zm32,8.16a90,90,0,0,1-20-3.58V162.49l20-20Zm32-3.58a89.8,89.8,0,0,1-20,3.58V130.49l20-20Zm32-17.4a89.45,89.45,0,0,1-20,12.83V98.49l20-20ZM60.27,187.24a90,90,0,0,1,127-127ZM198,184.57V71.43a90,90,0,0,1,0,113.14Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM65.78,65.77A88.08,88.08,0,0,1,184.3,60.39L60.38,184.31a88,88,0,0,1,5.4-118.54ZM190.22,190.23A88.1,88.1,0,0,1,71.7,195.61L195.62,71.69a88,88,0,0,1-5.4,118.54Z\"/>";
const SECONDARY_PATHS = "<path d=\"M195.88,195.88a96,96,0,0,1-135.76,0L195.88,60.12A96,96,0,0,1,195.88,195.88Z\"/>";

export const CircleHalfTilt = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CircleHalfTiltProps) => {
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
