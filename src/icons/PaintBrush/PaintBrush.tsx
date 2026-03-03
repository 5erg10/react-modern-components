import { SVGProps } from "react";

export type PaintBrushVariant = "duotone" | "fill" | "light";

export interface PaintBrushProps extends SVGProps<SVGSVGElement> {
  variant?: PaintBrushVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M232,32a8,8,0,0,0-8-8c-44.08,0-89.31,49.71-114.43,82.63A60,60,0,0,0,32,164c0,30.88-19.54,44.73-20.47,45.37A8,8,0,0,0,16,224H92a60,60,0,0,0,57.37-77.57C182.3,121.31,232,76.08,232,32ZM124.42,113.55q5.14-6.66,10.09-12.55A76.23,76.23,0,0,1,155,121.49q-5.9,4.94-12.55,10.09A60.54,60.54,0,0,0,124.42,113.55Zm42.7-2.68a92.57,92.57,0,0,0-22-22c31.78-34.53,55.75-45,69.9-47.91C212.17,55.12,201.65,79.09,167.12,110.87Z\"/>";
const LIGHT_INNER     = "<path d=\"M224,26c-20.8,0-44.11,11.41-69.3,33.9C136.62,76.06,121,94.9,110.3,109A58,58,0,0,0,34,164c0,32.07-20.43,46.39-21.35,47A6,6,0,0,0,16,222H92a58,58,0,0,0,55-76.3c14.08-10.67,32.92-26.32,49.08-44.4C218.59,76.11,230,52.8,230,32A6,6,0,0,0,224,26ZM92,210H30.65C37.92,200.85,46,185.78,46,164a46,46,0,1,1,46,46Zm29.49-95.91c3.6-4.67,7.88-10,12.71-15.69a78.17,78.17,0,0,1,23.4,23.4c-5.67,4.83-11,9.11-15.69,12.71A58.38,58.38,0,0,0,121.49,114.09Zm45.2-.3a90.24,90.24,0,0,0-24.48-24.48C163.05,66.46,191,42,217.56,38.44,214,65,189.54,93,166.69,113.79Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M232,32a8,8,0,0,0-8-8c-44.08,0-89.31,49.71-114.43,82.63A60,60,0,0,0,32,164c0,30.88-19.54,44.73-20.47,45.37A8,8,0,0,0,16,224H92a60,60,0,0,0,57.37-77.57C182.3,121.31,232,76.08,232,32ZM92,208H34.63C41.38,198.41,48,183.92,48,164a44,44,0,1,1,44,44Zm32.42-94.45q5.14-6.66,10.09-12.55A76.23,76.23,0,0,1,155,121.49q-5.9,4.94-12.55,10.09A60.54,60.54,0,0,0,124.42,113.55Zm42.7-2.68a92.57,92.57,0,0,0-22-22c31.78-34.53,55.75-45,69.9-47.91C212.17,55.12,201.65,79.09,167.12,110.87Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,32c0,32.81-31.64,67.43-58.64,91.05A84.39,84.39,0,0,0,133,90.64C156.57,63.64,191.19,32,224,32Z\"/>";

export const PaintBrush = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PaintBrushProps) => {
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
