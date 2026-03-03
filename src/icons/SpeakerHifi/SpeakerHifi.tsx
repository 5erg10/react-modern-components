import { SVGProps } from "react";

export type SpeakerHifiVariant = "duotone" | "fill" | "light";

export interface SpeakerHifiProps extends SVGProps<SVGSVGElement> {
  variant?: SpeakerHifiVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M152,160a24,24,0,1,1-24-24A24,24,0,0,1,152,160ZM208,40V216a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V40A16,16,0,0,1,64,24H192A16,16,0,0,1,208,40ZM116,68a12,12,0,1,0,12-12A12,12,0,0,0,116,68Zm52,92a40,40,0,1,0-40,40A40,40,0,0,0,168,160Z\"/>";
const LIGHT_INNER     = "<path d=\"M192,26H64A14,14,0,0,0,50,40V216a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V40A14,14,0,0,0,192,26Zm2,190a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2H192a2,2,0,0,1,2,2ZM118,76a10,10,0,1,1,10,10A10,10,0,0,1,118,76Zm10,38a38,38,0,1,0,38,38A38,38,0,0,0,128,114Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,128,178Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M192,24H64A16,16,0,0,0,48,40V216a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V40A16,16,0,0,0,192,24Zm0,192H64V40H192ZM116,76a12,12,0,1,1,12,12A12,12,0,0,1,116,76Zm12,116a40,40,0,1,0-40-40A40,40,0,0,0,128,192Zm0-64a24,24,0,1,1-24,24A24,24,0,0,1,128,128Z\"/>";
const SECONDARY_PATHS = "<path d=\"M192,32H64a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H192a8,8,0,0,0,8-8V40A8,8,0,0,0,192,32ZM128,184a32,32,0,1,1,32-32A32,32,0,0,1,128,184Z\"/>";

export const SpeakerHifi = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: SpeakerHifiProps) => {
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
