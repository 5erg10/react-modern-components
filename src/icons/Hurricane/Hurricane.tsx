import { SVGProps } from "react";

export type HurricaneVariant = "duotone" | "fill" | "light";

export interface HurricaneProps extends SVGProps<SVGSVGElement> {
  variant?: HurricaneVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M158.32,45.36l9.41-35.3A8,8,0,0,0,158.32.18,195.87,195.87,0,0,0,99.67,25.27C60.63,50.37,40,85.89,40,128a88.11,88.11,0,0,0,57.68,82.64l-9.41,35.3a8,8,0,0,0,9.41,9.88,195.87,195.87,0,0,0,58.65-25.09C195.37,205.63,216,170.11,216,128A88.1,88.1,0,0,0,158.32,45.36ZM128,152a24,24,0,1,1,24-24A24,24,0,0,1,128,152Z\"/>";
const LIGHT_INNER     = "<path d=\"M128,98a30,30,0,1,0,30,30A30,30,0,0,0,128,98Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,128,146Zm27.91-99.37L165.8,9.54a6,6,0,0,0-7.06-7.41,193.94,193.94,0,0,0-58,24.82C62.32,51.66,42,86.6,42,128a86.1,86.1,0,0,0,58.09,81.37L90.2,246.45a6,6,0,0,0,7.06,7.42,193.94,193.94,0,0,0,58-24.82C193.68,204.34,214,169.4,214,128A86.09,86.09,0,0,0,155.91,46.63Zm-6.86,172.13a187.63,187.63,0,0,1-44.55,20.67l8.68-32.57a6,6,0,0,0-4.26-7.34A74.06,74.06,0,0,1,54,128c0-37.53,17.82-68.07,53-90.77A187.93,187.93,0,0,1,151.5,16.57l-8.68,32.57a6,6,0,0,0,4.26,7.34A74.06,74.06,0,0,1,202,128C202,165.53,184.18,196.07,149.05,218.76Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144Zm30.32-98.64,9.41-35.3A8,8,0,0,0,158.32.18,195.87,195.87,0,0,0,99.67,25.27C60.63,50.37,40,85.89,40,128a88.11,88.11,0,0,0,57.68,82.64l-9.41,35.3a8,8,0,0,0,9.41,9.88,195.87,195.87,0,0,0,58.65-25.09C195.37,205.63,216,170.11,216,128A88.1,88.1,0,0,0,158.32,45.36ZM148.06,217a184.14,184.14,0,0,1-40.68,19.37l7.73-29a8,8,0,0,0-5.67-9.79A72.06,72.06,0,0,1,56,128c0-36.77,17.48-66.72,51.94-89a184.14,184.14,0,0,1,40.68-19.37l-7.73,29a8,8,0,0,0,5.67,9.79A72.06,72.06,0,0,1,200,128C200,164.77,182.52,194.72,148.06,217Z\"/>";
const SECONDARY_PATHS = "<path d=\"M148.62,50.68,160,8S48,32,48,128a80,80,0,0,0,59.38,77.32L96,248s112-24,112-120A80,80,0,0,0,148.62,50.68ZM128,152a24,24,0,1,1,24-24A24,24,0,0,1,128,152Z\"/>";

export const Hurricane = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: HurricaneProps) => {
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
