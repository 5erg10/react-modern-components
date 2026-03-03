import { SVGProps } from "react";

export type PlayPauseVariant = "duotone" | "fill" | "light";

export interface PlayPauseProps extends SVGProps<SVGSVGElement> {
  variant?: PlayPauseVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M184,64V192a8,8,0,0,1-16,0V64a8,8,0,0,1,16,0Zm40-8a8,8,0,0,0-8,8V192a8,8,0,0,0,16,0V64A8,8,0,0,0,224,56Zm-87.33,58.66L48.48,58.51A15.91,15.91,0,0,0,24,71.85v112.3A15.83,15.83,0,0,0,32.23,198a15.95,15.95,0,0,0,16.25-.53l88.19-56.15a15.8,15.8,0,0,0,0-26.68Z\"/>";
const LIGHT_INNER     = "<path d=\"M182,64V192a6,6,0,0,1-12,0V64a6,6,0,0,1,12,0Zm42-6a6,6,0,0,0-6,6V192a6,6,0,0,0,12,0V64A6,6,0,0,0,224,58Zm-82,70a13.77,13.77,0,0,1-6.41,11.65L47.41,195.8A13.91,13.91,0,0,1,26,184.15V71.85A13.91,13.91,0,0,1,47.41,60.2l88.18,56.15A13.77,13.77,0,0,1,142,128Zm-12,0a1.77,1.77,0,0,0-.85-1.53L41,70.32a1.87,1.87,0,0,0-1-.32,2.13,2.13,0,0,0-1,.25,1.76,1.76,0,0,0-1,1.6v112.3a1.76,1.76,0,0,0,1,1.6,1.9,1.9,0,0,0,2-.07l88.19-56.15A1.77,1.77,0,0,0,130,128Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M184,64V192a8,8,0,0,1-16,0V64a8,8,0,0,1,16,0Zm40-8a8,8,0,0,0-8,8V192a8,8,0,0,0,16,0V64A8,8,0,0,0,224,56Zm-80,72a15.76,15.76,0,0,1-7.33,13.34L48.48,197.49A15.91,15.91,0,0,1,24,184.15V71.85A15.91,15.91,0,0,1,48.48,58.51l88.19,56.15A15.76,15.76,0,0,1,144,128Zm-16.18,0L40,72.08V183.93Z\"/>";
const SECONDARY_PATHS = "<path d=\"M132.37,134.59,44.18,190.74A7.91,7.91,0,0,1,32,184.15V71.85a7.91,7.91,0,0,1,12.18-6.59l88.19,56.15A7.8,7.8,0,0,1,132.37,134.59Z\"/>";

export const PlayPause = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PlayPauseProps) => {
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
