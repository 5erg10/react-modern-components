import { SVGProps } from "react";

export type GaugeVariant = "duotone" | "fill" | "light";

export interface GaugeProps extends SVGProps<SVGSVGElement> {
  variant?: GaugeVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M240,152v24a16,16,0,0,1-16,16H115.93a4,4,0,0,1-3.24-6.35L174.27,101a8.21,8.21,0,0,0-1.37-11.3,8,8,0,0,0-11.37,1.61l-72,99.06A4,4,0,0,1,86.25,192H32a16,16,0,0,1-16-16V153.13c0-1.79,0-3.57.13-5.33a4,4,0,0,1,4-3.8H48a8,8,0,0,0,8-8.53A8.17,8.17,0,0,0,47.73,128H23.92a4,4,0,0,1-3.87-5c12-43.84,49.66-77.13,95.52-82.28a4,4,0,0,1,4.43,4V72a8,8,0,0,0,8.53,8A8.17,8.17,0,0,0,136,71.73V44.67a4,4,0,0,1,4.43-4A112.18,112.18,0,0,1,236.23,123a4,4,0,0,1-3.88,5H208.27a8.17,8.17,0,0,0-8.25,7.47,8,8,0,0,0,8,8.53h27.92a4,4,0,0,1,4,3.86C240,149.23,240,150.61,240,152Z\"/>";
const LIGHT_INNER     = "<path d=\"M205.65,74.08A109.26,109.26,0,0,0,128,42h-.39C67.17,42.21,18,92.06,18,153.13V176a14,14,0,0,0,14,14H224a14,14,0,0,0,14-14V152A109.3,109.3,0,0,0,205.65,74.08ZM226,176a2,2,0,0,1-2,2H115.78l57.07-78.47a6,6,0,0,0-9.7-7.06L100.94,178H32a2,2,0,0,1-2-2V153.13A102.36,102.36,0,0,1,30.62,142H56a6,6,0,0,0,0-12H32.71C42.6,88.4,78.53,56.86,122,54.19V80a6,6,0,0,0,12,0V54.19A98.05,98.05,0,0,1,223.53,130H200a6,6,0,0,0,0,12h25.5c.33,3.3.5,6.64.5,10Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M207.06,72.67A111.24,111.24,0,0,0,128,40h-.4C66.07,40.21,16,91,16,153.13V176a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V152A111.25,111.25,0,0,0,207.06,72.67ZM224,176H119.71l54.76-75.3a8,8,0,0,0-12.94-9.42L99.92,176H32V153.13c0-3.08.15-6.12.43-9.13H56a8,8,0,0,0,0-16H35.27c10.32-38.86,44-68.24,84.73-71.66V80a8,8,0,0,0,16,0V56.33A96.14,96.14,0,0,1,221,128H200a8,8,0,0,0,0,16h23.67c.21,2.65.33,5.31.33,8Z\"/>";
const SECONDARY_PATHS = "<path d=\"M232,152v24a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V153.13C24,95.65,70.15,48.2,127.63,48A104,104,0,0,1,232,152Z\"/>";

export const Gauge = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: GaugeProps) => {
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
