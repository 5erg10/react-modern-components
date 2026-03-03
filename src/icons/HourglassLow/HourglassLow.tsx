import { SVGProps } from "react";

export type HourglassLowVariant = "duotone" | "fill" | "light";

export interface HourglassLowProps extends SVGProps<SVGSVGElement> {
  variant?: HourglassLowVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M200,75.64V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V76a16.07,16.07,0,0,0,6.4,12.8L114.67,128,62.4,167.2A16.07,16.07,0,0,0,56,180v36a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V180.36a16.08,16.08,0,0,0-6.35-12.76L141.27,128l52.38-39.59A16.09,16.09,0,0,0,200,75.64ZM178.23,176H77.33L128,138ZM184,75.64,128,118,72,76V40H184Z\"/>";
const LIGHT_INNER     = "<path d=\"M198,75.64V40a14,14,0,0,0-14-14H72A14,14,0,0,0,58,40V76a14.06,14.06,0,0,0,5.6,11.2L118,128,63.6,168.8A14.06,14.06,0,0,0,58,180v36a14,14,0,0,0,14,14H184a14,14,0,0,0,14-14V180.36a14.08,14.08,0,0,0-5.56-11.17L138,128l54.49-41.19A14.08,14.08,0,0,0,198,75.64ZM184.2,178H71.33L128,135.51Zm-.2,40H72a2,2,0,0,1-2-2V190H186v26A2,2,0,0,1,184,218Zm2-142.36a2,2,0,0,1-.79,1.6L128,120.49,70.8,77.6A2,2,0,0,1,70,76V40a2,2,0,0,1,2-2H184a2,2,0,0,1,2,2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M200,75.64V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V76a16.07,16.07,0,0,0,6.4,12.8L114.67,128,62.4,167.2A16.07,16.07,0,0,0,56,180v36a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V180.36a16.08,16.08,0,0,0-6.35-12.76L141.27,128l52.38-39.59A16.09,16.09,0,0,0,200,75.64ZM178.23,176H77.33L128,138ZM72,216V192H184v24ZM184,75.64,128,118,72,76V40H184Z\"/>";
const SECONDARY_PATHS = "<path d=\"M192,184v32a8,8,0,0,1-8,8H72a8,8,0,0,1-8-8V184Z\"/>";

export const HourglassLow = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: HourglassLowProps) => {
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
