import { SVGProps } from "react";

export type LightningAVariant = "duotone" | "fill" | "light";

export interface LightningAProps extends SVGProps<SVGSVGElement> {
  variant?: LightningAVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M173.87,118.58,78.67,221.43A8,8,0,0,1,65,214.15l13.67-57.56-50-22.44a8,8,0,0,1-2.59-12.73l95.2-102.85A8,8,0,0,1,135,25.85L121.31,83.41l50,22.43a8,8,0,0,1,2.59,12.74Zm61.71,104.57A7.91,7.91,0,0,1,232,224a8,8,0,0,1-7.16-4.42L215.05,200H176.94l-9.79,19.58a8,8,0,0,1-14.31-7.16l36-72a8,8,0,0,1,14.31,0l36,72A8,8,0,0,1,235.58,223.15ZM207.05,184,196,161.89,184.94,184Z\"/>";
const LIGHT_INNER     = "<path d=\"M173.88,111.94a6,6,0,0,0-3.42-4.27L119,84.56,133,25.39a6,6,0,0,0-10.24-5.47L27.6,122.78a6,6,0,0,0,1.94,9.55L81,155.44,67,214.61a6,6,0,0,0,3,6.68,6,6,0,0,0,7.22-1.22l95.2-102.85A6,6,0,0,0,173.88,111.94Zm-90,83.21,9.92-41.76a6,6,0,0,0-3.38-6.86L42.08,124.8l74-80-9.92,41.77a6,6,0,0,0,3.38,6.86l48.38,21.73Zm153.44,18.16-36-72a6,6,0,0,0-10.74,0l-36,72a6,6,0,0,0,10.74,5.37L175.71,198h40.58l10.34,20.68A6,6,0,0,0,232,222a5.87,5.87,0,0,0,2.68-.64A6,6,0,0,0,237.36,213.31ZM181.71,186,196,157.42,210.29,186Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M175.84,111.54a8,8,0,0,0-4.56-5.7l-50-22.43L135,25.85a8,8,0,0,0-13.65-7.28L26.13,121.42a8,8,0,0,0,2.59,12.73l50,22.44L65,214.15a8,8,0,0,0,13.65,7.28l95.2-102.85A8,8,0,0,0,175.84,111.54ZM87.62,188.21l8.16-34.36a8,8,0,0,0-4.5-9.15L45.43,124.12l66.95-72.33-8.16,34.36a8,8,0,0,0,4.5,9.15l45.84,20.58Zm151.53,24.21-36-72a8,8,0,0,0-14.31,0l-36,72a8,8,0,0,0,14.31,7.16L176.94,200h38.11l9.79,19.58A8,8,0,0,0,232,224a8,8,0,0,0,7.15-11.58ZM184.94,184,196,161.89,207.05,184Z\"/>";
const SECONDARY_PATHS = "<path d=\"M72.8,216,88,152,32,126.86,127.2,24,112,88l56,25.14Z\"/>";

export const LightningA = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: LightningAProps) => {
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
