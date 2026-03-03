import { SVGProps } from "react";

export type DeviceTabletCameraVariant = "duotone" | "fill" | "light";

export interface DeviceTabletCameraProps extends SVGProps<SVGSVGElement> {
  variant?: DeviceTabletCameraVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M192,24H64A24,24,0,0,0,40,48V208a24,24,0,0,0,24,24H192a24,24,0,0,0,24-24V48A24,24,0,0,0,192,24ZM128,80a12,12,0,1,1,12-12A12,12,0,0,1,128,80Z\"/>";
const LIGHT_INNER     = "<path d=\"M192,26H64A22,22,0,0,0,42,48V208a22,22,0,0,0,22,22H192a22,22,0,0,0,22-22V48A22,22,0,0,0,192,26Zm10,182a10,10,0,0,1-10,10H64a10,10,0,0,1-10-10V48A10,10,0,0,1,64,38H192a10,10,0,0,1,10,10ZM138,68a10,10,0,1,1-10-10A10,10,0,0,1,138,68Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M192,24H64A24,24,0,0,0,40,48V208a24,24,0,0,0,24,24H192a24,24,0,0,0,24-24V48A24,24,0,0,0,192,24Zm8,184a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8ZM140,68a12,12,0,1,1-12-12A12,12,0,0,1,140,68Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,48V208a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V48A16,16,0,0,1,64,32H192A16,16,0,0,1,208,48Z\"/>";

export const DeviceTabletCamera = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: DeviceTabletCameraProps) => {
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
