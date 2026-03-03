import { SVGProps } from "react";

export type TildeVariant = "duotone" | "fill" | "light";

export interface TildeProps extends SVGProps<SVGSVGElement> {
  variant?: TildeVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm-10,99.66c-13.19,15-25.34,20.29-36.37,20.29-14.94,0-27.81-9.61-38.43-17.54-19.2-14.34-31.89-23.81-53.2.48a8,8,0,1,1-12-10.55c31.05-35.41,56.34-16.53,74.8-2.75,19.2,14.34,31.89,23.81,53.2-.48a8,8,0,1,1,12,10.55Z\"/>";
const LIGHT_INNER     = "<path d=\"M220.68,129.34c-14.17,17.62-28.06,26.92-42.46,28.44A40.75,40.75,0,0,1,174,158c-18.64,0-34.44-12.87-49.76-25.35S94.57,108.51,79,110.16c-11.06,1.16-22.3,9-34.36,24a6,6,0,1,1-9.36-7.52c14.17-17.61,28.06-26.92,42.46-28.43,20.52-2.18,37.54,11.7,54,25.12C147,135.76,161.42,147.48,177,145.84c11.06-1.16,22.3-9,34.36-24a6,6,0,0,1,9.36,7.52Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M222.23,130.59c-14.51,18-28.84,27.6-43.8,29.17a43,43,0,0,1-4.5.24c-19.3,0-35.39-13.1-51-25.8-14.91-12.14-29-23.61-43.7-22-10.51,1.1-21.31,8.72-33,23.28a8,8,0,0,1-12.46-10c14.51-18,28.84-27.6,43.8-29.17,21.32-2.25,38.69,11.89,55.48,25.56,14.91,12.14,29,23.62,43.7,22,10.51-1.1,21.31-8.72,33-23.28a8,8,0,1,1,12.46,10Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z\"/>";

export const Tilde = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: TildeProps) => {
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
