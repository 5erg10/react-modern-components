import { SVGProps } from "react";

export type HairDryerVariant = "duotone" | "fill" | "light";

export interface HairDryerProps extends SVGProps<SVGSVGElement> {
  variant?: HairDryerVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M177.42,206.62,209,137.07A64,64,0,0,0,168,24a8.4,8.4,0,0,0-1.32.11L29.37,47A16,16,0,0,0,16,62.78v50.44A16,16,0,0,0,29.37,129L128,145.44V200a16,16,0,0,0,16,16,40,40,0,0,0,40,40h16a8,8,0,0,0,0-16H184a24,24,0,0,1-24-24h2.85A16,16,0,0,0,177.42,206.62ZM192,88a24,24,0,1,1-24-24A24,24,0,0,1,192,88Zm-25.32,63.89A8.4,8.4,0,0,0,168,152a63.9,63.9,0,0,0,17.82-2.54l-23,50.54H144V148.11Z\"/>";
const LIGHT_INNER     = "<path d=\"M198,88a30,30,0,1,0-30,30A30,30,0,0,0,198,88Zm-30,18a18,18,0,1,1,18-18A18,18,0,0,1,168,106Zm-5.15,108a14,14,0,0,0,12.74-8.21l31.8-69.94A62,62,0,0,0,168,26a6.61,6.61,0,0,0-1,.08L29.7,49A14,14,0,0,0,18,62.78v50.44A14,14,0,0,0,29.7,127L130,143.75V200a14,14,0,0,0,14,14h2v2a38,38,0,0,0,38,38h16a6,6,0,0,0,0-12H184a26,26,0,0,1-26-26v-2ZM30,113.22V62.78a2,2,0,0,1,1.67-2L168.48,38a50,50,0,0,1,0,100L31.67,115.2A2,2,0,0,1,30,113.22ZM142,200V145.75l25,4.17a6.61,6.61,0,0,0,1,.08,61.75,61.75,0,0,0,21.53-3.86l-24.86,54.69a2,2,0,0,1-1.82,1.17H144A2,2,0,0,1,142,200Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M200,88a32,32,0,1,0-32,32A32,32,0,0,0,200,88Zm-32,16a16,16,0,1,1,16-16A16,16,0,0,1,168,104Zm9.42,102.62L209,137.07A64,64,0,0,0,168,24a8.4,8.4,0,0,0-1.32.11L29.37,47A16,16,0,0,0,16,62.78v50.44A16,16,0,0,0,29.37,129L128,145.44V200a16,16,0,0,0,16,16,40,40,0,0,0,40,40h16a8,8,0,0,0,0-16H184a24,24,0,0,1-24-24h2.85A16,16,0,0,0,177.42,206.62ZM32,62.78,168.64,40a48,48,0,0,1,0,96L32,113.23Zm134.68,89.11A8.4,8.4,0,0,0,168,152a63.9,63.9,0,0,0,17.82-2.54l-23,50.54H144V148.11Z\"/>";
const SECONDARY_PATHS = "<path d=\"M168,32,30.68,54.89A8,8,0,0,0,24,62.78v50.44a8,8,0,0,0,6.68,7.89L168,144a56,56,0,0,0,0-112Zm0,80a24,24,0,1,1,24-24A24,24,0,0,1,168,112Z\"/>";

export const HairDryer = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: HairDryerProps) => {
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
