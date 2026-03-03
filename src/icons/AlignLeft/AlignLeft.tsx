import { SVGProps } from "react";

export type AlignLeftVariant = "duotone" | "fill" | "light";

export interface AlignLeftProps extends SVGProps<SVGSVGElement> {
  variant?: AlignLeftVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M232,152v40a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V152a16,16,0,0,1,16-16H216A16,16,0,0,1,232,152ZM40,32a8,8,0,0,0-8,8V216a8,8,0,0,0,16,0V40A8,8,0,0,0,40,32Zm40,88h96a16,16,0,0,0,16-16V64a16,16,0,0,0-16-16H80A16,16,0,0,0,64,64v40A16,16,0,0,0,80,120Z\"/>";
const LIGHT_INNER     = "<path d=\"M46,40V216a6,6,0,0,1-12,0V40a6,6,0,0,1,12,0Zm20,64V64A14,14,0,0,1,80,50h96a14,14,0,0,1,14,14v40a14,14,0,0,1-14,14H80A14,14,0,0,1,66,104Zm12,0a2,2,0,0,0,2,2h96a2,2,0,0,0,2-2V64a2,2,0,0,0-2-2H80a2,2,0,0,0-2,2Zm152,48v40a14,14,0,0,1-14,14H80a14,14,0,0,1-14-14V152a14,14,0,0,1,14-14H216A14,14,0,0,1,230,152Zm-12,0a2,2,0,0,0-2-2H80a2,2,0,0,0-2,2v40a2,2,0,0,0,2,2H216a2,2,0,0,0,2-2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M216,136H80a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V152A16,16,0,0,0,216,136Zm0,56H80V152H216v40ZM48,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0Zm32,80h96a16,16,0,0,0,16-16V64a16,16,0,0,0-16-16H80A16,16,0,0,0,64,64v40A16,16,0,0,0,80,120Zm0-56h96v40H80Z\"/>";
const SECONDARY_PATHS = "<path d=\"M72,104V64a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H80A8,8,0,0,1,72,104Zm144,40H80a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V152A8,8,0,0,0,216,144Z\"/>";

export const AlignLeft = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: AlignLeftProps) => {
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
