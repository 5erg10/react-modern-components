import { SVGProps } from "react";

export type UsbVariant = "duotone" | "fill" | "light";

export interface UsbProps extends SVGProps<SVGSVGElement> {
  variant?: UsbVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M252,128a4,4,0,0,1-1.78,3.33l-48,32A4,4,0,0,1,196,160V136H72v48h36v-8a12,12,0,0,1,12-12h32a12,12,0,0,1,12,12v32a12,12,0,0,1-12,12H120a12,12,0,0,1-12-12v-8H72a16,16,0,0,1-16-16V136H8a8,8,0,0,1,0-16H56V72A16,16,0,0,1,72,56h37.17a28,28,0,1,1,0,16H72v48H196V96a4,4,0,0,1,6.22-3.33l48,32A4,4,0,0,1,252,128Z\"/>";
const LIGHT_INNER     = "<path d=\"M251.33,123l-48-32A6,6,0,0,0,194,96v26H70V72a2,2,0,0,1,2-2h34.6a30,30,0,1,0,0-12H72A14,14,0,0,0,58,72v50H8a6,6,0,0,0,0,12H58v50a14,14,0,0,0,14,14h34v10a14,14,0,0,0,14,14h32a14,14,0,0,0,14-14V176a14,14,0,0,0-14-14H120a14,14,0,0,0-14,14v10H72a2,2,0,0,1-2-2V134H194v26a6,6,0,0,0,9.33,5l48-32a6,6,0,0,0,0-10ZM136,46a18,18,0,1,1-18,18A18,18,0,0,1,136,46ZM118,176a2,2,0,0,1,2-2h32a2,2,0,0,1,2,2v32a2,2,0,0,1-2,2H120a2,2,0,0,1-2-2Zm88-27.21V107.21L237.18,128Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M252.44,121.34l-48-32A8,8,0,0,0,192,96v24H72V72h33a32,32,0,1,0,0-16H72A16,16,0,0,0,56,72v48H8a8,8,0,0,0,0,16H56v48a16,16,0,0,0,16,16h32v8a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V176a16,16,0,0,0-16-16H120a16,16,0,0,0-16,16v8H72V136H192v24a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM136,48a16,16,0,1,1-16,16A16,16,0,0,1,136,48ZM120,176h32v32H120Zm88-30.95V111l25.58,17Z\"/>";
const SECONDARY_PATHS = "<path d=\"M160,64a24,24,0,1,1-24-24A24,24,0,0,1,160,64Zm40,32v64l48-32Zm-48,72H120a8,8,0,0,0-8,8v32a8,8,0,0,0,8,8h32a8,8,0,0,0,8-8V176A8,8,0,0,0,152,168Z\"/>";

export const Usb = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: UsbProps) => {
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
