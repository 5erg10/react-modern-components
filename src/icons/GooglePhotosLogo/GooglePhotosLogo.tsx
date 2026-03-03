import { SVGProps } from "react";

export type GooglePhotosLogoVariant = "duotone" | "fill" | "light";

export interface GooglePhotosLogoProps extends SVGProps<SVGSVGElement> {
  variant?: GooglePhotosLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M232,120H192.49A72,72,0,0,0,128,16a8,8,0,0,0-8,8V63.51A72,72,0,0,0,16,128a8,8,0,0,0,8,8H63.51A72,72,0,0,0,128,240a8,8,0,0,0,8-8V192.49A72,72,0,0,0,240,128,8,8,0,0,0,232,120ZM88,72a55.31,55.31,0,0,1,32,10v38H32.57A56.09,56.09,0,0,1,88,72Zm80,112A55.31,55.31,0,0,1,136,174V136h87.43A56.09,56.09,0,0,1,168,184Z\"/>";
const LIGHT_INNER     = "<path d=\"M232,122H189.18A70,70,0,0,0,128,18a6,6,0,0,0-6,6V66.82A70,70,0,0,0,18,128a6,6,0,0,0,6,6H66.82A70,70,0,0,0,128,238a6,6,0,0,0,6-6V189.18A70,70,0,0,0,238,128,6,6,0,0,0,232,122ZM186,88a57.3,57.3,0,0,1-11,34H134V30.31A58.08,58.08,0,0,1,186,88ZM88,70a57.3,57.3,0,0,1,34,11v41H30.31A58.08,58.08,0,0,1,88,70ZM70,168a57.3,57.3,0,0,1,11-34h41v91.69A58.08,58.08,0,0,1,70,168Zm98,18a57.3,57.3,0,0,1-34-11V134h91.69A58.08,58.08,0,0,1,168,186Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M232,120H192.49A72,72,0,0,0,128,16a8,8,0,0,0-8,8V63.51A72,72,0,0,0,16,128a8,8,0,0,0,8,8H63.51A72,72,0,0,0,128,240a8,8,0,0,0,8-8V192.49A72,72,0,0,0,240,128,8,8,0,0,0,232,120ZM120,223.43A56.09,56.09,0,0,1,72,168a55.31,55.31,0,0,1,10-32h38ZM120,120H32.57A56.09,56.09,0,0,1,88,72a55.31,55.31,0,0,1,32,10Zm16-87.43A56.09,56.09,0,0,1,184,88,55.31,55.31,0,0,1,174,120H136ZM168,184A55.31,55.31,0,0,1,136,174V136h87.43A56.09,56.09,0,0,1,168,184Z\"/>";
const SECONDARY_PATHS = "<path d=\"M192,88a63.69,63.69,0,0,1-14,40H128V24A64,64,0,0,1,192,88ZM64,168a64,64,0,0,0,64,64V128H78A63.69,63.69,0,0,0,64,168Z\"/>";

export const GooglePhotosLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: GooglePhotosLogoProps) => {
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
