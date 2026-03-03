import { SVGProps } from "react";

export type FlagBannerFoldVariant = "duotone" | "fill" | "light";

export interface FlagBannerFoldProps extends SVGProps<SVGSVGElement> {
  variant?: FlagBannerFoldVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M131.79,69.65l-43.63,96A4,4,0,0,1,84.52,168H28.23a8.2,8.2,0,0,1-6.58-3.13,8,8,0,0,1,.43-10.25L57.19,116,22.08,77.38a8,8,0,0,1-.43-10.26A8.22,8.22,0,0,1,28.23,64h99.92A4,4,0,0,1,131.79,69.65ZM237.56,42.24A8.3,8.3,0,0,0,231.77,40H168a8,8,0,0,0-7.28,4.69l-42.57,93.65a4,4,0,0,0,3.64,5.66h57.79l-34.86,76.69a8,8,0,1,0,14.56,6.62l80-176A8,8,0,0,0,237.56,42.24Z\"/>";
const LIGHT_INNER     = "<path d=\"M237,44.75A6,6,0,0,0,232,42H152a6,6,0,0,0-5.46,3.52L137.23,66H28a6,6,0,0,0-4.44,10l36.33,40L23.56,156A6,6,0,0,0,28,166h73.09a6,6,0,0,0,5.46-3.52L115.86,142h66.82l-36.14,79.52a6,6,0,0,0,3,7.94A5.9,5.9,0,0,0,152,230a6,6,0,0,0,5.46-3.52l80-176A6,6,0,0,0,237,44.75ZM97.23,154H41.56l30.88-34a6,6,0,0,0,0-8.08L41.56,78h90.21Zm90.91-24H121.32l34.54-76h66.82Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M238.73,43.67A8,8,0,0,0,232,40H152a8,8,0,0,0-7.28,4.69L135.94,64H28a8,8,0,0,0-5.92,13.38L57.19,116,22.08,154.62A8,8,0,0,0,28,168h73.09a8,8,0,0,0,7.28-4.69L117.15,144h62.43l-34.86,76.69a8,8,0,1,0,14.56,6.62l80-176A8,8,0,0,0,238.73,43.67ZM95.94,152H46.08l27.84-30.62a8,8,0,0,0,0-10.76L46.08,80h82.59Zm90.91-24H124.42l32.73-72h62.43Z\"/>";
const SECONDARY_PATHS = "<path d=\"M141.09,72l-40,88H28l40-44L28,72Z\"/>";

export const FlagBannerFold = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: FlagBannerFoldProps) => {
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
