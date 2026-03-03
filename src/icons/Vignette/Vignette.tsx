import { SVGProps } from "react";

export type VignetteVariant = "duotone" | "fill" | "light";

export interface VignetteProps extends SVGProps<SVGSVGElement> {
  variant?: VignetteVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm-16,88c0,30.93-32.24,56-72,56s-72-25.07-72-56,32.24-56,72-56S200,97.07,200,128Z\"/>";
const LIGHT_INNER     = "<path d=\"M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42Zm2,158a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2ZM128,74c-38.6,0-70,24.22-70,54s31.4,54,70,54,70-24.22,70-54S166.6,74,128,74Zm0,96c-32,0-58-18.84-58-42s26-42,58-42,58,18.84,58,42S160,170,128,170Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM178.05,87.66C164.59,77.56,146.81,72,128,72S91.41,77.56,78,87.66C63.79,98.27,56,112.6,56,128s7.79,29.73,22,40.34C91.41,178.44,109.19,184,128,184s36.59-5.56,50.05-15.66C192.21,157.73,200,143.4,200,128S192.21,98.27,178.05,87.66ZM128,168c-30.88,0-56-17.94-56-40s25.12-40,56-40,56,17.94,56,40S158.88,168,128,168Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,48H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48ZM128,176c-35.35,0-64-21.49-64-48s28.65-48,64-48,64,21.49,64,48S163.35,176,128,176Z\"/>";

export const Vignette = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: VignetteProps) => {
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
