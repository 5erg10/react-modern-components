import { SVGProps } from "react";

export type DropboxLogoVariant = "duotone" | "fill" | "light";

export interface DropboxLogoProps extends SVGProps<SVGSVGElement> {
  variant?: DropboxLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M188,120,128,80l55.56-37a8,8,0,0,1,8.88,0L238,73.34a8,8,0,0,1,0,13.32ZM72.44,43a8,8,0,0,0-8.88,0L18,73.34a8,8,0,0,0,0,13.32L68,120l60-40ZM238,153.34,188,120l-60,40,55.56,37a8,8,0,0,0,8.88,0L238,166.66A8,8,0,0,0,238,153.34Zm-220,0a8,8,0,0,0,0,13.32L63.56,197a8,8,0,0,0,8.88,0L128,160,68,120Zm150.61,52.95-38.37-25.58a4,4,0,0,0-4.44,0L87.41,206.29a4,4,0,0,0,0,6.65L123.56,237a8,8,0,0,0,8.88,0l36.15-24.1A4,4,0,0,0,168.59,206.29Z\"/>";
const LIGHT_INNER     = "<path d=\"M235.42,151.07,190.54,120l44.88-31.07a6,6,0,0,0,0-9.86l-52-36a6,6,0,0,0-6.84,0L128,76.7,79.42,43.07a6,6,0,0,0-6.84,0l-52,36a6,6,0,0,0,0,9.86L65.46,120,20.58,151.07a6,6,0,0,0,0,9.86l52,36a6,6,0,0,0,6.84,0L128,163.3l48.58,33.63a6,6,0,0,0,6.84,0l52-36a6,6,0,0,0,0-9.86ZM128,148.7,86.54,120,128,91.3,169.46,120Zm52-93.4L221.46,84,180,112.7,138.54,84Zm-104,0L117.46,84,76,112.7,34.54,84Zm0,129.4L34.54,156,76,127.3,117.46,156Zm104,0L138.54,156,180,127.3,221.46,156ZM156.82,208a6,6,0,0,1-1.51,8.35l-23.89,16.54a6,6,0,0,1-6.84,0l-23.89-16.54a6,6,0,0,1,6.83-9.86L128,220.7l20.48-14.17A6,6,0,0,1,156.82,208Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M236.55,149.42,194.05,120l42.5-29.42a8,8,0,0,0,0-13.16l-52-36a8,8,0,0,0-9.1,0L128,74.27,80.55,41.42a8,8,0,0,0-9.1,0l-52,36a8,8,0,0,0,0,13.16L62,120l-42.5,29.42a8,8,0,0,0,0,13.16l52,36a8,8,0,0,0,9.1,0L128,165.73l47.45,32.85a8,8,0,0,0,9.1,0l52-36a8,8,0,0,0,0-13.16ZM180,57.73,218,84,180,110.27,142.05,84ZM38.05,84,76,57.73,114,84,76,110.27Zm38,98.27L38.05,156l38-26.27L114,156Zm14-62.27,38-26.27L166,120,128,146.27Zm90,62.27L142.05,156,180,129.73,218,156Zm-21.53,24.64a8,8,0,0,1-2,11.13l-23.89,16.54a8,8,0,0,1-9.1,0L99.56,218a8,8,0,0,1,9.1-13.16L128,218.27l19.34-13.39A8,8,0,0,1,158.47,206.91Z\"/>";
const SECONDARY_PATHS = "<path d=\"M128,84,76,120,24,84,76,48Zm104,0L180,48,128,84l52,36ZM24,156l52,36,52-36L76,120Zm104,0,52,36,52-36-52-36Z\"/>";

export const DropboxLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: DropboxLogoProps) => {
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
