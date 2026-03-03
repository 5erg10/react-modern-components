import { SVGProps } from "react";

export type VirusVariant = "duotone" | "fill" | "light";

export interface VirusProps extends SVGProps<SVGSVGElement> {
  variant?: VirusVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M240,120H223.66a95.52,95.52,0,0,0-22.39-53.95l12.39-12.39a8,8,0,0,0-11.32-11.32L190,54.73A95.52,95.52,0,0,0,136,32.34V16a8,8,0,0,0-16,0V32.34A95.52,95.52,0,0,0,66.05,54.73L53.66,42.34A8,8,0,0,0,42.34,53.66L54.73,66.05a95.52,95.52,0,0,0-22.39,54H16a8,8,0,0,0,0,16H32.34A95.52,95.52,0,0,0,54.73,190L42.34,202.34a8,8,0,0,0,11.32,11.32l12.39-12.39a95.52,95.52,0,0,0,54,22.39V240a8,8,0,0,0,16,0V223.66A95.52,95.52,0,0,0,190,201.27l12.39,12.39a8,8,0,0,0,11.32-11.32L201.27,190A95.52,95.52,0,0,0,223.66,136H240a8,8,0,0,0,0-16ZM80,108a28,28,0,1,1,28,28A28,28,0,0,1,80,108Zm48,84a16,16,0,1,1,16-16A16,16,0,0,1,128,192Zm48-48a16,16,0,1,1,16-16A16,16,0,0,1,176,144Z\"/>";
const LIGHT_INNER     = "<path d=\"M134,108a26,26,0,1,0-26,26A26,26,0,0,0,134,108Zm-26,14a14,14,0,1,1,14-14A14,14,0,0,1,108,122Zm82,6a14,14,0,1,1-14-14A14,14,0,0,1,190,128Zm-48,48a14,14,0,1,1-14-14A14,14,0,0,1,142,176Zm98-54H221.8a93.57,93.57,0,0,0-23.26-56.06l13.7-13.7a6,6,0,0,0-8.48-8.48l-13.7,13.7A93.57,93.57,0,0,0,134,34.2V16a6,6,0,0,0-12,0V34.2A93.57,93.57,0,0,0,65.94,57.46l-13.7-13.7a6,6,0,0,0-8.48,8.48l13.7,13.7A93.57,93.57,0,0,0,34.2,122H16a6,6,0,0,0,0,12H34.2a93.57,93.57,0,0,0,23.26,56.06l-13.7,13.7a6,6,0,1,0,8.48,8.48l13.7-13.7A93.57,93.57,0,0,0,122,221.8V240a6,6,0,0,0,12,0V221.8a93.57,93.57,0,0,0,56.06-23.26l13.7,13.7a6,6,0,0,0,8.48-8.48l-13.7-13.7A93.57,93.57,0,0,0,221.8,134H240a6,6,0,0,0,0-12ZM128,210a82,82,0,1,1,82-82A82.1,82.1,0,0,1,128,210Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M136,108a28,28,0,1,0-28,28A28,28,0,0,0,136,108Zm-28,12a12,12,0,1,1,12-12A12,12,0,0,1,108,120Zm68-8a16,16,0,1,1-16,16A16,16,0,0,1,176,112Zm-32,64a16,16,0,1,1-16-16A16,16,0,0,1,144,176Zm96-56H223.66a95.52,95.52,0,0,0-22.39-53.95l12.39-12.39a8,8,0,0,0-11.32-11.32L190,54.73A95.52,95.52,0,0,0,136,32.34V16a8,8,0,0,0-16,0V32.34A95.52,95.52,0,0,0,66.05,54.73L53.66,42.34A8,8,0,0,0,42.34,53.66L54.73,66.05a95.52,95.52,0,0,0-22.39,54H16a8,8,0,0,0,0,16H32.34A95.52,95.52,0,0,0,54.73,190L42.34,202.34a8,8,0,0,0,11.32,11.32l12.39-12.39a95.52,95.52,0,0,0,54,22.39V240a8,8,0,0,0,16,0V223.66A95.52,95.52,0,0,0,190,201.27l12.39,12.39a8,8,0,0,0,11.32-11.32L201.27,190A95.52,95.52,0,0,0,223.66,136H240a8,8,0,0,0,0-16ZM128,208a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,208Z\"/>";
const SECONDARY_PATHS = "<path d=\"M128,40a88,88,0,1,0,88,88A88,88,0,0,0,128,40Zm-20,88a20,20,0,1,1,20-20A20,20,0,0,1,108,128Z\"/>";

export const Virus = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: VirusProps) => {
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
