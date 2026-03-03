import { SVGProps } from "react";

export type GasPumpVariant = "duotone" | "fill" | "light";

export interface GasPumpProps extends SVGProps<SVGSVGElement> {
  variant?: GasPumpVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M241,69.66,221.66,50.34a8,8,0,0,0-11.32,11.32L229.66,81A8,8,0,0,1,232,86.63V168a8,8,0,0,1-16,0V128a24,24,0,0,0-24-24H176V56a24,24,0,0,0-24-24H72A24,24,0,0,0,48,56V208H32a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16H176V120h16a8,8,0,0,1,8,8v40a24,24,0,0,0,48,0V86.63A23.85,23.85,0,0,0,241,69.66ZM144,120H80a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z\"/>";
const LIGHT_INNER     = "<path d=\"M239.56,71.07,220.24,51.76a6,6,0,0,0-8.48,8.48l19.31,19.32A9.93,9.93,0,0,1,234,86.63V168a10,10,0,0,1-20,0V128a22,22,0,0,0-22-22H174V56a22,22,0,0,0-22-22H72A22,22,0,0,0,50,56V210H32a6,6,0,0,0,0,12H192a6,6,0,0,0,0-12H174V118h18a10,10,0,0,1,10,10v40a22,22,0,0,0,44,0V86.63A21.88,21.88,0,0,0,239.56,71.07ZM62,210V56A10,10,0,0,1,72,46h80a10,10,0,0,1,10,10V210Zm80-98a6,6,0,0,1-6,6H88a6,6,0,0,1,0-12h48A6,6,0,0,1,142,112Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M241,69.66,221.66,50.34a8,8,0,0,0-11.32,11.32L229.66,81A8,8,0,0,1,232,86.63V168a8,8,0,0,1-16,0V128a24,24,0,0,0-24-24H176V56a24,24,0,0,0-24-24H72A24,24,0,0,0,48,56V208H32a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16H176V120h16a8,8,0,0,1,8,8v40a24,24,0,0,0,48,0V86.63A23.85,23.85,0,0,0,241,69.66ZM64,208V56a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8V208Zm80-96a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,112Z\"/>";
const SECONDARY_PATHS = "<path d=\"M168,56V216H56V56A16,16,0,0,1,72,40h80A16,16,0,0,1,168,56Z\"/>";

export const GasPump = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: GasPumpProps) => {
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
