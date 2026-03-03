import { SVGProps } from "react";

export type HorseVariant = "duotone" | "fill" | "light";

export interface HorseProps extends SVGProps<SVGSVGElement> {
  variant?: HorseVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M202.05,55A103.24,103.24,0,0,0,128,24h-8a8,8,0,0,0-8,8V59.53L11.81,121.19a8,8,0,0,0-2.59,11.05l13.78,22,.3.43a31.84,31.84,0,0,0,31.34,12.83c13.93-2.36,38.62-6.54,61.4,3.29l-26.6,36.57A84.71,84.71,0,0,1,69.34,194,8,8,0,1,0,58.67,206a103.32,103.32,0,0,0,69.26,26l2.17,0a104,104,0,0,0,72-177ZM124,112a12,12,0,1,1,12-12A12,12,0,0,1,124,112Z\"/>";
const LIGHT_INNER     = "<path d=\"M134,100a10,10,0,1,1-10-10A10,10,0,0,1,134,100Zm96,29.45A102.29,102.29,0,0,1,130.06,230l-2.13,0A101.33,101.33,0,0,1,60,204.47a6,6,0,1,1,8-8.94,87.12,87.12,0,0,0,22.09,14.39l29-39.89c-23.93-11.37-50.18-6.93-64.8-4.45a29.84,29.84,0,0,1-29.38-12,3.62,3.62,0,0,1-.22-.32l-13.79-22a6,6,0,0,1,1.95-8.29L114,60.65V32a6,6,0,0,1,6-6h8A102,102,0,0,1,230,129.45Zm-12-.17A90,90,0,0,0,128,38h-2V64a6,6,0,0,1-2.86,5.11L24.29,129.94l10.47,16.74a17.91,17.91,0,0,0,17.54,7.06c15.82-2.67,48.42-8.18,77.23,8.22A42,42,0,0,0,170,120a6,6,0,0,1,12,0,54.06,54.06,0,0,1-50.87,53.9l-29.36,40.37A92.83,92.83,0,0,0,129.82,218,90.28,90.28,0,0,0,218,129.28Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M136,100a12,12,0,1,1-12-12A12,12,0,0,1,136,100Zm96,29.48A104.29,104.29,0,0,1,130.1,232l-2.17,0a103.32,103.32,0,0,1-69.26-26A8,8,0,1,1,69.34,194a84.71,84.71,0,0,0,20.1,13.37L116,170.84c-22.78-9.83-47.47-5.65-61.4-3.29A31.84,31.84,0,0,1,23.3,154.72l-.3-.43-13.78-22a8,8,0,0,1,2.59-11.05L112,59.53V32a8,8,0,0,1,8-8h8A104,104,0,0,1,232,129.48Zm-16-.22A88,88,0,0,0,128,40V64a8,8,0,0,1-3.81,6.81L27.06,130.59l9.36,15A15.92,15.92,0,0,0,52,151.77c16-2.7,48.77-8.24,78.07,8.18A40.06,40.06,0,0,0,168,120a8,8,0,0,1,16,0,56.07,56.07,0,0,1-51.8,55.83l-27.11,37.28A90.89,90.89,0,0,0,129.78,216,88.29,88.29,0,0,0,216,129.26Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,129.37c-.72,51.48-42.57,93.59-94.05,94.61a98.08,98.08,0,0,1-37.81-6.66L128,168h0c-26.64-16-57.23-11.3-74.7-8.34A24,24,0,0,1,29.79,150L16,128,120,64V32h8A96,96,0,0,1,224,129.37Z\"/>";

export const Horse = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: HorseProps) => {
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
