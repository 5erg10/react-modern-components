import { SVGProps } from "react";

export type MegaphoneSimpleVariant = "duotone" | "fill" | "light";

export interface MegaphoneSimpleProps extends SVGProps<SVGSVGElement> {
  variant?: MegaphoneSimpleVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M228.54,86.66l-176.06-54A16,16,0,0,0,32,48V192a16,16,0,0,0,16,16,16,16,0,0,0,4.52-.65L136,181.73V192a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16v-29.9l28.54-8.75A16.09,16.09,0,0,0,240,138V102A16.09,16.09,0,0,0,228.54,86.66ZM184,192H152V176.82L184,167Zm40-54-.11,0L152,160.08V79.91L223.89,102l.11,0v36Z\"/>";
const LIGHT_INNER     = "<path d=\"M228,88.59l-176.08-54A14,14,0,0,0,34,48V192a14,14,0,0,0,14,14,14.59,14.59,0,0,0,4-.59L138,179v13a14,14,0,0,0,14,14h32a14,14,0,0,0,14-14V160.62l30-9.19A14.07,14.07,0,0,0,238,138V102A14,14,0,0,0,228,88.59ZM48.56,193.92a2,2,0,0,1-1.76-.32A2,2,0,0,1,46,192V48a2,2,0,0,1,.8-1.6A2.05,2.05,0,0,1,48,46a1.79,1.79,0,0,1,.49.08L138,73.53v92.95ZM186,192a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V175.35l36-11Zm40-54a2,2,0,0,1-1.44,1.92l-.08,0L150,162.8V77.21l74.56,22.87A2,2,0,0,1,226,102Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M228.54,86.66l-176.06-54A16,16,0,0,0,32,48V192a16,16,0,0,0,16,16,16,16,0,0,0,4.52-.65L136,181.73V192a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16v-29.9l28.54-8.75A16.09,16.09,0,0,0,240,138V102A16.09,16.09,0,0,0,228.54,86.66ZM136,165,48,192V48l88,27Zm48,27H152V176.82L184,167Zm40-54-.11,0L152,160.08V79.92l71.89,22,.11,0v36Z\"/>";
const SECONDARY_PATHS = "<path d=\"M144,69.09V170.91L50.24,199.67A8,8,0,0,1,40,192V48a8,8,0,0,1,10.24-7.67Z\"/>";

export const MegaphoneSimple = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: MegaphoneSimpleProps) => {
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
