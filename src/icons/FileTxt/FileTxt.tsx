import { SVGProps } from "react";

export type FileTxtVariant = "duotone" | "fill" | "light";

export interface FileTxtProps extends SVGProps<SVGSVGElement> {
  variant?: FileTxtVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M154.31,156.92,137.83,180l16.53,23.14a8.18,8.18,0,0,1-1.22,11,8,8,0,0,1-11.65-1.48L128,193.76l-13.49,18.89a8,8,0,0,1-11.64,1.49,8.17,8.17,0,0,1-1.23-11L118.17,180l-16.48-23.08a8.22,8.22,0,0,1,1.46-11.28,8,8,0,0,1,11.36,1.71L128,166.24l13.49-18.89a8,8,0,0,1,11.36-1.71A8.22,8.22,0,0,1,154.31,156.92ZM84,144H44.27A8.18,8.18,0,0,0,36,151.47,8,8,0,0,0,44,160H56v47.73A8.17,8.17,0,0,0,63.47,216,8,8,0,0,0,72,208V160H83.73A8.18,8.18,0,0,0,92,152.53,8,8,0,0,0,84,144Zm128,0H172.27a8.18,8.18,0,0,0-8.25,7.47,8,8,0,0,0,8,8.53h12v47.73a8.17,8.17,0,0,0,7.47,8.25,8,8,0,0,0,8.53-8V160h11.73a8.18,8.18,0,0,0,8.25-7.47A8,8,0,0,0,212,144ZM40,116V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v28a4,4,0,0,1-4,4H44A4,4,0,0,1,40,116ZM152,88h44L152,44Z\"/>";
const LIGHT_INNER     = "<path d=\"M48,118a6,6,0,0,0,6-6V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50v18a6,6,0,0,0,12,0V88a6,6,0,0,0-1.76-4.24l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40v72A6,6,0,0,0,48,118ZM158,46.48,193.52,82H158Zm-5.12,109L135.37,180l17.51,24.51a6,6,0,1,1-9.76,7L128,190.32l-15.12,21.17a6,6,0,0,1-9.76-7L120.63,180l-17.51-24.51a6,6,0,1,1,9.76-7L128,169.68l15.12-21.17a6,6,0,0,1,9.76,7ZM90,152a6,6,0,0,1-6,6H70v50a6,6,0,0,1-12,0V158H44a6,6,0,0,1,0-12H84A6,6,0,0,1,90,152Zm128,0a6,6,0,0,1-6,6H198v50a6,6,0,0,1-12,0V158H172a6,6,0,0,1,0-12h40A6,6,0,0,1,218,152Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M48,120a8,8,0,0,0,8-8V40h88V88a8,8,0,0,0,8,8h48v16a8,8,0,0,0,16,0V88a8,8,0,0,0-2.34-5.66l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v72A8,8,0,0,0,48,120ZM160,51.31,188.69,80H160Zm-5.49,105.34L137.83,180l16.68,23.35a8,8,0,0,1-13,9.3L128,193.76l-13.49,18.89a8,8,0,1,1-13-9.3L118.17,180l-16.68-23.35a8,8,0,1,1,13-9.3L128,166.24l13.49-18.89a8,8,0,0,1,13,9.3ZM92,152a8,8,0,0,1-8,8H72v48a8,8,0,0,1-16,0V160H44a8,8,0,0,1,0-16H84A8,8,0,0,1,92,152Zm128,0a8,8,0,0,1-8,8H200v48a8,8,0,0,1-16,0V160H172a8,8,0,0,1,0-16h40A8,8,0,0,1,220,152Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,88H152V32Z\"/>";

export const FileTxt = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: FileTxtProps) => {
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
