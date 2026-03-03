import { SVGProps } from "react";

export type SkullVariant = "duotone" | "fill" | "light";

export interface SkullProps extends SVGProps<SVGSVGElement> {
  variant?: SkullVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M128,16C70.65,16,24,60.86,24,116c0,34.1,18.27,66,48,84.28V216a16,16,0,0,0,16,16h8a4,4,0,0,0,4-4V200.27a8.17,8.17,0,0,1,7.47-8.25,8,8,0,0,1,8.53,8v28a4,4,0,0,0,4,4h16a4,4,0,0,0,4-4V200.27a8.17,8.17,0,0,1,7.47-8.25,8,8,0,0,1,8.53,8v28a4,4,0,0,0,4,4h8a16,16,0,0,0,16-16V200.28C213.73,182,232,150.1,232,116,232,60.86,185.35,16,128,16ZM92,152a20,20,0,1,1,20-20A20,20,0,0,1,92,152Zm72,0a20,20,0,1,1,20-20A20,20,0,0,1,164,152Z\"/>";
const LIGHT_INNER     = "<path d=\"M92,106a26,26,0,1,0,26,26A26,26,0,0,0,92,106Zm0,40a14,14,0,1,1,14-14A14,14,0,0,1,92,146Zm72-40a26,26,0,1,0,26,26A26,26,0,0,0,164,106Zm0,40a14,14,0,1,1,14-14A14,14,0,0,1,164,146ZM128,18C71.76,18,26,62,26,116c0,33.77,18.3,65.31,48,83.15V216a14,14,0,0,0,14,14h80a14,14,0,0,0,14-14V199.15c29.7-17.84,48-49.38,48-83.15C230,62,184.24,18,128,18Zm45.09,172.44a6,6,0,0,0-3.09,5.25V216a2,2,0,0,1-2,2H150V192a6,6,0,0,0-12,0v26H118V192a6,6,0,0,0-12,0v26H88a2,2,0,0,1-2-2V195.69a6,6,0,0,0-3.09-5.25C55.21,175.09,38,146.56,38,116c0-47.42,40.37-86,90-86s90,38.58,90,86C218,146.56,200.79,175.09,173.09,190.44Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M92,104a28,28,0,1,0,28,28A28,28,0,0,0,92,104Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,92,144Zm72-40a28,28,0,1,0,28,28A28,28,0,0,0,164,104Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,164,144ZM128,16C70.65,16,24,60.86,24,116c0,34.1,18.27,66,48,84.28V216a16,16,0,0,0,16,16h80a16,16,0,0,0,16-16V200.28C213.73,182,232,150.1,232,116,232,60.86,185.35,16,128,16Zm44.12,172.69a8,8,0,0,0-4.12,7V216H152V192a8,8,0,0,0-16,0v24H120V192a8,8,0,0,0-16,0v24H88V195.69a8,8,0,0,0-4.12-7C56.81,173.69,40,145.84,40,116c0-46.32,39.48-84,88-84s88,37.68,88,84C216,145.83,199.19,173.69,172.12,188.69Z\"/>";
const SECONDARY_PATHS = "<path d=\"M128,24c-53,0-96,41.19-96,92,0,34.05,19.31,63.78,48,79.69V216a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V195.69c28.69-15.91,48-45.64,48-79.69C224,65.19,181,24,128,24ZM92,152a20,20,0,1,1,20-20A20,20,0,0,1,92,152Zm72,0a20,20,0,1,1,20-20A20,20,0,0,1,164,152Z\"/>";

export const Skull = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: SkullProps) => {
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
