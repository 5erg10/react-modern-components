import { SVGProps } from "react";

export type ExcludeVariant = "duotone" | "fill" | "light";

export interface ExcludeProps extends SVGProps<SVGSVGElement> {
  variant?: ExcludeVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M240,160A80,80,0,0,1,81.36,174.64a80,80,0,0,0,93.28-93.28A80,80,0,0,1,240,160ZM160,80a80.29,80.29,0,0,1,14.64,1.36,80,80,0,1,0-93.28,93.28A80,80,0,0,1,160,80Z\"/>";
const LIGHT_INNER     = "<path d=\"M172.91,83.09a78,78,0,1,0-89.82,89.82,78,78,0,1,0,89.82-89.82ZM226,160a65.31,65.31,0,0,1-.62,8.9l-53.76-53.77A77.84,77.84,0,0,0,174,96c0-.17,0-.33,0-.49A66.1,66.1,0,0,1,226,160ZM45.31,53.79l55.5,55.5a77.86,77.86,0,0,0-12,19L34,73.48A66,66,0,0,1,45.31,53.79ZM73.48,34l54.8,54.81a77.86,77.86,0,0,0-19,12l-55.5-55.5A66,66,0,0,1,73.48,34ZM94,160a66.08,66.08,0,0,1,66-66c.65,0,1.3,0,1.95,0,0,.65.05,1.3.05,2a66.08,66.08,0,0,1-66,66c-.65,0-1.3,0-2-.05C94,161.3,94,160.65,94,160Zm52.71-4.81,55.5,55.5A66,66,0,0,1,182.52,222l-54.8-54.81A77.86,77.86,0,0,0,146.71,155.19Zm8.48-8.48a77.86,77.86,0,0,0,12-19L222,182.52a66,66,0,0,1-11.35,19.69Zm5.3-64.7H160a77.84,77.84,0,0,0-19.13,2.38L87.1,30.62A65.31,65.31,0,0,1,96,30,66.1,66.1,0,0,1,160.49,82ZM30,96a65.31,65.31,0,0,1,.62-8.9l53.76,53.77A77.84,77.84,0,0,0,82,160c0,.17,0,.33,0,.49A66.1,66.1,0,0,1,30,96Zm65.51,78H96a77.84,77.84,0,0,0,19.13-2.38l53.77,53.76a65.31,65.31,0,0,1-8.9.62A66.1,66.1,0,0,1,95.51,174Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M174.63,81.37a80,80,0,1,0-93.26,93.26,80,80,0,1,0,93.26-93.26ZM32,96a64,64,0,0,1,126-16A80.08,80.08,0,0,0,80.05,158,64.11,64.11,0,0,1,32,96Zm128,0a64.07,64.07,0,0,1-64,64A64.07,64.07,0,0,1,160,96Zm0,128A64.11,64.11,0,0,1,98,176,80.08,80.08,0,0,0,176,98,64,64,0,0,1,160,224Z\"/>";
const SECONDARY_PATHS = "<path d=\"M88,160a73.37,73.37,0,0,0,.4,7.6,72,72,0,1,1,79.2-79.2A73.37,73.37,0,0,0,160,88,72,72,0,0,0,88,160Zm79.6-71.6A73.37,73.37,0,0,1,168,96a72,72,0,0,1-72,72,73.37,73.37,0,0,1-7.6-.4,72,72,0,1,0,79.2-79.2Z\"/>";

export const Exclude = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ExcludeProps) => {
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
