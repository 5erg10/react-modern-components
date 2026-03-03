import { SVGProps } from "react";

export type BellSimpleSlashVariant = "duotone" | "fill" | "light";

export interface BellSimpleSlashProps extends SVGProps<SVGSVGElement> {
  variant?: BellSimpleSlashVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M221.84,192v0a1.85,1.85,0,0,1-3,.28L83.27,43.19a4,4,0,0,1,.8-6A79.55,79.55,0,0,1,129.17,24C173,24.66,207.8,61.1,208,104.92c.14,34.88,8.31,61.54,13.82,71A15.89,15.89,0,0,1,221.84,192ZM160,216H96.22A8.19,8.19,0,0,0,88,223.47,8,8,0,0,0,96,232h63.74a8.19,8.19,0,0,0,8.26-7.47A8,8,0,0,0,160,216ZM53.84,34.62A8,8,0,1,0,42,45.38L58.79,63.85A79.42,79.42,0,0,0,47.93,104c0,35.09-8.15,62-13.7,71.73a16.42,16.42,0,0,0,.09,16.68A15.78,15.78,0,0,0,47.91,200H182.62l19.45,21.38a8,8,0,0,0,11.85-10.76Z\"/>";
const LIGHT_INNER     = "<path d=\"M52.44,36A6,6,0,0,0,43.56,44L61.31,63.56A77.45,77.45,0,0,0,50,104c0,35.74-8.42,63.2-14.08,72.94A14,14,0,0,0,48,198H183.53l20,22a6,6,0,0,0,8.88-8.08ZM48,186a1.9,1.9,0,0,1-1.7-1,2,2,0,0,1,0-2C53.86,170,62,139.69,62,104a65.63,65.63,0,0,1,7.78-31.12L172.62,186Zm118,38a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,224Zm47.27-46.62a5.88,5.88,0,0,1-2.2.42,6,6,0,0,1-5.58-3.81c-7.2-18.31-11.49-44.48-11.49-70A66,66,0,0,0,95.45,46.57a6,6,0,1,1-5.93-10.43A78,78,0,0,1,206,104c0,35.7,8.16,59.24,10.66,65.61A6,6,0,0,1,213.27,177.38Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M53.92,34.62A8,8,0,1,0,42.08,45.38L58.82,63.8A79.59,79.59,0,0,0,48,104c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H182.64l19.44,21.38a8,8,0,1,0,11.84-10.76ZM48,184c7.7-13.24,16-43.92,16-80a63.65,63.65,0,0,1,6.26-27.62L168.09,184Zm120,40a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,224Zm46-44.75a8.13,8.13,0,0,1-2.93.55,8,8,0,0,1-7.44-5.08C196.35,156.19,192,129.75,192,104A64,64,0,0,0,96.43,48.31a8,8,0,0,1-7.9-13.91A80,80,0,0,1,208,104c0,35.35,8.05,58.59,10.52,64.88A8,8,0,0,1,214,179.25Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104a72,72,0,0,1,144,0c0,35.82,8.3,64.6,14.9,76A8,8,0,0,1,208,192Z\"/>";

export const BellSimpleSlash = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BellSimpleSlashProps) => {
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
