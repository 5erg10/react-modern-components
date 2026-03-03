import { SVGProps } from "react";

export type SmileyAngryVariant = "duotone" | "fill" | "light";

export interface SmileyAngryProps extends SVGProps<SVGSVGElement> {
  variant?: SmileyAngryVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM80,140a12,12,0,1,1,12,12A12,12,0,0,1,80,140Zm78.66,48.43a8,8,0,0,1-11.09,2.23C141.07,186.34,136,184,128,184s-13.07,2.34-19.57,6.66a8,8,0,0,1-8.86-13.32C108,171.73,116.06,168,128,168s20,3.73,28.43,9.34A8,8,0,0,1,158.66,188.43ZM164,152a12,12,0,1,1,12-12A12,12,0,0,1,164,152Zm16.44-57.34-48,32a8,8,0,0,1-8.88,0l-48-32a8,8,0,1,1,8.88-13.32L128,110.39l43.56-29a8,8,0,0,1,8.88,13.32Z\"/>";
const LIGHT_INNER     = "<path d=\"M92,150a10,10,0,1,1,10-10A10,10,0,0,1,92,150Zm72-20a10,10,0,1,0,10,10A10,10,0,0,0,164,130Zm66-2A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128ZM172.67,83,128,112.79,83.33,83a6,6,0,0,0-6.66,10l48,32a6,6,0,0,0,6.66,0l48-32a6,6,0,1,0-6.66-10Zm-17.35,96c-8.13-5.4-15.88-9-27.32-9s-19.19,3.6-27.32,9a6,6,0,0,0,6.64,10c6.67-4.43,12.19-7,20.68-7s14,2.57,20.68,7a5.94,5.94,0,0,0,3.31,1,6,6,0,0,0,3.33-11Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M92,152a12,12,0,1,1,12-12A12,12,0,0,1,92,152Zm72-24a12,12,0,1,0,12,12A12,12,0,0,0,164,128Zm68,0A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128ZM171.56,81.34,128,110.39l-43.56-29a8,8,0,1,0-8.88,13.32l48,32a8,8,0,0,0,8.88,0l48-32a8,8,0,0,0-8.88-13.32Zm-15.13,96C148,171.73,139.94,168,128,168s-20,3.73-28.43,9.34a8,8,0,0,0,8.86,13.32C114.93,186.34,120,184,128,184s13.07,2.34,19.57,6.66a8,8,0,1,0,8.86-13.32Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z\"/>";

export const SmileyAngry = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: SmileyAngryProps) => {
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
