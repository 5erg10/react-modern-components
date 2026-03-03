import { SVGProps } from "react";

export type ArrowElbowLeftDownVariant = "duotone" | "fill" | "light";

export interface ArrowElbowLeftDownProps extends SVGProps<SVGSVGElement> {
  variant?: ArrowElbowLeftDownVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M240,72a8,8,0,0,1-8,8H96v80h40a8,8,0,0,1,5.66,13.66l-48,48a8,8,0,0,1-11.32,0l-48-48A8,8,0,0,1,40,160H80V72a8,8,0,0,1,8-8H232A8,8,0,0,1,240,72Z\"/>";
const LIGHT_INNER     = "<path d=\"M238,72a6,6,0,0,1-6,6H94V201.51l37.76-37.75a6,6,0,0,1,8.48,8.48l-48,48a6,6,0,0,1-8.48,0l-48-48a6,6,0,0,1,8.48-8.48L82,201.51V72a6,6,0,0,1,6-6H232A6,6,0,0,1,238,72Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M232,64H88a8,8,0,0,0-8,8v88H40a8,8,0,0,0-5.66,13.66l48,48a8,8,0,0,0,11.32,0l48-48A8,8,0,0,0,136,160H96V80H232a8,8,0,0,0,0-16ZM88,204.69,59.31,176h57.38Z\"/>";
const SECONDARY_PATHS = "<path d=\"M136,168,88,216,40,168Z\"/>";

export const ArrowElbowLeftDown = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ArrowElbowLeftDownProps) => {
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
