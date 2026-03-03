import { SVGProps } from "react";

export type PicnicTableVariant = "duotone" | "fill" | "light";

export interface PicnicTableProps extends SVGProps<SVGSVGElement> {
  variant?: PicnicTableVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M146.85,96l14.54,32H94.61l14.54-32ZM232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Zm-24,80a8,8,0,0,0-8-8H179L164.42,96H176a8,8,0,0,0,0-16H80a8,8,0,0,0,0,16H91.58L77,128H56a8,8,0,0,0,0,16H69.76l-13,28.69a8,8,0,1,0,14.56,6.62l16-35.31h81.34l16.05,35.31a8,8,0,0,0,14.56-6.62l-13-28.69H200A8,8,0,0,0,208,136Z\"/>";
const LIGHT_INNER     = "<path d=\"M248,130H199.71l-30-60H192a6,6,0,0,0,0-12H64a6,6,0,0,0,0,12H86.29l-30,60H8a6,6,0,0,0,0,12H50.29L26.63,189.32a6,6,0,0,0,10.74,5.36L63.71,142H192.29l26.34,52.68a6,6,0,1,0,10.74-5.36L205.71,142H248a6,6,0,0,0,0-12ZM69.71,130l30-60h56.58l30,60Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M248,128H200.94l-28-56H192a8,8,0,0,0,0-16H64a8,8,0,0,0,0,16H83.06l-28,56H8a8,8,0,0,0,0,16H47.06L24.84,188.42a8,8,0,0,0,3.58,10.73A7.9,7.9,0,0,0,32,200a8,8,0,0,0,7.17-4.42L64.94,144H191.06l25.78,51.58A8,8,0,0,0,224,200a7.9,7.9,0,0,0,3.57-.85,8,8,0,0,0,3.58-10.73L208.94,144H248a8,8,0,0,0,0-16ZM72.94,128l28-56h54.12l28,56Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,192H32L96,64h64Z\"/>";

export const PicnicTable = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PicnicTableProps) => {
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
