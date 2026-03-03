import { SVGProps } from "react";

export type SailboatVariant = "duotone" | "fill" | "light";

export interface SailboatProps extends SVGProps<SVGSVGElement> {
  variant?: SailboatVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M160,140V72.85a4,4,0,0,1,7-2.69l55,60.46a8,8,0,0,1,.43,10.26,8.24,8.24,0,0,1-6.58,3.12H164A4,4,0,0,1,160,140Zm87.21,32.53A8,8,0,0,0,240,168H144V8a8,8,0,0,0-14.21-5l-104,128A8,8,0,0,0,32,144h96v24H16a8,8,0,0,0-6.25,13l29.6,37a15.93,15.93,0,0,0,12.49,6H204.16a15.93,15.93,0,0,0,12.49-6l29.6-37A8,8,0,0,0,247.21,172.53Z\"/>";
const LIGHT_INNER     = "<path d=\"M245.41,173.4A6,6,0,0,0,240,170H142V142h74a6,6,0,0,0,4.44-10L142,45.68V8a6,6,0,0,0-10.66-3.78l-104,128A6,6,0,0,0,32,142h98v28H16a6,6,0,0,0-4.69,9.75l29.6,37A14,14,0,0,0,51.84,222H204.16a14,14,0,0,0,10.93-5.25l29.6-37A6,6,0,0,0,245.41,173.4Zm-43-43.4H142V63.52ZM44.61,130,130,24.9V130Zm161.11,79.25a2,2,0,0,1-1.56.75H51.84a2,2,0,0,1-1.56-.75L28.48,182h199Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M247.21,172.53A8,8,0,0,0,240,168H144V144h72a8,8,0,0,0,5.92-13.38L144,44.91V8a8,8,0,0,0-14.21-5l-104,128A8,8,0,0,0,32,144h96v24H16a8,8,0,0,0-6.25,13l29.6,37a15.93,15.93,0,0,0,12.49,6H204.16a15.93,15.93,0,0,0,12.49-6l29.6-37A8,8,0,0,0,247.21,172.53ZM197.92,128H144V68.69ZM48.81,128,128,30.53V128Zm155.35,80H51.84l-19.2-24H223.36Z\"/>";
const SECONDARY_PATHS = "<path d=\"M240,176l-29.6,37a8,8,0,0,1-6.24,3H51.84a8,8,0,0,1-6.24-3L16,176ZM136,8,32,136H136Z\"/>";

export const Sailboat = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: SailboatProps) => {
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
