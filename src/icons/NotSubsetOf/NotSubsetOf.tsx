import { SVGProps } from "react";

export type NotSubsetOfVariant = "duotone" | "fill" | "light";

export interface NotSubsetOfProps extends SVGProps<SVGSVGElement> {
  variant?: NotSubsetOfVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M128,80h31.37L90.83,158.33A48,48,0,0,1,128,80Zm96-32V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM189.27,58a8,8,0,0,0-11.29.75L173.37,64H128A64,64,0,0,0,80.19,170.49L66,186.73a8,8,0,0,0,12,10.54L92.22,181A63.62,63.62,0,0,0,128,192h48a8,8,0,0,0,0-16H128a47.63,47.63,0,0,1-25.13-7.13L190,69.27A8,8,0,0,0,189.27,58Z\"/>";
const LIGHT_INNER     = "<path d=\"M212,35.56a6,6,0,0,0-8.48.4l-5.49,6H128A85.93,85.93,0,0,0,65.9,187.4L43.56,212A6,6,0,0,0,52.44,220l22.33-24.57A85.52,85.52,0,0,0,128,214h72a6,6,0,0,0,0-12H128a73.65,73.65,0,0,1-45.14-15.42L212.44,44A6,6,0,0,0,212,35.56ZM54,128a74.09,74.09,0,0,1,74-74h59.16L74,178.5A73.7,73.7,0,0,1,54,128Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M213.38,34.08a8,8,0,0,0-11.3.54L197.19,40H128A88,88,0,0,0,63.16,187.43L42.08,210.62a8,8,0,1,0,11.84,10.76L75,198.2A87.5,87.5,0,0,0,128,216h72a8,8,0,0,0,0-16H128a71.63,71.63,0,0,1-42.18-13.7L213.92,45.38A8,8,0,0,0,213.38,34.08ZM56,128a72.08,72.08,0,0,1,72-72h54.64L74,175.53A71.69,71.69,0,0,1,56,128Z\"/>";
const SECONDARY_PATHS = "<path d=\"M200,48V208H128a80,80,0,0,1-80-80h0a80,80,0,0,1,80-80Z\"/>";

export const NotSubsetOf = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: NotSubsetOfProps) => {
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
