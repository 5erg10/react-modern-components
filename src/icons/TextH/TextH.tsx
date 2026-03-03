import { SVGProps } from "react";

export type TextHVariant = "duotone" | "fill" | "light";

export interface TextHProps extends SVGProps<SVGSVGElement> {
  variant?: TextHVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,176a8,8,0,0,1-16,0V136H88v40a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0v40h80V80a8,8,0,0,1,16,0Z\"/>";
const LIGHT_INNER     = "<path d=\"M206,56V200a6,6,0,0,1-12,0V134H62v66a6,6,0,0,1-12,0V56a6,6,0,0,1,12,0v66H194V56a6,6,0,0,1,12,0Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M208,56V200a8,8,0,0,1-16,0V136H64v64a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v64H192V56a8,8,0,0,1,16,0Z\"/>";
const SECONDARY_PATHS = "<path d=\"M200,56V200H56V56Z\"/>";

export const TextH = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: TextHProps) => {
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
