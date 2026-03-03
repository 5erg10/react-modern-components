import { SVGProps } from "react";

export type EmptyVariant = "duotone" | "fill" | "light";

export interface EmptyProps extends SVGProps<SVGSVGElement> {
  variant?: EmptyVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M170.49,91.59A56,56,0,0,1,97.54,175ZM128,72a56,56,0,0,0-42.49,92.41l73-83.37A55.67,55.67,0,0,0,128,72Zm104,56A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Zm-32,0a71.68,71.68,0,0,0-18.89-48.55L186,73.27a8,8,0,1,0-12-10.54l-4.91,6.18A72,72,0,0,0,74.89,176.55L70,182.73a8,8,0,0,0,12,10.54l4.91-6.18A71.95,71.95,0,0,0,200,128Z\"/>";
const LIGHT_INNER     = "<path d=\"M195.51,62.66,212.44,44A6,6,0,1,0,203.56,36L186.63,54.58A94,94,0,0,0,60.49,193.34L43.56,212A6,6,0,0,0,52.44,220l16.93-18.62A94,94,0,0,0,195.51,62.66ZM46,128A81.93,81.93,0,0,1,178.53,63.49L68.59,184.43A81.69,81.69,0,0,1,46,128Zm82,82a81.57,81.57,0,0,1-50.53-17.49L187.41,71.57A81.94,81.94,0,0,1,128,210Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M198.24,62.63l15.68-17.25a8,8,0,0,0-11.84-10.76L186.4,51.86A95.95,95.95,0,0,0,57.76,193.37L42.08,210.62a8,8,0,1,0,11.84,10.76L69.6,204.14A95.95,95.95,0,0,0,198.24,62.63ZM48,128A80,80,0,0,1,175.6,63.75l-107,117.73A79.63,79.63,0,0,1,48,128Zm80,80a79.55,79.55,0,0,1-47.6-15.75l107-117.73A79.95,79.95,0,0,1,128,208Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z\"/>";

export const Empty = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: EmptyProps) => {
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
