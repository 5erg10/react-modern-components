import { SVGProps } from "react";

export type VectorThreeVariant = "duotone" | "fill" | "light";

export interface VectorThreeProps extends SVGProps<SVGSVGElement> {
  variant?: VectorThreeVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M237.66,141.66l-32,32A8,8,0,0,1,192,168V144H123.31l-40,40,18.35,18.34A8,8,0,0,1,96,216H48a8,8,0,0,1-8-8V160a8,8,0,0,1,13.66-5.66L72,172.69l40-40V64H88a8,8,0,0,1-5.66-13.66l32-32a8,8,0,0,1,11.32,0l32,32A8,8,0,0,1,152,64H128v64h64V104a8,8,0,0,1,13.66-5.66l32,32A8,8,0,0,1,237.66,141.66Z\"/>";
const LIGHT_INNER     = "<path d=\"M236.24,140.24l-32,32a6,6,0,0,1-8.48-8.48L217.51,142h-95l-60,60H96a6,6,0,0,1,0,12H48a6,6,0,0,1-6-6V160a6,6,0,0,1,12,0v33.51l60-60v-95L92.24,60.24a6,6,0,0,1-8.48-8.48l32-32a6,6,0,0,1,8.48,0l32,32a6,6,0,1,1-8.48,8.48L126,38.49V130h91.51l-21.75-21.76a6,6,0,0,1,8.48-8.48l32,32A6,6,0,0,1,236.24,140.24Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M237.66,141.66l-32,32a8,8,0,0,1-11.32-11.32L212.69,144H123.31l-56,56H96a8,8,0,0,1,0,16H48a8,8,0,0,1-8-8V160a8,8,0,0,1,16,0v28.69l56-56V43.31L93.66,61.66A8,8,0,0,1,82.34,50.34l32-32a8,8,0,0,1,11.32,0l32,32a8,8,0,0,1-11.32,11.32L128,43.31V128h84.69l-18.35-18.34a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,237.66,141.66Z\"/>";
const SECONDARY_PATHS = "<path d=\"M232,40v96l-67.31,67.31A16,16,0,0,1,153.37,208H48V102.63a16,16,0,0,1,4.69-11.32L120,24h96A16,16,0,0,1,232,40Z\"/>";

export const VectorThree = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: VectorThreeProps) => {
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
