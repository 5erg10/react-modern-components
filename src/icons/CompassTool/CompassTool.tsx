import { SVGProps } from "react";

export type CompassToolVariant = "duotone" | "fill" | "light";

export interface CompassToolProps extends SVGProps<SVGSVGElement> {
  variant?: CompassToolVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M215.12,123.64a8,8,0,1,0-14.24-7.28,79.58,79.58,0,0,1-33.08,33.5l-18.24-41.05A36,36,0,0,0,136,44.91V24a8,8,0,0,0-16,0V44.91a36,36,0,0,0-13.56,63.9L56.69,220.75a8,8,0,1,0,14.62,6.5l25.14-56.56A95.48,95.48,0,0,0,128,176a99.13,99.13,0,0,0,31.6-5.21l25.09,56.46a8,8,0,0,0,14.62-6.5l-25-56.25A95.81,95.81,0,0,0,215.12,123.64ZM128,160a79.52,79.52,0,0,1-25-4l18.08-40.68a35.75,35.75,0,0,0,13.88,0l18.14,40.8A83.21,83.21,0,0,1,128,160Z\"/>";
const LIGHT_INNER     = "<path d=\"M213.34,122.73a6,6,0,1,0-10.68-5.46,81.79,81.79,0,0,1-35.81,35.36l-18.14-40.8A38,38,0,0,0,134,42.48V24a6,6,0,0,0-12,0V42.48a38,38,0,0,0-14.71,69.35L58.52,221.56a6,6,0,1,0,11,4.88l25.9-58.26A93.37,93.37,0,0,0,128,174a97,97,0,0,0,32.68-5.69l25.84,58.13a6,6,0,1,0,11-4.88l-25.77-58A93.92,93.92,0,0,0,213.34,122.73ZM128,54a26,26,0,1,1-26,26A26,26,0,0,1,128,54Zm0,108a81.51,81.51,0,0,1-27.73-4.83l18-40.45a37.85,37.85,0,0,0,19.52,0l18,40.6A85.34,85.34,0,0,1,128,162Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M215.12,123.64a8,8,0,1,0-14.24-7.28,79.58,79.58,0,0,1-33.08,33.5l-16.58-37.32A40,40,0,0,0,136,40.8V24a8,8,0,0,0-16,0V40.8a40,40,0,0,0-15.22,71.74L56.69,220.75a8,8,0,1,0,14.62,6.5l25.14-56.56A95.48,95.48,0,0,0,128,176a99.13,99.13,0,0,0,31.6-5.21l25.09,56.46a8,8,0,0,0,14.62-6.5l-25-56.25A95.81,95.81,0,0,0,215.12,123.64ZM128,56a24,24,0,1,1-24,24A24,24,0,0,1,128,56Zm0,104a79.52,79.52,0,0,1-25-4l16.42-36.94a39.81,39.81,0,0,0,17.2,0l16.48,37.06A83.21,83.21,0,0,1,128,160Z\"/>";
const SECONDARY_PATHS = "<path d=\"M160,80a32,32,0,1,1-32-32A32,32,0,0,1,160,80Z\"/>";

export const CompassTool = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CompassToolProps) => {
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
