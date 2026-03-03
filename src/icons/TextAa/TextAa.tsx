import { SVGProps } from "react";

export type TextAaVariant = "duotone" | "fill" | "light";

export interface TextAaProps extends SVGProps<SVGSVGElement> {
  variant?: TextAaVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M200,156c0,6.5-7.33,12-16,12s-16-5.5-16-12,7.33-12,16-12S200,149.5,200,156ZM232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM143.37,172.88l-44-104a8,8,0,0,0-14.74,0l-44,104a8,8,0,0,0,14.74,6.24L66.84,152h50.32l11.47,27.12a8,8,0,0,0,14.74-6.24ZM216,124c0-15.44-14.36-28-32-28a34.86,34.86,0,0,0-20.78,6.68,8,8,0,0,0,9.56,12.83A18.84,18.84,0,0,1,184,112c8.56,0,15.8,5.36,16,11.76v8A35.24,35.24,0,0,0,184,128c-17.64,0-32,12.56-32,28s14.36,28,32,28a35.13,35.13,0,0,0,16.93-4.26A8,8,0,0,0,216,176ZM73.61,136h36.78L92,92.53Z\"/>";
const LIGHT_INNER     = "<path d=\"M85.43,53.45a6,6,0,0,0-10.86,0l-64,136a6,6,0,1,0,10.86,5.11L38.63,158h82.74l17.2,36.55a6,6,0,1,0,10.86-5.11ZM44.28,146,80,70.09,115.72,146ZM200,98c-12.21,0-21.71,3.28-28.23,9.74a6,6,0,0,0,8.46,8.52c4.18-4.15,10.84-6.26,19.77-6.26,14.34,0,26,9.87,26,22v7.24A40.36,40.36,0,0,0,200,130c-20.95,0-38,15.25-38,34s17.05,34,38,34a40.36,40.36,0,0,0,26-9.24V192a6,6,0,0,0,12,0V132C238,113.25,221,98,200,98Zm0,88c-14.34,0-26-9.87-26-22s11.66-22,26-22,26,9.87,26,22S214.34,186,200,186Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M87.24,52.59a8,8,0,0,0-14.48,0l-64,136a8,8,0,1,0,14.48,6.81L39.9,160h80.2l16.66,35.4a8,8,0,1,0,14.48-6.81ZM47.43,144,80,74.79,112.57,144ZM200,96c-12.76,0-22.73,3.47-29.63,10.32a8,8,0,0,0,11.26,11.36c3.8-3.77,10-5.68,18.37-5.68,13.23,0,24,9,24,20v3.22A42.76,42.76,0,0,0,200,128c-22.06,0-40,16.15-40,36s17.94,36,40,36a42.73,42.73,0,0,0,24-7.25,8,8,0,0,0,16-.75V132C240,112.15,222.06,96,200,96Zm0,88c-13.23,0-24-9-24-20s10.77-20,24-20,24,9,24,20S213.23,184,200,184Z\"/>";
const SECONDARY_PATHS = "<path d=\"M232,164c0,15.46-14.33,28-32,28s-32-12.54-32-28,14.33-28,32-28S232,148.54,232,164ZM34.82,152h90.36L80,56Z\"/>";

export const TextAa = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: TextAaProps) => {
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
