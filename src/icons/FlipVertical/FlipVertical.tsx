import { SVGProps } from "react";

export type FlipVerticalVariant = "duotone" | "fill" | "light";

export interface FlipVerticalProps extends SVGProps<SVGSVGElement> {
  variant?: FlipVerticalVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M56,120H216a16,16,0,0,0,6.23-30.74l-.14-.06-159.93-64A16,16,0,0,0,40,40v64A16,16,0,0,0,56,120Zm0-80,.15.06L216,104H56l0-64ZM231.67,148.82a15.85,15.85,0,0,1-9.45,17.92l-.14.06-159.93,64A16,16,0,0,1,40,216V152a16,16,0,0,1,16-16H216A15.85,15.85,0,0,1,231.67,148.82Z\"/>";
const LIGHT_INNER     = "<path d=\"M56,118H216a14,14,0,0,0,5.46-26.9l-.11,0-159.95-64A14,14,0,0,0,42,40v64A14,14,0,0,0,56,118ZM54,40a2,2,0,0,1,2-2,2,2,0,0,1,.79.16l.11.05,159.92,64A2,2,0,0,1,216,106H56a2,2,0,0,1-2-2Zm162,98H56a14,14,0,0,0-14,14v64a14,14,0,0,0,19.39,12.92l160-64,.11-.05A14,14,0,0,0,216,138Zm.82,15.83-159.92,64-.11.05A2,2,0,0,1,54,216V152a2,2,0,0,1,2-2H216a2,2,0,0,1,.82,3.83Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M56,120H216a16,16,0,0,0,6.23-30.74l-.14-.06-159.93-64A16,16,0,0,0,40,40v64A16,16,0,0,0,56,120Zm0-80,.15.06L216,104H56l0-64Zm160,96H56a16,16,0,0,0-16,16v64a16,16,0,0,0,22.15,14.78l159.93-64,.14-.06A16,16,0,0,0,216,136ZM56.15,215.93,56,216V152H216Z\"/>";
const SECONDARY_PATHS = "<path d=\"M219.11,159.37l-160,64A8,8,0,0,1,48,216V152a8,8,0,0,1,8-8H216C224.71,144,227.14,156,219.11,159.37Z\"/>";

export const FlipVertical = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: FlipVerticalProps) => {
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
