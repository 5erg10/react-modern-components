import { SVGProps } from "react";

export type NumberZeroVariant = "duotone" | "fill" | "light";

export interface NumberZeroProps extends SVGProps<SVGSVGElement> {
  variant?: NumberZeroVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M157.68,88.39C164.34,98.52,168,112.59,168,128s-3.66,29.47-10.32,39.61C150.55,178.49,140.56,184,128,184s-22.55-5.51-29.68-16.39C91.66,157.47,88,143.41,88,128s3.66-29.48,10.32-39.61C105.45,77.51,115.44,72,128,72S150.55,77.51,157.68,88.39ZM216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40Zm-32,88c0-18.49-4.6-35.68-12.94-48.39C160.92,64.16,146,56,128,56S95.08,64.16,84.94,79.61C76.6,92.32,72,109.51,72,128s4.6,35.68,12.94,48.39C95.08,191.84,110,200,128,200s32.92-8.16,43.06-23.61C179.4,163.68,184,146.49,184,128Z\"/>";
const LIGHT_INNER     = "<path d=\"M181.56,64.28C169,44.47,150.43,34,128,34S87.05,44.47,74.44,64.28C63.84,80.94,58,103.57,58,128s5.84,47.06,16.44,63.72C87.05,211.53,105.57,222,128,222s40.95-10.47,53.56-30.28C192.16,175.06,198,152.43,198,128S192.16,80.94,181.56,64.28ZM128,210c-40.07,0-58-41.18-58-82s17.93-82,58-82,58,41.18,58,82S168.07,210,128,210Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M183.25,63.2C170.25,42.79,151.15,32,128,32S85.75,42.79,72.75,63.2C62,80.18,56,103.19,56,128s6,47.82,16.75,64.8c13,20.41,32.1,31.2,55.25,31.2s42.25-10.79,55.25-31.2c10.8-17,16.75-40,16.75-64.8S194.05,80.18,183.25,63.2ZM128,208c-38.68,0-56-40.18-56-80s17.32-80,56-80,56,40.18,56,80S166.68,208,128,208Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40Z\"/>";

export const NumberZero = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: NumberZeroProps) => {
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
