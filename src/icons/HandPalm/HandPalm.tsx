import { SVGProps } from "react";

export type HandPalmVariant = "duotone" | "fill" | "light";

export interface HandPalmProps extends SVGProps<SVGSVGElement> {
  variant?: HandPalmVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216,104v48a88,88,0,0,1-176,0V64a16,16,0,0,1,32,0v56a8,8,0,0,0,16,0V32a16,16,0,0,1,32,0v80a8,8,0,0,0,16,0V48a16,16,0,0,1,32,0v80.67A48.08,48.08,0,0,0,128,176a8,8,0,0,0,16,0,32,32,0,0,1,32-32,8,8,0,0,0,8-8V104a16,16,0,0,1,32,0Z\"/>";
const LIGHT_INNER     = "<path d=\"M188,90a25.8,25.8,0,0,0-14,4.11V60a26,26,0,0,0-40.59-21.51A26,26,0,0,0,82,44V54.11A26,26,0,0,0,42,76v76a86,86,0,0,0,172,0V116A26,26,0,0,0,188,90Zm14,62a74,74,0,0,1-148,0V76a14,14,0,0,1,28,0v44a6,6,0,0,0,12,0V44a14,14,0,0,1,28,0v68a6,6,0,0,0,12,0V60a14,14,0,0,1,28,0v70.39A46.07,46.07,0,0,0,122,176a6,6,0,0,0,12,0,34,34,0,0,1,34-34,6,6,0,0,0,6-6V116a14,14,0,0,1,28,0Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M188,88a27.75,27.75,0,0,0-12,2.71V60a28,28,0,0,0-41.36-24.6A28,28,0,0,0,80,44v6.71A27.75,27.75,0,0,0,68,48,28,28,0,0,0,40,76v76a88,88,0,0,0,176,0V116A28,28,0,0,0,188,88Zm12,64a72,72,0,0,1-144,0V76a12,12,0,0,1,24,0v44a8,8,0,0,0,16,0V44a12,12,0,0,1,24,0v68a8,8,0,0,0,16,0V60a12,12,0,0,1,24,0v68.67A48.08,48.08,0,0,0,120,176a8,8,0,0,0,16,0,32,32,0,0,1,32-32,8,8,0,0,0,8-8V116a12,12,0,0,1,24,0Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,116v36a80,80,0,0,1-160,0V76a20,20,0,0,1,40,0V44a20,20,0,0,1,40,0V60a20,20,0,0,1,40,0v56a20,20,0,0,1,40,0Z\"/>";

export const HandPalm = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: HandPalmProps) => {
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
