import { SVGProps } from "react";

export type HighHeelVariant = "duotone" | "fill" | "light";

export interface HighHeelProps extends SVGProps<SVGSVGElement> {
  variant?: HighHeelVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M32,144a95.28,95.28,0,0,1,37.53,7.67,4,4,0,0,1,2.47,3.7V192a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V148a4,4,0,0,1,4-4Zm199,12.19L180,144.71,69.66,34.34a8,8,0,0,0-11.56.26C36.11,58.64,24,89,24,120a8,8,0,0,0,8,8,111.2,111.2,0,0,1,63.34,19.7,112.45,112.45,0,0,1,40.55,50.39A15.9,15.9,0,0,0,150.72,208H240a16,16,0,0,0,16-16v-4.73A31.72,31.72,0,0,0,231,156.19Z\"/>";
const LIGHT_INNER     = "<path d=\"M230.53,158.14,179,146.53,68.24,35.76a6,6,0,0,0-8.67.19C37.92,59.62,26,89.47,26,120v72a14,14,0,0,0,14,14H72a14,14,0,0,0,14-14V139.65a115,115,0,0,1,51.74,57.69,13.92,13.92,0,0,0,13,8.66H240a14,14,0,0,0,14-14v-4.73A29.73,29.73,0,0,0,230.53,158.14ZM74,192a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V126.18A112.75,112.75,0,0,1,74,134Zm168,0a2,2,0,0,1-2,2H150.72a2,2,0,0,1-1.86-1.18,126.53,126.53,0,0,0-45.58-56.65,125.13,125.13,0,0,0-65.12-22C39.47,90.66,48.6,67.83,64.31,48.79L171.76,156.24a6,6,0,0,0,2.92,1.61l53.23,12A17.81,17.81,0,0,1,242,187.31Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M231,156.19,180,144.71,69.66,34.34a8,8,0,0,0-11.56.26C36.11,58.64,24,89,24,120v72a16,16,0,0,0,16,16H72a16,16,0,0,0,16-16V143.06c2.49,1.45,4.94,3,7.34,4.64a112.45,112.45,0,0,1,40.55,50.39A15.9,15.9,0,0,0,150.72,208H240a16,16,0,0,0,16-16v-4.73A31.72,31.72,0,0,0,231,156.19ZM72,192H40V128.29a110.88,110.88,0,0,1,32,7.12Zm168,0H150.68a128.36,128.36,0,0,0-46.27-57.46,126.9,126.9,0,0,0-64.12-22.26A110.67,110.67,0,0,1,64.46,51.78L170.34,157.66a8,8,0,0,0,3.9,2.14l53.24,12A15.81,15.81,0,0,1,240,187.31Z\"/>";
const SECONDARY_PATHS = "<path d=\"M248,187.31V192a8,8,0,0,1-8,8H150.72a8,8,0,0,1-7.42-4.92C125.51,151.28,82.38,120,32,120c0-31,12.59-58.78,32-80L176,152l53.21,12A23.92,23.92,0,0,1,248,187.31Z\"/>";

export const HighHeel = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: HighHeelProps) => {
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
