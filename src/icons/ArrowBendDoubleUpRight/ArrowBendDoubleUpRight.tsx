import { SVGProps } from "react";

export type ArrowBendDoubleUpRightVariant = "duotone" | "fill" | "light";

export interface ArrowBendDoubleUpRightProps extends SVGProps<SVGSVGElement> {
  variant?: ArrowBendDoubleUpRightVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M229.66,109.66l-48,48a8,8,0,0,1-11.32-11.32L212.69,104,170.34,61.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,229.66,109.66Zm-48-11.32-48-48A8,8,0,0,0,120,56V96.3A104.15,104.15,0,0,0,24,200a8,8,0,0,0,16,0,88.11,88.11,0,0,1,80-87.63V152a8,8,0,0,0,13.66,5.66l48-48A8,8,0,0,0,181.66,98.34Z\"/>";
const LIGHT_INNER     = "<path d=\"M228.24,108.24l-48,48a6,6,0,0,1-8.48-8.48L215.51,104,171.76,60.24a6,6,0,0,1,8.48-8.48l48,48A6,6,0,0,1,228.24,108.24Zm-48-8.48-48-48a6,6,0,1,0-8.48,8.48L161.51,98H128A102.12,102.12,0,0,0,26,200a6,6,0,0,0,12,0,90.1,90.1,0,0,1,90-90h33.51l-37.75,37.76a6,6,0,1,0,8.48,8.48l48-48A6,6,0,0,0,180.24,99.76Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M229.66,109.66l-48,48a8,8,0,0,1-11.32-11.32L212.69,104,170.34,61.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,229.66,109.66Zm-48,0-48,48A8,8,0,0,1,120,152V112.37A88.11,88.11,0,0,0,40,200a8,8,0,0,1-16,0A104.15,104.15,0,0,1,120,96.3V56a8,8,0,0,1,13.66-5.66l48,48A8,8,0,0,1,181.66,109.66Zm-17-5.66L136,75.31v57.38Z\"/>";
const SECONDARY_PATHS = "<path d=\"M176,104l-48,48V56Z\"/>";

export const ArrowBendDoubleUpRight = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ArrowBendDoubleUpRightProps) => {
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
