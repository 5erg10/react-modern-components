import { SVGProps } from "react";

export type FalloutShelterVariant = "duotone" | "fill" | "light";

export interface FalloutShelterProps extends SVGProps<SVGSVGElement> {
  variant?: FalloutShelterVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M231.94,124.55c-1.77-54.49-46-98.72-100.49-100.49A104.09,104.09,0,0,0,24.06,131.45c1.77,54.49,46,98.72,100.49,100.49A104.09,104.09,0,0,0,231.94,124.55Zm-33.56,16.92L174.93,174.3a8.52,8.52,0,0,1-13.86,0L128,128,94.93,174.3a8.52,8.52,0,0,1-13.86,0L57.62,141.47A8.52,8.52,0,0,1,64.55,128H128L97.62,85.47A8.52,8.52,0,0,1,104.55,72h46.9a8.52,8.52,0,0,1,6.93,13.47L128,128h63.45A8.52,8.52,0,0,1,198.38,141.47Z\"/>";
const LIGHT_INNER     = "<path d=\"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm69.29-92.83A6,6,0,0,0,192,122H139.21L165,83.33A6,6,0,0,0,160,74H96a6,6,0,0,0-5,9.33L116.79,122H64a6,6,0,0,0-5,9.33l32,48a6,6,0,0,0,10,0l27-40.51,27,40.51a6,6,0,0,0,10,0l32-48A6,6,0,0,0,197.29,125.17ZM148.79,86,128,117.18,107.21,86ZM96,165.18,75.21,134h41.58Zm64,0L139.21,134h41.58Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm71.05-91.77A8,8,0,0,0,192,120H143l23.71-35.56A8,8,0,0,0,160,72H96a8,8,0,0,0-6.66,12.44L113.05,120H64a8,8,0,0,0-6.66,12.44l32,48a8,8,0,0,0,13.32,0l25.34-38,25.34,38a8,8,0,0,0,13.32,0l32-48A8,8,0,0,0,199.05,124.23ZM145.05,88,128,113.58,111,88ZM96,161.58,79,136h34.1Zm64,0L143,136h34.1Z\"/>";
const SECONDARY_PATHS = "<path d=\"M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32Zm32,144-32-48L96,176,64,128h64L96,80h64l-32,48h64Z\"/>";

export const FalloutShelter = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: FalloutShelterProps) => {
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
