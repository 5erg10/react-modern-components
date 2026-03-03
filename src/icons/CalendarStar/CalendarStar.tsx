import { SVGProps } from "react";

export type CalendarStarVariant = "duotone" | "fill" | "light";

export interface CalendarStarProps extends SVGProps<SVGSVGElement> {
  variant?: CalendarStarVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,64V56a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0Zm106.55,60.7-24.46,20.19L161.55,175a4,4,0,0,1-1.49,4.17,4.05,4.05,0,0,1-2.39.79,4,4,0,0,1-2-.55L128,163.18l-27.64,16.27A4,4,0,0,1,94.45,175l7.46-30.15L77.45,124.7a4,4,0,0,1,2.24-7.08l32.24-2.49,12.4-28.71a4,4,0,0,1,7.34,0l12.4,28.71,32.24,2.49a4,4,0,0,1,2.24,7.08ZM184,64a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0Z\"/>";
const LIGHT_INNER     = "<path d=\"M208,34H182V24a6,6,0,0,0-12,0V34H86V24a6,6,0,0,0-12,0V34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Zm2,174a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H74V56a6,6,0,0,0,12,0V46h84V56a6,6,0,0,0,12,0V46h26a2,2,0,0,1,2,2Zm-33.54-92.37-31-2.4L133.51,85.62a6,6,0,0,0-11,0l-11.91,27.61-31,2.4a6,6,0,0,0-3.36,10.61l23.49,19.39-7.16,28.93a6,6,0,0,0,8.87,6.61L128,165.5l26.62,15.67a6,6,0,0,0,8.87-6.61l-7.16-28.93,23.49-19.39a6,6,0,0,0-3.36-10.61Zm-30.68,23.15a6,6,0,0,0-2,6.07l4.63,18.74L131,153.37a6,6,0,0,0-6.08,0l-17.37,10.22,4.63-18.74a6,6,0,0,0-2-6.07L95.28,126.45l19.83-1.53a6,6,0,0,0,5-3.61L128,103.14l7.84,18.17a6,6,0,0,0,5,3.61l19.83,1.53Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V208Zm-31.38-94.36-29.84-2.31-11.43-26.5a8,8,0,0,0-14.7,0l-11.43,26.5-29.84,2.31a8,8,0,0,0-4.47,14.14l22.52,18.59-6.86,27.71a8,8,0,0,0,11.82,8.81L128,167.82l25.61,15.07a8,8,0,0,0,11.82-8.81l-6.86-27.71,22.52-18.59a8,8,0,0,0-4.47-14.14Zm-32.11,23.6a8,8,0,0,0-2.68,8.09l3.5,14.12-13.27-7.81a8,8,0,0,0-8.12,0l-13.27,7.81,3.5-14.12a8,8,0,0,0-2.68-8.09l-11.11-9.18,14.89-1.15a8,8,0,0,0,6.73-4.8l6-13.92,6,13.92a8,8,0,0,0,6.73,4.8l14.89,1.15Z\"/>";
const SECONDARY_PATHS = "<path d=\"M149.6,143.41,157.67,176,128,158.54,98.33,176l8.07-32.59L80,121.61l34.65-2.67L128,88l13.35,30.94L176,121.61Z\"/>";

export const CalendarStar = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CalendarStarProps) => {
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
