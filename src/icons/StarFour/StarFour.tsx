import { SVGProps } from "react";

export type StarFourVariant = "duotone" | "fill" | "light";

export interface StarFourProps extends SVGProps<SVGSVGElement> {
  variant?: StarFourVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M240,128a15.79,15.79,0,0,1-10.5,15l-63.44,23.07L143,229.5a16,16,0,0,1-30,0L89.94,166.06,26.5,143a16,16,0,0,1,0-30L89.94,89.94,113,26.5a16,16,0,0,1,30,0l23.07,63.44L229.5,113A15.79,15.79,0,0,1,240,128Z\"/>";
const LIGHT_INNER     = "<path d=\"M228.81,114.89,164.5,91.5,141.11,27.19a13.95,13.95,0,0,0-26.22,0L91.5,91.5,27.19,114.89a13.95,13.95,0,0,0,0,26.22L91.5,164.5l23.39,64.31a13.95,13.95,0,0,0,26.22,0L164.5,164.5l64.31-23.39a13.95,13.95,0,0,0,0-26.22Zm-4.1,15-66.94,24.34a6,6,0,0,0-3.59,3.59l-24.34,66.94a2,2,0,0,1-3.68,0l-24.34-66.94a6,6,0,0,0-3.59-3.59L31.29,129.84a2,2,0,0,1,0-3.68l66.94-24.34a6,6,0,0,0,3.59-3.59l24.34-66.94a2,2,0,0,1,3.68,0l24.34,66.94a6,6,0,0,0,3.59,3.59l66.94,24.34a2,2,0,0,1,0,3.68Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M229.5,113,166.06,89.94,143,26.5a16,16,0,0,0-30,0L89.94,89.94,26.5,113a16,16,0,0,0,0,30l63.44,23.07L113,229.5a16,16,0,0,0,30,0l23.07-63.44L229.5,143a16,16,0,0,0,0-30ZM157.08,152.3a8,8,0,0,0-4.78,4.78L128,223.9l-24.3-66.82a8,8,0,0,0-4.78-4.78L32.1,128l66.82-24.3a8,8,0,0,0,4.78-4.78L128,32.1l24.3,66.82a8,8,0,0,0,4.78,4.78L223.9,128Z\"/>";
const SECONDARY_PATHS = "<path d=\"M226.76,135.48l-66.94,24.34-24.34,66.94a8,8,0,0,1-15,0L96.18,159.82,29.24,135.48a8,8,0,0,1,0-15L96.18,96.18l24.34-66.94a8,8,0,0,1,15,0l24.34,66.94,66.94,24.34A8,8,0,0,1,226.76,135.48Z\"/>";

export const StarFour = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: StarFourProps) => {
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
