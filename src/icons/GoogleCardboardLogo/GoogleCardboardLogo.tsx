import { SVGProps } from "react";

export type GoogleCardboardLogoVariant = "duotone" | "fill" | "light";

export interface GoogleCardboardLogoProps extends SVGProps<SVGSVGElement> {
  variant?: GoogleCardboardLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H96a8,8,0,0,0,5.66-2.34L128,179.31l26.34,26.35A8,8,0,0,0,160,208h64a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM80,152a24,24,0,1,1,24-24A24,24,0,0,1,80,152Zm96,0a24,24,0,1,1,24-24A24,24,0,0,1,176,152Z\"/>";
const LIGHT_INNER     = "<path d=\"M224,50H32A14,14,0,0,0,18,64V192a14,14,0,0,0,14,14H96a6,6,0,0,0,4.24-1.76l26.35-26.34a2,2,0,0,1,2.82,0l26.35,26.34A6,6,0,0,0,160,206h64a14,14,0,0,0,14-14V64A14,14,0,0,0,224,50Zm2,142a2,2,0,0,1-2,2H162.49L137.9,169.42a14,14,0,0,0-19.8,0L93.51,194H32a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H224a2,2,0,0,1,2,2ZM80,98a30,30,0,1,0,30,30A30,30,0,0,0,80,98Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,80,146Zm96-48a30,30,0,1,0,30,30A30,30,0,0,0,176,98Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,176,146Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H96a8,8,0,0,0,5.66-2.34L128,179.31l26.34,26.35A8,8,0,0,0,160,208h64a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,144H163.31l-24-24a16,16,0,0,0-22.62,0l-24,24H32V64H224ZM80,160a32,32,0,1,0-32-32A32,32,0,0,0,80,160Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,80,112Zm96,48a32,32,0,1,0-32-32A32,32,0,0,0,176,160Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,176,112Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,56H32a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H96l26.34-26.34a8,8,0,0,1,11.32,0L160,200h64a8,8,0,0,0,8-8V64A8,8,0,0,0,224,56ZM80,152a24,24,0,1,1,24-24A24,24,0,0,1,80,152Zm96,0a24,24,0,1,1,24-24A24,24,0,0,1,176,152Z\"/>";

export const GoogleCardboardLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: GoogleCardboardLogoProps) => {
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
