import { SVGProps } from "react";

export type DnaVariant = "duotone" | "fill" | "light";

export interface DnaProps extends SVGProps<SVGSVGElement> {
  variant?: DnaVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M200,204.5V232a8,8,0,0,1-16,0V204.5a63.67,63.67,0,0,0-35.38-57.25l-48.4-24.19A79.58,79.58,0,0,1,56,51.5V24a8,8,0,0,1,16,0V51.5a63.67,63.67,0,0,0,35.38,57.25l48.4,24.19A79.58,79.58,0,0,1,200,204.5ZM163.18,192H83.91a8,8,0,0,1-8-8.53A8.18,8.18,0,0,1,84.18,176H149.7a4,4,0,0,0,2.75-6.9,48.24,48.24,0,0,0-11-7.53L94.8,138.23a4,4,0,0,0-4.08.3A79.51,79.51,0,0,0,56,204.5v27.23A8.17,8.17,0,0,0,63.47,240,8,8,0,0,0,72,232V216h92a4,4,0,0,0,4-4v-7.5a48.76,48.76,0,0,0-.9-9.32A4,4,0,0,0,163.18,192ZM191.47,16A8.17,8.17,0,0,0,184,24.27V40H92a4,4,0,0,0-4,4v7.5a48.76,48.76,0,0,0,.9,9.32A4,4,0,0,0,92.82,64h79a8.18,8.18,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53H106.3a4,4,0,0,0-2.75,6.9,48.24,48.24,0,0,0,11,7.53l46.67,23.34a4,4,0,0,0,4.08-.3A79.51,79.51,0,0,0,200,51.5V24A8,8,0,0,0,191.47,16Z\"/>";
const LIGHT_INNER     = "<path d=\"M198,204.5V232a6,6,0,0,1-12,0V204.5a65.64,65.64,0,0,0-36.48-59l-48.4-24.2A77.57,77.57,0,0,1,58,51.5V24a6,6,0,0,1,12,0V51.5a65.64,65.64,0,0,0,36.48,59l48.4,24.2A77.57,77.57,0,0,1,198,204.5ZM160,202H70.05A66,66,0,0,1,74,182h74.13a6,6,0,0,0,0-12H79.77a65.85,65.85,0,0,1,17.16-18.7,6,6,0,0,0-7.1-9.67A78.27,78.27,0,0,0,58,204.5V232a6,6,0,0,0,12,0V214h90a6,6,0,0,0,0-12ZM192,18a6,6,0,0,0-6,6V42H96a6,6,0,0,0,0,12H186A66,66,0,0,1,182,74H107.89a6,6,0,1,0,0,12h68.34a65.85,65.85,0,0,1-17.16,18.7,6,6,0,0,0,7.1,9.67A78.27,78.27,0,0,0,198,51.5V24A6,6,0,0,0,192,18Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M200,204.5V232a8,8,0,0,1-16,0V204.5a63.67,63.67,0,0,0-35.38-57.25l-48.4-24.19A79.58,79.58,0,0,1,56,51.5V24a8,8,0,0,1,16,0V51.5a63.67,63.67,0,0,0,35.38,57.25l48.4,24.19A79.58,79.58,0,0,1,200,204.5ZM160,200H72.17a63.59,63.59,0,0,1,3.23-16h72.71a8,8,0,0,0,0-16H83.46a63.71,63.71,0,0,1,14.65-15.08A8,8,0,1,0,88.64,140,80.27,80.27,0,0,0,56,204.5V232a8,8,0,0,0,16,0V216h88a8,8,0,0,0,0-16ZM192,16a8,8,0,0,0-8,8V40H96a8,8,0,0,0,0,16h87.83a63.59,63.59,0,0,1-3.23,16H107.89a8,8,0,1,0,0,16h64.65a63.71,63.71,0,0,1-14.65,15.08,8,8,0,0,0,9.47,12.9A80.27,80.27,0,0,0,200,51.5V24A8,8,0,0,0,192,16Z\"/>";
const SECONDARY_PATHS = "<path d=\"M103.8,140.1,128,128l24.2,12.1A72,72,0,0,1,192,204.5V208H64v-3.5A72,72,0,0,1,103.8,140.1ZM192,51.5V48H64v3.5a72,72,0,0,0,39.8,64.4L128,128l24.2-12.1A72,72,0,0,0,192,51.5Z\"/>";

export const Dna = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: DnaProps) => {
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
