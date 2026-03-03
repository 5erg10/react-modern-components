import { SVGProps } from "react";

export type CellSignalXVariant = "duotone" | "fill" | "light";

export interface CellSignalXProps extends SVGProps<SVGSVGElement> {
  variant?: CellSignalXVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M213.66,194.34a8,8,0,0,1-11.32,11.32L184,187.31l-18.34,18.35a8,8,0,0,1-11.32-11.32L172.69,176l-18.35-18.34a8,8,0,0,1,11.32-11.32L184,164.69l18.34-18.35a8,8,0,0,1,11.32,11.32L195.31,176ZM157.41,120.1a32,32,0,0,1,23.92,8.05,4,4,0,0,0,5.34,0,31.88,31.88,0,0,1,17.77-8,4,4,0,0,0,3.56-4V40.46a16.41,16.41,0,0,0-9.18-14.93,16,16,0,0,0-18.14,3.16l-160,160a16,16,0,0,0-3.17,18.13A16.4,16.4,0,0,0,32.46,216h93.6a4,4,0,0,0,3.78-5.3,32,32,0,0,1,6.31-32,4,4,0,0,0,0-5.34,32,32,0,0,1,21.26-53.23Z\"/>";
const LIGHT_INNER     = "<path d=\"M212.24,195.76a6,6,0,1,1-8.48,8.48L184,184.48l-19.76,19.76a6,6,0,0,1-8.48-8.48L175.52,176l-19.76-19.76a6,6,0,0,1,8.48-8.48L184,167.52l19.76-19.76a6,6,0,0,1,8.48,8.48L192.48,176ZM160,118a6,6,0,0,0,6-6V72a6,6,0,0,0-12,0v40A6,6,0,0,0,160,118Zm40,0a6,6,0,0,0,6-6V32a6,6,0,0,0-12,0v80A6,6,0,0,0,200,118Zm-80-12a6,6,0,0,0-6,6v88a6,6,0,0,0,12,0V112A6,6,0,0,0,120,106ZM80,146a6,6,0,0,0-6,6v48a6,6,0,0,0,12,0V152A6,6,0,0,0,80,146ZM40,186a6,6,0,0,0-6,6v8a6,6,0,0,0,12,0v-8A6,6,0,0,0,40,186Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M213.66,194.34a8,8,0,0,1-11.32,11.32L184,187.31l-18.35,18.35a8,8,0,0,1-11.31-11.32L172.68,176l-18.34-18.35a8,8,0,0,1,11.31-11.31L184,164.68l18.34-18.34a8,8,0,0,1,11.32,11.31L195.31,176ZM120,200H32L192,40v72a8,8,0,0,0,16,0V40a16,16,0,0,0-27.31-11.32l-160,160A16,16,0,0,0,32,216h88a8,8,0,0,0,0-16Z\"/>";
const SECONDARY_PATHS = "<path d=\"M200,40V160l-45.66,45.66a8,8,0,0,1-5.65,2.34H32a8,8,0,0,1-5.66-13.66l160-160A8,8,0,0,1,200,40Z\"/>";

export const CellSignalX = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CellSignalXProps) => {
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
