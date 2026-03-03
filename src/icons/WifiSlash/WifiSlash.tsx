import { SVGProps } from "react";

export type WifiSlashVariant = "duotone" | "fill" | "light";

export interface WifiSlashProps extends SVGProps<SVGSVGElement> {
  variant?: WifiSlashVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M213.92,210.62a8,8,0,1,1-11.84,10.76l-33.67-37-28.1,33.88A15.93,15.93,0,0,1,128,224h0a15.93,15.93,0,0,1-12.31-5.77L11.65,92.8A15.65,15.65,0,0,1,8.11,80.91,15.93,15.93,0,0,1,14.28,70.1,188.26,188.26,0,0,1,46.6,50.35l-4.29-4.72a8.22,8.22,0,0,1,.13-11.38,8,8,0,0,1,11.48.37Zm34-129.71a15.93,15.93,0,0,0-6.17-10.81A186.67,186.67,0,0,0,128,32a191,191,0,0,0-42.49,4.75,4,4,0,0,0-2,6.59L186,156.07a4,4,0,0,0,6-.14L244.35,92.8A15.65,15.65,0,0,0,247.89,80.91Z\"/>";
const LIGHT_INNER     = "<path d=\"M138,204a10,10,0,1,1-10-10A10,10,0,0,1,138,204ZM52.44,36A6,6,0,0,0,43.56,44L61.33,63.58a169.41,169.41,0,0,0-41.14,25,6,6,0,1,0,7.62,9.27A157.58,157.58,0,0,1,69.91,73l26.48,29.13a122.21,122.21,0,0,0-44.12,22.19,6,6,0,0,0,7.46,9.41,110,110,0,0,1,45.87-21.47l31.13,34.25A74.4,74.4,0,0,0,128,146a73.44,73.44,0,0,0-43.53,14.15A6,6,0,0,0,88,171a5.93,5.93,0,0,0,3.53-1.15,62,62,0,0,1,59.76-7.31L203.56,220a6,6,0,0,0,8.88-8.08ZM235.81,88.55A170.32,170.32,0,0,0,128,50a173.45,173.45,0,0,0-21.76,1.38,6,6,0,1,0,1.52,11.9A160.58,160.58,0,0,1,128,62,158.26,158.26,0,0,1,228.19,97.82a6,6,0,1,0,7.62-9.27Zm-39.54,45.2A6,6,0,0,0,200,135a6,6,0,0,0,3.73-10.7,122.26,122.26,0,0,0-50.9-23.81,6,6,0,1,0-2.43,11.75A110,110,0,0,1,196.27,133.75Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M53.92,34.62A8,8,0,1,0,42.08,45.38l4.55,5A187.93,187.93,0,0,0,14.28,70.1,15.93,15.93,0,0,0,8.11,80.91,15.65,15.65,0,0,0,11.65,92.8l104,125.43A15.93,15.93,0,0,0,128,224h0a15.93,15.93,0,0,0,12.31-5.77l28.1-33.88,33.67,37a8,8,0,1,0,11.84-10.76ZM128,208,24.09,82.74A171.5,171.5,0,0,1,57.91,62.79l99.63,109.6ZM244.35,92.8l-49.42,59.58a8,8,0,0,1-12.32-10.21l49.3-59.43A170.76,170.76,0,0,0,128,48a175.15,175.15,0,0,0-32.39,3,8,8,0,1,1-3-15.72A190.62,190.62,0,0,1,128,32,186.67,186.67,0,0,1,241.72,70.1a15.93,15.93,0,0,1,6.17,10.81A15.65,15.65,0,0,1,244.35,92.8Z\"/>";
const SECONDARY_PATHS = "<path d=\"M238.2,87.69l-104,125.43a8,8,0,0,1-12.3,0L17.8,87.69a7.79,7.79,0,0,1,1.31-11.21,180.75,180.75,0,0,1,217.78,0A7.79,7.79,0,0,1,238.2,87.69Z\"/>";

export const WifiSlash = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: WifiSlashProps) => {
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
