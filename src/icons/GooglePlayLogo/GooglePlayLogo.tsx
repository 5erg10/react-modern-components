import { SVGProps } from "react";

export type GooglePlayLogoVariant = "duotone" | "fill" | "light";

export interface GooglePlayLogoProps extends SVGProps<SVGSVGElement> {
  variant?: GooglePlayLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M239.82,114.18,72,18.16a16,16,0,0,0-16.12,0A15.68,15.68,0,0,0,48,31.87V224.13a15.68,15.68,0,0,0,7.92,13.67,16,16,0,0,0,16.12,0l167.78-96a15.76,15.76,0,0,0,0-27.64ZM160,139.31l18.92,18.92-88.5,50.66ZM90.4,47.1l88.53,50.67L160,116.69ZM193.31,150l-22-22,22-22,38.43,22Z\"/>";
const LIGHT_INNER     = "<path d=\"M238.84,115.93,71,19.89a14,14,0,0,0-14.12,0A13.68,13.68,0,0,0,50,31.87V224.13a13.68,13.68,0,0,0,6.92,11.94,14,14,0,0,0,14.12,0l167.8-96a13.75,13.75,0,0,0,0-24.14ZM62,217.5V38.5L151.51,128Zm98-81,22.19,22.19L78.4,218.07ZM78.4,37.93l103.79,59.4L160,119.52ZM233,129.58l-.1.06L193,152.49,168.49,128,193,103.51l39.94,22.85.1.06a1.76,1.76,0,0,1,0,3.16Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M239.82,114.18,72,18.16a16,16,0,0,0-16.12,0A15.68,15.68,0,0,0,48,31.87V224.13a15.68,15.68,0,0,0,7.92,13.67,16,16,0,0,0,16.12,0l167.78-96a15.76,15.76,0,0,0,0-27.64ZM64,212.67V43.33L148.69,128Zm96-73.36,18.92,18.92-88.5,50.66ZM90.4,47.1l88.53,50.67L160,116.69ZM193.31,150l-22-22,22-22,38.43,22Z\"/>";
const SECONDARY_PATHS = "<path d=\"M160,128,58.32,230A7.7,7.7,0,0,1,56,224.45V31.55A7.7,7.7,0,0,1,58.32,26Z\"/>";

export const GooglePlayLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: GooglePlayLogoProps) => {
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
