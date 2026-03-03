import { SVGProps } from "react";

export type UmbrellaVariant = "duotone" | "fill" | "light";

export interface UmbrellaProps extends SVGProps<SVGSVGElement> {
  variant?: UmbrellaVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M240,126.63A112.21,112.21,0,0,0,128,24h0A112.21,112.21,0,0,0,16.05,126.63,16,16,0,0,0,32,144h88v56a32,32,0,0,0,64,0,8,8,0,0,0-16,0,16,16,0,0,1-32,0V144h88a16,16,0,0,0,16-17.37ZM32,128a96.15,96.15,0,0,1,76.2-85.89C96.48,58,81.85,86.11,80.17,128H32Zm143.83,0c-1.68-41.89-16.31-70-28-85.94A96.07,96.07,0,0,1,224,128Z\"/>";
const LIGHT_INNER     = "<path d=\"M238,126.79A110.43,110.43,0,0,0,53.11,55.22a109.51,109.51,0,0,0-35.06,71.57A14,14,0,0,0,32,142h90v58a30,30,0,0,0,60,0,6,6,0,0,0-12,0,18,18,0,0,1-36,0V142h90a14,14,0,0,0,14-15.21ZM94.11,130C95.8,78.79,118.81,49.84,128,40.27c9.2,9.58,32.2,38.53,33.89,89.73Zm-63.57-.65a2,2,0,0,1-.53-1.56,98.14,98.14,0,0,1,82.91-88.62c-12,15-29.43,44.44-30.83,90.83H32A2,2,0,0,1,30.54,129.35Zm194.92,0A2,2,0,0,1,224,130H173.91c-1.4-46.39-18.81-75.87-30.83-90.83A98.14,98.14,0,0,1,226,127.79,2,2,0,0,1,225.46,129.35Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M240,126.63A112.44,112.44,0,0,0,51.75,53.75a111.56,111.56,0,0,0-35.7,72.88A16,16,0,0,0,32,144h88v56a32,32,0,0,0,64,0,8,8,0,0,0-16,0,16,16,0,0,1-32,0V144h88a16,16,0,0,0,16-17.37ZM32,128l0,0a96.15,96.15,0,0,1,76.2-85.89C96.48,58,81.85,86.11,80.17,128Zm64.15,0c1.39-30.77,10.53-52.81,18.3-66.24A106.44,106.44,0,0,1,128,43.16a106.31,106.31,0,0,1,13.52,18.6C154.8,84.7,159,109.28,159.82,128Zm79.65,0c-1.68-41.89-16.31-70-28-85.94A96.07,96.07,0,0,1,224,128Z\"/>";
const SECONDARY_PATHS = "<path d=\"M128,32S88,64,88,136H32a8,8,0,0,1-8-8.71A104.21,104.21,0,0,1,128,32Zm104,95.29A104.21,104.21,0,0,0,128,32s40,32,40,104h56A8,8,0,0,0,232,127.29Z\"/>";

export const Umbrella = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: UmbrellaProps) => {
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
