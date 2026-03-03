import { SVGProps } from "react";

export type HandSoapVariant = "duotone" | "fill" | "light";

export interface HandSoapProps extends SVGProps<SVGSVGElement> {
  variant?: HandSoapVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M184,96.8V88a32,32,0,0,0-32-32H136V32h32a8,8,0,0,1,8,8,8,8,0,0,0,16,0,24,24,0,0,0-24-24H104a8,8,0,0,0,0,16h16V56H104A32,32,0,0,0,72,88v8.8A40.07,40.07,0,0,0,40,136v80a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V136A40.07,40.07,0,0,0,184,96.8ZM104,72h48a16,16,0,0,1,16,16v8H88V88A16,16,0,0,1,104,72Z\"/>";
const LIGHT_INNER     = "<path d=\"M182,98.48V88a30,30,0,0,0-30-30H134V30h34a10,10,0,0,1,10,10,6,6,0,0,0,12,0,22,22,0,0,0-22-22H104a6,6,0,0,0,0,12h18V58H104A30,30,0,0,0,74,88V98.48A38.05,38.05,0,0,0,42,136v80a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V136A38.05,38.05,0,0,0,182,98.48ZM104,70h48a18,18,0,0,1,18,18V98H86V88A18,18,0,0,1,104,70Zm98,146a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V136a26,26,0,0,1,26-26h96a26,26,0,0,1,26,26Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M184,96.8V88a32,32,0,0,0-32-32H136V32h32a8,8,0,0,1,8,8,8,8,0,0,0,16,0,24,24,0,0,0-24-24H104a8,8,0,0,0,0,16h16V56H104A32,32,0,0,0,72,88v8.8A40.07,40.07,0,0,0,40,136v80a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V136A40.07,40.07,0,0,0,184,96.8ZM104,72h48a16,16,0,0,1,16,16v8H88V88A16,16,0,0,1,104,72Zm96,144H56V136a24,24,0,0,1,24-24h96a24,24,0,0,1,24,24v80Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,136v80a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V136a32,32,0,0,1,32-32h96A32,32,0,0,1,208,136Z\"/>";

export const HandSoap = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: HandSoapProps) => {
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
