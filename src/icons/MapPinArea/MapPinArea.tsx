import { SVGProps } from "react";

export type MapPinAreaVariant = "duotone" | "fill" | "light";

export interface MapPinAreaProps extends SVGProps<SVGSVGElement> {
  variant?: MapPinAreaVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M124,175a8,8,0,0,0,7.94,0c2.45-1.41,60-35,60-94.95A64,64,0,0,0,64,80C64,140,121.58,173.54,124,175ZM128,56a24,24,0,1,1-24,24A24,24,0,0,1,128,56ZM240,184c0,31.18-57.71,48-112,48S16,215.18,16,184c0-14.59,13.22-27.51,37.23-36.37a8,8,0,0,1,5.54,15C42.26,168.74,32,176.92,32,184c0,13.36,36.52,32,96,32s96-18.64,96-32c0-7.08-10.26-15.26-26.77-21.36a8,8,0,0,1,5.54-15C226.78,156.49,240,169.41,240,184Z\"/>";
const LIGHT_INNER     = "<path d=\"M114,80a14,14,0,1,1,14,14A14,14,0,0,1,114,80ZM66,80a62,62,0,0,1,124,0c0,58.81-56.61,91.83-59,93.21a6,6,0,0,1-6,0C122.61,171.83,66,138.81,66,80Zm12,0c0,44.52,38.81,73.49,50,80.91,11.18-7.42,50-36.38,50-80.91A50,50,0,0,0,78,80Zm124.08,69.51a6,6,0,1,0-4.16,11.25C215.5,167.25,226,175.94,226,184c0,16.08-40.25,34-98,34s-98-17.92-98-34c0-8.06,10.5-16.75,28.08-23.24a6,6,0,1,0-4.16-11.25C30.76,158.06,18,170.31,18,184c0,13.34,12.18,25.38,34.31,33.88C72.62,225.7,99.5,230,128,230s55.38-4.3,75.69-12.12C225.82,209.38,238,197.34,238,184,238,170.31,225.24,158.06,202.08,149.51Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M112,80a16,16,0,1,1,16,16A16,16,0,0,1,112,80ZM64,80a64,64,0,0,1,128,0c0,59.95-57.58,93.54-60,94.95a8,8,0,0,1-7.94,0C121.58,173.54,64,140,64,80Zm16,0c0,42.2,35.84,70.21,48,78.5,12.15-8.28,48-36.3,48-78.5a48,48,0,0,0-96,0Zm122.77,67.63a8,8,0,0,0-5.54,15C213.74,168.74,224,176.92,224,184c0,13.36-36.52,32-96,32s-96-18.64-96-32c0-7.08,10.26-15.26,26.77-21.36a8,8,0,0,0-5.54-15C29.22,156.49,16,169.41,16,184c0,31.18,57.71,48,112,48s112-16.82,112-48C240,169.41,226.78,156.49,202.77,147.63Z\"/>";
const SECONDARY_PATHS = "<path d=\"M184,80c0,56-56,88-56,88S72,136,72,80a56,56,0,0,1,112,0Z\"/>";

export const MapPinArea = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: MapPinAreaProps) => {
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
