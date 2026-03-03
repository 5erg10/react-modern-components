import { SVGProps } from "react";

export type VideoCameraSlashVariant = "duotone" | "fill" | "light";

export interface VideoCameraSlashProps extends SVGProps<SVGSVGElement> {
  variant?: VideoCameraSlashVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M256,80.23v95.45a8.33,8.33,0,0,1-3.86,7.17,8,8,0,0,1-8.58-.19l-33.78-22.52a4,4,0,0,1-1.78-3.33V99.19a4,4,0,0,1,1.78-3.32l33.78-22.53a8,8,0,0,1,9.73.66A8.23,8.23,0,0,1,256,80.23ZM53.92,34.62A8,8,0,1,0,42.08,45.38L51.73,56H32A16,16,0,0,0,16,72V184a16,16,0,0,0,16,16H182.64l19.44,21.38a8,8,0,1,0,11.84-10.76ZM185,155.07a4,4,0,0,0,7-2.7V72a16,16,0,0,0-16-16H104a4,4,0,0,0-3,6.69Z\"/>";
const LIGHT_INNER     = "<path d=\"M250.83,74.71a6,6,0,0,0-6.16.3L206,100.79V72a14,14,0,0,0-14-14H113.06a6,6,0,0,0,0,12H192a2,2,0,0,1,2,2v87.63a6,6,0,0,0,12,0v-4.42L244.67,181a6,6,0,0,0,9.33-5V80A6,6,0,0,0,250.83,74.71ZM242,164.79l-36-24V115.21l36-24ZM52.44,36A6,6,0,0,0,43.56,44L56.25,58H32A14,14,0,0,0,18,72V184a14,14,0,0,0,14,14H183.53l20,22a6,6,0,0,0,8.88-8.08ZM32,186a2,2,0,0,1-2-2V72a2,2,0,0,1,2-2H67.16L172.62,186Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M251.77,73a8,8,0,0,0-8.21.39L208,97.05V72a16,16,0,0,0-16-16H113.06a8,8,0,0,0,0,16H192v87.63a8,8,0,0,0,16,0V159l35.56,23.71A8,8,0,0,0,248,184a8,8,0,0,0,8-8V80A8,8,0,0,0,251.77,73ZM240,161.05l-32-21.33V116.28L240,95ZM53.92,34.62A8,8,0,1,0,42.08,45.38L51.73,56H32A16,16,0,0,0,16,72V184a16,16,0,0,0,16,16H182.64l19.44,21.38a8,8,0,1,0,11.84-10.76ZM32,184V72H66.28L168.1,184Z\"/>";
const SECONDARY_PATHS = "<path d=\"M200,72V184a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H192A8,8,0,0,1,200,72Z\"/>";

export const VideoCameraSlash = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: VideoCameraSlashProps) => {
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
