import { SVGProps } from "react";

export type WaveSineVariant = "duotone" | "fill" | "light";

export interface WaveSineProps extends SVGProps<SVGSVGElement> {
  variant?: WaveSineVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm-4.78,91.44c-16.68,35-31.06,50.56-46.65,50.56-19.68,0-31.39-24.56-43.79-50.56C112,113,101,90,91.43,90c-3.74,0-14.37,4-32.21,41.44a8,8,0,0,1-14.44-6.88C61.46,89.59,75.84,74,91.43,74c19.68,0,31.39,24.56,43.79,50.56C144,143,155,166,164.57,166c3.74,0,14.37-4,32.21-41.44a8,8,0,1,1,14.44,6.88Z\"/>";
const LIGHT_INNER     = "<path d=\"M237.43,130.55C215.84,176.57,197,198,178,198c-23.83,0-39.2-32.76-55.47-67.45C109.26,102.17,94.17,70,78,70c-9.18,0-25,10.5-48.53,60.55a6,6,0,0,1-10.86-5.1C40.16,79.43,59,58,78,58c23.83,0,39.2,32.76,55.47,67.45C146.74,153.83,161.83,186,178,186c9.18,0,25.05-10.5,48.53-60.55a6,6,0,0,1,10.86,5.1Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M239.24,131.4c-22,46.8-41.4,68.6-61.2,68.6-25.1,0-40.73-33.32-57.28-68.6C107.7,103.56,92.9,72,78,72c-16.4,0-36.31,37.21-46.72,59.4a8,8,0,0,1-14.48-6.8C38.71,77.8,58.16,56,78,56c25.1,0,40.73,33.32,57.28,68.6C148.3,152.44,163.1,184,178,184c16.4,0,36.31-37.21,46.72-59.4a8,8,0,0,1,14.48,6.8Z\"/>";
const SECONDARY_PATHS = "<path d=\"M232,128c-52,110.85-78,55.43-104,0ZM24,128H128C102,72.57,76,17.15,24,128Z\"/>";

export const WaveSine = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: WaveSineProps) => {
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
