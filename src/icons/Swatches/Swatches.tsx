import { SVGProps } from "react";

export type SwatchesVariant = "duotone" | "fill" | "light";

export interface SwatchesProps extends SVGProps<SVGSVGElement> {
  variant?: SwatchesVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M240,155.91a16,16,0,0,0-1-5.22L219.94,98.48A16,16,0,0,0,199.49,89l-67.81,24.57,12.08-69A16,16,0,0,0,130.84,26L76.17,16.25a15.94,15.94,0,0,0-18.47,13l-25,143.12A43.82,43.82,0,0,0,75.78,224H224a16,16,0,0,0,16-16ZM76,196a16,16,0,1,1,16-16A16,16,0,0,1,76,196Zm42.72-8.38,9.78-55.92L204.92,104,224,156.11,116.78,195A44.89,44.89,0,0,0,118.72,187.62ZM224,208H127.74L224,173.11Z\"/>";
const LIGHT_INNER     = "<path d=\"M86,180a10,10,0,1,1-10-10A10,10,0,0,1,86,180Zm152-23.81V208a14,14,0,0,1-14,14H76a44.18,44.18,0,0,1-7.58-.65,42,42,0,0,1-33.81-48.64l25-143.13A13.94,13.94,0,0,1,75.82,18.22l54.67,9.72a14,14,0,0,1,11.3,16.21l-12.67,72.44,71-25.75a14,14,0,0,1,17.89,8.32l19.09,52.22A15.66,15.66,0,0,1,238,156.19Zm-133.07,29L130,42.08a2,2,0,0,0-1.58-2.32L73.72,30l-.34,0a1.84,1.84,0,0,0-1.07.35,2,2,0,0,0-.82,1.3l-25,143.13a30,30,0,0,0,24.09,34.76,29.25,29.25,0,0,0,22-4.89,29.81,29.81,0,0,0,12.33-19.44Zm8.25,13.17L224.71,158a2,2,0,0,0,1.11-1,1.86,1.86,0,0,0,.06-1.46l-19.09-52.21a2,2,0,0,0-2.53-1.17l-77.53,28.09-10,57.07A41.9,41.9,0,0,1,113.18,198.38ZM226,170.27,116.35,210H224a2,2,0,0,0,2-2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M88,180a12,12,0,1,1-12-12A12,12,0,0,1,88,180Zm152-23.81V208a16,16,0,0,1-16,16H76a46.36,46.36,0,0,1-7.94-.68,44,44,0,0,1-35.43-50.95l25-143.13a15.94,15.94,0,0,1,18.47-13L130.84,26a16,16,0,0,1,12.92,18.52l-12.08,69L199.49,89a16,16,0,0,1,20.45,9.52L239,150.69A18.35,18.35,0,0,1,240,156.19ZM103,184.87,128,41.74,73.46,32l-25,143.1A28,28,0,0,0,70.9,207.57,27.29,27.29,0,0,0,91.46,203,27.84,27.84,0,0,0,103,184.87ZM116.78,195,224,156.11,204.92,104,128.5,131.7l-9.78,55.92A44.63,44.63,0,0,1,116.78,195ZM224,173.12,127.74,208H224Z\"/>";
const SECONDARY_PATHS = "<path d=\"M135.88,43.11l-25,143.14a35.71,35.71,0,0,1-41.34,29.2h0a36,36,0,0,1-28.95-41.71l25-143.13a8,8,0,0,1,9.19-6.49l54.67,9.73A8,8,0,0,1,135.88,43.11Z\"/>";

export const Swatches = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: SwatchesProps) => {
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
