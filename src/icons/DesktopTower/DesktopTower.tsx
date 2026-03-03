import { SVGProps } from "react";

export type DesktopTowerVariant = "duotone" | "fill" | "light";

export interface DesktopTowerProps extends SVGProps<SVGSVGElement> {
  variant?: DesktopTowerVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M120,76V188a4,4,0,0,1-4,4H96v16h15.73a8.18,8.18,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53H64.27A8.18,8.18,0,0,1,56,216.53,8,8,0,0,1,64,208H80V192H32A24,24,0,0,1,8,168V96A24,24,0,0,1,32,72h84A4,4,0,0,1,120,76ZM248,48V208a16,16,0,0,1-16,16H152a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h80A16,16,0,0,1,248,48ZM203.9,181.57a12,12,0,1,0-10.34,10.33A12,12,0,0,0,203.9,181.57ZM224,103.47A8.18,8.18,0,0,0,215.73,96H168.27a8.18,8.18,0,0,0-8.25,7.47,8,8,0,0,0,8,8.53h48A8,8,0,0,0,224,103.47Zm0-32A8.18,8.18,0,0,0,215.73,64H168.27A8.18,8.18,0,0,0,160,71.47,8,8,0,0,0,168,80h48A8,8,0,0,0,224,71.47Z\"/>";
const LIGHT_INNER     = "<path d=\"M214,72a6,6,0,0,1-6,6H176a6,6,0,0,1,0-12h32A6,6,0,0,1,214,72Zm-6,26H176a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12Zm38-50V208a14,14,0,0,1-14,14H152a14,14,0,0,1-14-14V190H94v20h18a6,6,0,0,1,0,12H64a6,6,0,0,1,0-12H82V190H32a22,22,0,0,1-22-22V96A22,22,0,0,1,32,74H138V48a14,14,0,0,1,14-14h80A14,14,0,0,1,246,48ZM138,178V86H32A10,10,0,0,0,22,96v72a10,10,0,0,0,10,10ZM234,48a2,2,0,0,0-2-2H152a2,2,0,0,0-2,2V208a2,2,0,0,0,2,2h80a2,2,0,0,0,2-2ZM192,170a10,10,0,1,0,10,10A10,10,0,0,0,192,170Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M216,72a8,8,0,0,1-8,8H176a8,8,0,0,1,0-16h32A8,8,0,0,1,216,72Zm-8,24H176a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm40-48V208a16,16,0,0,1-16,16H152a16,16,0,0,1-16-16V192H96v16h16a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16H80V192H32A24,24,0,0,1,8,168V96A24,24,0,0,1,32,72H136V48a16,16,0,0,1,16-16h80A16,16,0,0,1,248,48ZM136,176V88H32a8,8,0,0,0-8,8v72a8,8,0,0,0,8,8Zm96,32V48H152V208h80Zm-40-40a12,12,0,1,0,12,12A12,12,0,0,0,192,168Z\"/>";
const SECONDARY_PATHS = "<path d=\"M240,48V208a8,8,0,0,1-8,8H152a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h80A8,8,0,0,1,240,48Z\"/>";

export const DesktopTower = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: DesktopTowerProps) => {
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
