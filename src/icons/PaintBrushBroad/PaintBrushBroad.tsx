import { SVGProps } from "react";

export type PaintBrushBroadVariant = "duotone" | "fill" | "light";

export interface PaintBrushBroadProps extends SVGProps<SVGSVGElement> {
  variant?: PaintBrushBroadVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216,24H72A40,40,0,0,0,32,64v72a24,24,0,0,0,24,24h48l-7.89,46.67A8.42,8.42,0,0,0,96,208a32,32,0,0,0,64,0,8.42,8.42,0,0,0-.11-1.33L152,160h48a24,24,0,0,0,24-24V32A8,8,0,0,0,216,24ZM72,40H176V80a8,8,0,0,0,16,0V40h16v72H48V64A24,24,0,0,1,72,40Z\"/>";
const LIGHT_INNER     = "<path d=\"M216,26H72A38,38,0,0,0,34,64v72a22,22,0,0,0,22,22h48a2,2,0,0,1,2,2.23L98.08,207a6.74,6.74,0,0,0-.08,1,30,30,0,0,0,60,0,6.74,6.74,0,0,0-.08-1L150,160.23a2,2,0,0,1,2-2.23h48a22,22,0,0,0,22-22V32A6,6,0,0,0,216,26ZM72,38H178V80a6,6,0,0,0,12,0V38h20v68H46V64A26,26,0,0,1,72,38ZM200,146H152a14,14,0,0,0-13.86,16l0,.15L146,208.47a18,18,0,0,1-36,0l7.82-46.34,0-.15A14,14,0,0,0,104,146H56a10,10,0,0,1-10-10V118H210v18A10,10,0,0,1,200,146Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M216,24H72A40,40,0,0,0,32,64v72a24,24,0,0,0,24,24h48l-7.89,46.67A8.42,8.42,0,0,0,96,208a32,32,0,0,0,64,0,8.42,8.42,0,0,0-.11-1.33L152,160h48a24,24,0,0,0,24-24V32A8,8,0,0,0,216,24ZM72,40H176V80a8,8,0,0,0,16,0V40h16v64H48V64A24,24,0,0,1,72,40ZM200,144H152a16,16,0,0,0-15.84,18.26l0,.2L144,208.6a16,16,0,0,1-32,0l7.8-46.14,0-.2A16,16,0,0,0,104,144H56a8,8,0,0,1-8-8V120H208v16A8,8,0,0,1,200,144Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,112v24a16,16,0,0,1-16,16H152a8,8,0,0,0-7.92,9.13L152,208a24,24,0,0,1-48,0l7.92-46.87A8,8,0,0,0,104,152H56a16,16,0,0,1-16-16V112Z\"/>";

export const PaintBrushBroad = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PaintBrushBroadProps) => {
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
