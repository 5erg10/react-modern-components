import { SVGProps } from "react";

export type BellSlashVariant = "duotone" | "fill" | "light";

export interface BellSlashProps extends SVGProps<SVGSVGElement> {
  variant?: BellSlashVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M221.84,192v0a1.85,1.85,0,0,1-3,.28L83.27,43.19a4,4,0,0,1,.8-6A79.55,79.55,0,0,1,129.17,24C173,24.66,207.8,61.1,208,104.92c.14,34.88,8.31,61.54,13.82,71A15.89,15.89,0,0,1,221.84,192Zm-7.92,18.62a8,8,0,0,1-11.85,10.76L182.62,200H167.16a40,40,0,0,1-78.41,0H47.91a15.78,15.78,0,0,1-13.59-7.59,16.42,16.42,0,0,1-.09-16.68c5.55-9.73,13.7-36.64,13.7-71.73A79.42,79.42,0,0,1,58.79,63.85L42,45.38A8,8,0,1,1,53.84,34.62ZM150.59,200H105.32a24,24,0,0,0,45.27,0Z\"/>";
const LIGHT_INNER     = "<path d=\"M52.44,36A6,6,0,0,0,43.56,44L61.31,63.56A77.45,77.45,0,0,0,50,104c0,35.74-8.42,63.2-14.08,72.94A14,14,0,0,0,48,198h42.5a38,38,0,0,0,75,0h18l20,22a6,6,0,0,0,8.88-8.08ZM128,218a26,26,0,0,1-25.29-20h50.58A26,26,0,0,1,128,218ZM48,186a1.9,1.9,0,0,1-1.7-1,2,2,0,0,1,0-2C53.86,170,62,139.69,62,104a65.63,65.63,0,0,1,7.78-31.12L172.62,186Zm165.29-8.62a5.88,5.88,0,0,1-2.2.42,6,6,0,0,1-5.58-3.81c-7.2-18.31-11.49-44.48-11.49-70A66,66,0,0,0,95.45,46.57a6,6,0,1,1-5.93-10.43A78,78,0,0,1,206,104c0,35.7,8.16,59.24,10.66,65.61A6,6,0,0,1,213.27,177.38Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M53.92,34.62A8,8,0,1,0,42.08,45.38L58.82,63.8A79.59,79.59,0,0,0,48,104c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.8a40,40,0,0,0,78.4,0h15.44l19.44,21.38a8,8,0,1,0,11.84-10.76ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a63.65,63.65,0,0,1,6.26-27.62L168.09,184Zm166-4.73a8.13,8.13,0,0,1-2.93.55,8,8,0,0,1-7.44-5.08C196.35,156.19,192,129.75,192,104A64,64,0,0,0,96.43,48.31a8,8,0,0,1-7.9-13.91A80,80,0,0,1,208,104c0,35.35,8.05,58.59,10.52,64.88A8,8,0,0,1,214,179.25Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104a72,72,0,0,1,144,0c0,35.82,8.3,64.6,14.9,76A8,8,0,0,1,208,192Z\"/>";

export const BellSlash = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BellSlashProps) => {
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
