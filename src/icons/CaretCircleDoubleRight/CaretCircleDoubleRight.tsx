import { SVGProps } from "react";

export type CaretCircleDoubleRightVariant = "duotone" | "fill" | "light";

export interface CaretCircleDoubleRightProps extends SVGProps<SVGSVGElement> {
  variant?: CaretCircleDoubleRightVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M201.57,54.42a104,104,0,1,0,0,147.15A104.17,104.17,0,0,0,201.57,54.42Zm-75.91,79.24-32,32a8,8,0,1,1-11.32-11.32L108.68,128,82.32,101.64A8,8,0,1,1,93.64,90.32l32,32A8,8,0,0,1,125.66,133.66Zm56,0-32,32a8,8,0,0,1-11.32-11.32L164.71,128l-26.36-26.36a8,8,0,1,1,11.32-11.32l32,32A8,8,0,0,1,181.68,133.66Z\"/>";
const LIGHT_INNER     = "<path d=\"M200.12,55.87A102,102,0,0,0,55.87,200.12,102,102,0,1,0,200.12,55.87Zm-8.48,135.77a90,90,0,1,1,0-127.28A90.1,90.1,0,0,1,191.64,191.64Zm-67.4-67.88a6,6,0,0,1,0,8.48l-32,32a6,6,0,0,1-8.48-8.48L111.51,128,83.76,100.24a6,6,0,0,1,8.48-8.48Zm56,0a6,6,0,0,1,0,8.48l-32,32a6,6,0,0,1-8.48-8.48L167.51,128l-27.75-27.76a6,6,0,0,1,8.48-8.48Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM190.23,190.23a88,88,0,1,1,0-124.46A88.11,88.11,0,0,1,190.23,190.23Zm-64.57-67.89a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L108.69,128,82.34,101.66A8,8,0,0,1,93.66,90.34Zm56,0a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L164.69,128l-26.35-26.34a8,8,0,0,1,11.32-11.32Z\"/>";
const SECONDARY_PATHS = "<path d=\"M195.88,195.88a96,96,0,1,1,0-135.76A96,96,0,0,1,195.88,195.88Z\"/>";

export const CaretCircleDoubleRight = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CaretCircleDoubleRightProps) => {
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
