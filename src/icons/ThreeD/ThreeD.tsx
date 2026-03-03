import { SVGProps } from "react";

export type ThreeDVariant = "duotone" | "fill" | "light";

export interface ThreeDProps extends SVGProps<SVGSVGElement> {
  variant?: ThreeDVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M184,128a32,32,0,0,1-32,32h-8V96h8A32,32,0,0,1,184,128Zm48-72V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM112,144a32,32,0,0,0-18.31-28.92L110.4,92.8A8,8,0,0,0,104,80H64a8,8,0,0,0,0,16H88L73.6,115.2A8,8,0,0,0,80,128a16,16,0,1,1-10.66,27.93,8,8,0,1,0-10.68,11.92A32,32,0,0,0,112,144Zm88-16a48.05,48.05,0,0,0-48-48H136a8,8,0,0,0-8,8v80a8,8,0,0,0,8,8h16A48.05,48.05,0,0,0,200,128Z\"/>";
const LIGHT_INNER     = "<path d=\"M98,148a22,22,0,0,0-22-22,6,6,0,0,1-4.92-9.44L92.48,86H56a6,6,0,0,1,0-12h48a6,6,0,0,1,4.92,9.44L86.39,115.62a34,34,0,1,1-34.68,56.17,6,6,0,0,1,8.58-8.39A22,22,0,0,0,98,148Zm62-74a54,54,0,0,1,0,108H136a6,6,0,0,1-6-6V80a6,6,0,0,1,6-6Zm0,12H142v84h18a42,42,0,0,0,0-84ZM32,54H224a6,6,0,0,0,0-12H32a6,6,0,0,0,0,12ZM224,202H32a6,6,0,0,0,0,12H224a6,6,0,0,0,0-12Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M96,148a20,20,0,0,0-20-20,8,8,0,0,1-6.55-12.59L88.63,88H56a8,8,0,0,1,0-16h48a8,8,0,0,1,6.55,12.59l-21,30A36,36,0,0,1,76,184a35.71,35.71,0,0,1-25.71-10.81A8,8,0,1,1,61.71,162,20,20,0,0,0,96,148Zm64-76a56,56,0,0,1,0,112H136a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8Zm0,16H144v80h16a40,40,0,0,0,0-80ZM32,56H224a8,8,0,0,0,0-16H32a8,8,0,0,0,0,16ZM224,200H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,48V208H32V48Z\"/>";

export const ThreeD = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ThreeDProps) => {
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
