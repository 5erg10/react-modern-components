import { SVGProps } from "react";

export type CompassRoseVariant = "duotone" | "fill" | "light";

export interface CompassRoseProps extends SVGProps<SVGSVGElement> {
  variant?: CompassRoseVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M249.94,120.24l-27.05-6.76a95.86,95.86,0,0,0-80.37-80.37l-6.76-27a8,8,0,0,0-15.52,0l-6.76,27.05a95.86,95.86,0,0,0-80.37,80.37l-27,6.76a8,8,0,0,0,0,15.52l27.05,6.76a95.86,95.86,0,0,0,80.37,80.37l6.76,27.05a8,8,0,0,0,15.52,0l6.76-27.05a95.86,95.86,0,0,0,80.37-80.37l27.05-6.76a8,8,0,0,0,0-15.52Zm-44.17-11L158.6,97.4,146.8,50.23A79.88,79.88,0,0,1,205.77,109.2Zm-96.57-59L97.4,97.4,50.23,109.2A79.88,79.88,0,0,1,109.2,50.23Zm-59,96.57L97.4,158.6l11.8,47.17A79.88,79.88,0,0,1,50.23,146.8Zm96.57,59,11.8-47.17,47.17-11.8A79.88,79.88,0,0,1,146.8,205.77Z\"/>";
const LIGHT_INNER     = "<path d=\"M249.46,122.18l-28.34-7.09A93.87,93.87,0,0,0,140.9,34.88L133.82,6.54a6,6,0,0,0-11.64,0L115.1,34.88a93.87,93.87,0,0,0-80.22,80.21L6.54,122.18a6,6,0,0,0,0,11.64l28.34,7.09a93.87,93.87,0,0,0,80.22,80.21l7.08,28.34a6,6,0,0,0,11.64,0l7.08-28.34a93.87,93.87,0,0,0,80.22-80.21l28.34-7.09a6,6,0,0,0,0-11.64Zm-41.05-10.26L157,99.05,144.08,47.59A81.87,81.87,0,0,1,208.41,111.92Zm-63-9.76L128,119.51l-17.36-17.35L128,32.74ZM111.92,47.59,99.05,99.05,47.59,111.92A81.87,81.87,0,0,1,111.92,47.59Zm-9.76,63.06L119.52,128l-17.36,17.35L32.74,128ZM47.59,144.08,99.05,157l12.87,51.46A81.87,81.87,0,0,1,47.59,144.08Zm63.05,9.76L128,136.49l17.36,17.35L128,223.26Zm33.44,54.57L157,157l51.46-12.87A81.87,81.87,0,0,1,144.08,208.41Zm9.76-63.06L136.48,128l17.36-17.35L223.26,128Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M249.94,120.24l-27.05-6.76a95.86,95.86,0,0,0-80.37-80.37l-6.76-27a8,8,0,0,0-15.52,0l-6.76,27.05a95.86,95.86,0,0,0-80.37,80.37l-27,6.76a8,8,0,0,0,0,15.52l27.05,6.76a95.86,95.86,0,0,0,80.37,80.37l6.76,27.05a8,8,0,0,0,15.52,0l6.76-27.05a95.86,95.86,0,0,0,80.37-80.37l27.05-6.76a8,8,0,0,0,0-15.52Zm-95.49,22.9L139.31,128l15.14-15.14L215,128Zm-52.9,0L41,128l60.57-15.14L116.69,128ZM205.77,109.2,158.6,97.4,146.8,50.23A79.88,79.88,0,0,1,205.77,109.2Zm-62.63-7.65L128,116.69l-15.14-15.14L128,41ZM109.2,50.23,97.4,97.4,50.23,109.2A79.88,79.88,0,0,1,109.2,50.23Zm-59,96.57L97.4,158.6l11.8,47.17A79.88,79.88,0,0,1,50.23,146.8Zm62.63,7.65L128,139.31l15.14,15.14L128,215Zm33.94,51.32,11.8-47.17,47.17-11.8A79.88,79.88,0,0,1,146.8,205.77Z\"/>";
const SECONDARY_PATHS = "<path d=\"M248,128l-96,24-24,96-24-96L8,128l96-24L128,8l24,96Z\"/>";

export const CompassRose = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CompassRoseProps) => {
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
