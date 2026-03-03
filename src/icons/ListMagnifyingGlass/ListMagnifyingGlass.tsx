import { SVGProps } from "react";

export type ListMagnifyingGlassVariant = "duotone" | "fill" | "light";

export interface ListMagnifyingGlassProps extends SVGProps<SVGSVGElement> {
  variant?: ListMagnifyingGlassVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,72h72a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm88,48H40a8,8,0,0,0,0,16h88a8,8,0,0,0,0-16Zm109.66,2.34L217.36,166A40,40,0,1,0,206,177.36l20.3,20.3a8,8,0,0,0,11.32-11.32Z\"/>";
const LIGHT_INNER     = "<path d=\"M34,64a6,6,0,0,1,6-6H216a6,6,0,0,1,0,12H40A6,6,0,0,1,34,64Zm6,70h72a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12Zm88,52H40a6,6,0,0,0,0,12h88a6,6,0,0,0,0-12Zm108.24,10.24a6,6,0,0,1-8.48,0l-21.49-21.48a38.06,38.06,0,1,1,8.49-8.49l21.48,21.49A6,6,0,0,1,236.24,196.24ZM184,170a26,26,0,1,0-26-26A26,26,0,0,0,184,170Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,72h72a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm88,48H40a8,8,0,0,0,0,16h88a8,8,0,0,0,0-16Zm109.66,13.66a8,8,0,0,1-11.32,0L206,177.36A40,40,0,1,1,217.36,166l20.3,20.3A8,8,0,0,1,237.66,197.66ZM184,168a24,24,0,1,0-24-24A24,24,0,0,0,184,168Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,144a32,32,0,1,1-32-32A32,32,0,0,1,216,144Z\"/>";

export const ListMagnifyingGlass = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ListMagnifyingGlassProps) => {
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
