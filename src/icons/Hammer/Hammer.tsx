import { SVGProps } from "react";

export type HammerVariant = "duotone" | "fill" | "light";

export interface HammerProps extends SVGProps<SVGSVGElement> {
  variant?: HammerVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M251.34,112,183.88,44.08a96.1,96.1,0,0,0-135.77,0l-.09.09L34.25,58.4A8,8,0,0,0,45.74,69.53L59.47,55.35a79.92,79.92,0,0,1,18.71-13.9L124.68,88l-96,96a16,16,0,0,0,0,22.63l20.69,20.69a16,16,0,0,0,22.63,0l96-96,32,32a16,16,0,0,0,22.63,0l28.69-28.69A16,16,0,0,0,251.34,112Zm-89,2.33L140,136.67,119.31,116l22.35-22.35a8,8,0,0,0,0-11.32L94.32,35a80,80,0,0,1,78.23,20.41l44.22,44.51L188,128.66l-14.34-14.34A8,8,0,0,0,162.34,114.32Zm49,37.66-12-12L228,111.25l12,12Z\"/>";
const LIGHT_INNER     = "<path d=\"M249.92,113.4,182.47,45.49a94.12,94.12,0,0,0-133,.06L35.68,59.78a6,6,0,0,0,8.63,8.35L58,54A82,82,0,0,1,78.55,39l49,49L30.09,185.4a14,14,0,0,0,0,19.81L50.78,225.9a14,14,0,0,0,19.8,0L168,128.46l33.42,33.42a14,14,0,0,0,19.8,0l28.68-28.69A14,14,0,0,0,249.92,113.4ZM62.1,217.41a2,2,0,0,1-2.83,0L38.58,196.72a2,2,0,0,1,0-2.83L108,124.46,131.51,148ZM163.76,115.73,140,139.49,116.48,116l23.76-23.76a6,6,0,0,0,0-8.49L90.54,34A82.07,82.07,0,0,1,174,54l45.62,45.93L188,131.49l-15.76-15.76A6,6,0,0,0,163.76,115.73Zm77.66,9-28.69,28.7a2,2,0,0,1-2.83,0L196.49,140l31.56-31.57,13.37,13.46A2,2,0,0,1,241.42,124.7Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M251.34,112,183.88,44.08a96.1,96.1,0,0,0-135.77,0l-.09.09L34.25,58.4A8,8,0,0,0,45.74,69.53L59.47,55.35a79.92,79.92,0,0,1,18.71-13.9L124.68,88l-96,96a16,16,0,0,0,0,22.63l20.69,20.69a16,16,0,0,0,22.63,0l96-96,14.34,14.34h0L200,163.3a16,16,0,0,0,22.63,0l28.69-28.69A16,16,0,0,0,251.34,112ZM60.68,216,40,195.31l68-68L128.68,148ZM162.34,114.32,140,136.67,119.31,116l22.35-22.35a8,8,0,0,0,0-11.32L94.32,35a80,80,0,0,1,78.23,20.41l44.22,44.51L188,128.66l-14.34-14.34A8,8,0,0,0,162.34,114.32Zm49,37.66-12-12L228,111.25l12,12Z\"/>";
const SECONDARY_PATHS = "<path d=\"M245.66,129,217,157.66a8,8,0,0,1-11.3,0L168.1,120l-28,28-32-32,28-28L80,31.78a87.81,87.81,0,0,1,98.31,18l67.35,67.89A8,8,0,0,1,245.66,129Z\"/>";

export const Hammer = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: HammerProps) => {
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
