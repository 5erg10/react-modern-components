import { SVGProps } from "react";

export type MemberOfVariant = "duotone" | "fill" | "light";

export interface MemberOfProps extends SVGProps<SVGSVGElement> {
  variant?: MemberOfVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm-32,88a8,8,0,0,1,0,16H80.68A48.07,48.07,0,0,0,128,176h48a8,8,0,0,1,0,16H128a64,64,0,0,1,0-128h48a8,8,0,0,1,0,16H128a48.07,48.07,0,0,0-47.32,40Z\"/>";
const LIGHT_INNER     = "<path d=\"M200,134H54.26A74.09,74.09,0,0,0,128,202h72a6,6,0,0,1,0,12H128a86,86,0,0,1,0-172h72a6,6,0,0,1,0,12H128a74.09,74.09,0,0,0-73.74,68H200a6,6,0,0,1,0,12Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M200,136H56.46A72.08,72.08,0,0,0,128,200h72a8,8,0,0,1,0,16H128a88,88,0,0,1,0-176h72a8,8,0,0,1,0,16H128a72.08,72.08,0,0,0-71.54,64H200a8,8,0,0,1,0,16Z\"/>";
const SECONDARY_PATHS = "<path d=\"M200,48V208H128a80,80,0,0,1-80-80h0a80,80,0,0,1,80-80Z\"/>";

export const MemberOf = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: MemberOfProps) => {
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
