import { SVGProps } from "react";

export type FlagVariant = "duotone" | "fill" | "light";

export interface FlagProps extends SVGProps<SVGSVGElement> {
  variant?: FlagVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M232,56V176a8,8,0,0,1-2.76,6c-15.28,13.23-29.89,18-43.82,18-18.91,0-36.57-8.74-53-16.85C105.87,170,82.79,158.61,56,179.77V224a8,8,0,0,1-16,0V56a8,8,0,0,1,2.77-6h0c36-31.18,68.31-15.21,96.79-1.12C167,62.46,190.79,74.2,218.76,50A8,8,0,0,1,232,56Z\"/>";
const LIGHT_INNER     = "<path d=\"M44.08,51.37A6,6,0,0,0,42,55.9V224a6,6,0,0,0,12,0V178.78c28.08-22.79,51.88-11,79.34,2.57,16.12,8,33.49,16.58,52,16.58,13.57,0,27.76-4.6,42.56-17.42A6,6,0,0,0,230,176V55.9a6,6,0,0,0-9.93-4.54c-29,25.12-53.28,13.09-81.41-.84C110.77,36.71,79,21.16,44.08,51.37ZM218,173.17c-28.08,22.8-51.88,11-79.34-2.58C113.4,158.08,85.09,144.07,54,164V58.72c28.08-22.8,51.88-11,79.34,2.56C158.6,73.79,186.91,87.8,218,67.91Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M42.76,50A8,8,0,0,0,40,56V224a8,8,0,0,0,16,0V179.77c26.79-21.16,49.87-9.75,76.45,3.41,16.4,8.11,34.06,16.85,53,16.85,13.93,0,28.54-4.75,43.82-18a8,8,0,0,0,2.76-6V56A8,8,0,0,0,218.76,50c-28,24.23-51.72,12.49-79.21-1.12C111.07,34.76,78.78,18.79,42.76,50ZM216,172.25c-26.79,21.16-49.87,9.74-76.45-3.41-25-12.35-52.81-26.13-83.55-8.4V59.79c26.79-21.16,49.87-9.75,76.45,3.4,25,12.35,52.82,26.13,83.55,8.4Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,56V176c-64,55.43-112-55.43-176,0V56C112,.57,160,111.43,224,56Z\"/>";

export const Flag = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: FlagProps) => {
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
