import { SVGProps } from "react";

export type BugDroidVariant = "duotone" | "fill" | "light";

export interface BugDroidProps extends SVGProps<SVGSVGElement> {
  variant?: BugDroidVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M191.83,51.48l13.83-13.82a8,8,0,0,0-11.32-11.32L179.79,40.9a87.81,87.81,0,0,0-103.58,0L61.66,26.34A8,8,0,0,0,50.34,37.66L64.17,51.48A87.72,87.72,0,0,0,40,112v40a88,88,0,0,0,176,0V112A87.72,87.72,0,0,0,191.83,51.48ZM128,40a72.08,72.08,0,0,1,72,72v8H56v-8A72.08,72.08,0,0,1,128,40Zm16,52a12,12,0,1,1,12,12A12,12,0,0,1,144,92ZM88,92a12,12,0,1,1,12,12A12,12,0,0,1,88,92Z\"/>";
const LIGHT_INNER     = "<path d=\"M189,51.47l15.22-15.23a6,6,0,1,0-8.48-8.48L180,43.54A85.76,85.76,0,0,0,76,43.54L60.24,27.76a6,6,0,0,0-8.48,8.48L67,51.47A85.7,85.7,0,0,0,42,112v40a86,86,0,0,0,172,0V112A85.7,85.7,0,0,0,189,51.47ZM128,38a74.09,74.09,0,0,1,74,74v10H54V112A74.09,74.09,0,0,1,128,38Zm0,188a74.09,74.09,0,0,1-74-74V134H202v18A74.09,74.09,0,0,1,128,226ZM146,92a10,10,0,1,1,10,10A10,10,0,0,1,146,92ZM90,92a10,10,0,1,1,10,10A10,10,0,0,1,90,92Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M191.83,51.48l13.83-13.82a8,8,0,0,0-11.32-11.32L179.79,40.9a87.81,87.81,0,0,0-103.58,0L61.66,26.34A8,8,0,0,0,50.34,37.66L64.17,51.48A87.72,87.72,0,0,0,40,112v40a88,88,0,0,0,176,0V112A87.72,87.72,0,0,0,191.83,51.48ZM128,40a72.08,72.08,0,0,1,72,72v8H56v-8A72.08,72.08,0,0,1,128,40Zm0,184a72.08,72.08,0,0,1-72-72V136H200v16A72.08,72.08,0,0,1,128,224ZM144,92a12,12,0,1,1,12,12A12,12,0,0,1,144,92ZM88,92a12,12,0,1,1,12,12A12,12,0,0,1,88,92Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,128v24a80,80,0,0,1-160,0V128Z\"/>";

export const BugDroid = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BugDroidProps) => {
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
