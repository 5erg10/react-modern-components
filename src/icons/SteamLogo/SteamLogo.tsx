import { SVGProps } from "react";

export type SteamLogoVariant = "duotone" | "fill" | "light";

export interface SteamLogoProps extends SVGProps<SVGSVGElement> {
  variant?: SteamLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M231.92,132.11c-2.09,54-45.83,97.72-99.81,99.81A104.06,104.06,0,0,1,25.6,109.76a4,4,0,0,1,6.77-2.08l43,43a28,28,0,0,0,42.42,34.92l61.1-49.84a36,36,0,1,0-50.71-50.65l-43,52.74L35,87.67a4,4,0,0,1-.76-4.6,104,104,0,0,1,197.7,49ZM121.58,118.55,90.77,156.33A11.83,11.83,0,0,0,88,163.19,12.19,12.19,0,0,0,99.85,176a11.84,11.84,0,0,0,7.78-2.74l0,0,37.78-30.81A36.18,36.18,0,0,1,121.58,118.55ZM175.9,110A20,20,0,1,0,158,127.9,20,20,0,0,0,175.9,110Z\"/>";
const LIGHT_INNER     = "<path d=\"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26ZM116.38,184.17l61.21-49.93a34,34,0,1,0-47.83-47.83L85.33,140.85,43,98.49a89.63,89.63,0,1,1-3.53,13.43l38.44,38.44a26,26,0,0,0,38.5,33.81Zm6.19-70a34.1,34.1,0,0,0,27.25,27.25l-24,19.58A26,26,0,0,0,103,138.18ZM156,130a22,22,0,1,1,22-22A22,22,0,0,1,156,130Zm-56,20a14,14,0,1,1-14,14A14,14,0,0,1,100,150Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM117.39,185.92l62-50.55a36,36,0,1,0-51.14-50.23l-43,52.73L45.28,98A88,88,0,1,1,40,128a89.56,89.56,0,0,1,.8-11.88l34.57,34.57a28,28,0,0,0,42,35.23Zm4.19-67.37a36.18,36.18,0,0,0,23.87,23.87l-18.26,14.89a28.11,28.11,0,0,0-20.5-20.5ZM156,128a20,20,0,1,1,20-20A20,20,0,0,1,156,128Zm-56,24a12,12,0,1,1-12,12A12,12,0,0,1,100,152Z\"/>";
const SECONDARY_PATHS = "<path d=\"M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32Zm45.81,97.61-61.09,49.82a20,20,0,0,1-28.15-28.15l49.82-61.09a28,28,0,1,1,39.42,39.42Z\"/>";

export const SteamLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: SteamLogoProps) => {
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
