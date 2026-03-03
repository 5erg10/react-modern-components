import { SVGProps } from "react";

export type PenNibVariant = "duotone" | "fill" | "light";

export interface PenNibProps extends SVGProps<SVGSVGElement> {
  variant?: PenNibVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M243.31,81.36,174.63,12.68a16,16,0,0,0-22.63,0L123.56,41.12l-58,21.76A16,16,0,0,0,55.36,75.23L34.59,199.83a4,4,0,0,0,6.77,3.49l57-57a23.85,23.85,0,0,1-2.29-12.08,24,24,0,1,1,13.6,23.4l-57,57a4,4,0,0,0,3.49,6.77l124.61-20.77a16,16,0,0,0,12.35-10.16l21.77-58.07L243.31,104a16,16,0,0,0,0-22.63ZM208,116.68,139.32,48l24-24L232,92.68Z\"/>";
const LIGHT_INNER     = "<path d=\"M246,92.68a13.94,13.94,0,0,0-4.1-9.9L173.21,14.1a14,14,0,0,0-19.8,0L124.68,42.83,66.22,64.76a14,14,0,0,0-8.9,10.8L34.08,215A6,6,0,0,0,40,222a6.61,6.61,0,0,0,1-.08l139.44-23.24a14,14,0,0,0,10.81-8.9l21.92-58.46,28.74-28.74A13.92,13.92,0,0,0,246,92.68Zm-66,92.89a2,2,0,0,1-1.54,1.27L57.49,207l52.87-52.88a26,26,0,1,0-8.48-8.48L49,198.53l20.17-121A2,2,0,0,1,70.43,76l56.06-21L201,129.51ZM110,132a14,14,0,1,1,14,14A14,14,0,0,1,110,132ZM233.41,94.1,208,119.51,136.48,48,161.9,22.58a2,2,0,0,1,2.83,0l68.68,68.69a2,2,0,0,1,0,2.83Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M248,92.68a15.86,15.86,0,0,0-4.69-11.31L174.63,12.68a16,16,0,0,0-22.63,0L123.57,41.11l-58,21.77A16.06,16.06,0,0,0,55.35,75.23L32.11,214.68A8,8,0,0,0,40,224a8.4,8.4,0,0,0,1.32-.11l139.44-23.24a16,16,0,0,0,12.35-10.17l21.77-58L243.31,104A15.87,15.87,0,0,0,248,92.68Zm-69.87,92.19L63.32,204l47.37-47.37a28,28,0,1,0-11.32-11.32L52,192.7,71.13,77.86,126,57.29,198.7,130ZM112,132a12,12,0,1,1,12,12A12,12,0,0,1,112,132Zm96-15.32L139.31,48l24-24L232,92.68Z\"/>";
const SECONDARY_PATHS = "<path d=\"M128,48,68.32,70.38a8,8,0,0,0-5.08,6.17L40,216l139.45-23.24a8,8,0,0,0,6.17-5.08L208,128Zm-4,104a20,20,0,1,1,20-20A20,20,0,0,1,124,152Z\"/>";

export const PenNib = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PenNibProps) => {
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
