import { SVGProps } from "react";

export type FootprintsVariant = "duotone" | "fill" | "light";

export interface FootprintsProps extends SVGProps<SVGSVGElement> {
  variant?: FootprintsVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216.06,192v12A36,36,0,0,1,144,204V192a8,8,0,0,1,8-8h56A8,8,0,0,1,216.06,192ZM104,160h-56a8,8,0,0,0-8,8v12A36,36,0,0,0,112,180V168A8,8,0,0,0,104,160ZM76,16C64.36,16,53.07,26.31,44.2,45c-13.93,29.38-18.56,73,.29,96a8,8,0,0,0,6.2,2.93h50.55a8,8,0,0,0,6.2-2.93c18.85-23,14.22-66.65.29-96C98.85,26.31,87.57,16,76,16Zm78.8,152h50.55a8,8,0,0,0,6.2-2.93c18.85-23,14.22-66.65.29-96C202.93,50.31,191.64,40,180,40s-22.89,10.31-31.77,29c-13.93,29.38-18.56,73,.29,96A8,8,0,0,0,154.76,168Z\"/>";
const LIGHT_INNER     = "<path d=\"M104,162H48a6,6,0,0,0-6,6v12a34,34,0,0,0,68,0V168A6,6,0,0,0,104,162Zm-6,18a22,22,0,0,1-44,0v-6H98ZM76,18C65.2,18,54.56,27.91,46,45.9c-13.66,28.82-18.29,71.53,0,93.9a6,6,0,0,0,4.65,2.2h50.53a6,6,0,0,0,4.65-2.2c18.32-22.37,13.69-65.08,0-93.9C97.41,27.91,86.77,18,76,18ZM98.23,130H53.74c-10.09-15.18-11.69-47.65,3.14-79C64.24,35.51,71.77,30,76,30s11.75,5.51,19.1,21C109.92,82.35,108.32,114.82,98.23,130ZM208,186H152a6,6,0,0,0-6,6v12a34,34,0,0,0,68,0V192A6,6,0,0,0,208,186Zm-6,18a22,22,0,0,1-44,0v-6h44Zm-47.27-38h50.53a6,6,0,0,0,4.65-2.2c18.32-22.37,13.69-65.08,0-93.9C201.44,51.91,190.8,42,180,42s-21.43,9.91-30,27.9c-13.66,28.82-18.29,71.53,0,93.9A6,6,0,0,0,154.75,166Zm6.17-91c7.35-15.53,14.88-21,19.1-21s11.74,5.51,19.1,21c14.83,31.31,13.23,63.78,3.14,79H157.77C147.68,138.82,146.08,106.35,160.92,75Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M208.06,184H152a8,8,0,0,0-8,8v12a36,36,0,0,0,72.05,0V192A8,8,0,0,0,208.06,184Zm-8,20a20,20,0,0,1-40,0v-4h40ZM104,160h-56a8,8,0,0,0-8,8v12A36,36,0,0,0,112,180V168A8,8,0,0,0,104,160Zm-8,20a20,20,0,0,1-40,0v-4H96ZM76,16C64.36,16,53.07,26.31,44.2,45c-13.93,29.38-18.56,73,.29,96a8,8,0,0,0,6.2,2.93h50.55a8,8,0,0,0,6.2-2.93c18.85-23,14.22-66.65.29-96C98.85,26.31,87.57,16,76,16ZM97.15,128H54.78c-11.4-18.1-7.21-52.7,3.89-76.11C65.14,38.22,72.17,32,76,32s10.82,6.22,17.3,19.89C104.36,75.3,108.55,109.9,97.15,128Zm57.61,40h50.55a8,8,0,0,0,6.2-2.93c18.85-23,14.22-66.65.29-96C202.93,50.31,191.64,40,180,40s-22.89,10.31-31.77,29c-13.93,29.38-18.56,73,.29,96A8,8,0,0,0,154.76,168Zm8-92.11C169.22,62.22,176.25,56,180,56s10.81,6.22,17.29,19.89c11.1,23.41,15.29,58,3.89,76.11H158.85C147.45,133.9,151.64,99.3,162.74,75.89Z\"/>";
const SECONDARY_PATHS = "<path d=\"M152,192h56v12a28,28,0,0,1-56,0ZM48,180a28,28,0,0,0,56,0V168H48ZM76,24c-24.52,0-51.46,80-25.26,112h50.52C127.46,104,100.52,24,76,24ZM205.26,160c26.2-32-.74-112-25.26-112s-51.46,80-25.26,112Z\"/>";

export const Footprints = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: FootprintsProps) => {
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
