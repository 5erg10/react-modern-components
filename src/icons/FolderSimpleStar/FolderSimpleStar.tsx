import { SVGProps } from "react";

export type FolderSimpleStarVariant = "duotone" | "fill" | "light";

export interface FolderSimpleStarProps extends SVGProps<SVGSVGElement> {
  variant?: FolderSimpleStarVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M128,208a8,8,0,0,1-8,8H40a16,16,0,0,1-16-16V64A16,16,0,0,1,40,48H93.33a16.12,16.12,0,0,1,9.6,3.2L130.67,72H216a16,16,0,0,1,16,16v32a8,8,0,0,1-16,0V88H128a8,8,0,0,1-4.8-1.6L93.33,64H40V200h80A8,8,0,0,1,128,208Zm111.63-48.8a8,8,0,0,0-7-5.56l-29.84-2.31-11.43-26.5a8,8,0,0,0-14.7,0l-11.43,26.5-29.84,2.31a8,8,0,0,0-4.47,14.14l22.51,18.59-6.85,27.71a8,8,0,0,0,11.82,8.81L184,207.82l25.61,15.07a8,8,0,0,0,11.82-8.81l-6.85-27.71,22.51-18.59A8,8,0,0,0,239.63,159.2Z\"/>";
const LIGHT_INNER     = "<path d=\"M38,64V200a2,2,0,0,0,2,2h80a6,6,0,0,1,0,12H40a14,14,0,0,1-14-14V64A14,14,0,0,1,40,50H93.33a14.06,14.06,0,0,1,8.4,2.8L130,74h86a14,14,0,0,1,14,14v32a6,6,0,0,1-12,0V88a2,2,0,0,0-2-2H128a6,6,0,0,1-3.6-1.2L94.53,62.4a2,2,0,0,0-1.2-.4H40A2,2,0,0,0,38,64ZM235.82,166.24l-23.49,19.39,7.16,28.93a6,6,0,0,1-8.87,6.61L184,205.5l-26.62,15.67a6,6,0,0,1-8.87-6.61l7.16-28.93-23.49-19.39a6,6,0,0,1,3.36-10.61l31-2.4,11.91-27.61a6,6,0,0,1,11,0l11.91,27.61,31,2.4a6,6,0,0,1,3.36,10.61Zm-19.1.21-19.83-1.53a6,6,0,0,1-5-3.61L184,143.14l-7.84,18.17a6,6,0,0,1-5,3.61l-19.83,1.53,14.94,12.33a6,6,0,0,1,2,6.07l-4.63,18.74L181,193.36a6,6,0,0,1,6.08,0l17.37,10.23-4.64-18.74a6,6,0,0,1,2-6.07Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M128,208a8,8,0,0,1-8,8H40a16,16,0,0,1-16-16V64A16,16,0,0,1,40,48H93.33a16.12,16.12,0,0,1,9.6,3.2L130.67,72H216a16,16,0,0,1,16,16v32a8,8,0,0,1-16,0V88H128a8,8,0,0,1-4.8-1.6L93.33,64H40V200h80A8,8,0,0,1,128,208Zm109.09-40.22-22.51,18.59,6.85,27.71a8,8,0,0,1-11.82,8.81L184,207.82l-25.61,15.07a8,8,0,0,1-11.82-8.81l6.85-27.71-22.51-18.59a8,8,0,0,1,4.47-14.14l29.84-2.31,11.43-26.5a8,8,0,0,1,14.7,0l11.43,26.5,29.84,2.31a8,8,0,0,1,4.47,14.14Zm-25.47.28-14.89-1.15a8,8,0,0,1-6.73-4.8l-6-13.92-6,13.92a8,8,0,0,1-6.73,4.8l-14.89,1.15,11.11,9.18a8,8,0,0,1,2.68,8.09l-3.5,14.12,13.27-7.81a8,8,0,0,1,8.12,0l13.27,7.81-3.5-14.12a8,8,0,0,1,2.68-8.09Z\"/>";
const SECONDARY_PATHS = "<path d=\"M205.6,183.41,213.67,216,184,198.54,154.33,216l8.07-32.59L136,161.61l34.65-2.67L184,128l13.35,30.94L232,161.61Z\"/>";

export const FolderSimpleStar = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: FolderSimpleStarProps) => {
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
