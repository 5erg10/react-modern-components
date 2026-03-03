import { SVGProps } from "react";

export type FolderStarVariant = "duotone" | "fill" | "light";

export interface FolderStarProps extends SVGProps<SVGSVGElement> {
  variant?: FolderStarVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M237.09,167.78l-22.51,18.59,6.85,27.71a8,8,0,0,1-11.82,8.81L184,207.82l-25.61,15.07a8,8,0,0,1-11.82-8.81l6.85-27.71-22.51-18.59a8,8,0,0,1,4.47-14.14l29.84-2.31,11.43-26.5a8,8,0,0,1,14.7,0l11.43,26.5,29.84,2.31a8,8,0,0,1,4.47,14.14ZM128.56,208a8,8,0,0,1-8,8H39.38A15.4,15.4,0,0,1,24,200.62V56A16,16,0,0,1,40,40H92.69A15.86,15.86,0,0,1,104,44.69L131.31,72H216a16,16,0,0,1,16,16v32a8,8,0,0,1-16,0V88H40V200h80.56A8,8,0,0,1,128.56,208ZM40,72h68.69l-16-16H40Z\"/>";
const LIGHT_INNER     = "<path d=\"M216,86a2,2,0,0,1,2,2v32a6,6,0,0,0,12,0V88a14,14,0,0,0-14-14H130.48l-27.9-27.9A13.9,13.9,0,0,0,92.69,42H40A14,14,0,0,0,26,56V200.61A13.39,13.39,0,0,0,39.38,214h81.18a6,6,0,0,0,0-12H39.38A1.4,1.4,0,0,1,38,200.61V86ZM40,54H92.69a2,2,0,0,1,1.41.58L113.52,74H38V56A2,2,0,0,1,40,54ZM237.72,159.8a6,6,0,0,0-5.26-4.17l-31-2.4-11.91-27.61a6,6,0,0,0-11,0l-11.91,27.61-31,2.4a6,6,0,0,0-3.36,10.61l23.49,19.39-7.16,28.93a6,6,0,0,0,8.87,6.61L184,205.5l26.62,15.67a6,6,0,0,0,8.87-6.61l-7.16-28.93,23.49-19.39A6,6,0,0,0,237.72,159.8Zm-35.94,19a6,6,0,0,0-2,6.07l4.64,18.74L187,193.36a6,6,0,0,0-6.08,0l-17.37,10.23,4.63-18.74a6,6,0,0,0-2-6.07l-14.94-12.33,19.83-1.53a6,6,0,0,0,5-3.61L184,143.14l7.84,18.17a6,6,0,0,0,5,3.61l19.83,1.53Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M120.56,200H40V88H216v32a8,8,0,0,0,16,0V88a16,16,0,0,0-16-16H131.31L104,44.69A15.86,15.86,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.4,15.4,0,0,0,39.38,216h81.18a8,8,0,0,0,0-16ZM92.69,56l16,16H40V56ZM239.63,159.2a8,8,0,0,0-7-5.56l-29.84-2.31-11.43-26.5a8,8,0,0,0-14.7,0l-11.43,26.5-29.84,2.31a8,8,0,0,0-4.47,14.14l22.51,18.59-6.85,27.71a8,8,0,0,0,11.82,8.81L184,207.82l25.61,15.07a8,8,0,0,0,11.82-8.81l-6.85-27.71,22.51-18.59A8,8,0,0,0,239.63,159.2Zm-39.12,18a8,8,0,0,0-2.68,8.09l3.5,14.12-13.27-7.81a8,8,0,0,0-8.12,0l-13.27,7.81,3.5-14.12a8,8,0,0,0-2.68-8.09l-11.11-9.18,14.89-1.15a8,8,0,0,0,6.73-4.8l6-13.92,6,13.92a8,8,0,0,0,6.73,4.8l14.89,1.15Z\"/>";
const SECONDARY_PATHS = "<path d=\"M205.6,183.41,213.67,216,184,198.54,154.33,216l8.07-32.59L136,161.61l34.65-2.67L184,128l13.35,30.94L232,161.61Z\"/>";

export const FolderStar = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: FolderStarProps) => {
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
