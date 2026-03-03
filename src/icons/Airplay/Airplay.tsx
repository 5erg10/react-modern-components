import { SVGProps } from "react";

export type AirplayVariant = "duotone" | "fill" | "light";

export interface AirplayProps extends SVGProps<SVGSVGElement> {
  variant?: AirplayVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M174.15,210.88A8,8,0,0,1,168,224H88a8,8,0,0,1-6.15-13.12l40-48a8,8,0,0,1,12.29,0ZM208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24H68.22a4,4,0,0,0,3.07-1.44l38.28-45.92a24,24,0,0,1,21-8.51,24.68,24.68,0,0,1,16.25,8.94l37.91,45.49a4,4,0,0,0,3.07,1.44H208a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Z\"/>";
const LIGHT_INNER     = "<path d=\"M132.56,156.1a6,6,0,0,0-9.11,0l-48,56A6,6,0,0,0,80,222h96a6,6,0,0,0,4.56-9.9ZM93.05,210l35-40.78L163,210ZM230,64V176a22,22,0,0,1-22,22h-8a6,6,0,0,1,0-12h8a10,10,0,0,0,10-10V64a10,10,0,0,0-10-10H48A10,10,0,0,0,38,64V176a10,10,0,0,0,10,10h8a6,6,0,0,1,0,12H48a22,22,0,0,1-22-22V64A22,22,0,0,1,48,42H208A22,22,0,0,1,230,64Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M134.08,154.79a8,8,0,0,0-12.15,0l-48,56A8,8,0,0,0,80,224h96a8,8,0,0,0,6.07-13.21ZM97.39,208,128,172.29,158.61,208ZM232,64V176a24,24,0,0,1-24,24h-8a8,8,0,0,1,0-16h8a8,8,0,0,0,8-8V64a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8V176a8,8,0,0,0,8,8h8a8,8,0,0,1,0,16H48a24,24,0,0,1-24-24V64A24,24,0,0,1,48,40H208A24,24,0,0,1,232,64Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,64V176a16,16,0,0,1-16,16H155.43L128,160l-27.43,32H48a16,16,0,0,1-16-16V64A16,16,0,0,1,48,48H208A16,16,0,0,1,224,64Z\"/>";

export const Airplay = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: AirplayProps) => {
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
