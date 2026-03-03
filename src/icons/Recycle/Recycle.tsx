import { SVGProps } from "react";

export type RecycleVariant = "duotone" | "fill" | "light";

export interface RecycleProps extends SVGProps<SVGSVGElement> {
  variant?: RecycleVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M96,208a8,8,0,0,1-8,8H40a24,24,0,0,1-20.77-36l28-48.3-13.82-8A8,8,0,0,1,35.33,109l32.77-8.77a8,8,0,0,1,9.8,5.66l8.79,32.77a8,8,0,0,1-11.73,9l-13.88-8L33.11,188A8,8,0,0,0,40,200H88A8,8,0,0,1,96,208ZM128,32a7.85,7.85,0,0,1,6.92,4l28,48.3-13.82,8A8,8,0,0,0,151,106.92l32.78,8.79a8.23,8.23,0,0,0,2.07.27,8,8,0,0,0,7.72-5.93l8.79-32.79a8,8,0,0,0-11.72-9l-13.89,8L148.77,28a24,24,0,0,0-41.54,0L84.07,68a8,8,0,0,0,13.85,8l23.16-40A7.85,7.85,0,0,1,128,32ZM236.73,180l-23.14-40a8,8,0,0,0-13.84,8l23.14,40A8,8,0,0,1,216,200H160V184a8,8,0,0,0-13.66-5.66l-24,24a8,8,0,0,0,0,11.32l24,24A8,8,0,0,0,160,232V216h56a24,24,0,0,0,20.77-36Z\"/>";
const LIGHT_INNER     = "<path d=\"M94,208a6,6,0,0,1-6,6H40a22,22,0,0,1-19-33l36.71-63.44-18.76,5a6,6,0,0,1-3.1-11.6l32.77-8.77A6,6,0,0,1,76,106.45l8.8,32.76a6,6,0,0,1-4.24,7.35,6.09,6.09,0,0,1-1.56.21,6,6,0,0,1-5.79-4.45l-5-18.8L31.38,187A10,10,0,0,0,40,202H88A6,6,0,0,1,94,208Zm141-27-23.14-40a6,6,0,0,0-10.38,6l23.14,40A10,10,0,0,1,216,202H142.48l13.76-13.76a6,6,0,0,0-8.48-8.48l-24,24a6,6,0,0,0,0,8.48l24,24a6,6,0,0,0,8.48-8.48L142.48,214H216a22,22,0,0,0,19-33ZM136.65,35l36.72,63.44-18.76-5A6,6,0,0,0,151.5,105l32.78,8.79a6,6,0,0,0,7.34-4.25l8.79-32.78a6,6,0,1,0-11.58-3.11l-5.05,18.82L147,29A22,22,0,0,0,109,29L85.8,69a6,6,0,0,0,10.39,6l23.16-40a10,10,0,0,1,17.3,0Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M96,208a8,8,0,0,1-8,8H40a24,24,0,0,1-20.77-36l34.29-59.25L39.47,124.5A8,8,0,1,1,35.33,109l32.77-8.77a8,8,0,0,1,9.8,5.66l8.79,32.77A8,8,0,0,1,81,148.5a8.37,8.37,0,0,1-2.08.27,8,8,0,0,1-7.72-5.93l-3.8-14.15L33.11,188A8,8,0,0,0,40,200H88A8,8,0,0,1,96,208Zm140.73-28-23.14-40a8,8,0,0,0-13.84,8l23.14,40A8,8,0,0,1,216,200H147.31l10.34-10.34a8,8,0,0,0-11.31-11.32l-24,24a8,8,0,0,0,0,11.32l24,24a8,8,0,0,0,11.31-11.32L147.31,216H216a24,24,0,0,0,20.77-36ZM128,32a7.85,7.85,0,0,1,6.92,4l34.29,59.25-14.08-3.78A8,8,0,0,0,151,106.92l32.78,8.79a8.23,8.23,0,0,0,2.07.27,8,8,0,0,0,7.72-5.93l8.79-32.79a8,8,0,1,0-15.45-4.14l-3.8,14.17L148.77,28a24,24,0,0,0-41.54,0L84.07,68a8,8,0,0,0,13.85,8l23.16-40A7.85,7.85,0,0,1,128,32Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,208H40a16,16,0,0,1-13.84-24l88-152a16,16,0,0,1,27.7,0l88,152A16,16,0,0,1,216,208Z\"/>";

export const Recycle = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: RecycleProps) => {
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
