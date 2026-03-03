import { SVGProps } from "react";

export type TramVariant = "duotone" | "fill" | "light";

export interface TramProps extends SVGProps<SVGSVGElement> {
  variant?: TramVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M184,48H136V24h32a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16h32V48H72A32,32,0,0,0,40,80V184a32,32,0,0,0,32,32h8L65.6,235.2a8,8,0,1,0,12.8,9.6L100,216h56l21.6,28.8a8,8,0,1,0,12.8-9.6L176,216h8a32,32,0,0,0,32-32V80A32,32,0,0,0,184,48Zm0,152H72a16,16,0,0,1-16-16V128H200v56A16,16,0,0,1,184,200ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm88,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z\"/>";
const LIGHT_INNER     = "<path d=\"M184,50H134V22h34a6,6,0,0,0,0-12H88a6,6,0,0,0,0,12h34V50H72A30,30,0,0,0,42,80V184a30,30,0,0,0,30,30H84L67.2,236.4a6,6,0,1,0,9.6,7.2L99,214h58l22.2,29.6a6,6,0,0,0,9.6-7.2L172,214h12a30,30,0,0,0,30-30V80A30,30,0,0,0,184,50ZM72,62H184a18,18,0,0,1,18,18v42H54V80A18,18,0,0,1,72,62ZM184,202H72a18,18,0,0,1-18-18V134H202v50A18,18,0,0,1,184,202ZM94,172a10,10,0,1,1-10-10A10,10,0,0,1,94,172Zm88,0a10,10,0,1,1-10-10A10,10,0,0,1,182,172Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M184,48H136V24h32a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16h32V48H72A32,32,0,0,0,40,80V184a32,32,0,0,0,32,32h8L65.6,235.2a8,8,0,1,0,12.8,9.6L100,216h56l21.6,28.8a8,8,0,1,0,12.8-9.6L176,216h8a32,32,0,0,0,32-32V80A32,32,0,0,0,184,48ZM72,64H184a16,16,0,0,1,16,16v40H56V80A16,16,0,0,1,72,64ZM184,200H72a16,16,0,0,1-16-16V136H200v48A16,16,0,0,1,184,200ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm88,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,80v48H48V80A24,24,0,0,1,72,56H184A24,24,0,0,1,208,80Z\"/>";

export const Tram = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: TramProps) => {
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
