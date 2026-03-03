import { SVGProps } from "react";

export type BluetoothConnectedVariant = "duotone" | "fill" | "light";

export interface BluetoothConnectedProps extends SVGProps<SVGSVGElement> {
  variant?: BluetoothConnectedVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M200,176a8,8,0,0,1-3.2,6.4l-64,48A8,8,0,0,1,128,232a8,8,0,0,1-8-8V144L68.8,182.4a8,8,0,0,1-9.6-12.8L114.67,128,59.2,86.4a8,8,0,0,1,9.6-12.8L120,112V32a8,8,0,0,1,12.8-6.4l64,48a8,8,0,0,1,0,12.8L141.33,128l55.47,41.6A8,8,0,0,1,200,176ZM72,128a12,12,0,1,0-12,12A12,12,0,0,0,72,128Zm132-12a12,12,0,1,0,12,12A12,12,0,0,0,204,116Z\"/>";
const LIGHT_INNER     = "<path d=\"M195.6,171.2,138,128l57.6-43.2a6,6,0,0,0,0-9.6l-64-48A6,6,0,0,0,122,32v84L67.6,75.2a6,6,0,0,0-7.2,9.6L118,128,60.4,171.2a6,6,0,0,0,7.2,9.6L122,140v84a6,6,0,0,0,9.6,4.8l64-48a6,6,0,0,0,0-9.6ZM134,44l48,36-48,36Zm0,168V140l48,36ZM60,138a10,10,0,1,1,10-10A10,10,0,0,1,60,138Zm154-10a10,10,0,1,1-10-10A10,10,0,0,1,214,128Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M196.8,169.6,141.33,128,196.8,86.4a8,8,0,0,0,0-12.8l-64-48A8,8,0,0,0,120,32v80L68.8,73.6a8,8,0,0,0-9.6,12.8L114.67,128,59.2,169.6a8,8,0,1,0,9.6,12.8L120,144v80a8,8,0,0,0,12.8,6.4l64-48a8,8,0,0,0,0-12.8ZM136,48l42.67,32L136,112Zm0,160V144l42.67,32ZM60,140a12,12,0,1,1,12-12A12,12,0,0,1,60,140Zm156-12a12,12,0,1,1-12-12A12,12,0,0,1,216,128Z\"/>";
const SECONDARY_PATHS = "<path d=\"M192,80l-64,48V32ZM128,224l64-48-64-48Z\"/>";

export const BluetoothConnected = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BluetoothConnectedProps) => {
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
