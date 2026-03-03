import { SVGProps } from "react";

export type NeedleVariant = "duotone" | "fill" | "light";

export interface NeedleProps extends SVGProps<SVGSVGElement> {
  variant?: NeedleVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M212.28,43.72a40,40,0,0,0-56.56,0l-24,24a8,8,0,0,0-2.23,4.3C120.69,123.28,36,208.73,34.36,210.33h0a8,8,0,0,0,11.31,11.32h0c.86-.87,86.83-86.31,138.32-95.15a8,8,0,0,0,4.3-2.23l24-24a40,40,0,0,0,0-56.56ZM189.66,77.66l-16,16a8,8,0,0,1-11.32-11.32l16-16a8,8,0,0,1,11.32,11.32Z\"/>";
const LIGHT_INNER     = "<path d=\"M188.24,67.76a6,6,0,0,1,0,8.48l-16,16a6,6,0,0,1-8.48-8.48l16-16A6,6,0,0,1,188.24,67.76ZM222,72a37.74,37.74,0,0,1-11.13,26.87l-24,24a6,6,0,0,1-3.23,1.67c-52.14,9-138.53,94.84-139.4,95.7a5.81,5.81,0,0,1-1.82,1.25h0A6.12,6.12,0,0,1,40,222a6,6,0,0,1-4.24-10.24h0c1.4-1.41,86.78-87.44,95.69-139.39a6,6,0,0,1,1.67-3.23l24-24A38,38,0,0,1,222,72Zm-12,0a26,26,0,0,0-44.38-18.38L142.93,76.3c-4.14,20.79-18.62,47.61-43.13,79.9,32.29-24.51,59.11-39,79.9-43.13l22.68-22.69A25.79,25.79,0,0,0,210,72Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M189.66,66.34a8,8,0,0,1,0,11.32l-16,16a8,8,0,0,1-11.32-11.32l16-16A8,8,0,0,1,189.66,66.34ZM224,72a39.71,39.71,0,0,1-11.72,28.28l-24,24a8,8,0,0,1-4.3,2.23c-51.49,8.84-137.46,94.28-138.32,95.15h0a8,8,0,0,1-11.31-11.32h0C36,208.73,120.69,123.28,129.49,72a8,8,0,0,1,2.23-4.3l24-24A40,40,0,0,1,224,72Zm-16,0a24,24,0,0,0-41-17L144.77,77.29c-4.41,21.15-18.9,46.19-35.49,69.43,23.24-16.59,48.28-31.08,69.43-35.49L201,89A23.85,23.85,0,0,0,208,72Z\"/>";
const SECONDARY_PATHS = "<path d=\"M206.63,94.63l-24,24C128,128,40,216,40,216s88-88,97.37-142.63l24-24a32,32,0,0,1,45.26,45.26Z\"/>";

export const Needle = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: NeedleProps) => {
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
