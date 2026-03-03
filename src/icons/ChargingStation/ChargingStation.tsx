import { SVGProps } from "react";

export type ChargingStationVariant = "duotone" | "fill" | "light";

export interface ChargingStationProps extends SVGProps<SVGSVGElement> {
  variant?: ChargingStationVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M241,69.66,221.66,50.34a8,8,0,0,0-11.32,11.32L229.66,81A8,8,0,0,1,232,86.63V168a8,8,0,0,1-16,0V128a24,24,0,0,0-24-24H176V56a24,24,0,0,0-24-24H72A24,24,0,0,0,48,56V208H32a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16H176V120h16a8,8,0,0,1,8,8v40a24,24,0,0,0,48,0V86.63A23.85,23.85,0,0,0,241,69.66ZM135.43,131l-16,40A8,8,0,0,1,104.57,165l11.61-29H96a8,8,0,0,1-7.43-11l16-40A8,8,0,1,1,119.43,91l-11.61,29H128a8,8,0,0,1,7.43,11Z\"/>";
const LIGHT_INNER     = "<path d=\"M133,124.64a6,6,0,0,1,.6,5.59l-16,40a6,6,0,1,1-11.14-4.46L119.14,134H96a6,6,0,0,1-5.57-8.23l16-40a6,6,0,0,1,11.14,4.46L104.86,122H128A6,6,0,0,1,133,124.64Zm113-38V168a22,22,0,0,1-44,0V128a10,10,0,0,0-10-10H174v92h18a6,6,0,0,1,0,12H32a6,6,0,0,1,0-12H50V56A22,22,0,0,1,72,34h80a22,22,0,0,1,22,22v50h18a22,22,0,0,1,22,22v40a10,10,0,0,0,20,0V86.63a9.93,9.93,0,0,0-2.93-7.07L211.76,60.24a6,6,0,0,1,8.48-8.48l19.32,19.31A21.88,21.88,0,0,1,246,86.63ZM162,210V56a10,10,0,0,0-10-10H72A10,10,0,0,0,62,56V210Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M134.62,123.51a8,8,0,0,1,.81,7.46l-16,40A8,8,0,0,1,104.57,165l11.61-29H96a8,8,0,0,1-7.43-11l16-40A8,8,0,1,1,119.43,91l-11.61,29H128A8,8,0,0,1,134.62,123.51ZM248,86.63V168a24,24,0,0,1-48,0V128a8,8,0,0,0-8-8H176v88h16a8,8,0,0,1,0,16H32a8,8,0,0,1,0-16H48V56A24,24,0,0,1,72,32h80a24,24,0,0,1,24,24v48h16a24,24,0,0,1,24,24v40a8,8,0,0,0,16,0V86.63A8,8,0,0,0,229.66,81L210.34,61.66a8,8,0,0,1,11.32-11.32L241,69.66A23.85,23.85,0,0,1,248,86.63ZM160,208V56a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8V208Z\"/>";
const SECONDARY_PATHS = "<path d=\"M168,56V216H56V56A16,16,0,0,1,72,40h80A16,16,0,0,1,168,56Z\"/>";

export const ChargingStation = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ChargingStationProps) => {
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
