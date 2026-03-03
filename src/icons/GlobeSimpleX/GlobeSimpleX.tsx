import { SVGProps } from "react";

export type GlobeSimpleXVariant = "duotone" | "fill" | "light";

export interface GlobeSimpleXProps extends SVGProps<SVGSVGElement> {
  variant?: GlobeSimpleXVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M221.66,173.66,203.31,192l18.35,18.34a8,8,0,0,1-11.32,11.32L192,203.31l-18.34,18.35a8,8,0,0,1-11.32-11.32L180.69,192l-18.35-18.34a8,8,0,0,1,11.32-11.32L192,180.69l18.34-18.35a8,8,0,0,1,11.32,11.32ZM232,128a8,8,0,0,1-8,8H96.25c3,53.73,35.33,80.6,36.77,81.77h0A8,8,0,0,1,128,232,104,104,0,1,1,232,128ZM148.41,42.4C159.94,57.67,174,83.49,175.79,120h39.84A88.19,88.19,0,0,0,148.41,42.4ZM96.23,120h63.54C157.46,78.4,137.55,52.9,128,43,118.46,52.89,98.54,78.39,96.23,120Z\"/>";
const LIGHT_INNER     = "<path d=\"M220.24,172.24,200.49,192l19.75,19.76a6,6,0,1,1-8.48,8.48L192,200.49l-19.76,19.75a6,6,0,0,1-8.48-8.48L183.51,192l-19.75-19.76a6,6,0,0,1,8.48-8.48L192,183.51l19.76-19.75a6,6,0,0,1,8.48,8.48ZM230,128a6,6,0,0,1-6,6H94.13a128.29,128.29,0,0,0,18.68,62.37c9.35,15.11,18.85,22.88,18.95,22.95A6,6,0,0,1,128,230h0A102,102,0,1,1,230,128ZM143.46,39.33c11.95,14.44,28.89,41.9,30.43,82.67H217.8A90.19,90.19,0,0,0,143.46,39.33Zm-30.65,20.3A128.29,128.29,0,0,0,94.13,122h67.74a128.29,128.29,0,0,0-18.68-62.37A109.19,109.19,0,0,0,128,40.18,109.19,109.19,0,0,0,112.81,59.63ZM38.2,122H82.11c1.54-40.77,18.48-68.23,30.43-82.67A90.19,90.19,0,0,0,38.2,122Zm43.91,12H38.2a90.19,90.19,0,0,0,74.34,82.67C100.59,202.23,83.65,174.77,82.11,134Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M221.66,173.66,203.31,192l18.35,18.34a8,8,0,0,1-11.32,11.32L192,203.31l-18.34,18.35a8,8,0,0,1-11.32-11.32L180.69,192l-18.35-18.34a8,8,0,0,1,11.32-11.32L192,180.69l18.34-18.35a8,8,0,0,1,11.32,11.32ZM232,128a8,8,0,0,1-8,8H96.25c3,53.73,35.33,80.6,36.77,81.77l0,0A8,8,0,0,1,128,232,104,104,0,1,1,232,128ZM148.41,42.4C159.94,57.67,174,83.49,175.79,120h39.84A88.19,88.19,0,0,0,148.41,42.4ZM128,43c-9.54,9.92-29.46,35.42-31.77,77h63.54C157.46,78.4,137.55,52.9,128,43ZM40.37,120H80.21C82,83.49,96.06,57.67,107.59,42.4A88.19,88.19,0,0,0,40.37,120Zm39.84,16H40.37a88.19,88.19,0,0,0,67.22,77.6C96.06,198.33,82,172.51,80.21,136Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z\"/>";

export const GlobeSimpleX = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: GlobeSimpleXProps) => {
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
