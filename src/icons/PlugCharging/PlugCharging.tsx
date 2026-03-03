import { SVGProps } from "react";

export type PlugChargingVariant = "duotone" | "fill" | "light";

export interface PlugChargingProps extends SVGProps<SVGSVGElement> {
  variant?: PlugChargingVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M224,56H176V16a8,8,0,0,0-16,0V56H96V16a8,8,0,0,0-8-8c-3.21,0-8,2.27-8,8.54V56H32.55C26.28,56,24,60.78,24,64a8,8,0,0,0,8,8H48v88a40,40,0,0,0,40,40h32v40a8,8,0,0,0,16,0V200h32a40,40,0,0,0,40-40V72h16a8,8,0,0,0,0-16Zm-72.51,74.81-12,32a8,8,0,0,1-15-5.62l8-21.19H112a8,8,0,0,1-7.49-10.81l12-32a8,8,0,1,1,15,5.62l-8,21.19H144a8,8,0,0,1,7.49,10.81Z\"/>";
const LIGHT_INNER     = "<path d=\"M224,58H174V16a6,6,0,0,0-12,0V58H94V16a6,6,0,0,0-12,0V58H32.55A6.1,6.1,0,0,0,26,64a6,6,0,0,0,6,6H50v90a38,38,0,0,0,38,38h34v42a6,6,0,0,0,12,0V198h34a38,38,0,0,0,38-38V70h18a6,6,0,0,0,0-12ZM194,160a26,26,0,0,1-26,26H88a26,26,0,0,1-26-26V70H194Zm-86.93-28.58a6,6,0,0,1-.69-5.53l12-32a6,6,0,1,1,11.24,4.22l-9,23.89H144a6,6,0,0,1,5.62,8.11l-12,32a6,6,0,0,1-11.24-4.22l9-23.89H112A6,6,0,0,1,107.07,131.42Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M224,56H176V16a8,8,0,0,0-16,0V56H96V16a8,8,0,0,0-16,0V56H32.55C26.28,56,24,60.78,24,64a8,8,0,0,0,8,8H48v88a40,40,0,0,0,40,40h32v40a8,8,0,0,0,16,0V200h32a40,40,0,0,0,40-40V72h16a8,8,0,0,0,0-16ZM192,160a24,24,0,0,1-24,24H88a24,24,0,0,1-24-24V72H192Zm-86.58-27.44a8,8,0,0,1-.91-7.37l12-32a8,8,0,1,1,15,5.62l-8,21.19H144a8,8,0,0,1,7.49,10.81l-12,32a8,8,0,0,1-15-5.62l8-21.19H112A8,8,0,0,1,105.42,132.56Z\"/>";
const SECONDARY_PATHS = "<path d=\"M200,64v96a32,32,0,0,1-32,32H88a32,32,0,0,1-32-32V64Z\"/>";

export const PlugCharging = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PlugChargingProps) => {
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
