import { SVGProps } from "react";

export type TestTubeVariant = "duotone" | "fill" | "light";

export interface TestTubeProps extends SVGProps<SVGSVGElement> {
  variant?: TestTubeVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M237.66,86.34l-60-60a8,8,0,0,0-11.32,0L37.11,155.57a44.77,44.77,0,0,0,63.32,63.32L212.32,107l22.21-7.4a8,8,0,0,0,3.13-13.25Zm-32.19,6.07a8,8,0,0,0-3.13,1.93l-39.57,39.57c-8.47,2.9-21.75,4-39.07-5-10.6-5.54-20.18-8-28.56-8.73L172,43.31,217.19,88.5Z\"/>";
const LIGHT_INNER     = "<path d=\"M236.24,87.76l-60-60a6,6,0,0,0-8.48,0L38.53,157A42.77,42.77,0,1,0,99,217.47L211.24,105.24l22.66-7.55a6,6,0,0,0,2.34-9.93ZM90.53,209A30.77,30.77,0,1,1,47,165.47l29.13-29.12c8.84-3.14,22.84-4.56,41.08,5,12.28,6.41,23.13,8.66,32.27,8.71ZM206.1,94.31a6,6,0,0,0-2.34,1.45l-39.9,39.89c-8.84,3.14-22.84,4.56-41.08-5C110.5,124.27,99.65,122,90.51,122L172,40.49l48.89,48.89Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M237.66,86.34l-60-60a8,8,0,0,0-11.32,0L37.11,155.57a44.77,44.77,0,0,0,63.32,63.32L212.32,107l22.21-7.4a8,8,0,0,0,3.13-13.25ZM89.11,207.57a28.77,28.77,0,0,1-40.68-40.68l28.8-28.8c8.47-2.9,21.75-4,39.07,5,10.6,5.54,20.18,8,28.56,8.73ZM205.47,92.41a8,8,0,0,0-3.13,1.93l-39.57,39.57c-8.47,2.9-21.75,4-39.07-5-10.6-5.54-20.18-8-28.56-8.73L172,43.31,217.19,88.5Z\"/>";
const SECONDARY_PATHS = "<path d=\"M167.18,140.82,94.77,213.23a36.77,36.77,0,0,1-52,0h0a36.77,36.77,0,0,1,0-52l30-30c9.37-3.65,25.78-6.36,47.18,4.82S157.81,144.47,167.18,140.82Z\"/>";

export const TestTube = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: TestTubeProps) => {
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
