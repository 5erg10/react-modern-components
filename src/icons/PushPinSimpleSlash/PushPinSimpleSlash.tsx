import { SVGProps } from "react";

export type PushPinSimpleSlashVariant = "duotone" | "fill" | "light";

export interface PushPinSimpleSlashProps extends SVGProps<SVGSVGElement> {
  variant?: PushPinSimpleSlashVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M79.25,38.69a4,4,0,0,1,3-6.69H192a8,8,0,0,1,8,8.53A8.17,8.17,0,0,1,191.73,48h-6.19L206.7,167.91a4,4,0,0,1-6.9,3.39ZM213.92,210.62l-160-176A8,8,0,1,0,42.08,45.38L66.24,72,49.29,168H40a8,8,0,0,0,0,16h80v56a8,8,0,0,0,16,0V184h32.1l34,37.38a8,8,0,1,0,11.84-10.76Z\"/>";
const LIGHT_INNER     = "<path d=\"M85.25,40a6,6,0,0,1,6-6H192a6,6,0,0,1,0,12h-8.85l19.17,108.64a6,6,0,0,1-4.86,7,5.41,5.41,0,0,1-1.05.1,6,6,0,0,1-5.9-5L171,46H91.25A6,6,0,0,1,85.25,40ZM212,220.44a6,6,0,0,1-8.48-.4L169,182H134v58a6,6,0,0,1-12,0V182H40a6,6,0,0,1,0-12H51L68.38,71.33,43.56,44A6,6,0,0,1,52.44,36l160,176A6,6,0,0,1,212,220.44Zm-54-50.44L78.58,82.56,63.15,170Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M83.25,40a8,8,0,0,1,8-8H192a8,8,0,0,1,0,16h-6.46l18.75,106.3a8,8,0,0,1-6.48,9.26,7.52,7.52,0,0,1-1.4.13,8,8,0,0,1-7.87-6.61L169.29,48h-78A8,8,0,0,1,83.25,40ZM213.38,221.92a8,8,0,0,1-11.3-.54L168.1,184H136v56a8,8,0,0,1-16,0V184H40a8,8,0,0,1,0-16h9.29L66.24,72,42.08,45.38A8,8,0,1,1,53.92,34.62l160,176A8,8,0,0,1,213.38,221.92ZM153.55,168,79.84,86.92,65.54,168Z\"/>";
const SECONDARY_PATHS = "<path d=\"M190.46,176H56L78.83,46.61A8,8,0,0,1,86.71,40H176l22.34,126.61A8,8,0,0,1,190.46,176Z\"/>";

export const PushPinSimpleSlash = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PushPinSimpleSlashProps) => {
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
