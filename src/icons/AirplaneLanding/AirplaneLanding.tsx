import { SVGProps } from "react";

export type AirplaneLandingVariant = "duotone" | "fill" | "light";

export interface AirplaneLandingProps extends SVGProps<SVGSVGElement> {
  variant?: AirplaneLandingVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M256,216a8,8,0,0,1-8,8H104a8,8,0,0,1,0-16H248A8,8,0,0,1,256,216Zm-24-24a8,8,0,0,0,8-8V148.32a40.13,40.13,0,0,0-29.28-38.54l-60.84-17-22.5-53.63a8,8,0,0,0-4.85-4.5l-5.47-1.82A16,16,0,0,0,96,48V77.39L66.13,68.88,55.52,39.51a8,8,0,0,0-5-4.87l-5.47-1.82A16,16,0,0,0,24,48v55.72a40.12,40.12,0,0,0,29.21,38.52L229.84,191.7A8,8,0,0,0,232,192Z\"/>";
const LIGHT_INNER     = "<path d=\"M254,216a6,6,0,0,1-6,6H104a6,6,0,0,1,0-12H248A6,6,0,0,1,254,216Zm-23.62-26.22L53.75,140.32A38.14,38.14,0,0,1,26,103.72V48A14,14,0,0,1,44.43,34.71l5.47,1.83a6,6,0,0,1,3.74,3.65l11,30.33L98,80V48a14,14,0,0,1,18.43-13.29l5.47,1.83a6,6,0,0,1,3.63,3.37l22.88,54.53,61.77,17.27A38.09,38.09,0,0,1,238,148.32V184a6,6,0,0,1-7.62,5.78ZM226,148.32a26.07,26.07,0,0,0-19-25l-64.58-18a6,6,0,0,1-3.91-3.46l-23-54.7-2.89-1A2,2,0,0,0,110,48V88a6,6,0,0,1-7.64,5.77l-44-12.54a6,6,0,0,1-4-3.73L43.34,47l-2.71-.9A1.91,1.91,0,0,0,40,46a2,2,0,0,0-1.16.38A2,2,0,0,0,38,48v55.72a26.09,26.09,0,0,0,19,25l169,47.33Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M256,216a8,8,0,0,1-8,8H104a8,8,0,0,1,0-16H248A8,8,0,0,1,256,216Zm-26.16-24.3L53.21,142.24A40.12,40.12,0,0,1,24,103.72V48A16,16,0,0,1,45.06,32.82l5.47,1.82a8,8,0,0,1,5,4.87L66.13,68.88,96,77.39V48a16,16,0,0,1,21.06-15.18l5.47,1.82a8,8,0,0,1,4.85,4.5l22.5,53.63,60.84,17A40.13,40.13,0,0,1,240,148.32V184a8,8,0,0,1-10.16,7.7ZM224,148.32a24.09,24.09,0,0,0-17.58-23.13l-64.57-18a8,8,0,0,1-5.23-4.61L114,48.67,112,48V88a8,8,0,0,1-10.19,7.7l-44-12.54a8,8,0,0,1-5.33-5L41.79,48.59,40,48v55.72a24.09,24.09,0,0,0,17.53,23.12L224,173.45Z\"/>";
const SECONDARY_PATHS = "<path d=\"M232,148.32V184L55.37,134.54A32,32,0,0,1,32,103.73V48a8,8,0,0,1,10.53-7.59L48,42.24,60,75.46,104,88V48a8,8,0,0,1,10.53-7.59L120,42.24l24,57.2,64.56,18A32,32,0,0,1,232,148.32Z\"/>";

export const AirplaneLanding = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: AirplaneLandingProps) => {
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
