import { SVGProps } from "react";

export type GraphVariant = "duotone" | "fill" | "light";

export interface GraphProps extends SVGProps<SVGSVGElement> {
  variant?: GraphVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M200,152a31.84,31.84,0,0,0-19.53,6.68l-23.11-18A31.65,31.65,0,0,0,160,128c0-.74,0-1.48-.08-2.21l13.23-4.41A32,32,0,1,0,168,104c0,.74,0,1.48.08,2.21l-13.23,4.41A32,32,0,0,0,128,96a32.59,32.59,0,0,0-5.27.44L115.89,81A32,32,0,1,0,96,88a32.59,32.59,0,0,0,5.27-.44l6.84,15.4a31.92,31.92,0,0,0-8.57,39.64L73.83,165.44a32.06,32.06,0,1,0,10.63,12l25.71-22.84a31.91,31.91,0,0,0,37.36-1.24l23.11,18A31.65,31.65,0,0,0,168,184a32,32,0,1,0,32-32Zm0-64a16,16,0,1,1-16,16A16,16,0,0,1,200,88ZM80,56A16,16,0,1,1,96,72,16,16,0,0,1,80,56ZM56,208a16,16,0,1,1,16-16A16,16,0,0,1,56,208Zm144-8a16,16,0,1,1,16-16A16,16,0,0,1,200,200Z\"/>";
const LIGHT_INNER     = "<path d=\"M200,154a29.87,29.87,0,0,0-19.5,7.23L154.88,141.3A29.83,29.83,0,0,0,158,128a30.52,30.52,0,0,0-.22-3.6L174,119a30,30,0,1,0-4-15,30.52,30.52,0,0,0,.22,3.6L154,113a29.91,29.91,0,0,0-32.42-14.31l-8.14-18.3a30,30,0,1,0-11,4.88l8.14,18.3A29.92,29.92,0,0,0,102.06,143L74,168a30.08,30.08,0,1,0,8,9L110,152a29.91,29.91,0,0,0,37.47-1.23l25.62,19.93A30,30,0,1,0,200,154Zm0-68a18,18,0,1,1-18,18A18,18,0,0,1,200,86ZM78,56A18,18,0,1,1,96,74,18,18,0,0,1,78,56ZM56,210a18,18,0,1,1,18-18A18,18,0,0,1,56,210Zm72-64a18,18,0,1,1,18-18A18,18,0,0,1,128,146Zm72,56a18,18,0,1,1,18-18A18,18,0,0,1,200,202Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M200,152a31.84,31.84,0,0,0-19.53,6.68l-23.11-18A31.65,31.65,0,0,0,160,128c0-.74,0-1.48-.08-2.21l13.23-4.41A32,32,0,1,0,168,104c0,.74,0,1.48.08,2.21l-13.23,4.41A32,32,0,0,0,128,96a32.59,32.59,0,0,0-5.27.44L115.89,81A32,32,0,1,0,96,88a32.59,32.59,0,0,0,5.27-.44l6.84,15.4a31.92,31.92,0,0,0-8.57,39.64L73.83,165.44a32.06,32.06,0,1,0,10.63,12l25.71-22.84a31.91,31.91,0,0,0,37.36-1.24l23.11,18A31.65,31.65,0,0,0,168,184a32,32,0,1,0,32-32Zm0-64a16,16,0,1,1-16,16A16,16,0,0,1,200,88ZM80,56A16,16,0,1,1,96,72,16,16,0,0,1,80,56ZM56,208a16,16,0,1,1,16-16A16,16,0,0,1,56,208Zm56-80a16,16,0,1,1,16,16A16,16,0,0,1,112,128Zm88,72a16,16,0,1,1,16-16A16,16,0,0,1,200,200Z\"/>";
const SECONDARY_PATHS = "<path d=\"M152,128a24,24,0,1,1-24-24A24,24,0,0,1,152,128Z\"/>";

export const Graph = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: GraphProps) => {
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
