import { SVGProps } from "react";

export type BaseballCapVariant = "duotone" | "fill" | "light";

export interface BaseballCapProps extends SVGProps<SVGSVGElement> {
  variant?: BaseballCapVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M128,24A104.12,104.12,0,0,0,24,128v56a24,24,0,0,0,24,24,24.11,24.11,0,0,0,14.18-4.64C74.33,194.53,95.6,184,128,184s53.67,10.52,65.81,19.35A24,24,0,0,0,232,184V128A104.12,104.12,0,0,0,128,24ZM40,128A88.15,88.15,0,0,1,109.81,41.9a167,167,0,0,0-28.87,76.76A166,166,0,0,0,40,136.88Zm176,56a7.77,7.77,0,0,1-4.34,7.1,8,8,0,0,1-8.44-.69C189.16,180.2,164.7,168,128,168S66.84,180.2,52.78,190.42a8,8,0,0,1-8.44.69A7.77,7.77,0,0,1,40,184V156.07a150.62,150.62,0,0,1,49.93-23.28,7.06,7.06,0,0,0,1-.26,154.06,154.06,0,0,1,74.17,0,8.64,8.64,0,0,0,1,.27A150.49,150.49,0,0,1,216,156.07Zm0-47.13a166,166,0,0,0-40.94-18.22A167,167,0,0,0,146.19,41.9,88.15,88.15,0,0,1,216,128Z\"/>";
const LIGHT_INNER     = "<path d=\"M128,26A102.12,102.12,0,0,0,26,128v56a22,22,0,0,0,35,17.74c12.38-9,34.06-19.74,67-19.74s54.61,10.73,67,19.73A22,22,0,0,0,230,184V128A102.12,102.12,0,0,0,128,26Zm90,102v12.5a164.29,164.29,0,0,0-44.8-20.3A165.07,165.07,0,0,0,141.69,39,90.15,90.15,0,0,1,218,128Zm-57.21-10.78a168.56,168.56,0,0,0-65.58,0c5-38.38,24.16-65.59,32.79-76.14C136.63,51.65,155.8,78.85,160.79,117.23ZM114.31,39A165.07,165.07,0,0,0,82.8,120.21,164.29,164.29,0,0,0,38,140.51V128A90.15,90.15,0,0,1,114.31,39Zm98.26,153.85A9.94,9.94,0,0,1,202,192c-13.82-10-37.88-22-74-22s-60.22,12-74,22a9.92,9.92,0,0,1-10.53.85A9.79,9.79,0,0,1,38,184V155a154,154,0,0,1,180,0v29A9.79,9.79,0,0,1,212.57,192.89Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M128,24A104.12,104.12,0,0,0,24,128v56a24,24,0,0,0,24,24,24.11,24.11,0,0,0,14.18-4.64C74.33,194.53,95.6,184,128,184s53.67,10.52,65.81,19.35A24,24,0,0,0,232,184V128A104.12,104.12,0,0,0,128,24Zm88,104v8.87a166,166,0,0,0-40.94-18.22A167,167,0,0,0,146.19,41.9,88.15,88.15,0,0,1,216,128ZM128,44.27a152.47,152.47,0,0,1,30.4,70.46,170.85,170.85,0,0,0-60.84,0A153.31,153.31,0,0,1,128,44.27ZM109.81,41.9a167,167,0,0,0-28.87,76.76A166,166,0,0,0,40,136.88V128A88.15,88.15,0,0,1,109.81,41.9ZM211.66,191.11a8,8,0,0,1-8.44-.69C189.16,180.2,164.7,168,128,168S66.84,180.2,52.78,190.42a8,8,0,0,1-8.44.69A7.77,7.77,0,0,1,40,184V156.07a152,152,0,0,1,176,0V184A7.77,7.77,0,0,1,211.66,191.11Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,152v32a16,16,0,0,1-25.48,12.88C182.53,185.26,159,176,128,176s-54.53,9.26-70.52,20.88A16,16,0,0,1,32,184V152a160,160,0,0,1,192,0Z\"/>";

export const BaseballCap = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BaseballCapProps) => {
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
