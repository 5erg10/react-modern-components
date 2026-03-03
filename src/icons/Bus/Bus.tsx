import { SVGProps } from "react";

export type BusVariant = "duotone" | "fill" | "light";

export interface BusProps extends SVGProps<SVGSVGElement> {
  variant?: BusVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M248,80v24a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0ZM16,72a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V80A8,8,0,0,0,16,72Zm200-8V208a16,16,0,0,1-16,16H184a16,16,0,0,1-16-16v-8H88v8a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V64A32,32,0,0,1,72,32H184A32,32,0,0,1,216,64ZM104,148a12,12,0,1,0-12,12A12,12,0,0,0,104,148Zm72,0a12,12,0,1,0-12,12A12,12,0,0,0,176,148Zm24-76H56v40H200Z\"/>";
const LIGHT_INNER     = "<path d=\"M184,34H72A30,30,0,0,0,42,64V208a14,14,0,0,0,14,14H80a14,14,0,0,0,14-14V190h68v18a14,14,0,0,0,14,14h24a14,14,0,0,0,14-14V64A30,30,0,0,0,184,34ZM54,178V118H202v60ZM54,78H202v28H54ZM72,46H184a18,18,0,0,1,18,18v2H54V64A18,18,0,0,1,72,46ZM82,208a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V190H82Zm118,2H176a2,2,0,0,1-2-2V190h28v18A2,2,0,0,1,200,210Zm-98-62a10,10,0,1,1-10-10A10,10,0,0,1,102,148Zm72,0a10,10,0,1,1-10-10A10,10,0,0,1,174,148Zm72-68v24a6,6,0,0,1-12,0V80a6,6,0,0,1,12,0ZM22,80v24a6,6,0,0,1-12,0V80a6,6,0,0,1,12,0Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M184,32H72A32,32,0,0,0,40,64V208a16,16,0,0,0,16,16H80a16,16,0,0,0,16-16V192h64v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V64A32,32,0,0,0,184,32ZM56,176V120H200v56Zm0-96H200v24H56ZM72,48H184a16,16,0,0,1,16,16H56A16,16,0,0,1,72,48Zm8,160H56V192H80Zm96,0V192h24v16Zm-72-60a12,12,0,1,1-12-12A12,12,0,0,1,104,148Zm72,0a12,12,0,1,1-12-12A12,12,0,0,1,176,148Zm72-68v24a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0ZM24,80v24a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Z\"/>";
const SECONDARY_PATHS = "<path d=\"M48,184H88v24a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8Zm120,24a8,8,0,0,0,8,8h24a8,8,0,0,0,8-8V184H168ZM48,72v40H208V72Z\"/>";

export const Bus = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BusProps) => {
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
