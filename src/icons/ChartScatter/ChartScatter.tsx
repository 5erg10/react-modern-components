import { SVGProps } from "react";

export type ChartScatterVariant = "duotone" | "fill" | "light";

export interface ChartScatterProps extends SVGProps<SVGSVGElement> {
  variant?: ChartScatterVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM188,72a12,12,0,1,1-12,12A12,12,0,0,1,188,72Zm0,56a12,12,0,1,1-12,12A12,12,0,0,1,188,128Zm-40-16a12,12,0,1,1-12,12A12,12,0,0,1,148,112ZM124,72a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm-24,56a12,12,0,1,1-12,12A12,12,0,0,1,100,128Zm100,64H56a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0V176H200a8,8,0,0,1,0,16Z\"/>";
const LIGHT_INNER     = "<path d=\"M230,208a6,6,0,0,1-6,6H32a6,6,0,0,1-6-6V48a6,6,0,0,1,12,0V202H224A6,6,0,0,1,230,208Zm-98-50a10,10,0,1,0-10-10A10,10,0,0,0,132,158Zm-24-56A10,10,0,1,0,98,92,10,10,0,0,0,108,102ZM76,174a10,10,0,1,0-10-10A10,10,0,0,0,76,174Zm96-48a10,10,0,1,0-10-10A10,10,0,0,0,172,126Zm24-40a10,10,0,1,0-10-10A10,10,0,0,0,196,86Zm-8,68a10,10,0,1,0,10,10A10,10,0,0,0,188,154Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V200H224A8,8,0,0,1,232,208ZM132,160a12,12,0,1,0-12-12A12,12,0,0,0,132,160Zm-24-56A12,12,0,1,0,96,92,12,12,0,0,0,108,104ZM76,176a12,12,0,1,0-12-12A12,12,0,0,0,76,176Zm96-48a12,12,0,1,0-12-12A12,12,0,0,0,172,128Zm24-40a12,12,0,1,0-12-12A12,12,0,0,0,196,88Zm-20,76a12,12,0,1,0,12-12A12,12,0,0,0,176,164Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,64V208H32V48H208A16,16,0,0,1,224,64Z\"/>";

export const ChartScatter = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ChartScatterProps) => {
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
