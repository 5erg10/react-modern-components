import { SVGProps } from "react";

export type MotorcycleVariant = "duotone" | "fill" | "light";

export interface MotorcycleProps extends SVGProps<SVGSVGElement> {
  variant?: MotorcycleVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216,120a41,41,0,0,0-6.6.55l-5.82-15.14A55.64,55.64,0,0,1,216,104a8,8,0,0,0,0-16H196.88L183.47,53.13A8,8,0,0,0,176,48H144a8,8,0,0,0,0,16h26.51l9.23,24H152c-18.5,0-33.5,4.31-43.37,12.46a16,16,0,0,1-16.76,2.07c-10.58-4.81-73.29-30.12-73.8-30.26a8,8,0,0,0-5,15.19S68.57,109.4,79.6,120.4A55.67,55.67,0,0,1,95.43,152H79.2a40,40,0,1,0,0,16h52.12a31.91,31.91,0,0,0,30.74-23.1,56,56,0,0,1,26.59-33.72l5.82,15.13A40,40,0,1,0,216,120ZM40,168H62.62a24,24,0,1,1,0-16H40a8,8,0,0,0,0,16Zm176,16a24,24,0,0,1-15.58-42.23l8.11,21.1a8,8,0,1,0,14.94-5.74L215.35,136l.65,0a24,24,0,0,1,0,48Z\"/>";
const LIGHT_INNER     = "<path d=\"M216,122a38.48,38.48,0,0,0-7.87.82L200.9,104a57.83,57.83,0,0,1,15.1-2,6,6,0,0,0,0-12H195.51L181.6,53.85A6,6,0,0,0,176,50H144a6,6,0,0,0,0,12h27.88l10.77,28H152c-18,0-32.58,4.15-42.1,12A18.05,18.05,0,0,1,91,104.35C77.9,98.38,30.4,79.19,26,77.46l-5.72-2.24A14.66,14.66,0,0,0,16,74a6,6,0,0,0-2.15,11.6h0c.46.18,47.13,18.26,72.23,29.67a30.12,30.12,0,0,0,31.47-4c7.34-6,19.25-9.25,34.46-9.25h24.89a70,70,0,0,0-28.32,39.13A17.85,17.85,0,0,1,131.32,154H77.52a38,38,0,1,0,0,12h53.8a29.9,29.9,0,0,0,28.81-21.64,58,58,0,0,1,29.58-36l7.23,18.8A38,38,0,1,0,216,122ZM40,166H65.29a26,26,0,1,1,0-12H40a6,6,0,0,0,0,12Zm176,20a26,26,0,0,1-14.68-47.45l9.08,23.6a6,6,0,0,0,11.2-4.3l-9.08-23.61A26.64,26.64,0,0,1,216,134a26,26,0,0,1,0,52Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M216,120a41,41,0,0,0-6.6.55l-5.82-15.14A55.64,55.64,0,0,1,216,104a8,8,0,0,0,0-16H196.88L183.47,53.13A8,8,0,0,0,176,48H144a8,8,0,0,0,0,16h26.51l9.23,24H152c-18.5,0-33.5,4.31-43.37,12.46a16,16,0,0,1-16.76,2.07C81.29,97.72,31.13,77.33,26.71,75.6L21,73.36A17.74,17.74,0,0,0,16,72a8,8,0,0,0-2.87,15.46h0c.46.18,47.19,18.3,72.13,29.63a32.15,32.15,0,0,0,33.56-4.29c4.86-4,14.57-8.8,33.19-8.8h18.82a71.74,71.74,0,0,0-24.17,36.59A15.86,15.86,0,0,1,131.32,152H79.2a40,40,0,1,0,0,16h52.12a31.91,31.91,0,0,0,30.74-23.1,56,56,0,0,1,26.59-33.72l5.82,15.13A40,40,0,1,0,216,120ZM40,168H62.62a24,24,0,1,1,0-16H40a8,8,0,0,0,0,16Zm176,16a24,24,0,0,1-15.58-42.23l8.11,21.1a8,8,0,1,0,14.94-5.74L215.35,136l.65,0a24,24,0,0,1,0,48Z\"/>";
const SECONDARY_PATHS = "<path d=\"M248,160a32,32,0,1,1-32-32A32,32,0,0,1,248,160ZM40,128a32,32,0,1,0,32,32A32,32,0,0,0,40,128Z\"/>";

export const Motorcycle = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: MotorcycleProps) => {
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
