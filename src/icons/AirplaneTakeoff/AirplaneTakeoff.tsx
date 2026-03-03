import { SVGProps } from "react";

export type AirplaneTakeoffVariant = "duotone" | "fill" | "light";

export interface AirplaneTakeoffProps extends SVGProps<SVGSVGElement> {
  variant?: AirplaneTakeoffVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M176,216a8,8,0,0,1-8,8H24a8,8,0,0,1,0-16H168A8,8,0,0,1,176,216ZM246.31,86.76,227.67,62.87l-.12-.15a39.82,39.82,0,0,0-51.28-9.12L124.7,84.38,70.76,64.54a8,8,0,0,0-5.59,0L58,67.27l-.32.13a16,16,0,0,0-4.53,26.47L75,115.06l-20.17,12.2-28.26-9.54a8,8,0,0,0-6.08.4l-3,1.47A16,16,0,0,0,13,145.8l36,35.27.12.12a39.78,39.78,0,0,0,27.28,10.87,40.18,40.18,0,0,0,20.26-5.52l147.41-88a8,8,0,0,0,2.21-11.78Z\"/>";
const LIGHT_INNER     = "<path d=\"M174,216a6,6,0,0,1-6,6H24a6,6,0,0,1,0-12H168A6,6,0,0,1,174,216ZM245.9,92.78a6,6,0,0,1-2.82,4l-147.41,88a38.22,38.22,0,0,1-19.23,5.23,37.8,37.8,0,0,1-25.92-10.33l-.1-.09L14.37,144.36a14,14,0,0,1,4-23l3-1.49a6,6,0,0,1,4.56-.29l29.15,9.83,23.17-14-23.7-23a14,14,0,0,1,4-23.18l.24-.1,7.15-2.71a6,6,0,0,1,4.19,0l54.84,20.18,52.38-31.27A37.81,37.81,0,0,1,226,64l.09.11L244.73,88A6,6,0,0,1,245.9,92.78ZM231.09,90,216.67,71.53a25.86,25.86,0,0,0-33.26-5.89L128.6,98.36a6,6,0,0,1-5.15.48L68,78.45l-4.9,1.85A1.91,1.91,0,0,0,62,81.77a2,2,0,0,0,.63,1.82l.17.15,29.35,28.49a6,6,0,0,1-1.07,9.44L58.89,141.16a6,6,0,0,1-5,.55l-29.45-9.94-.93.46-.28.13a2,2,0,0,0-.58,3.29l.1.09,36,35.28a25.84,25.84,0,0,0,30.81,3.47Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M176,216a8,8,0,0,1-8,8H24a8,8,0,0,1,0-16H168A8,8,0,0,1,176,216ZM247.86,93.15a8,8,0,0,1-3.76,5.39l-147.41,88a40.18,40.18,0,0,1-20.26,5.52,39.78,39.78,0,0,1-27.28-10.87l-.12-.12L13,145.8a16,16,0,0,1,4.49-26.21l3-1.47a8,8,0,0,1,6.08-.4l28.26,9.54L75,115.06,53.17,93.87A16,16,0,0,1,57.7,67.4l.32-.13,7.15-2.71a8,8,0,0,1,5.59,0L124.7,84.38,176.27,53.6a39.82,39.82,0,0,1,51.28,9.12l.12.15,18.64,23.89A8,8,0,0,1,247.86,93.15Zm-19.74-3.7-13-16.67a23.88,23.88,0,0,0-30.68-5.42l-54.8,32.72a8.06,8.06,0,0,1-6.87.64L68,80.58l-4,1.53.21.2L93.57,110.8a8,8,0,0,1-1.43,12.58L59.93,142.87a8,8,0,0,1-6.7.73l-28.67-9.67-.19.1-.37.17a.71.71,0,0,1,.13.12l36,35.26a23.85,23.85,0,0,0,28.42,3.18Z\"/>";
const SECONDARY_PATHS = "<path d=\"M240,91.64l-147.41,88a32,32,0,0,1-38-4.32L18.53,140a8,8,0,0,1,2.32-13.19L24,125.27,55.79,136,88,116.51,58.65,88a8,8,0,0,1,2.2-13.3L68,72l57.53,21.17,54.84-32.75a32,32,0,0,1,41,7.32Z\"/>";

export const AirplaneTakeoff = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: AirplaneTakeoffProps) => {
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
