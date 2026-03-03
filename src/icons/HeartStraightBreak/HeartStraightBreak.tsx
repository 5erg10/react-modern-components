import { SVGProps } from "react";

export type HeartStraightBreakVariant = "duotone" | "fill" | "light";

export interface HeartStraightBreakProps extends SVGProps<SVGSVGElement> {
  variant?: HeartStraightBreakVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M113.29,55.31A58,58,0,0,0,32.93,139l89.37,90.66a8,8,0,0,0,11.4,0L223,139a58,58,0,0,0-82-82.1h0l-24.4,23L143,106.32a8,8,0,0,1,0,11.32l-20.69,20.69A8,8,0,1,1,111,127l15-15L99.5,85.42a8,8,0,0,1,.22-11.53l13.55-12.78a4,4,0,0,0,0-5.8Z\"/>";
const LIGHT_INNER     = "<path d=\"M221.62,58.38a56.06,56.06,0,0,0-79.16,0L128,72.24l-14.44-13.9a56,56,0,0,0-79.2,79.21l89.37,90.66a6,6,0,0,0,8.55,0l89.33-90.63A56.06,56.06,0,0,0,221.62,58.38Zm-8.51,70.75L128,215.45,42.89,129.1a44,44,0,0,1,62.23-62.24l.08.08,14.16,13.64L107.85,91.66a6,6,0,0,0-.08,8.56L135.53,128l-11.76,11.76a6,6,0,1,0,8.49,8.48l16-16a6,6,0,0,0,0-8.49L120.58,96.06l30.24-29.12a.3.3,0,0,0,.08-.08,44,44,0,1,1,62.21,62.27Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M223,57a58.1,58.1,0,0,0-82-.06L128,69.47,115,56.91a58,58,0,0,0-82,82.05l89.37,90.66a8,8,0,0,0,11.4,0L223,139A58.09,58.09,0,0,0,223,57Zm-11.36,70.76L128,212.6,44.29,127.68a42,42,0,1,1,59.41-59.4l.1.1,12.67,12.19-10,9.65a8,8,0,0,0-.11,11.42L132.69,128l-10.35,10.35a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0,0-11.31L123.42,96.09,152.2,68.38l.11-.1a42,42,0,1,1,59.37,59.44Z\"/>";
const SECONDARY_PATHS = "<path d=\"M217.36,133.36,128,224,38.64,133.36a50,50,0,0,1,70.72-70.72L128,80l18.64-17.36a50,50,0,1,1,70.72,70.72Z\"/>";

export const HeartStraightBreak = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: HeartStraightBreakProps) => {
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
