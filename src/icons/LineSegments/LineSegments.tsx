import { SVGProps } from "react";

export type LineSegmentsVariant = "duotone" | "fill" | "light";

export interface LineSegmentsProps extends SVGProps<SVGSVGElement> {
  variant?: LineSegmentsVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M235.81,75.79A27.91,27.91,0,0,1,216,84a28.49,28.49,0,0,1-5.67-.58l-30.57,56.77,0,0a28,28,0,1,1-44.43,6.49l-26.06-26.06A28.07,28.07,0,0,1,96,124a28.41,28.41,0,0,1-5.67-.58L59.76,180.18l0,0a28,28,0,1,1-39.6,0h0a28,28,0,0,1,25.47-7.61l30.57-56.77,0,0a28.05,28.05,0,0,1,0-39.61h0a28,28,0,0,1,44.43,33.12l26.06,26.06a28.1,28.1,0,0,1,19-2.77l30.57-56.77,0,0a28,28,0,0,1,0-39.6h0a28,28,0,0,1,39.6,39.6Z\"/>";
const LIGHT_INNER     = "<path d=\"M237.23,34.77a30.06,30.06,0,0,0-42.44,0h0a30.06,30.06,0,0,0,0,42.44c.65.64,1.32,1.24,2,1.81l-28.14,52.26A30.11,30.11,0,0,0,143.46,135L121,112.54A30,30,0,0,0,74.78,74.78h0a30,30,0,0,0,0,42.43,26.28,26.28,0,0,0,2,1.82L48.64,171.29a30,30,0,0,0-29.87,7.5h0a30,30,0,1,0,42.44,0c-.65-.64-1.32-1.24-2-1.81l28.14-52.26A30.07,30.07,0,0,0,112.54,121L135,143.46a30,30,0,1,0,46.25-4.67,26.28,26.28,0,0,0-2-1.82l28.14-52.26a30,30,0,0,0,29.87-49.94Zm-184.51,178a18,18,0,1,1,0-25.46A18,18,0,0,1,52.72,212.74Zm30.55-104a18,18,0,1,1,25.46,0A18,18,0,0,1,83.27,108.73Zm89.46,64a18,18,0,1,1,0-25.46A18,18,0,0,1,172.73,172.73Zm56-104a18,18,0,1,1,0-25.46A18,18,0,0,1,228.74,68.72Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M238.64,33.36a32,32,0,0,0-45.26,0h0a32,32,0,0,0,0,45.26c.29.29.6.57.9.85l-26.63,49.46a32.19,32.19,0,0,0-23.9,3.5l-20.18-20.18a32,32,0,0,0-50.2-38.89h0a32,32,0,0,0,0,45.26c.29.29.59.57.89.85L47.63,168.94a32,32,0,0,0-30.27,8.44h0a32,32,0,1,0,45.26,0c-.29-.29-.6-.57-.9-.85l26.63-49.46A32.4,32.4,0,0,0,96,128a32,32,0,0,0,16.25-4.41l20.18,20.18a32,32,0,1,0,50.2-6.38c-.29-.29-.59-.57-.89-.85l26.63-49.46A32.33,32.33,0,0,0,216,88a32,32,0,0,0,22.63-54.62ZM51.3,211.33a16,16,0,0,1-22.63-22.64h0A16,16,0,1,1,51.3,211.33Zm33.38-104a16,16,0,0,1,0-22.63h0a16,16,0,1,1,0,22.63Zm86.64,64a16,16,0,0,1-22.63-22.63h0a16,16,0,0,1,22.63,22.63Zm56-104A16,16,0,1,1,204.7,44.67h0a16,16,0,0,1,22.63,22.64Z\"/>";
const SECONDARY_PATHS = "<path d=\"M57,183A24,24,0,1,1,23,183,24,24,0,0,1,57,183ZM79,79A24,24,0,1,0,113,79,24,24,0,0,0,79,79Zm64,64A24,24,0,1,0,177,143,24,24,0,0,0,143,143ZM233,39A24,24,0,1,0,233,73,24,24,0,0,0,233,39Z\"/>";

export const LineSegments = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: LineSegmentsProps) => {
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
