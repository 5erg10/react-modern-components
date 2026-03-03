import { SVGProps } from "react";

export type SlackLogoVariant = "duotone" | "fill" | "light";

export interface SlackLogoProps extends SVGProps<SVGSVGElement> {
  variant?: SlackLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M221.13,128A32,32,0,0,0,184,76.31V56a32,32,0,0,0-56-21.13A32,32,0,0,0,76.31,72H56a32,32,0,0,0-21.13,56A32,32,0,0,0,72,179.69V200a32,32,0,0,0,56,21.13A32,32,0,0,0,179.69,184H200a32,32,0,0,0,21.13-56ZM88,56a16,16,0,0,1,32,0V72H104A16,16,0,0,1,88,56ZM40,104A16,16,0,0,1,56,88h48a16,16,0,0,1,16,16v16H56A16,16,0,0,1,40,104Zm128,96a16,16,0,0,1-32,0V184h16A16,16,0,0,1,168,200Zm32-32H152a16,16,0,0,1-16-16V136h64a16,16,0,0,1,0,32Z\"/>";
const LIGHT_INNER     = "<path d=\"M218,128a30,30,0,1,0-36-48V56a30,30,0,0,0-54-18A30,30,0,1,0,80,74H56a30,30,0,0,0-18,54,30,30,0,1,0,36,48v24a30,30,0,0,0,54,18,30,30,0,1,0,48-36h24a30,30,0,0,0,18-54ZM200,86a18,18,0,0,1,0,36H182V104A18,18,0,0,1,200,86ZM152,38a18,18,0,0,1,18,18v48a18,18,0,0,1-18,18H134V56A18,18,0,0,1,152,38ZM86,56a18,18,0,0,1,36,0V74H104A18,18,0,0,1,86,56ZM38,104A18,18,0,0,1,56,86h48a18,18,0,0,1,18,18v18H56A18,18,0,0,1,38,104Zm18,66a18,18,0,0,1,0-36H74v18A18,18,0,0,1,56,170Zm48,48a18,18,0,0,1-18-18V152a18,18,0,0,1,18-18h18v66A18,18,0,0,1,104,218Zm66-18a18,18,0,0,1-36,0V182h18A18,18,0,0,1,170,200Zm30-30H152a18,18,0,0,1-18-18V134h66a18,18,0,0,1,0,36Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M221.13,128A32,32,0,0,0,184,76.31V56a32,32,0,0,0-56-21.13A32,32,0,0,0,76.31,72H56a32,32,0,0,0-21.13,56A32,32,0,0,0,72,179.69V200a32,32,0,0,0,56,21.13A32,32,0,0,0,179.69,184H200a32,32,0,0,0,21.13-56ZM200,88a16,16,0,0,1,0,32H184V104A16,16,0,0,1,200,88ZM152,40a16,16,0,0,1,16,16v48a16,16,0,0,1-16,16H136V56A16,16,0,0,1,152,40ZM88,56a16,16,0,0,1,32,0V72H104A16,16,0,0,1,88,56ZM40,104A16,16,0,0,1,56,88h48a16,16,0,0,1,16,16v16H56A16,16,0,0,1,40,104Zm16,64a16,16,0,0,1,0-32H72v16A16,16,0,0,1,56,168Zm48,48a16,16,0,0,1-16-16V152a16,16,0,0,1,16-16h16v64A16,16,0,0,1,104,216Zm64-16a16,16,0,0,1-32,0V184h16A16,16,0,0,1,168,200Zm32-32H152a16,16,0,0,1-16-16V136h64a16,16,0,0,1,0,32Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,152h0a24,24,0,0,1-24,24H152a24,24,0,0,1,24,24h0a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V176h24a24,24,0,0,1-24-24V128h72A24,24,0,0,1,224,152ZM104,80h24V56a24,24,0,0,0-24-24h0A24,24,0,0,0,80,56h0a24,24,0,0,0,24,24H56a24,24,0,0,0-24,24h0a24,24,0,0,0,24,24h72V104A24,24,0,0,0,104,80Z\"/>";

export const SlackLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: SlackLogoProps) => {
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
