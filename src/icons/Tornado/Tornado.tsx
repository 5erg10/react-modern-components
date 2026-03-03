import { SVGProps } from "react";

export type TornadoVariant = "duotone" | "fill" | "light";

export interface TornadoProps extends SVGProps<SVGSVGElement> {
  variant?: TornadoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M144,228a12,12,0,0,1-12,12H116a12,12,0,0,1,0-24h16A12,12,0,0,1,144,228ZM220,32H60a12,12,0,0,0,0,24,12,12,0,0,1,0,24H44a12,12,0,0,0,0,24H76a12,12,0,0,1,0,24,12,12,0,0,0,0,24h48a12,12,0,0,1,0,24,12,12,0,0,0,0,24h48a12,12,0,0,0,0-24,12,12,0,0,1,0-24h16a12,12,0,0,0,0-24H164a12,12,0,0,1,0-24,12,12,0,0,0,0-24,12,12,0,0,1,0-24h56a12,12,0,0,0,0-24Z\"/>";
const LIGHT_INNER     = "<path d=\"M230,40a6,6,0,0,1-6,6H56a6,6,0,0,1,0-12H224A6,6,0,0,1,230,40ZM182,72a6,6,0,0,0-6-6H32a6,6,0,0,0,0,12H176A6,6,0,0,0,182,72Zm-16,32a6,6,0,0,0-6-6H56a6,6,0,0,0,0,12H160A6,6,0,0,0,166,104Zm16,32a6,6,0,0,0-6-6H88a6,6,0,0,0,0,12h88A6,6,0,0,0,182,136Zm2,26H120a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12Zm-24,32H128a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12Zm-32,32H112a6,6,0,0,0,0,12h16a6,6,0,0,0,0-12Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M232,40a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H224A8,8,0,0,1,232,40ZM184,72a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H176A8,8,0,0,0,184,72Zm-16,32a8,8,0,0,0-8-8H56a8,8,0,0,0,0,16H160A8,8,0,0,0,168,104Zm16,32a8,8,0,0,0-8-8H88a8,8,0,0,0,0,16h88A8,8,0,0,0,184,136Zm0,24H120a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm-24,32H128a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-32,32H112a8,8,0,0,0,0,16h16a8,8,0,0,0,0-16Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40Z\"/>";

export const Tornado = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: TornadoProps) => {
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
