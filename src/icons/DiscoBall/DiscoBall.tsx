import { SVGProps } from "react";

export type DiscoBallVariant = "duotone" | "fill" | "light";

export interface DiscoBallProps extends SVGProps<SVGSVGElement> {
  variant?: DiscoBallVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M120,64.37V16a8,8,0,0,0-16,0V64.37a88,88,0,1,0,16,0ZM183.54,144H151.77c-1.51-28.36-10.79-48.36-19.44-61.06A72.16,72.16,0,0,1,183.54,144Zm-47.78,16c-2,33.52-16.13,52.95-23.76,61.08-7.64-8.15-21.77-27.57-23.76-61.08ZM91.67,82.94C83,95.64,73.74,115.64,72.23,144H40.46A72.16,72.16,0,0,1,91.67,82.94ZM40.46,160H72.23c1.51,28.36,10.79,48.36,19.44,61.06A72.16,72.16,0,0,1,40.46,160ZM256,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,256,88ZM152,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H192V64a8,8,0,0,1-16,0V48H160A8,8,0,0,1,152,40Z\"/>";
const LIGHT_INNER     = "<path d=\"M118,66.23V16a6,6,0,0,0-12,0V66.23a86,86,0,1,0,12,0ZM185.74,146H149.87c-1.3-32.59-13-54.15-22.36-66.35A74.15,74.15,0,0,1,185.74,146Zm-99.6,12h51.72c-1.63,37.69-18.33,58.46-25.86,66C104.46,216.45,87.77,195.67,86.14,158Zm0-12c1.63-37.69,18.33-58.46,25.86-66,7.54,7.51,24.23,28.29,25.86,66ZM96.49,79.65C87.11,91.85,75.43,113.41,74.13,146H38.26A74.15,74.15,0,0,1,96.49,79.65ZM38.26,158H74.13c1.3,32.59,13,54.15,22.36,66.35A74.15,74.15,0,0,1,38.26,158Zm89.25,66.35c9.38-12.2,21.06-33.76,22.36-66.35h35.87A74.15,74.15,0,0,1,127.51,224.35ZM254,88a6,6,0,0,1-6,6H238v10a6,6,0,0,1-12,0V94H216a6,6,0,0,1,0-12h10V72a6,6,0,0,1,12,0V82h10A6,6,0,0,1,254,88ZM208,46H190V64a6,6,0,0,1-12,0V46H160a6,6,0,0,1,0-12h18V16a6,6,0,0,1,12,0V34h18a6,6,0,0,1,0,12Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M120,64.37V16a8,8,0,0,0-16,0V64.37a88,88,0,1,0,16,0ZM183.54,144H151.77c-1.51-28.36-10.79-48.36-19.44-61.06A72.16,72.16,0,0,1,183.54,144Zm-95.3,16h47.52c-2,33.52-16.13,52.95-23.76,61.08C104.36,212.93,90.23,193.51,88.24,160Zm0-16c2-33.52,16.13-52.95,23.76-61.08,7.64,8.15,21.77,27.57,23.76,61.08Zm3.43-61.06C83,95.64,73.74,115.64,72.23,144H40.46A72.16,72.16,0,0,1,91.67,82.94ZM40.46,160H72.23c1.51,28.36,10.79,48.36,19.44,61.06A72.16,72.16,0,0,1,40.46,160Zm91.87,61.06c8.65-12.7,17.93-32.7,19.44-61.06h31.77A72.16,72.16,0,0,1,132.33,221.06ZM256,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,256,88ZM152,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H192V64a8,8,0,0,1-16,0V48H160A8,8,0,0,1,152,40Z\"/>";
const SECONDARY_PATHS = "<path d=\"M192,152a80,80,0,0,1-80,80s32-24,32-80ZM112,72S80,96,80,152h64C144,96,112,72,112,72Z\"/>";

export const DiscoBall = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: DiscoBallProps) => {
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
