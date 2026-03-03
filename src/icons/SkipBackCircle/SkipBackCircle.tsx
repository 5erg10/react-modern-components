import { SVGProps } from "react";

export type SkipBackCircleVariant = "duotone" | "fill" | "light";

export interface SkipBackCircleProps extends SVGProps<SVGSVGElement> {
  variant?: SkipBackCircleVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm40,144a8,8,0,0,1-12.65,6.51L104,137.83V168a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0v30.17l51.35-36.68A8,8,0,0,1,168,88Z\"/>";
const LIGHT_INNER     = "<path d=\"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218ZM162.91,82.75a6,6,0,0,0-6.09.16L102,117.17V88a6,6,0,0,0-12,0v80a6,6,0,0,0,12,0V138.83l54.82,34.26A6,6,0,0,0,166,168V88A6,6,0,0,0,162.91,82.75ZM154,157.17,107.32,128,154,98.83Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM163.88,81a8,8,0,0,0-8.12.22L104,113.57V88a8,8,0,0,0-16,0v80a8,8,0,0,0,16,0V142.43l51.76,32.35A8,8,0,0,0,168,168V88A8,8,0,0,0,163.88,81ZM152,153.57,111.09,128,152,102.43Z\"/>";
const SECONDARY_PATHS = "<path d=\"M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32Zm32,136L96,128l64-40Z\"/>";

export const SkipBackCircle = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: SkipBackCircleProps) => {
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
