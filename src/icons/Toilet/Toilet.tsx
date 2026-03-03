import { SVGProps } from "react";

export type ToiletVariant = "duotone" | "fill" | "light";

export interface ToiletProps extends SVGProps<SVGSVGElement> {
  variant?: ToiletVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M60,88H196a4,4,0,0,0,4-4V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V84A4,4,0,0,0,60,88ZM88,48h15.73A8.18,8.18,0,0,1,112,55.47,8,8,0,0,1,104,64H88.27A8.18,8.18,0,0,1,80,56.53,8,8,0,0,1,88,48Zm136,64.06a8,8,0,0,0-8-8.06H40a8,8,0,0,0-8,8.06,96.1,96.1,0,0,0,51.68,85.08l-3.47,24.27a16.43,16.43,0,0,0,1.63,10A16,16,0,0,0,96,240h63.66a16.52,16.52,0,0,0,9.72-3,16,16,0,0,0,6.46-15.23l-3.52-24.6A96.1,96.1,0,0,0,224,112.06ZM96,224l2.93-20.5a96.15,96.15,0,0,0,58.14,0L160,224Z\"/>";
const LIGHT_INNER     = "<path d=\"M118,64a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h16A6,6,0,0,1,118,64Zm52.14,132,3.72,26A14,14,0,0,1,160,238H96a14,14,0,0,1-13.86-16l3.72-26A94.1,94.1,0,0,1,34,112a6,6,0,0,1,6-6H58V40A14,14,0,0,1,72,26H184a14,14,0,0,1,14,14v66h18a6,6,0,0,1,6,6A94.1,94.1,0,0,1,170.14,196ZM70,106H186V40a2,2,0,0,0-2-2H72a2,2,0,0,0-2,2Zm88.71,94.84a94,94,0,0,1-61.42,0L94,223.72a2,2,0,0,0,.47,1.59A2,2,0,0,0,96,226h64a2,2,0,0,0,1.51-.69,2,2,0,0,0,.47-1.59ZM209.78,118H46.22a82,82,0,0,0,163.56,0Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M120,64a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h16A8,8,0,0,1,120,64Zm52.32,133.14,3.52,24.6A16,16,0,0,1,160,240H96a16,16,0,0,1-15.84-18.26l3.52-24.6A96.09,96.09,0,0,1,32,112a8,8,0,0,1,8-8H56V40A16,16,0,0,1,72,24H184a16,16,0,0,1,16,16v64h16a8,8,0,0,1,8,8A96.09,96.09,0,0,1,172.32,197.14ZM72,104H184V40H72Zm85.07,99.5a96.15,96.15,0,0,1-58.14,0L96,224h64ZM207.6,120H48.4a80,80,0,0,0,159.2,0Z\"/>";
const SECONDARY_PATHS = "<path d=\"M167.92,222.87A8,8,0,0,1,160,232H96a8,8,0,0,1-7.92-9.13l4.34-30.36h0a88.21,88.21,0,0,0,71.14,0h0ZM184,32H72a8,8,0,0,0-8,8v72H192V40A8,8,0,0,0,184,32Z\"/>";

export const Toilet = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ToiletProps) => {
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
