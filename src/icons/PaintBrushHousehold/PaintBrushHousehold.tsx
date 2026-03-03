import { SVGProps } from "react";

export type PaintBrushHouseholdVariant = "duotone" | "fill" | "light";

export interface PaintBrushHouseholdProps extends SVGProps<SVGSVGElement> {
  variant?: PaintBrushHouseholdVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M230.64,25.36a32,32,0,0,0-45.26,0q-.21.21-.42.45L131.55,88.22,121,77.64a24,24,0,0,0-33.95,0l-76.69,76.7a8,8,0,0,0,0,11.31l80,80a8,8,0,0,0,11.31,0L178.36,169a24,24,0,0,0,0-33.95l-10.58-10.57L230.19,71c.15-.14.31-.28.45-.43A32,32,0,0,0,230.64,25.36ZM96,228.69,79.32,212l22.34-22.35a8,8,0,0,0-11.31-11.31L68,200.68,55.32,188l22.34-22.35a8,8,0,0,0-11.31-11.31L44,176.68,27.31,160l50.35-50.34,68.69,68.69Z\"/>";
const LIGHT_INNER     = "<path d=\"M229.23,26.77a30.05,30.05,0,0,0-42.43,0l-.32.34L131.67,91.16l-12.11-12.1a22,22,0,0,0-31.11,0L11.76,155.75a6,6,0,0,0,0,8.49l80,80a6,6,0,0,0,8.49,0l76.69-76.69a22,22,0,0,0,0-31.11l-12.1-12.11,64-54.81.34-.32A30.05,30.05,0,0,0,229.23,26.77ZM96,231.51,76.49,212l23.76-23.76a6,6,0,0,0-8.49-8.49L68,203.51,52.49,188l23.76-23.76a6,6,0,0,0-8.49-8.49L44,179.51,24.49,160,72,112.48,143.52,184ZM220.89,60.56l-68.78,58.87a6,6,0,0,0-2.1,4.33,6,6,0,0,0,1.76,4.47l16.68,16.69a10,10,0,0,1,0,14.15L152,175.51,80.49,104,96.93,87.55a10,10,0,0,1,14.15,0l16.69,16.68a6,6,0,0,0,8.8-.34l58.87-68.78a18,18,0,0,1,25.45,25.45Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M230.64,25.36a32,32,0,0,0-45.26,0q-.21.21-.42.45L131.55,88.22,121,77.64a24,24,0,0,0-33.95,0l-76.69,76.7a8,8,0,0,0,0,11.31l80,80a8,8,0,0,0,11.31,0L178.36,169a24,24,0,0,0,0-33.95l-10.58-10.57L230.19,71c.15-.14.31-.28.45-.43A32,32,0,0,0,230.64,25.36ZM96,228.69,79.32,212l22.34-22.35a8,8,0,0,0-11.31-11.31L68,200.68,55.32,188l22.34-22.35a8,8,0,0,0-11.31-11.31L44,176.68,27.31,160,72,115.31,140.69,184ZM219.52,59.1l-68.71,58.81a8,8,0,0,0-.46,11.74L167,146.34a8,8,0,0,1,0,11.31l-15,15L83.32,104l15-15a8,8,0,0,1,11.31,0l16.69,16.69a8,8,0,0,0,11.74-.46L196.9,36.48A16,16,0,0,1,219.52,59.1Z\"/>";
const SECONDARY_PATHS = "<path d=\"M225,65l-69,59,16.69,16.69a16,16,0,0,1,0,22.62L152,184,72,104,92.69,83.31a16,16,0,0,1,22.62,0L132,100l59-69A24,24,0,0,1,225,65Z\"/>";

export const PaintBrushHousehold = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PaintBrushHouseholdProps) => {
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
