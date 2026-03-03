import { SVGProps } from "react";

export type ToiletPaperVariant = "duotone" | "fill" | "light";

export interface ToiletPaperProps extends SVGProps<SVGSVGElement> {
  variant?: ToiletPaperVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M184,120a8,8,0,0,1-8,8H160a8,8,0,0,1,0-16h16A8,8,0,0,1,184,120Zm56,0v88a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V186.35C87.37,200.37,76.18,208,64,208c-13.87,0-26.46-9.89-35.44-27.85C20.46,164,16,142.59,16,120s4.46-43.95,12.56-60.15C37.54,41.89,50.13,32,64,32H192c13.87,0,26.46,9.89,35.44,27.85C235.54,76.05,240,97.41,240,120ZM76,120a12,12,0,1,0-12,12A12,12,0,0,0,76,120Zm148,8H208a8,8,0,0,1,0-16h15.79C221.84,73.9,206.16,48,192,48H92.12a73.6,73.6,0,0,1,7.32,11.85c7.14,14.28,11.44,32.56,12.37,52.15H128a8,8,0,0,1,0,16H112v80H224Z\"/>";
const LIGHT_INNER     = "<path d=\"M74,120a10,10,0,1,1-10-10A10,10,0,0,1,74,120Zm164,0v88a14,14,0,0,1-14,14H112a14,14,0,0,1-14-14V178.48C89.65,195.49,77.6,206,64,206c-25.79,0-46-37.78-46-86S38.21,34,64,34H192C217.79,34,238,71.78,238,120ZM98,120c0-44.26-17.58-74-34-74S30,75.74,30,120s17.58,74,34,74S98,164.27,98,120Zm128,88V126H208a6,6,0,0,1,0-12h17.88C224.37,73.08,207.67,46,192,46H87.76c12.57,13.92,21.09,38.74,22.12,68H128a6,6,0,0,1,0,12H110v82a2,2,0,0,0,2,2H224A2,2,0,0,0,226,208Zm-50-94H160a6,6,0,0,0,0,12h16a6,6,0,0,0,0-12Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M76,120a12,12,0,1,1-12-12A12,12,0,0,1,76,120Zm164,0v88a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V186.35C87.37,200.37,76.18,208,64,208c-13.87,0-26.46-9.89-35.44-27.85C20.46,164,16,142.59,16,120s4.46-43.95,12.56-60.15C37.54,41.89,50.13,32,64,32H192c13.87,0,26.46,9.89,35.44,27.85C235.54,76.05,240,97.41,240,120ZM96,120c0-42.43-16.86-72-32-72S32,77.57,32,120s16.86,72,32,72S96,162.43,96,120Zm128,88V128H208a8,8,0,0,1,0-16h15.79C221.84,73.9,206.16,48,192,48H92.12a73.6,73.6,0,0,1,7.32,11.85c7.14,14.28,11.44,32.56,12.37,52.15H128a8,8,0,0,1,0,16H112v80Zm-48-96H160a8,8,0,0,0,0,16h16a8,8,0,0,0,0-16Z\"/>";
const SECONDARY_PATHS = "<path d=\"M104,120c0,44.18-17.91,80-40,80s-40-35.82-40-80S41.91,40,64,40,104,75.82,104,120Z\"/>";

export const ToiletPaper = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ToiletPaperProps) => {
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
