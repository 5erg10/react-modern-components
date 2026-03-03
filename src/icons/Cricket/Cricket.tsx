import { SVGProps } from "react";

export type CricketVariant = "duotone" | "fill" | "light";

export interface CricketProps extends SVGProps<SVGSVGElement> {
  variant?: CricketVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M243.31,81.37,190.63,28.69a16,16,0,0,0-22.63,0L60.69,136a16,16,0,0,0,0,22.63l20.68,20.68-47,47a8,8,0,0,0,11.32,11.32l47-47,20.68,20.68a16,16,0,0,0,22.63,0L243.31,104a16,16,0,0,0,0-22.63ZM124.69,200,104,179.31l29.66-29.65a8,8,0,0,0-11.32-11.32L92.69,168,72,147.31,107.31,112H160v52.69ZM32,60A28,28,0,1,1,60,88,28,28,0,0,1,32,60Z\"/>";
const LIGHT_INNER     = "<path d=\"M241.9,82.79,189.21,30.1a14,14,0,0,0-19.79,0L62.1,137.42a14,14,0,0,0,0,19.79l22.1,22.1L35.76,227.76a6,6,0,1,0,8.48,8.48L92.69,187.8l22.1,22.1a14,14,0,0,0,19.79,0L241.9,102.58a14,14,0,0,0,0-19.79ZM126.1,201.42a2,2,0,0,1-2.83,0l-22.1-22.11,31.07-31.07a6,6,0,0,0-8.48-8.48L92.69,170.83l-22.11-22.1a2,2,0,0,1,0-2.83l35.9-35.9H162v55.52ZM233.42,94.1,174,153.52V104a6,6,0,0,0-6-6H118.48L177.9,38.58a2,2,0,0,1,2.83,0l52.69,52.69A2,2,0,0,1,233.42,94.1ZM60,86A26,26,0,1,0,34,60,26,26,0,0,0,60,86Zm0-40A14,14,0,1,1,46,60,14,14,0,0,1,60,46Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M243.31,81.37,190.63,28.69a16,16,0,0,0-22.63,0L60.69,136a16,16,0,0,0,0,22.63l20.68,20.68-47,47a8,8,0,0,0,11.32,11.32l47-47,20.68,20.68a16,16,0,0,0,22.63,0L243.31,104a16,16,0,0,0,0-22.63ZM124.69,200,104,179.31l29.66-29.65a8,8,0,0,0-11.32-11.32L92.69,168,72,147.31,107.31,112H160v52.69ZM232,92.69l-56,56V104a8,8,0,0,0-8-8H123.31l56-56L232,92.68ZM60,88A28,28,0,1,0,32,60,28,28,0,0,0,60,88Zm0-40A12,12,0,1,1,48,60,12,12,0,0,1,60,48Z\"/>";
const SECONDARY_PATHS = "<path d=\"M168,104v64l-37.66,37.66a8,8,0,0,1-11.31,0L66.34,153a8,8,0,0,1,0-11.31L104,104ZM80,60A20,20,0,1,0,60,80,20,20,0,0,0,80,60Z\"/>";

export const Cricket = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CricketProps) => {
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
