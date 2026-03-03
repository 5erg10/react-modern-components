import { SVGProps } from "react";

export type IntersectVariant = "duotone" | "fill" | "light";

export interface IntersectProps extends SVGProps<SVGSVGElement> {
  variant?: IntersectVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M174.63,81.37a80,80,0,1,0-93.26,93.26,80,80,0,1,0,93.26-93.26ZM32,96a64,64,0,0,1,126-16A80.08,80.08,0,0,0,80.05,158,64.11,64.11,0,0,1,32,96ZM160,224A64.11,64.11,0,0,1,98,176,80.08,80.08,0,0,0,176,98,64,64,0,0,1,160,224Z\"/>";
const LIGHT_INNER     = "<path d=\"M172.91,83.09a78,78,0,1,0-89.82,89.82,78,78,0,1,0,89.82-89.82ZM30,96A66,66,0,0,1,160.49,82H160a78.09,78.09,0,0,0-78,78c0,.17,0,.33,0,.49A66.1,66.1,0,0,1,30,96Zm64,64a65.62,65.62,0,0,1,6-27.49L123.49,156A65.62,65.62,0,0,1,96,162c-.65,0-1.3,0-2-.05C94,161.3,94,160.65,94,160Zm40.23-10.25-28-28a66.47,66.47,0,0,1,15.52-15.52l28,28A66.47,66.47,0,0,1,134.23,149.75ZM162,96a65.62,65.62,0,0,1-6,27.49L132.51,100A65.62,65.62,0,0,1,160,94c.65,0,1.3,0,1.95,0C162,94.7,162,95.35,162,96Zm-2,130a66.1,66.1,0,0,1-64.49-52H96a78.09,78.09,0,0,0,78-78c0-.17,0-.33,0-.49A66,66,0,0,1,160,226Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M174.63,81.37a80,80,0,1,0-93.26,93.26,80,80,0,1,0,93.26-93.26ZM32,96a64,64,0,0,1,126-16A80.08,80.08,0,0,0,80.05,158,64.11,64.11,0,0,1,32,96Zm128,0a64.07,64.07,0,0,1-64,64A64.07,64.07,0,0,1,160,96Zm0,128A64.11,64.11,0,0,1,98,176,80.08,80.08,0,0,0,176,98,64,64,0,0,1,160,224Z\"/>";
const SECONDARY_PATHS = "<path d=\"M168,96a72,72,0,0,1-72,72,73.37,73.37,0,0,1-7.6-.4A73.37,73.37,0,0,1,88,160a72,72,0,0,1,72-72,73.37,73.37,0,0,1,7.6.4A73.37,73.37,0,0,1,168,96Z\"/>";

export const Intersect = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: IntersectProps) => {
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
