import { SVGProps } from "react";

export type FunnelXVariant = "duotone" | "fill" | "light";

export interface FunnelXProps extends SVGProps<SVGSVGElement> {
  variant?: FunnelXVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M227.73,66.85,160,139.17v55.49A16,16,0,0,1,152.87,208l-32,21.34A16,16,0,0,1,96,216V139.17L28.27,66.85l-.08-.09A16,16,0,0,1,40,40H216a16,16,0,0,1,11.84,26.76ZM227.31,192l18.35-18.34a8,8,0,0,0-11.32-11.32L216,180.69l-18.34-18.35a8,8,0,0,0-11.32,11.32L204.69,192l-18.35,18.34a8,8,0,0,0,11.32,11.32L216,203.31l18.34,18.35a8,8,0,0,0,11.32-11.32Z\"/>";
const LIGHT_INNER     = "<path d=\"M228.79,50.34A13.83,13.83,0,0,0,216,42H40A14,14,0,0,0,29.67,65.42l.06.06L98,138.38V216a14,14,0,0,0,21.76,11.64l32-21.33A14,14,0,0,0,158,194.66V138.38l68.34-73A13.83,13.83,0,0,0,228.79,50.34Zm-11.26,6.94-69.9,74.62A6,6,0,0,0,146,136v58.66a2,2,0,0,1-.89,1.67l-32,21.33A2,2,0,0,1,110,216V136a6,6,0,0,0-1.62-4.1L38.53,57.32a1.89,1.89,0,0,1-.33-2.13A1.91,1.91,0,0,1,40,54H216a1.9,1.9,0,0,1,1.82,1.19A1.87,1.87,0,0,1,217.53,57.28Zm26.71,154.49a6,6,0,1,1-8.48,8.48L216,200.49l-19.75,19.76a6,6,0,0,1-8.49-8.48L207.52,192l-19.76-19.76a6,6,0,0,1,8.49-8.49L216,183.52l19.76-19.76a6,6,0,0,1,8.48,8.49L224.49,192Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M227.82,66.76A16,16,0,0,0,216,40H40A16,16,0,0,0,28.19,66.76l.08.09L96,139.17V216a16,16,0,0,0,24.87,13.32l32-21.34A16,16,0,0,0,160,194.66V139.17l67.73-72.32ZM40,56h0Zm106.19,74.59A8,8,0,0,0,144,136v58.66L112,216V136a8,8,0,0,0-2.16-5.46L40,56H216Zm99.49,79.81a8,8,0,0,1-11.32,11.32L216,203.32l-18.34,18.35a8,8,0,0,1-11.31-11.32L204.69,192l-18.34-18.35a8,8,0,0,1,11.31-11.31L216,180.69l18.34-18.34a8,8,0,0,1,11.32,11.31L227.31,192Z\"/>";
const SECONDARY_PATHS = "<path d=\"M221.9,61.38,152,136v58.65a8,8,0,0,1-3.56,6.66l-32,21.33A8,8,0,0,1,104,216V136L34.1,61.38A8,8,0,0,1,40,48H216A8,8,0,0,1,221.9,61.38Z\"/>";

export const FunnelX = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: FunnelXProps) => {
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
