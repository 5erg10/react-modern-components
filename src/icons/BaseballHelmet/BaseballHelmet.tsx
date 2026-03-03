import { SVGProps } from "react";

export type BaseballHelmetVariant = "duotone" | "fill" | "light";

export interface BaseballHelmetProps extends SVGProps<SVGSVGElement> {
  variant?: BaseballHelmetVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M248,120H223.7A104,104,0,0,0,16,128v24a72.08,72.08,0,0,0,72,72h40a72.08,72.08,0,0,0,72-72V136h48a8,8,0,0,0,0-16ZM88,180a24,24,0,1,1,24-24A24,24,0,0,1,88,180Zm96-28a56.06,56.06,0,0,1-50.46,55.72A71.87,71.87,0,0,0,160,152V136h24Z\"/>";
const LIGHT_INNER     = "<path d=\"M88,130a26,26,0,1,0,26,26A26,26,0,0,0,88,130Zm0,40a14,14,0,1,1,14-14A14,14,0,0,1,88,170Zm160-48H221.83A102,102,0,0,0,18,128v24a70.08,70.08,0,0,0,70,70h40a70.08,70.08,0,0,0,70-70V134h50a6,6,0,0,0,0-12Zm-62,30a58.07,58.07,0,0,1-58,58h-.85A70,70,0,0,0,158,152V134h28Zm-34-30a6,6,0,0,0-6,6v24a58,58,0,0,1-116,0V128a90,90,0,0,1,179.8-6Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M88,128a28,28,0,1,0,28,28A28,28,0,0,0,88,128Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,88,168Zm160-48H223.7A104,104,0,0,0,16,128v24a72.08,72.08,0,0,0,72,72h40a72.08,72.08,0,0,0,72-72V136h48a8,8,0,0,0,0-16Zm-64,32a56.06,56.06,0,0,1-50.46,55.72A71.87,71.87,0,0,0,160,152V136h24Zm-32-32a8,8,0,0,0-8,8v24a56,56,0,0,1-112,0V128a88,88,0,0,1,175.64-8Z\"/>";
const SECONDARY_PATHS = "<path d=\"M88,176a20,20,0,1,1,20-20A20,20,0,0,1,88,176Zm64-48v24a64,64,0,0,1-64,64h40a64,64,0,0,0,64-64V128Z\"/>";

export const BaseballHelmet = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BaseballHelmetProps) => {
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
