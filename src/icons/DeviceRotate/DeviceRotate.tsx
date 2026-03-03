import { SVGProps } from "react";

export type DeviceRotateVariant = "duotone" | "fill" | "light";

export interface DeviceRotateProps extends SVGProps<SVGSVGElement> {
  variant?: DeviceRotateVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M205.66,221.66l-24,24A8,8,0,0,1,168,240V224H80a24,24,0,0,1-24-24V104a8,8,0,0,1,16,0v96a8,8,0,0,0,8,8h88V192a8,8,0,0,1,13.66-5.66l24,24A8,8,0,0,1,205.66,221.66ZM80,72a8,8,0,0,0,8-8V48h88a8,8,0,0,1,8,8v96a8,8,0,0,0,16,0V56a24,24,0,0,0-24-24H88V16a8,8,0,0,0-13.66-5.66l-24,24a8,8,0,0,0,0,11.32l24,24A8,8,0,0,0,80,72Z\"/>";
const LIGHT_INNER     = "<path d=\"M204.24,220.24l-24,24a6,6,0,0,1-8.48-8.48L185.51,222H80a22,22,0,0,1-22-22V104a6,6,0,0,1,12,0v96a10,10,0,0,0,10,10H185.51l-13.75-13.76a6,6,0,0,1,8.48-8.48l24,24A6,6,0,0,1,204.24,220.24ZM80,70a6,6,0,0,0,4.24-10.24L70.49,46H176a10,10,0,0,1,10,10v96a6,6,0,0,0,12,0V56a22,22,0,0,0-22-22H70.49L84.24,20.24a6,6,0,0,0-8.48-8.48l-24,24a6,6,0,0,0,0,8.48l24,24A6,6,0,0,0,80,70Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M205.66,221.66l-24,24a8,8,0,0,1-11.32-11.32L180.69,224H80a24,24,0,0,1-24-24V104a8,8,0,0,1,16,0v96a8,8,0,0,0,8,8H180.69l-10.35-10.34a8,8,0,0,1,11.32-11.32l24,24A8,8,0,0,1,205.66,221.66ZM80,72a8,8,0,0,0,5.66-13.66L75.31,48H176a8,8,0,0,1,8,8v96a8,8,0,0,0,16,0V56a24,24,0,0,0-24-24H75.31L85.66,21.66A8,8,0,1,0,74.34,10.34l-24,24a8,8,0,0,0,0,11.32l24,24A8,8,0,0,0,80,72Z\"/>";
const SECONDARY_PATHS = "<path d=\"M192,56V200a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V56A16,16,0,0,1,80,40h96A16,16,0,0,1,192,56Z\"/>";

export const DeviceRotate = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: DeviceRotateProps) => {
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
