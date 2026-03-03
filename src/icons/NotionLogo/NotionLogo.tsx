import { SVGProps } from "react";

export type NotionLogoVariant = "duotone" | "fill" | "light";

export interface NotionLogoProps extends SVGProps<SVGSVGElement> {
  variant?: NotionLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M224,48a8,8,0,0,1-8,8H200V208a8,8,0,0,1-8,8H152a8,8,0,0,1-7-4.14L72,79.15V200H88a8,8,0,0,1,0,16H40a8,8,0,0,1,0-16H56V56H40a8,8,0,0,1,0-16h64a8,8,0,0,1,7,4.14l73,132.71V56H168a8,8,0,0,1,0-16h48A8,8,0,0,1,224,48Z\"/>";
const LIGHT_INNER     = "<path d=\"M216,42H168a6,6,0,0,0,0,12h18V184.64L109.26,45.11A6,6,0,0,0,104,42H40a6,6,0,0,0,0,12H58V202H40a6,6,0,0,0,0,12H88a6,6,0,0,0,0-12H70V71.36l76.74,139.53A6,6,0,0,0,152,214h40a6,6,0,0,0,6-6V54h18a6,6,0,0,0,0-12ZM74.15,54h26.3l81.4,148h-26.3Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M216,40H168a8,8,0,0,0,0,16h16V176.85L111,44.14A8,8,0,0,0,104,40H40a8,8,0,0,0,0,16H56V200H40a8,8,0,0,0,0,16H88a8,8,0,0,0,0-16H72V79.15l73,132.71a8,8,0,0,0,7,4.14h40a8,8,0,0,0,8-8V56h16a8,8,0,0,0,0-16ZM156.73,200,77.53,56H99.27l79.2,144Z\"/>";
const SECONDARY_PATHS = "<path d=\"M192,208H152L64,48h40Z\"/>";

export const NotionLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: NotionLogoProps) => {
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
