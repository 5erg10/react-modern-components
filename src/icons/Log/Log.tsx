import { SVGProps } from "react";

export type LogVariant = "duotone" | "fill" | "light";

export interface LogProps extends SVGProps<SVGSVGElement> {
  variant?: LogVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M212,136a12,12,0,1,1-12-12A12,12,0,0,1,212,136Zm36,0c0,40.37-21.08,72-48,72H56c-26.92,0-48-31.63-48-72S29.08,64,56,64H92.69l37.65-37.66A8,8,0,0,1,136,24h32a8,8,0,0,1,0,16H139.31l-24,24H200C226.92,64,248,95.63,248,136Zm-144-8a8,8,0,0,0,0-16H33.26a8,8,0,1,0,0,16Zm50.91,32a8,8,0,0,0-8-8H80a8,8,0,0,0,0,16h66.91A8,8,0,0,0,154.91,160ZM232,136c0-30.36-14.65-56-32-56s-32,25.64-32,56,14.65,56,32,56S232,166.36,232,136Z\"/>";
const LIGHT_INNER     = "<path d=\"M210,136a10,10,0,1,1-10-10A10,10,0,0,1,210,136Zm36,0c0,18.21-4.48,35.41-12.63,48.43C224.68,198.34,212.83,206,200,206H56c-12.83,0-24.68-7.66-33.37-21.57C14.48,171.41,10,154.21,10,136s4.48-35.41,12.63-48.43C31.32,73.66,43.17,66,56,66H93.52l38.24-38.24A6,6,0,0,1,136,26h32a6,6,0,0,1,0,12H138.49l-28,28H200c12.83,0,24.68,7.66,33.37,21.57C241.52,100.59,246,117.79,246,136Zm-72,58a57.72,57.72,0,0,1-7.4-9.57A78.09,78.09,0,0,1,158.36,166H80a6,6,0,0,1,0-12h75.52A106.2,106.2,0,0,1,154,136c0-18.21,4.48-35.41,12.63-48.43A57.72,57.72,0,0,1,174,78H56c-13.89,0-26.16,15.1-31.36,36H104a6,6,0,0,1,0,12H22.54A93.69,93.69,0,0,0,22,136c0,31.44,15.57,58,34,58Zm60-58c0-31.44-15.57-58-34-58s-34,26.56-34,58,15.57,58,34,58S234,167.44,234,136Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M212,136a12,12,0,1,1-12-12A12,12,0,0,1,212,136Zm36,0c0,40.37-21.08,72-48,72H56c-26.92,0-48-31.63-48-72S29.08,64,56,64H92.69l37.65-37.66A8,8,0,0,1,136,24h32a8,8,0,0,1,0,16H139.31l-24,24H200C226.92,64,248,95.63,248,136ZM56,192H169.51a73.46,73.46,0,0,1-12.67-24H80a8,8,0,0,1,0-16h73.16A110.63,110.63,0,0,1,152,136c0-22.86,6.76-42.9,17.51-56H56c-12.47,0-23.55,13.26-28.8,32H104a8,8,0,0,1,0,16H24.35q-.34,3.93-.35,8C24,166.36,38.65,192,56,192Zm176-56c0-30.36-14.65-56-32-56s-32,25.64-32,56,14.65,56,32,56S232,166.36,232,136Z\"/>";
const SECONDARY_PATHS = "<path d=\"M240,136c0,35.35-17.91,64-40,64s-40-28.65-40-64,17.91-64,40-64S240,100.65,240,136Z\"/>";

export const Log = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: LogProps) => {
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
