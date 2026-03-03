import { SVGProps } from "react";

export type DeviceMobileSlashVariant = "duotone" | "fill" | "light";

export interface DeviceMobileSlashProps extends SVGProps<SVGSVGElement> {
  variant?: DeviceMobileSlashVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M213.38,221.92a8,8,0,0,1-11.3-.54l-2.26-2.48A24,24,0,0,1,176,240H80a24,24,0,0,1-24-24V60.69L42.08,45.38A8,8,0,1,1,53.92,34.62l160,176A8,8,0,0,1,213.38,221.92Zm-27.3-65.71A8,8,0,0,0,200,150.83V40a24,24,0,0,0-24-24H76.7a8,8,0,0,0-5.92,13.38Z\"/>";
const LIGHT_INNER     = "<path d=\"M212.44,212,52.44,36A6,6,0,0,0,43.56,44L58,59.92V216a22,22,0,0,0,22,22h96a22,22,0,0,0,22-22v-2.08l5.56,6.12a6,6,0,0,0,8.88-8.08ZM186,216a10,10,0,0,1-10,10H80a10,10,0,0,1-10-10V73.12l116,127.6ZM70.7,24a6,6,0,0,1,6-6H176a22,22,0,0,1,22,22V150.83a6,6,0,1,1-12,0V40a10,10,0,0,0-10-10H76.7A6,6,0,0,1,70.7,24Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M213.92,210.62l-160-176A8,8,0,1,0,42.08,45.38L56,60.69V216a24,24,0,0,0,24,24h96a24,24,0,0,0,23.82-21.11l2.26,2.49a8,8,0,1,0,11.84-10.76ZM184,216a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V78.29l112,123.2ZM68.7,24a8,8,0,0,1,8-8H176a24,24,0,0,1,24,24V150.83a8,8,0,1,1-16,0V40a8,8,0,0,0-8-8H76.7A8,8,0,0,1,68.7,24Z\"/>";
const SECONDARY_PATHS = "<path d=\"M192,40V216a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V40A16,16,0,0,1,80,24h96A16,16,0,0,1,192,40Z\"/>";

export const DeviceMobileSlash = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: DeviceMobileSlashProps) => {
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
