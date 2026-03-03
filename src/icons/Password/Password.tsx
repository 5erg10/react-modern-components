import { SVGProps } from "react";

export type PasswordVariant = "duotone" | "fill" | "light";

export interface PasswordProps extends SVGProps<SVGSVGElement> {
  variant?: PasswordVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm-19.42,94.71a8,8,0,1,1-13,9.41L184,141.61l-7.63,10.51a8,8,0,1,1-13-9.41l7.64-10.5-12.36-4a8,8,0,1,1,5-15.21L176,117V104a8,8,0,0,1,16,0v13l12.35-4a8,8,0,0,1,5,15.21l-12.36,4Zm-72,0a8,8,0,1,1-13,9.41L112,141.61l-7.63,10.51a8,8,0,1,1-13-9.41l7.64-10.5-12.36-4a8,8,0,1,1,5-15.21L104,117V104a8,8,0,0,1,16,0v13l12.35-4a8,8,0,1,1,5,15.21l-12.36,4ZM64,88v80a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z\"/>";
const LIGHT_INNER     = "<path d=\"M46,56V200a6,6,0,0,1-12,0V56a6,6,0,0,1,12,0Zm94.58,56.41L118,119.74V96a6,6,0,0,0-12,0v23.74l-22.58-7.33a6,6,0,1,0-3.71,11.41l22.58,7.33-14,19.21a6,6,0,1,0,9.7,7.06l14-19.21,14,19.21a6,6,0,0,0,9.7-7.06l-14-19.21,22.58-7.33a6,6,0,1,0-3.71-11.41Zm103.56,3.85a6,6,0,0,0-7.56-3.85L214,119.74V96a6,6,0,0,0-12,0v23.74l-22.58-7.33a6,6,0,1,0-3.71,11.41l22.58,7.33-13.95,19.21a6,6,0,1,0,9.7,7.06l14-19.21,14,19.21a6,6,0,0,0,9.7-7.06l-13.95-19.21,22.58-7.33A6,6,0,0,0,244.14,116.26Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M48,56V200a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0Zm92,54.5L120,117V96a8,8,0,0,0-16,0v21L84,110.5a8,8,0,0,0-5,15.22l20,6.49-12.34,17a8,8,0,1,0,12.94,9.4l12.34-17,12.34,17a8,8,0,1,0,12.94-9.4l-12.34-17,20-6.49A8,8,0,0,0,140,110.5ZM246,115.64A8,8,0,0,0,236,110.5L216,117V96a8,8,0,0,0-16,0v21l-20-6.49a8,8,0,0,0-4.95,15.22l20,6.49-12.34,17a8,8,0,1,0,12.94,9.4l12.34-17,12.34,17a8,8,0,1,0,12.94-9.4l-12.34-17,20-6.49A8,8,0,0,0,246,115.64Z\"/>";
const SECONDARY_PATHS = "<path d=\"M256,72V184a16,16,0,0,1-16,16H16A16,16,0,0,1,0,184V72A16,16,0,0,1,16,56H240A16,16,0,0,1,256,72Z\"/>";

export const Password = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PasswordProps) => {
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
