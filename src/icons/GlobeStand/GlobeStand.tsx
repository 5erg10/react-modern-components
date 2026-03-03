import { SVGProps } from "react";

export type GlobeStandVariant = "duotone" | "fill" | "light";

export interface GlobeStandProps extends SVGProps<SVGSVGElement> {
  variant?: GlobeStandVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M56,104a80,80,0,1,1,80,80A80.09,80.09,0,0,1,56,104Zm146.46,69.28A96,96,0,0,1,66.72,37.54,8,8,0,1,0,55.18,26.46,112,112,0,0,0,128,215.71V232H104a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H144V215.72a111.21,111.21,0,0,0,69.54-30.9,8,8,0,1,0-11.08-11.54Z\"/>";
const LIGHT_INNER     = "<path d=\"M136,182a78,78,0,1,0-78-78A78.09,78.09,0,0,0,136,182Zm0-144a66,66,0,1,1-66,66A66.08,66.08,0,0,1,136,38Zm76.33,136.89a6,6,0,0,1-.17,8.48A109.21,109.21,0,0,1,142,213.83V234h26a6,6,0,0,1,0,12H104a6,6,0,0,1,0-12h26V213.83a110,110,0,0,1-73.38-186,6,6,0,0,1,8.66,8.32A98,98,0,0,0,203.84,174.72,6,6,0,0,1,212.33,174.89Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M136,184a80,80,0,1,0-80-80A80.09,80.09,0,0,0,136,184Zm0-144a64,64,0,1,1-64,64A64.07,64.07,0,0,1,136,40Zm77.77,133.5a8,8,0,0,1-.23,11.32A111.21,111.21,0,0,1,144,215.72V232h24a8,8,0,0,1,0,16H104a8,8,0,0,1,0-16h24V215.71A112,112,0,0,1,55.18,26.46,8,8,0,1,1,66.72,37.54,96,96,0,0,0,202.46,173.28,8,8,0,0,1,213.77,173.5Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,104a72,72,0,1,1-72-72A72,72,0,0,1,208,104Z\"/>";

export const GlobeStand = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: GlobeStandProps) => {
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
