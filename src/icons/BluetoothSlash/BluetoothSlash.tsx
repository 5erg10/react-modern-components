import { SVGProps } from "react";

export type BluetoothSlashVariant = "duotone" | "fill" | "light";

export interface BluetoothSlashProps extends SVGProps<SVGSVGElement> {
  variant?: BluetoothSlashVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M221.38,221.92a8,8,0,0,1-11.3-.54l-26.45-29.1L132.8,230.4a8,8,0,0,1-8.89.47,8.29,8.29,0,0,1-3.91-7.18V144L68.8,182.4a8,8,0,0,1-11.16-1.55,8.26,8.26,0,0,1,1.81-11.43l61.47-46.11L50.08,45.38A8,8,0,0,1,61.92,34.62l160,176A8,8,0,0,1,221.38,221.92ZM155,113.22a4,4,0,0,0,5.36.51L196.8,86.4a8,8,0,0,0,0-12.8l-64-48a8,8,0,0,0-10,.29A8.25,8.25,0,0,0,120,32.24V73.18a4,4,0,0,0,1,2.69Z\"/>";
const LIGHT_INNER     = "<path d=\"M220.44,212,60.44,36A6,6,0,0,0,51.56,44l72.32,79.55L60.4,171.2a6,6,0,0,0,7.2,9.6L122,140v84a6,6,0,0,0,9.6,4.8l52.28-39.21L211.56,220a6,6,0,0,0,8.88-8.08ZM134,212V140l15.09,11.31,26.68,29.36ZM122,71.63V32a6,6,0,0,1,9.6-4.8l64,48a6,6,0,0,1,0,9.6L162.07,110a6,6,0,0,1-7.2-9.6L182,80,134,44V71.63a6,6,0,0,1-12,0Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M221.92,210.62l-160-176A8,8,0,0,0,50.08,45.38l70.84,77.93L59.2,169.6a8,8,0,1,0,9.6,12.8L120,144v80a8,8,0,0,0,12.8,6.4l50.83-38.12,26.45,29.1a8,8,0,1,0,11.84-10.76ZM136,208V144l11.73,8.8,25.08,27.59ZM120,71.63V32a8,8,0,0,1,12.8-6.4l64,48a8,8,0,0,1,0,12.8l-33.53,25.15a8,8,0,0,1-9.6-12.8l25-18.75L136,48V71.63a8,8,0,0,1-16,0Z\"/>";
const SECONDARY_PATHS = "<path d=\"M128,128l64,48-64,48Zm0-96v96l64-48Z\"/>";

export const BluetoothSlash = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BluetoothSlashProps) => {
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
