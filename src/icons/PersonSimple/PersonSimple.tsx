import { SVGProps } from "react";

export type PersonSimpleVariant = "duotone" | "fill" | "light";

export interface PersonSimpleProps extends SVGProps<SVGSVGElement> {
  variant?: PersonSimpleVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M95.89,48a32,32,0,1,1,32,32A32,32,0,0,1,95.89,48Zm132.23,73.14C226.4,120.11,185.55,96,128,96S29.6,120.11,27.88,121.14a8,8,0,0,0,8.24,13.72c.36-.22,34.91-20.6,83.88-22.68V149L58,218.69a8,8,0,1,0,12,10.62L128,164l58,65.27a8,8,0,0,0,12-10.62L136,149V112.19c48.77,2.08,83.53,22.46,83.88,22.67a8,8,0,1,0,8.24-13.72Z\"/>";
const LIGHT_INNER     = "<path d=\"M128,78A30,30,0,1,0,98,48,30,30,0,0,0,128,78Zm0-48a18,18,0,1,1-18,18A18,18,0,0,1,128,30ZM229.14,131.09a6,6,0,0,1-8.23,2c-.37-.21-36.49-21.43-86.91-23v39.61L196.48,220a6,6,0,0,1-9,8L128,161,68.48,228a6,6,0,0,1-9-8L122,149.72V110.11c-50.42,1.6-86.55,22.82-86.92,23a6,6,0,0,1-6.17-10.29C30.6,121.84,71,98,128,98s97.39,23.84,99.09,24.86A6,6,0,0,1,229.14,131.09Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M128,80A32,32,0,1,0,96,48,32,32,0,0,0,128,80Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,128,32ZM230.86,132.12a8,8,0,0,1-11,2.74c-.35-.21-35.11-20.59-83.88-22.67V149l62,69.73a8,8,0,1,1-12,10.62L128,164,70,229.31a8,8,0,1,1-12-10.62L120,149V112.18c-49,2.08-83.52,22.46-83.88,22.68a8,8,0,0,1-8.24-13.72C29.6,120.11,70.45,96,128,96s98.4,24.11,100.12,25.14A8,8,0,0,1,230.86,132.12Z\"/>";
const SECONDARY_PATHS = "<path d=\"M152,48a24,24,0,1,1-24-24A24,24,0,0,1,152,48Z\"/>";

export const PersonSimple = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PersonSimpleProps) => {
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
