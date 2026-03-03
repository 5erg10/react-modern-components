import { SVGProps } from "react";

export type SwordVariant = "duotone" | "fill" | "light";

export interface SwordProps extends SVGProps<SVGSVGElement> {
  variant?: SwordVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216,32H152a8,8,0,0,0-6.34,3.12l-64,83.21L72,108.69a16,16,0,0,0-22.64,0l-8.69,8.7a16,16,0,0,0,0,22.63l22,22-32,32a16,16,0,0,0,0,22.63l8.69,8.68a16,16,0,0,0,22.62,0l32-32,22,22a16,16,0,0,0,22.64,0l8.69-8.7a16,16,0,0,0,0-22.63l-9.64-9.64,83.21-64A8,8,0,0,0,224,104V40A8,8,0,0,0,216,32Zm-8,68.06-81.74,62.88L115.32,152l50.34-50.34a8,8,0,0,0-11.32-11.31L104,140.68,93.07,129.74,155.94,48H208Z\"/>";
const LIGHT_INNER     = "<path d=\"M216,34H152a6,6,0,0,0-4.76,2.34l-65.39,85L70.6,110.1a14,14,0,0,0-19.8,0L38.1,122.8a14,14,0,0,0,0,19.81h0L59.51,164,30.1,193.42a14,14,0,0,0,0,19.8l12.69,12.69a14,14,0,0,0,19.8,0L92,196.5l21.4,21.4a14,14,0,0,0,19.8,0l12.7-12.69a14,14,0,0,0,0-19.81l-11.25-11.25,85-65.39A6,6,0,0,0,222,104V40A6,6,0,0,0,216,34ZM54.1,217.42a2,2,0,0,1-2.83,0L38.59,204.73a2,2,0,0,1,0-2.82L68,172.5,83.51,188Zm83.31-20.7-12.69,12.7a2,2,0,0,1-2.84,0l-75.29-75.3h0a2,2,0,0,1,0-2.83l12.69-12.7a2,2,0,0,1,2.84,0l75.29,75.3A2,2,0,0,1,137.41,196.72ZM210,101.05,126.09,165.6,112.49,152l51.75-51.76a6,6,0,0,0-8.48-8.48L104,143.51l-13.6-13.6L155,46H210Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M216,32H152a8,8,0,0,0-6.34,3.12l-64,83.21L72,108.69a16,16,0,0,0-22.64,0l-12.69,12.7a16,16,0,0,0,0,22.63l20,20-28,28a16,16,0,0,0,0,22.63l12.69,12.68a16,16,0,0,0,22.62,0l28-28,20,20a16,16,0,0,0,22.64,0l12.69-12.7a16,16,0,0,0,0-22.63l-9.64-9.64,83.21-64A8,8,0,0,0,224,104V40A8,8,0,0,0,216,32ZM52.69,216,40,203.32l28-28L80.68,188Zm70.61-8L48,132.71,60.7,120,136,195.31ZM208,100.06l-81.74,62.88L115.32,152l50.34-50.34a8,8,0,0,0-11.32-11.31L104,140.68,93.07,129.74,155.94,48H208Z\"/>";
const SECONDARY_PATHS = "<path d=\"M141.66,201,129,213.66a8,8,0,0,1-11.32,0L92,188,58.35,221.66a8,8,0,0,1-11.32,0L34.34,209a8,8,0,0,1,0-11.31L68,164,42.34,138.36a8,8,0,0,1,0-11.32L55,114.34a8,8,0,0,1,11.32,0l75.3,75.3A8,8,0,0,1,141.66,201Z\"/>";

export const Sword = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: SwordProps) => {
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
