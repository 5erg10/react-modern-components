import { SVGProps } from "react";

export type FourKVariant = "duotone" | "fill" | "light";

export interface FourKProps extends SVGProps<SVGSVGElement> {
  variant?: FourKVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M79.55,136,96,113v23ZM232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM124,144a8,8,0,0,0-8-8h-4V88a8,8,0,0,0-14.51-4.65l-40,56A8,8,0,0,0,64,152H96v16a8,8,0,0,0,16,0V152h4A8,8,0,0,0,124,144Zm49.59-22.23,24.48-28.56a8,8,0,0,0-12.14-10.42L157.8,115.6s0,0,0,0L152,122.37V88a8,8,0,0,0-16,0v80a8,8,0,0,0,16,0V147l10.62-12.39,22.52,37.55a8,8,0,1,0,13.72-8.24Z\"/>";
const LIGHT_INNER     = "<path d=\"M26,48a6,6,0,0,1,6-6H224a6,6,0,0,1,0,12H32A6,6,0,0,1,26,48ZM224,202H32a6,6,0,0,0,0,12H224a6,6,0,0,0,0-12ZM144,74a6,6,0,0,0-6,6v96a6,6,0,0,0,12,0V146.25l15.42-17.62L194.82,179a6,6,0,0,0,5.19,3,5.91,5.91,0,0,0,3-.82,6,6,0,0,0,2.16-8.2L173.76,119.1,204.52,84a6,6,0,0,0-9-7.9L150,128V80A6,6,0,0,0,144,74ZM90,176V158H40a6,6,0,0,1-4.74-9.68l56-72A6,6,0,0,1,102,80v66h10a6,6,0,0,1,0,12H102v18a6,6,0,0,1-12,0Zm0-30V97.49L52.27,146Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M24,48a8,8,0,0,1,8-8H224a8,8,0,0,1,0,16H32A8,8,0,0,1,24,48ZM224,200H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM144,72a8,8,0,0,0-8,8v96a8,8,0,0,0,16,0V147l13.09-15,28,48A8,8,0,1,0,206.91,172l-30.7-52.63L206,85.27a8,8,0,1,0-12-10.54l-42,48V80A8,8,0,0,0,144,72ZM88,176V160H40a8,8,0,0,1-6.31-12.91l56-72A8,8,0,0,1,104,80v64h8a8,8,0,0,1,0,16h-8v16a8,8,0,0,1-16,0Zm0-32V103.32L56.36,144Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,48V208H32V48Z\"/>";

export const FourK = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: FourKProps) => {
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
