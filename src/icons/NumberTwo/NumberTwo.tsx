import { SVGProps } from "react";

export type NumberTwoVariant = "duotone" | "fill" | "light";

export interface NumberTwoProps extends SVGProps<SVGSVGElement> {
  variant?: NumberTwoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM160,176a8,8,0,0,1,0,16H96a8,8,0,0,1-5.79-13.52L145.9,120a24,24,0,0,0-35.73-32A23.33,23.33,0,0,0,107,92.38a8,8,0,0,1-14-7.77,40.22,40.22,0,0,1,5.28-7.38,40,40,0,0,1,59.45,53.54l-.16.16L114.66,176Z\"/>";
const LIGHT_INNER     = "<path d=\"M174,208a6,6,0,0,1-6,6H88a6,6,0,0,1-4.8-9.6l72-95.92a34,34,0,0,0-31.88-54.14A34.1,34.1,0,0,0,96.83,74.41a6,6,0,0,1-11-4.81,46.47,46.47,0,0,1,5.43-9.28,46,46,0,0,1,73.48,55.37L100,202h68A6,6,0,0,1,174,208Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M176,208a8,8,0,0,1-8,8H88a8,8,0,0,1-6.4-12.8l71.94-95.92a32,32,0,1,0-51.1-38.53,32.5,32.5,0,0,0-3.78,6.46A8,8,0,1,1,84,68.8a48,48,0,1,1,82.33,48.09L104,200h64A8,8,0,0,1,176,208Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40Z\"/>";

export const NumberTwo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: NumberTwoProps) => {
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
