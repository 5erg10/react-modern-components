import { SVGProps } from "react";

export type UmbrellaSimpleVariant = "duotone" | "fill" | "light";

export interface UmbrellaSimpleProps extends SVGProps<SVGSVGElement> {
  variant?: UmbrellaSimpleVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M235.76,138.83A16,16,0,0,1,224,144H136v56a16,16,0,0,0,32,0,8,8,0,0,1,16,0,32,32,0,0,1-64,0V144H32a16,16,0,0,1-16-17.37,112.44,112.44,0,0,1,188.2-72.88A111.56,111.56,0,0,1,240,126.63,16.1,16.1,0,0,1,235.76,138.83Z\"/>";
const LIGHT_INNER     = "<path d=\"M238,126.79A110.43,110.43,0,0,0,53.11,55.22a109.51,109.51,0,0,0-35.06,71.57A14,14,0,0,0,32,142h90v58a30,30,0,0,0,60,0,6,6,0,0,0-12,0,18,18,0,0,1-36,0V142h90a14,14,0,0,0,14-15.21Zm-12.49,2.56A2,2,0,0,1,224,130H32a2,2,0,0,1-1.49-.65,2,2,0,0,1-.53-1.56A98.43,98.43,0,0,1,194.76,64.05,97.5,97.5,0,0,1,226,127.79,2,2,0,0,1,225.46,129.35Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M240,126.63A112.44,112.44,0,0,0,51.75,53.75a111.56,111.56,0,0,0-35.7,72.88A16,16,0,0,0,32,144h88v56a32,32,0,0,0,64,0,8,8,0,0,0-16,0,16,16,0,0,1-32,0V144h88a16,16,0,0,0,16-17.37ZM32,128l0,0A96.43,96.43,0,0,1,193.4,65.52,95.32,95.32,0,0,1,224,128Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,136H32a8,8,0,0,1-8-8.71,104.37,104.37,0,0,1,207.94,0A8,8,0,0,1,224,136Z\"/>";

export const UmbrellaSimple = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: UmbrellaSimpleProps) => {
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
