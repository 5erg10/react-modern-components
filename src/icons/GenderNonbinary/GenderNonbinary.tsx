import { SVGProps } from "react";

export type GenderNonbinaryVariant = "duotone" | "fill" | "light";

export interface GenderNonbinaryProps extends SVGProps<SVGSVGElement> {
  variant?: GenderNonbinaryVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM128,208a52,52,0,0,1-8-103.38V83.82L91,95.43A8,8,0,0,1,85,80.57L106.46,72,85,63.43A8,8,0,0,1,91,48.57l37,14.81,37-14.81A8,8,0,1,1,171,63.43L149.54,72,171,80.57A8,8,0,0,1,165,95.43L136,83.82v20.8A52,52,0,0,1,128,208Zm36-52a36,36,0,1,1-36-36A36,36,0,0,1,164,156Z\"/>";
const LIGHT_INNER     = "<path d=\"M134,98.27V58.6l30.91,18.54a6,6,0,1,0,6.18-10.28L139.66,48l31.43-18.85a6,6,0,1,0-6.18-10.29L128,41,91.09,18.86a6,6,0,1,0-6.18,10.29L116.34,48,84.91,66.86a6,6,0,1,0,6.18,10.28L122,58.6V98.27a70,70,0,1,0,12,0ZM128,226a58,58,0,1,1,58-58A58.07,58.07,0,0,1,128,226Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M136,96.46V62.13l27.88,16.73a8,8,0,1,0,8.24-13.72L143.55,48l28.57-17.14a8,8,0,0,0-8.24-13.72L128,38.67,92.12,17.14a8,8,0,0,0-8.24,13.72L112.45,48,83.88,65.14a8,8,0,0,0,8.24,13.72L120,62.13V96.46a72,72,0,1,0,16,0ZM128,224a56,56,0,1,1,56-56A56.06,56.06,0,0,1,128,224Z\"/>";
const SECONDARY_PATHS = "<path d=\"M192,168a64,64,0,1,1-64-64A64,64,0,0,1,192,168Z\"/>";

export const GenderNonbinary = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: GenderNonbinaryProps) => {
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
