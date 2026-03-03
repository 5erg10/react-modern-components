import { SVGProps } from "react";

export type AnchorVariant = "duotone" | "fill" | "light";

export interface AnchorProps extends SVGProps<SVGSVGElement> {
  variant?: AnchorVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M224,144c0,38.11-27.67,45.66-49.9,51.72C149.77,202.36,136,207.31,136,232a8,8,0,0,1-16,0c0-24.69-13.77-29.64-38.1-36.28C59.67,189.66,32,182.11,32,144a8,8,0,0,1,16,0c0,24.69,13.77,29.64,38.1,36.28,11.36,3.1,24.12,6.6,33.9,14.34V128H88a8,8,0,0,1,0-16h32V82.83a28,28,0,1,1,16,0V112h32a8,8,0,0,1,0,16H136v66.62c9.78-7.74,22.54-11.24,33.9-14.34C194.23,173.64,208,168.69,208,144a8,8,0,0,1,16,0Z\"/>";
const LIGHT_INNER     = "<path d=\"M216,138a6,6,0,0,0-6,6c0,26.09-15,31.52-39.58,38.21C158,185.6,143.79,189.47,134,199.16V126h34a6,6,0,0,0,0-12H134V85.4a30,30,0,1,0-12,0V114H88a6,6,0,0,0,0,12h34v73.16c-9.79-9.69-24-13.56-36.42-16.95C61,175.52,46,170.09,46,144a6,6,0,0,0-12,0c0,36.58,26.85,43.91,48.42,49.79C107,200.48,122,205.91,122,232a6,6,0,0,0,12,0c0-26.09,15-31.52,39.58-38.21C195.15,187.91,222,180.58,222,144A6,6,0,0,0,216,138ZM110,56a18,18,0,1,1,18,18A18,18,0,0,1,110,56Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M216,136a8,8,0,0,0-8,8c0,24.69-13.77,29.64-38.1,36.28-11.36,3.1-24.12,6.6-33.9,14.34V128h32a8,8,0,0,0,0-16H136V87a32,32,0,1,0-16,0v25H88a8,8,0,0,0,0,16h32v66.62c-9.78-7.74-22.54-11.24-33.9-14.34C61.77,173.64,48,168.69,48,144a8,8,0,0,0-16,0c0,38.11,27.67,45.66,49.9,51.72C106.23,202.36,120,207.31,120,232a8,8,0,0,0,16,0c0-24.69,13.77-29.64,38.1-36.28C196.33,189.66,224,182.11,224,144A8,8,0,0,0,216,136ZM112,56a16,16,0,1,1,16,16A16,16,0,0,1,112,56Z\"/>";
const SECONDARY_PATHS = "<path d=\"M152,56a24,24,0,1,1-24-24A24,24,0,0,1,152,56Z\"/>";

export const Anchor = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: AnchorProps) => {
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
