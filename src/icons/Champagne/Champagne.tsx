import { SVGProps } from "react";

export type ChampagneVariant = "duotone" | "fill" | "light";

export interface ChampagneProps extends SVGProps<SVGSVGElement> {
  variant?: ChampagneVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M149.91,13.53A8,8,0,0,0,142.3,8H97.71a8,8,0,0,0-7.61,5.53,451,451,0,0,0-14.21,59.7c-7.26,44.25-4.35,75.76,8.65,93.66A40,40,0,0,0,112,183.42V232H96a8,8,0,1,0,0,16h48a8,8,0,0,0,0-16H128V183.42a39.94,39.94,0,0,0,27.46-16.53c13-17.9,15.92-49.41,8.66-93.66A451,451,0,0,0,149.91,13.53ZM93.8,64c3-15.58,6.73-29.81,9.79-40h32.83c3.06,10.19,6.77,24.42,9.8,40ZM232,52a12,12,0,1,1-12-12A12,12,0,0,1,232,52ZM184,20a12,12,0,1,1,12,12A12,12,0,0,1,184,20Zm24,80a12,12,0,1,1-12-12A12,12,0,0,1,208,100Z\"/>";
const LIGHT_INNER     = "<path d=\"M142.26,10H97.65A6,6,0,0,0,92,14.14c-1.47,4.51-35.53,110.73-5.85,151.57,6.75,9.28,16.1,14.62,27.86,15.95V234H96a6,6,0,1,0,0,12h48a6,6,0,1,0,0-12H126V181.66c11.76-1.33,21.11-6.67,27.85-15.95,29.68-40.84-4.37-147.06-5.84-151.57A6,6,0,0,0,142.26,10ZM102.08,22h35.75c2.24,7.48,7,24.29,10.75,44H91.34C95.09,46.29,99.85,29.48,102.08,22Zm42,136.66C138.55,166.29,130.66,170,120,170s-18.6-3.71-24.14-11.34C85.46,144.42,83.21,116.55,89.25,78h61.42C156.71,116.55,154.45,144.42,144.1,158.66ZM230,52a10,10,0,1,1-10-10A10,10,0,0,1,230,52ZM206,20a10,10,0,1,1-10-10A10,10,0,0,1,206,20Zm0,80a10,10,0,1,1-10-10A10,10,0,0,1,206,100Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M149.91,13.53A8,8,0,0,0,142.3,8H97.71a8,8,0,0,0-7.61,5.53,451,451,0,0,0-14.21,59.7c-7.26,44.25-4.35,75.76,8.65,93.66A40,40,0,0,0,112,183.42V232H96a8,8,0,1,0,0,16h48a8,8,0,0,0,0-16H128V183.42a39.94,39.94,0,0,0,27.46-16.53c13-17.9,15.92-49.41,8.66-93.66A451,451,0,0,0,149.91,13.53ZM103.59,24h32.83c3.06,10.19,6.77,24.42,9.8,40H93.8C96.83,48.42,100.53,34.19,103.59,24Zm38.93,133.48C137.38,164.56,130,168,120,168s-17.37-3.44-22.51-10.51C85.9,141.54,86.55,110,91,80H149C153.47,110,154.12,141.52,142.52,157.48ZM232,52a12,12,0,1,1-12-12A12,12,0,0,1,232,52ZM184,20a12,12,0,1,1,12,12A12,12,0,0,1,184,20Zm24,80a12,12,0,1,1-12-12A12,12,0,0,1,208,100Z\"/>";
const SECONDARY_PATHS = "<path d=\"M120,176c-44.7,0-43.7-57.87-35.8-104h71.6C163.7,118.13,164.7,176,120,176Z\"/>";

export const Champagne = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ChampagneProps) => {
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
