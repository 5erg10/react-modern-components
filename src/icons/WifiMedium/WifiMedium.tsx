import { SVGProps } from "react";

export type WifiMediumVariant = "duotone" | "fill" | "light";

export interface WifiMediumProps extends SVGProps<SVGSVGElement> {
  variant?: WifiMediumVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M247.89,80.91a15.93,15.93,0,0,0-6.17-10.81A186.67,186.67,0,0,0,128,32,186.67,186.67,0,0,0,14.28,70.1,15.93,15.93,0,0,0,8.11,80.91,15.65,15.65,0,0,0,11.65,92.8l104,125.43A15.93,15.93,0,0,0,128,224h0a15.93,15.93,0,0,0,12.31-5.77h0l104-125.43A15.65,15.65,0,0,0,247.89,80.91Zm-46.77,38.94a124,124,0,0,0-146.24,0L24.09,82.74A170.76,170.76,0,0,1,128,48,170.76,170.76,0,0,1,231.91,82.74Z\"/>";
const LIGHT_INNER     = "<path d=\"M138,204a10,10,0,1,1-10-10A10,10,0,0,1,138,204Zm65.73-79.66a122,122,0,0,0-151.46,0,6,6,0,0,0,7.46,9.41,110,110,0,0,1,136.54,0A6,6,0,0,0,200,135a6,6,0,0,0,3.73-10.7Zm-32.2,35.81a74,74,0,0,0-87.06,0,6,6,0,0,0,7.06,9.7,62,62,0,0,1,72.94,0,6,6,0,0,0,8.38-1.32A6,6,0,0,0,171.53,160.15Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M247.89,80.91a15.93,15.93,0,0,0-6.17-10.81A186.67,186.67,0,0,0,128,32,186.67,186.67,0,0,0,14.28,70.1,15.93,15.93,0,0,0,8.11,80.91,15.65,15.65,0,0,0,11.65,92.8l104,125.43A15.93,15.93,0,0,0,128,224h0a15.93,15.93,0,0,0,12.31-5.77h0l104-125.43A15.65,15.65,0,0,0,247.89,80.91ZM128,208l-62.87-75.8a107.89,107.89,0,0,1,125.74,0Zm73.12-88.16a124,124,0,0,0-146.24,0L24.09,82.74A170.76,170.76,0,0,1,128,48,170.76,170.76,0,0,1,231.91,82.74Z\"/>";
const SECONDARY_PATHS = "<path d=\"M202.33,130.94l-68.18,82.18a8,8,0,0,1-12.3,0L53.67,130.94a116,116,0,0,1,148.66,0Z\"/>";

export const WifiMedium = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: WifiMediumProps) => {
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
