import { SVGProps } from "react";

export type SneakerMoveVariant = "duotone" | "fill" | "light";

export interface SneakerMoveProps extends SVGProps<SVGSVGElement> {
  variant?: SneakerMoveVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M70.8,184H32a8,8,0,0,1,0-16H70.8a8,8,0,1,1,0,16Zm32,16H48a8,8,0,0,0,0,16h54.8a8,8,0,1,0,0-16Zm128.36-33.37-28.63-14.31A47.74,47.74,0,0,1,176,109.39V80a8,8,0,0,0-7.93-8A48.05,48.05,0,0,1,120,24.07a8,8,0,0,0-12.83-6.44L45.11,64.68a4,4,0,0,0-.41,6l51.44,51.44a8.19,8.19,0,0,1,.6,11.09,8,8,0,0,1-11.71.43l-53-53a4,4,0,0,0-6.44,1.09,16,16,0,0,0,3.12,18.22L142.4,213.66a8,8,0,0,0,5.66,2.34H224a16,16,0,0,0,16-16V180.94A15.92,15.92,0,0,0,231.16,166.63Z\"/>";
const LIGHT_INNER     = "<path d=\"M230.26,168.42l-28.62-14.31A49.72,49.72,0,0,1,174,109.39V80a6,6,0,0,0-6-6,50.06,50.06,0,0,1-50-50,6,6,0,0,0-9.62-4.78l-77,58.41-.15.11A14,14,0,0,0,30.1,98.53L143.82,212.24a6,6,0,0,0,4.24,1.76H224a14,14,0,0,0,14-14V180.94A13.94,13.94,0,0,0,230.26,168.42ZM226,200a2,2,0,0,1-2,2H150.54L38.59,90A2,2,0,0,1,38,88.52a2,2,0,0,1,.69-1.41L53.05,76.22l40,40a6,6,0,0,0,8.49-8.48L62.71,68.91,107,35.3a62.13,62.13,0,0,0,55,50.41v23.68a61.65,61.65,0,0,0,34.27,55.45l28.62,14.32a2,2,0,0,1,1.11,1.78ZM70.8,182H32a6,6,0,0,1,0-12H70.8a6,6,0,1,1,0,12Zm38,26a6,6,0,0,1-6,6H48a6,6,0,0,1,0-12h54.8A6,6,0,0,1,108.8,208Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M231.16,166.63l-28.63-14.31A47.74,47.74,0,0,1,176,109.39V80a8,8,0,0,0-8-8,48.05,48.05,0,0,1-48-48,8,8,0,0,0-12.83-6.37L30.13,76l-.2.16a16,16,0,0,0-1.24,23.75L142.4,213.66a8,8,0,0,0,5.66,2.34H224a16,16,0,0,0,16-16V180.94A15.92,15.92,0,0,0,231.16,166.63ZM224,200H151.37L40,88.63l12.87-9.76,38.79,38.79A8,8,0,0,0,103,106.34L65.74,69.11l40-30.31A64.15,64.15,0,0,0,160,87.5v21.89a63.65,63.65,0,0,0,35.38,57.24L224,180.94ZM70.8,184H32a8,8,0,0,1,0-16H70.8a8,8,0,1,1,0,16Zm40,24a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16h54.8A8,8,0,0,1,110.8,208Z\"/>";
const SECONDARY_PATHS = "<path d=\"M232,180.94V200a8,8,0,0,1-8,8H148.06L34.34,94.28A8,8,0,0,1,35,82.41L112,24a56,56,0,0,0,56,56v29.39a56,56,0,0,0,31,50.09l28.62,14.31A8,8,0,0,1,232,180.94Z\"/>";

export const SneakerMove = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: SneakerMoveProps) => {
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
