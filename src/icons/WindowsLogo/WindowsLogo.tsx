import { SVGProps } from "react";

export type WindowsLogoVariant = "duotone" | "fill" | "light";

export interface WindowsLogoProps extends SVGProps<SVGSVGElement> {
  variant?: WindowsLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M104,144v51.64a8,8,0,0,1-8,8,8.54,8.54,0,0,1-1.43-.13l-64-11.64A8,8,0,0,1,24,184V144a8,8,0,0,1,8-8H96A8,8,0,0,1,104,144Zm-2.87-89.78a8,8,0,0,0-6.56-1.73l-64,11.64A8,8,0,0,0,24,72v40a8,8,0,0,0,8,8H96a8,8,0,0,0,8-8V60.36A8,8,0,0,0,101.13,54.22ZM208,136H128a8,8,0,0,0-8,8v57.45a8,8,0,0,0,6.57,7.88l80,14.54A7.61,7.61,0,0,0,208,224a8,8,0,0,0,8-8V144A8,8,0,0,0,208,136Zm5.13-102.14a8,8,0,0,0-6.56-1.73l-80,14.55A8,8,0,0,0,120,54.55V112a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V40A8,8,0,0,0,213.13,33.86Z\"/>";
const LIGHT_INNER     = "<path d=\"M208,138H128a6,6,0,0,0-6,6v57.45a6,6,0,0,0,4.93,5.91l80,14.54a5.46,5.46,0,0,0,1.07.1,6,6,0,0,0,6-6V144A6,6,0,0,0,208,138Zm-6,70.81-68-12.36V150h68ZM96,138H32a6,6,0,0,0-6,6v40a6,6,0,0,0,4.93,5.9l64,11.64a6.36,6.36,0,0,0,1.07.1,6,6,0,0,0,6-6V144A6,6,0,0,0,96,138Zm-6,50.45L38,179V150H90ZM211.84,35.39a6,6,0,0,0-4.91-1.29l-80,14.54A6,6,0,0,0,122,54.55V112a6,6,0,0,0,6,6h80a6,6,0,0,0,6-6V40A6,6,0,0,0,211.84,35.39ZM202,106H134V59.55l68-12.36ZM99.84,55.76a6,6,0,0,0-4.91-1.3l-64,11.64A6,6,0,0,0,26,72v40a6,6,0,0,0,6,6H96a6,6,0,0,0,6-6V60.36A6,6,0,0,0,99.84,55.76ZM90,106H38V77l52-9.46Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M208,136H128a8,8,0,0,0-8,8v57.45a8,8,0,0,0,6.57,7.88l80,14.54A7.61,7.61,0,0,0,208,224a8,8,0,0,0,8-8V144A8,8,0,0,0,208,136Zm-8,70.41-64-11.63V152h64ZM96,136H32a8,8,0,0,0-8,8v40a8,8,0,0,0,6.57,7.87l64,11.64a8.54,8.54,0,0,0,1.43.13,8,8,0,0,0,8-8V144A8,8,0,0,0,96,136Zm-8,50.05-48-8.73V152H88ZM213.13,33.86a8,8,0,0,0-6.56-1.73l-80,14.55A8,8,0,0,0,120,54.55V112a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V40A8,8,0,0,0,213.13,33.86ZM200,104H136V61.22l64-11.63ZM101.13,54.22a8,8,0,0,0-6.56-1.73l-64,11.64A8,8,0,0,0,24,72v40a8,8,0,0,0,8,8H96a8,8,0,0,0,8-8V60.36A8,8,0,0,0,101.13,54.22ZM88,104H40V78.68L88,70Z\"/>";
const SECONDARY_PATHS = "<path d=\"M128,144h80v72l-80-14.55ZM32,184l64,11.64V144H32ZM128,54.55V112h80V40ZM32,112H96V60.36L32,72Z\"/>";

export const WindowsLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: WindowsLogoProps) => {
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
