import { SVGProps } from "react";

export type SphereVariant = "duotone" | "fill" | "light";

export interface SphereProps extends SVGProps<SVGSVGElement> {
  variant?: SphereVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,16c8.15,0,24,31.06,24,88,0,8.24-.34,15.92-.93,23.07-7.15.59-14.83.93-23.07.93-56.94,0-88-15.85-88-24A88.1,88.1,0,0,1,128,40ZM43.4,152.26C63.28,162.65,95.76,168,128,168c7.09,0,14.19-.26,21.17-.77C144.23,199,134,216,128,216A88.17,88.17,0,0,1,43.4,152.26Z\"/>";
const LIGHT_INNER     = "<path d=\"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm90,102c0,6.59-12.94,13.24-24,16.94a167.93,167.93,0,0,1-28.92,6.53c.62-7.6.94-15.46.94-23.47,0-26.27-3.44-51-9.68-69.78a85.57,85.57,0,0,0-8-17.91A90.16,90.16,0,0,1,218,128ZM128,38c6.59,0,13.24,12.94,16.94,24,5.84,17.53,9.06,41,9.06,66,0,8.83-.4,17.15-1.11,24.89-8,.73-16.35,1.11-24.89,1.11-54.94,0-90-15.4-90-26A90.1,90.1,0,0,1,128,38ZM40.31,148.3a85.57,85.57,0,0,0,17.91,8C77,162.56,101.73,166,128,166c8,0,15.86-.32,23.45-.94C146.64,198.2,136,218,128,218A90.16,90.16,0,0,1,40.31,148.3Zm108,67.39a85.57,85.57,0,0,0,8-17.91,184,184,0,0,0,7.43-34,184,184,0,0,0,34-7.43,85.57,85.57,0,0,0,17.91-8A90.3,90.3,0,0,1,148.3,215.69Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm88,104c0,6-17,16.23-48.77,21.17.51-7,.77-14.08.77-21.17,0-32.24-5.35-64.72-15.74-84.6A88.17,88.17,0,0,1,216,128ZM128,40c8.15,0,24,31.06,24,88,0,8.24-.34,15.92-.93,23.07-7.15.59-14.83.93-23.07.93-56.94,0-88-15.85-88-24A88.1,88.1,0,0,1,128,40ZM43.4,152.26C63.28,162.65,95.76,168,128,168c7.09,0,14.19-.26,21.17-.77C144.23,199,134,216,128,216A88.17,88.17,0,0,1,43.4,152.26ZM152.26,212.6c6.29-12,10.73-28.67,13.26-47.08,18.41-2.53,35-7,47.08-13.26A88.4,88.4,0,0,1,152.26,212.6Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z\"/>";

export const Sphere = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: SphereProps) => {
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
