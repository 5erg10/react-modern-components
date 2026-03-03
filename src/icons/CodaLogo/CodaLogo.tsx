import { SVGProps } from "react";

export type CodaLogoVariant = "duotone" | "fill" | "light";

export interface CodaLogoProps extends SVGProps<SVGSVGElement> {
  variant?: CodaLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M136,128a40,40,0,0,0,40,40h.32c7.83.3,14-1.46,21.24-6.11A12,12,0,0,1,216,172v36a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V48A16,16,0,0,1,56,32H200a16,16,0,0,1,16,16V84a12,12,0,0,1-18.47,10.1A40.23,40.23,0,0,0,136,128Z\"/>";
const LIGHT_INNER     = "<path d=\"M176,86a41.82,41.82,0,0,1,22.61,6.41A10,10,0,0,0,214,84V48a14,14,0,0,0-14-14H56A14,14,0,0,0,42,48V208a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V172a10,10,0,0,0-15.36-8.43c-7.63,4.89-14.11,6.76-22.4,6.42H176a42,42,0,0,1,0-84Zm-54,42a54.06,54.06,0,0,0,53.88,54A46.36,46.36,0,0,0,202,175.57V208a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H200a2,2,0,0,1,2,2V80.48A54.28,54.28,0,0,0,122,128Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M176,88a39.79,39.79,0,0,1,21.53,6.1A12,12,0,0,0,216,84V48a16,16,0,0,0-16-16H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V172a12,12,0,0,0-18.44-10.11c-7.25,4.65-13.41,6.41-21.24,6.11H176a40,40,0,0,1,0-80Zm-56,40a56.07,56.07,0,0,0,55.84,56A48.4,48.4,0,0,0,200,178.89V208H56V48H200V77.23A56.3,56.3,0,0,0,120,128Z\"/>";
const SECONDARY_PATHS = "<path d=\"M128,128a48,48,0,0,0,48,48c10.27.41,17.9-2.25,25.88-7.37A4,4,0,0,1,208,172v36a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8V84a4,4,0,0,1-6.15,3.36A48.24,48.24,0,0,0,128,128Z\"/>";

export const CodaLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CodaLogoProps) => {
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
