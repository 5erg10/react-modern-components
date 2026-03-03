import { SVGProps } from "react";

export type LessThanOrEqualVariant = "duotone" | "fill" | "light";

export interface LessThanOrEqualProps extends SVGProps<SVGSVGElement> {
  variant?: LessThanOrEqualVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM176,184H72a8,8,0,0,1,0-16H176a8,8,0,0,1,0,16Zm2.35-55.65a8,8,0,0,1-4.7,15.3l-104-32a8,8,0,0,1,0-15.3l104-32a8,8,0,0,1,4.7,15.3L99.2,104Z\"/>";
const LIGHT_INNER     = "<path d=\"M42,104a6,6,0,0,1,3.93-5.63l152-56a6,6,0,1,1,4.15,11.26L65.36,104l136.71,50.37A6,6,0,0,1,200,166a6.09,6.09,0,0,1-2.08-.37l-152-56A6,6,0,0,1,42,104Zm158,90H48a6,6,0,0,0,0,12H200a6,6,0,0,0,0-12Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M40,104a8,8,0,0,1,5.23-7.5l152-56a8,8,0,0,1,5.53,15L71.14,104l131.62,48.49A8,8,0,0,1,200,168a8.13,8.13,0,0,1-2.77-.49l-152-56A8,8,0,0,1,40,104Zm160,88H48a8,8,0,0,0,0,16H200a8,8,0,0,0,0-16Z\"/>";
const SECONDARY_PATHS = "<path d=\"M200,48V160L48,104Z\"/>";

export const LessThanOrEqual = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: LessThanOrEqualProps) => {
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
