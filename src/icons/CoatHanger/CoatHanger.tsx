import { SVGProps } from "react";

export type CoatHangerVariant = "duotone" | "fill" | "light";

export interface CoatHangerProps extends SVGProps<SVGSVGElement> {
  variant?: CoatHangerVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M241.57,171.2,141.33,96l23.46-17.6A8,8,0,0,0,168,72a40,40,0,1,0-80,0,8,8,0,0,0,16,0,24,24,0,0,1,47.69-3.78L14.43,171.2A16,16,0,0,0,24,200H232a16,16,0,0,0,9.6-28.8ZM32.73,184C53.6,170.59,89.49,152,128,152s74.4,18.59,95.27,32Z\"/>";
const LIGHT_INNER     = "<path d=\"M240.37,172.8,138,96l25.59-19.2A6,6,0,0,0,166,72a38,38,0,1,0-76,0,6,6,0,0,0,12,0,26,26,0,0,1,51.82-2.88l-29.32,22-.21.16L15.63,172.8A14,14,0,0,0,24,198H232a14,14,0,0,0,8.39-25.2Zm-6.5,11.83A1.85,1.85,0,0,1,232,186H24a2,2,0,0,1-1.19-3.6L128,103.5l105.17,78.9A1.85,1.85,0,0,1,233.87,184.63Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M241.57,171.2,141.33,96l23.46-17.6A8,8,0,0,0,168,72a40,40,0,1,0-80,0,8,8,0,0,0,16,0,24,24,0,0,1,47.69-3.78L123.34,89.49l-.28.22L14.43,171.2A16,16,0,0,0,24,200H232a16,16,0,0,0,9.6-28.8ZM232,184H24l104-78,104,78Z\"/>";
const SECONDARY_PATHS = "<path d=\"M232,192H24a8,8,0,0,1-4.8-14.4L128,96l108.79,81.6A8,8,0,0,1,232,192Z\"/>";

export const CoatHanger = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CoatHangerProps) => {
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
