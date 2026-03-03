import { SVGProps } from "react";

export type SubtractVariant = "duotone" | "fill" | "light";

export interface SubtractProps extends SVGProps<SVGSVGElement> {
  variant?: SubtractVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M174.63,81.35a80,80,0,1,0-93.28,93.28,80,80,0,1,0,93.28-93.28ZM96,160a64,64,0,1,1,64-64A64.07,64.07,0,0,1,96,160Z\"/>";
const LIGHT_INNER     = "<path d=\"M172.91,83.08a78,78,0,1,0-89.83,89.83,78,78,0,1,0,89.83-89.83ZM226,160a65.31,65.31,0,0,1-.62,8.9l-53.76-53.77A77.84,77.84,0,0,0,174,96c0-.17,0-.34,0-.51A65.8,65.8,0,0,1,226,160Zm-79.29-4.81,55.5,55.5A66,66,0,0,1,182.52,222l-54.8-54.81A77.86,77.86,0,0,0,146.71,155.19Zm8.48-8.48a77.86,77.86,0,0,0,12-19L222,182.52a66,66,0,0,1-11.35,19.69ZM30,96a66,66,0,1,1,66,66A66.08,66.08,0,0,1,30,96Zm65.49,78H96a77.84,77.84,0,0,0,19.13-2.38l53.77,53.76A65.87,65.87,0,0,1,95.49,174Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M174.63,81.35a80,80,0,1,0-93.28,93.28,80,80,0,1,0,93.28-93.28ZM32,96a64,64,0,1,1,64,64A64.07,64.07,0,0,1,32,96ZM160,224A63.81,63.81,0,0,1,98,176,80.07,80.07,0,0,0,176,98,64,64,0,0,1,160,224Z\"/>";
const SECONDARY_PATHS = "<path d=\"M232,160a72,72,0,0,1-143.6,7.6h0a73.37,73.37,0,0,0,7.6.4,72,72,0,0,0,72-72,73.37,73.37,0,0,0-.4-7.6h0A72,72,0,0,1,232,160Z\"/>";

export const Subtract = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: SubtractProps) => {
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
