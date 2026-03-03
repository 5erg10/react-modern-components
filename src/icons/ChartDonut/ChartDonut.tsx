import { SVGProps } from "react";

export type ChartDonutVariant = "duotone" | "fill" | "light";

export interface ChartDonutProps extends SVGProps<SVGSVGElement> {
  variant?: ChartDonutVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M120,161.94v65.34a4,4,0,0,1-4.46,4,104.28,104.28,0,0,1-84-64.5,4,4,0,0,1,2.69-5.34L97.32,144.5a4,4,0,0,1,4.35,1.66,32.25,32.25,0,0,0,15.59,12A4,4,0,0,1,120,161.94ZM128.06,24A8,8,0,0,0,120,32V88a7.94,7.94,0,0,0,7.87,8,32,32,0,0,1,10.86,62.15,4,4,0,0,0-2.73,3.79v65.34a4,4,0,0,0,4.45,4A104,104,0,0,0,128.06,24Zm-32,101.49a32,32,0,0,1,4.15-13.42l0-.07a8,8,0,0,0-.57-8.87A8.36,8.36,0,0,0,97.18,101L48.85,73.06A8,8,0,0,0,37.92,76,104.12,104.12,0,0,0,25,142.68,4,4,0,0,0,30,146L93.22,129A3.94,3.94,0,0,0,96.1,125.49Z\"/>";
const LIGHT_INNER     = "<path d=\"M128,26a6,6,0,0,0-6,6V88a6,6,0,0,0,6,6,34,34,0,1,1-29.45,17,6,6,0,0,0-2.2-8.2l-48.5-28A6,6,0,0,0,39.65,77,102,102,0,1,0,128,26ZM47.21,88.29l38.29,22.1A46,46,0,0,0,82,128a47.64,47.64,0,0,0,.4,6L39.7,145.45a90.27,90.27,0,0,1,7.51-57.16ZM42.81,157l42.7-11.44a46.12,46.12,0,0,0,36.49,28v44.2A90.2,90.2,0,0,1,42.81,157ZM134,217.8V173.6a46,46,0,0,0,0-91.21V38.2a90,90,0,0,1,0,179.6Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M128,24a8,8,0,0,0-8,8V88a8,8,0,0,0,8,8,32,32,0,1,1-27.72,16,8,8,0,0,0-2.93-10.93l-48.5-28A8,8,0,0,0,37.92,76,104,104,0,1,0,128,24ZM48.09,91.1,83,111.26A48.09,48.09,0,0,0,80,128c0,1.53.08,3,.22,4.52L41.28,143A88.16,88.16,0,0,1,48.09,91.1Zm-2.67,67.31,39-10.44A48.1,48.1,0,0,0,120,175.32v40.31A88.2,88.2,0,0,1,45.42,158.41ZM136,215.63V175.32a48,48,0,0,0,0-94.65V40.36a88,88,0,0,1,0,175.27Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,128a96,96,0,0,1-96,96V168a40,40,0,0,0,0-80V32A96,96,0,0,1,224,128Z\"/>";

export const ChartDonut = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ChartDonutProps) => {
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
