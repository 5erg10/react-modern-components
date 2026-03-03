import { SVGProps } from "react";

export type StethoscopeVariant = "duotone" | "fill" | "light";

export interface StethoscopeProps extends SVGProps<SVGSVGElement> {
  variant?: StethoscopeVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M240,160a32,32,0,1,0-39.93,31,8,8,0,0,0-.07,1,32,32,0,0,1-32,32H144a32,32,0,0,1-32-32V151.48c31.47-4,56-31.47,56-64.31V40a8,8,0,0,0-8-8H136a8,8,0,0,0,0,16h16V87.17c0,26.58-21.25,48.49-47.36,48.83A48,48,0,0,1,56,88V48H72a8,8,0,0,0,0-16H48a8,8,0,0,0-8,8V88a64,64,0,0,0,56,63.49V192a48.05,48.05,0,0,0,48,48h24a48.05,48.05,0,0,0,48-48,8,8,0,0,0-.07-1A32,32,0,0,0,240,160Zm-32,8a8,8,0,1,1,8-8A8,8,0,0,1,208,168Z\"/>";
const LIGHT_INNER     = "<path d=\"M218,160a10,10,0,1,1-10-10A10,10,0,0,1,218,160Zm-4.35,37.58A46.05,46.05,0,0,1,168,238H144a46.06,46.06,0,0,1-46-46V149.71A62,62,0,0,1,42,88V40a6,6,0,0,1,6-6H72a6,6,0,0,1,0,12H54V88a50,50,0,0,0,50,50h.67c27.2-.36,49.33-23.16,49.33-50.83V46H136a6,6,0,0,1,0-12h24a6,6,0,0,1,6,6V87.17c0,32.43-24.68,59.44-56,62.52V192a34,34,0,0,0,34,34h24a34.05,34.05,0,0,0,33.56-28.56,38,38,0,1,1,12.09.14ZM234,160a26,26,0,1,0-26,26A26,26,0,0,0,234,160Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M220,160a12,12,0,1,1-12-12A12,12,0,0,1,220,160Zm-4.55,39.29A48.08,48.08,0,0,1,168,240H144a48.05,48.05,0,0,1-48-48V151.49A64,64,0,0,1,40,88V40a8,8,0,0,1,8-8H72a8,8,0,0,1,0,16H56V88a48,48,0,0,0,48.64,48c26.11-.34,47.36-22.25,47.36-48.83V48H136a8,8,0,0,1,0-16h24a8,8,0,0,1,8,8V87.17c0,32.84-24.53,60.29-56,64.31V192a32,32,0,0,0,32,32h24a32.06,32.06,0,0,0,31.22-25,40,40,0,1,1,16.23.27ZM232,160a24,24,0,1,0-24,24A24,24,0,0,0,232,160Z\"/>";
const SECONDARY_PATHS = "<path d=\"M240,160a32,32,0,1,1-32-32A32,32,0,0,1,240,160Z\"/>";

export const Stethoscope = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: StethoscopeProps) => {
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
