import { SVGProps } from "react";

export type ArrowsDownUpVariant = "duotone" | "fill" | "light";

export interface ArrowsDownUpProps extends SVGProps<SVGSVGElement> {
  variant?: ArrowsDownUpVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M119.39,172.94a8,8,0,0,1-1.73,8.72l-32,32a8,8,0,0,1-11.32,0l-32-32A8,8,0,0,1,48,168H72V48a8,8,0,0,1,16,0V168h24A8,8,0,0,1,119.39,172.94Zm94.27-98.6-32-32a8,8,0,0,0-11.32,0l-32,32A8,8,0,0,0,144,88h24V208a8,8,0,0,0,16,0V88h24a8,8,0,0,0,5.66-13.66Z\"/>";
const LIGHT_INNER     = "<path d=\"M116.24,171.76a6,6,0,0,1,0,8.48l-32,32a6,6,0,0,1-8.48,0l-32-32a6,6,0,0,1,8.48-8.48L74,193.51V48a6,6,0,0,1,12,0V193.51l21.76-21.75A6,6,0,0,1,116.24,171.76Zm96-96-32-32a6,6,0,0,0-8.48,0l-32,32a6,6,0,0,0,8.48,8.48L170,62.49V208a6,6,0,0,0,12,0V62.49l21.76,21.75a6,6,0,0,0,8.48-8.48Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M117.66,170.34a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L72,188.69V48a8,8,0,0,1,16,0V188.69l18.34-18.35A8,8,0,0,1,117.66,170.34Zm96-96-32-32a8,8,0,0,0-11.32,0l-32,32a8,8,0,0,0,11.32,11.32L168,67.31V208a8,8,0,0,0,16,0V67.31l18.34,18.35a8,8,0,0,0,11.32-11.32Z\"/>";
const SECONDARY_PATHS = "<path d=\"M176,48V208H80V48Z\"/>";

export const ArrowsDownUp = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ArrowsDownUpProps) => {
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
