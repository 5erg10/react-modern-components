import { SVGProps } from "react";

export type AlignRightSimpleVariant = "duotone" | "fill" | "light";

export interface AlignRightSimpleProps extends SVGProps<SVGSVGElement> {
  variant?: AlignRightSimpleVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M232,56V200a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0ZM184,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V96A16,16,0,0,0,184,80Z\"/>";
const LIGHT_INNER     = "<path d=\"M230,56V200a6,6,0,0,1-12,0V56a6,6,0,0,1,12,0ZM198,96v64a14,14,0,0,1-14,14H32a14,14,0,0,1-14-14V96A14,14,0,0,1,32,82H184A14,14,0,0,1,198,96Zm-12,0a2,2,0,0,0-2-2H32a2,2,0,0,0-2,2v64a2,2,0,0,0,2,2H184a2,2,0,0,0,2-2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M232,56V200a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0ZM200,96v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80H184A16,16,0,0,1,200,96Zm-16,0H32v64H184Z\"/>";
const SECONDARY_PATHS = "<path d=\"M192,96v64a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H184A8,8,0,0,1,192,96Z\"/>";

export const AlignRightSimple = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: AlignRightSimpleProps) => {
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
