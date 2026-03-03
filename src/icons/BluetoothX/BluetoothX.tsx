import { SVGProps } from "react";

export type BluetoothXVariant = "duotone" | "fill" | "light";

export interface BluetoothXProps extends SVGProps<SVGSVGElement> {
  variant?: BluetoothXVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M184,176a8,8,0,0,1-3.2,6.4l-64,48A8,8,0,0,1,112,232a7.9,7.9,0,0,1-4.11-1.14,8.3,8.3,0,0,1-3.9-7.18V144L52.76,182.4a8,8,0,0,1-11.16-1.55,8.26,8.26,0,0,1,1.8-11.43L98.66,128,43.38,86.57a8.19,8.19,0,0,1-2.13-10.93,8,8,0,0,1,11.51-2L104,112V32.24a8.21,8.21,0,0,1,2.83-6.34,8,8,0,0,1,10-.3l33.62,25.2A4,4,0,0,1,152,54v52a4,4,0,0,1-1.6,3.2L125.34,128l55.5,41.6A8,8,0,0,1,184,176Zm53.47-77.87L219.37,80l18.11-18.11a8.21,8.21,0,0,0,.41-11.37,8,8,0,0,0-11.49-.18L208.05,68.69,189.93,50.58a8.23,8.23,0,0,0-10.83-.88,8,8,0,0,0-.73,12L196.73,80,178.58,98.13a8.2,8.2,0,0,0-.6,11.1,8,8,0,0,0,11.71.43l18.36-18.35,18.35,18.35a8,8,0,0,0,11.72-.43A8.21,8.21,0,0,0,237.51,98.13Z\"/>";
const LIGHT_INNER     = "<path d=\"M179.6,171.2,122,128l25.6-19.2a6,6,0,1,0-7.2-9.6L118,116V44l22.4,16.8a6,6,0,1,0,7.2-9.6l-32-24A6,6,0,0,0,106,32v84L51.6,75.2a6,6,0,0,0-7.2,9.6L102,128,44.4,171.2a6,6,0,0,0,7.2,9.6L106,140v84a6,6,0,0,0,9.6,4.8l64-48a6,6,0,0,0,0-9.6ZM118,212V140l48,36ZM236.24,99.76a6,6,0,1,1-8.48,8.48L208,88.49l-19.76,19.75a6,6,0,0,1-8.48-8.48L199.51,80,179.76,60.24a6,6,0,0,1,8.48-8.48L208,71.51l19.76-19.75a6,6,0,0,1,8.48,8.48L216.49,80Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M180.8,169.6,125.33,128l23.47-17.6a8,8,0,0,0-9.6-12.8L120,112V48l19.2,14.4a8,8,0,1,0,9.6-12.8l-32-24A8,8,0,0,0,104,32v80L52.8,73.6a8,8,0,0,0-9.6,12.8L98.67,128,43.2,169.6a8,8,0,1,0,9.6,12.8L104,144v80a8,8,0,0,0,12.8,6.4l64-48a8,8,0,0,0,0-12.8ZM120,208V144l42.67,32ZM237.66,98.34a8,8,0,0,1-11.32,11.32L208,91.31l-18.34,18.35a8,8,0,0,1-11.32-11.32L196.69,80,178.34,61.66a8,8,0,0,1,11.32-11.32L208,68.69l18.34-18.35a8,8,0,0,1,11.32,11.32L219.31,80Z\"/>";
const SECONDARY_PATHS = "<path d=\"M176,176l-64,48V128ZM167.47,73.6,112,32v96l55.47-41.6A8,8,0,0,0,167.47,73.6Z\"/>";

export const BluetoothX = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BluetoothXProps) => {
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
