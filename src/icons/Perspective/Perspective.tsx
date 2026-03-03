import { SVGProps } from "react";

export type PerspectiveVariant = "duotone" | "fill" | "light";

export interface PerspectiveProps extends SVGProps<SVGSVGElement> {
  variant?: PerspectiveVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M248,136a8,8,0,0,1-8,8H224v64a16,16,0,0,1-16,16,16.47,16.47,0,0,1-2.87-.26l-160-29.09A16,16,0,0,1,32,178.91V144H16a8,8,0,0,1,0-16H240A8,8,0,0,1,248,136ZM36,112H220a4,4,0,0,0,4-4V48.42a16.48,16.48,0,0,0-4.07-11.08,16,16,0,0,0-14.79-5.08l-160,29.09A16,16,0,0,0,32,77.09V108A4,4,0,0,0,36,112Z\"/>";
const LIGHT_INNER     = "<path d=\"M240,122H222V48a14,14,0,0,0-16.5-13.77L45.5,63.32A14,14,0,0,0,34,77.09V122H16a6,6,0,0,0,0,12H34v44.91a14,14,0,0,0,11.5,13.77l160,29.09A14.2,14.2,0,0,0,208,222a14,14,0,0,0,14-14V134h18a6,6,0,0,0,0-12ZM46,77.09a2,2,0,0,1,1.64-2l160-29.1.37,0a2,2,0,0,1,2,2v74H46ZM210,208a2,2,0,0,1-.72,1.53,2,2,0,0,1-1.64.44l-160-29.1a2,2,0,0,1-1.64-2V134H210Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M240,120H224V48a16,16,0,0,0-18.86-15.74l-160,29.09A16,16,0,0,0,32,77.09V120H16a8,8,0,0,0,0,16H32v42.91a16,16,0,0,0,13.14,15.74l160,29.09A16.47,16.47,0,0,0,208,224a16,16,0,0,0,16-16V136h16a8,8,0,0,0,0-16ZM48,77.09,208,48v72H48ZM208,208,48,178.91V136H208Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,48V208a8,8,0,0,1-9.43,7.87l-160-29.09A8,8,0,0,1,40,178.91V77.09a8,8,0,0,1,6.57-7.87l160-29.09A8,8,0,0,1,216,48Z\"/>";

export const Perspective = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PerspectiveProps) => {
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
