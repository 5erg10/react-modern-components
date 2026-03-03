import { SVGProps } from "react";

export type ApplePodcastsLogoVariant = "duotone" | "fill" | "light";

export interface ApplePodcastsLogoProps extends SVGProps<SVGSVGElement> {
  variant?: ApplePodcastsLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M159.8,151.82a19.67,19.67,0,0,1,3.58,17.05l-12.18,48A20.17,20.17,0,0,1,131.56,232h-7.12a20.17,20.17,0,0,1-19.64-15.13l-12.18-48a19.67,19.67,0,0,1,3.58-17.05,20.17,20.17,0,0,1,16-7.82h31.5A20.17,20.17,0,0,1,159.8,151.82ZM156,116a28,28,0,1,0-28,28A28,28,0,0,0,156,116Zm26,27a8,8,0,1,0,15.41,4.29,72,72,0,1,0-138.74,0A8,8,0,0,0,74,143,56,56,0,1,1,182,143ZM128,24A104,104,0,0,0,70.18,214.46a8,8,0,1,0,8.9-13.3,88,88,0,1,1,97.84,0,8,8,0,0,0,8.9,13.3A104,104,0,0,0,128,24Z\"/>";
const LIGHT_INNER     = "<path d=\"M151,139.2a30,30,0,1,0-46.06,0,22.14,22.14,0,0,0-10.35,7.39,21.68,21.68,0,0,0-3.94,18.77l12.18,48A22.17,22.17,0,0,0,124.44,230h7.12a22.17,22.17,0,0,0,21.58-16.64l12.18-48a21.68,21.68,0,0,0-3.94-18.77A22.14,22.14,0,0,0,151,139.2ZM128,102a18,18,0,1,1-18,18A18,18,0,0,1,128,102Zm25.69,60.4-12.18,48a10.19,10.19,0,0,1-9.95,7.6h-7.12a10.19,10.19,0,0,1-10-7.6l-12.18-48a9.75,9.75,0,0,1,1.78-8.44,10.25,10.25,0,0,1,8.16-4h31.5a10.25,10.25,0,0,1,8.16,4A9.75,9.75,0,0,1,153.69,162.4ZM186,128A58,58,0,1,0,72.11,143.58a6,6,0,0,1-11.56,3.21,70,70,0,1,1,134.9,0,6,6,0,0,1-11.56-3.21A58.31,58.31,0,0,0,186,128Zm44,0a101.91,101.91,0,0,1-45.29,84.79,6,6,0,1,1-6.68-10,90,90,0,1,0-100.06,0,6,6,0,0,1-6.68,10A102,102,0,1,1,230,128Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M154.2,138.33a32,32,0,1,0-52.4,0,24.18,24.18,0,0,0-8.76,7,23.68,23.68,0,0,0-4.3,20.49l12.18,48A24.18,24.18,0,0,0,124.44,232h7.12a24.18,24.18,0,0,0,23.52-18.15l12.18-48a23.68,23.68,0,0,0-4.3-20.49A24.18,24.18,0,0,0,154.2,138.33ZM128,104a16,16,0,1,1-16,16A16,16,0,0,1,128,104Zm23.75,57.91-12.18,48a8.18,8.18,0,0,1-8,6.09h-7.12a8.18,8.18,0,0,1-8-6.09l-12.18-48a7.71,7.71,0,0,1,1.42-6.73,8.26,8.26,0,0,1,6.58-3.18h31.5a8.26,8.26,0,0,1,6.58,3.18A7.71,7.71,0,0,1,151.75,161.91ZM72,128a56.31,56.31,0,0,0,2,15,8,8,0,0,1-15.41,4.29,72,72,0,1,1,138.74,0A8,8,0,0,1,182,143,56,56,0,1,0,72,128Zm160,0a103.92,103.92,0,0,1-46.18,86.46,8,8,0,0,1-8.9-13.3,88,88,0,1,0-97.84,0,8,8,0,0,1-8.9,13.3A104,104,0,1,1,232,128Z\"/>";
const SECONDARY_PATHS = "<path d=\"M104,120a24,24,0,1,1,24,24A24,24,0,0,1,104,120Zm39.75,24h-31.5a16.06,16.06,0,0,0-15.76,19.88l12.19,48A16.2,16.2,0,0,0,124.44,224h7.12a16.2,16.2,0,0,0,15.76-12.12l12.19-48A16.06,16.06,0,0,0,143.75,144Z\"/>";

export const ApplePodcastsLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ApplePodcastsLogoProps) => {
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
