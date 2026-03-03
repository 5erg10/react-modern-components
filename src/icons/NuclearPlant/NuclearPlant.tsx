import { SVGProps } from "react";

export type NuclearPlantVariant = "duotone" | "fill" | "light";

export interface NuclearPlantProps extends SVGProps<SVGSVGElement> {
  variant?: NuclearPlantVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M152,32h24a8,8,0,0,0,8-8,8,8,0,0,1,16,0,24,24,0,0,1-24,24H152a8,8,0,0,0-8,8,8,8,0,0,1-16,0A24,24,0,0,1,152,32ZM104,64a8,8,0,0,0,8-8,40,40,0,0,1,40-40h8a8,8,0,0,0,0-16h-8A56.06,56.06,0,0,0,96,56,8,8,0,0,0,104,64ZM248,216a8,8,0,0,1-8,8H16a8,8,0,0,1,0-16H32.74c13.77-27.83,29.48-68.69,31.12-112.66A15.91,15.91,0,0,1,79.85,80h88.33a16,16,0,0,1,16,15.28c2.1,47.84,23.84,92.37,35.29,112.72H240A8,8,0,0,1,248,216ZM168.18,96h-16c1.77,43.72,17.39,84.32,31.09,112h18C188.68,184.08,170.18,141.64,168.18,96Z\"/>";
const LIGHT_INNER     = "<path d=\"M152,34h24a10,10,0,0,0,10-10,6,6,0,0,1,12,0,22,22,0,0,1-22,22H152a10,10,0,0,0-10,10,6,6,0,0,1-12,0A22,22,0,0,1,152,34ZM104,62a6,6,0,0,0,6-6,42,42,0,0,1,42-42h8a6,6,0,0,0,0-12h-8A54.06,54.06,0,0,0,98,56,6,6,0,0,0,104,62ZM246,216a6,6,0,0,1-6,6H16a6,6,0,0,1,0-12H34c14-28,30.2-69.68,31.88-114.59A13.92,13.92,0,0,1,79.85,82h88.33a14,14,0,0,1,14,13.37C184.32,144.45,206.92,190,218.28,210H240A6,6,0,0,1,246,216ZM168.18,94H150c.06.46.1.94.12,1.41C151.82,140.32,168,182,182,210h22.55c-12.44-23.1-32.32-66.9-34.4-114.11A2,2,0,0,0,168.18,94ZM47.34,210H168.66c-13.86-28.94-28.86-69.92-30.51-114.14a2,2,0,0,0-2-1.86H79.85a2,2,0,0,0-2,1.86C76.2,140.08,61.2,181.06,47.34,210Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M240,208H219.45C208,187.65,186.26,143.12,184.16,95.28a16,16,0,0,0-16-15.28H79.85a15.91,15.91,0,0,0-16,15.34c-1.64,44-17.35,84.83-31.12,112.66H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM50.5,208c13.56-28.93,27.74-68.94,29.35-112l55.35-.06a7.46,7.46,0,0,0,1,.06c1.62,43.09,15.8,83.09,29.35,112Zm132.76,0c-13.7-27.69-29.32-68.29-31.09-112h16c2,45.66,20.5,88.1,33.06,112ZM152,32h24a8,8,0,0,0,8-8,8,8,0,0,1,16,0,24,24,0,0,1-24,24H152a8,8,0,0,0-8,8,8,8,0,0,1-16,0A24,24,0,0,1,152,32ZM96,56A56.06,56.06,0,0,1,152,0h8a8,8,0,0,1,0,16h-8a40,40,0,0,0-40,40,8,8,0,0,1-16,0Z\"/>";
const SECONDARY_PATHS = "<path d=\"M178.33,216H37.67C51.16,189.65,70,144.55,71.86,95.64a8,8,0,0,1,8-7.64h56.3a8,8,0,0,1,8,7.64C146,144.55,164.84,189.65,178.33,216Z\"/>";

export const NuclearPlant = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: NuclearPlantProps) => {
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
