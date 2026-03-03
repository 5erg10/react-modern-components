import { SVGProps } from "react";

export type ThermometerHotVariant = "duotone" | "fill" | "light";

export interface ThermometerHotProps extends SVGProps<SVGSVGElement> {
  variant?: ThermometerHotVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M152,146.08V40a32,32,0,0,0-64,0V146.08a56,56,0,1,0,64,0ZM136,56H104V40a16,16,0,0,1,32,0Zm41.3,24.77a8,8,0,0,1,2.33-11.07c15-9.79,26.87-4.75,35.51-1.06C223,72,227.76,74,235.63,68.89a8,8,0,0,1,8.74,13.41C237.88,86.53,232,88,226.69,88c-7,0-12.92-2.54-17.83-4.63C201,80,196.24,78,188.37,83.11A8,8,0,0,1,177.3,80.77Zm69.4,22.46a8,8,0,0,1-2.33,11.07C237.88,118.53,232,120,226.69,120c-7,0-12.92-2.54-17.83-4.63-7.87-3.36-12.62-5.38-20.49-.25a8,8,0,0,1-8.74-13.41c15-9.79,26.87-4.75,35.51-1.06,7.87,3.36,12.62,5.39,20.49.25A8,8,0,0,1,246.7,103.23Z\"/>";
const LIGHT_INNER     = "<path d=\"M126,154.6V48a6,6,0,0,0-12,0V154.6a30,30,0,1,0,12,0ZM120,202a18,18,0,1,1,18-18A18,18,0,0,1,120,202Zm38-67V48a38,38,0,0,0-76,0v87a62,62,0,1,0,76,0Zm-38,99a50,50,0,0,1-28.57-91A6,6,0,0,0,94,138V48a26,26,0,0,1,52,0v90a6,6,0,0,0,2.57,4.92A50,50,0,0,1,120,234ZM179,79.68a6,6,0,0,1,1.75-8.3c14.14-9.21,24.95-4.61,33.63-.9,7.9,3.37,13.6,5.8,22.37.09a6,6,0,1,1,6.55,10.05c-6.12,4-11.62,5.39-16.59,5.39-6.51,0-12.11-2.39-17-4.49-7.89-3.37-13.59-5.8-22.37-.09A6,6,0,0,1,179,79.68ZM245,104.32a6,6,0,0,1-1.76,8.3c-6.12,4-11.62,5.39-16.59,5.39-6.51,0-12.11-2.39-17-4.49-7.89-3.37-13.59-5.8-22.37-.09a6,6,0,0,1-6.55-10.05c14.14-9.21,24.95-4.6,33.63-.9,7.9,3.37,13.6,5.8,22.37.09A6,6,0,0,1,245,104.32Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M128,153V48a8,8,0,0,0-16,0V153a32,32,0,1,0,16,0Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,120,200Zm40-66V48a40,40,0,0,0-80,0v86a64,64,0,1,0,80,0Zm-40,98a48,48,0,0,1-27.42-87.4A8,8,0,0,0,96,138V48a24,24,0,0,1,48,0v90a8,8,0,0,0,3.42,6.56A48,48,0,0,1,120,232ZM177.3,80.77a8,8,0,0,1,2.33-11.07c15-9.79,26.87-4.75,35.51-1.06C223,72,227.76,74,235.63,68.89a8,8,0,0,1,8.74,13.41C237.88,86.53,232,88,226.69,88c-7,0-12.92-2.54-17.83-4.63C201,80,196.24,78,188.37,83.11A8,8,0,0,1,177.3,80.77Zm69.4,22.46a8,8,0,0,1-2.33,11.07C237.88,118.53,232,120,226.69,120c-7,0-12.92-2.54-17.83-4.63-7.87-3.36-12.62-5.38-20.49-.25a8,8,0,0,1-8.74-13.41c15-9.79,26.87-4.75,35.51-1.06,7.87,3.36,12.62,5.39,20.49.25A8,8,0,0,1,246.7,103.23Z\"/>";
const SECONDARY_PATHS = "<path d=\"M152,138V48a32,32,0,0,0-64,0v90a56,56,0,1,0,64,0Zm-32,70a24,24,0,1,1,24-24A24,24,0,0,1,120,208Z\"/>";

export const ThermometerHot = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ThermometerHotProps) => {
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
