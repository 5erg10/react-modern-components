import { SVGProps } from "react";

export type GpsSlashVariant = "duotone" | "fill" | "light";

export interface GpsSlashProps extends SVGProps<SVGSVGElement> {
  variant?: GpsSlashVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M240,136H215.63a87.21,87.21,0,0,1-10.13,33.61,4,4,0,0,1-6.5.81L92.51,53.28a4,4,0,0,1,1.4-6.38A87,87,0,0,1,120,40.37V16a8,8,0,0,1,8.53-8A8.17,8.17,0,0,1,136,16.27v24.1A88.13,88.13,0,0,1,215.63,120h24.1a8.17,8.17,0,0,1,8.25,7.47A8,8,0,0,1,240,136ZM53.92,34.62A8,8,0,1,0,42.08,45.38l21.09,23.2A87.63,87.63,0,0,0,40.37,120H16a8,8,0,0,0,0,16H40.37A88.13,88.13,0,0,0,120,215.63V240a8,8,0,0,0,16,0V215.63a87.51,87.51,0,0,0,45-17.43l21.08,23.18a8,8,0,1,0,11.84-10.76Z\"/>";
const LIGHT_INNER     = "<path d=\"M246,128a6,6,0,0,1-6,6H213.79a85.2,85.2,0,0,1-7.3,29.2,6,6,0,0,1-5.48,3.55,5.91,5.91,0,0,1-2.45-.53,6,6,0,0,1-3-7.93,74.05,74.05,0,0,0-91.28-100.4,6,6,0,0,1-3.84-11.37A85.64,85.64,0,0,1,122,42.22V16a6,6,0,0,1,12,0V42.23A86.12,86.12,0,0,1,213.77,122H240A6,6,0,0,1,246,128Zm-33.56,84a6,6,0,0,1-8.88,8.08l-22.3-24.54A85.73,85.73,0,0,1,134,213.77V240a6,6,0,0,1-12,0V213.77A86.12,86.12,0,0,1,42.23,134H16a6,6,0,0,1,0-12H42.22A86.23,86.23,0,0,1,65.86,68.56L43.56,44A6,6,0,0,1,52.44,36ZM173.17,186.6,74,77.48A74,74,0,0,0,173.17,186.6Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M248,128a8,8,0,0,1-8,8H215.64a87,87,0,0,1-7.33,28,8,8,0,0,1-7.3,4.73,7.9,7.9,0,0,1-3.27-.71,8,8,0,0,1-4-10.57,72.06,72.06,0,0,0-88.81-97.69,8,8,0,1,1-5.13-15.15A87.21,87.21,0,0,1,120,40.37V16a8,8,0,0,1,16,0V40.37A88.13,88.13,0,0,1,215.63,120H240A8,8,0,0,1,248,128Zm-34.08,82.62a8,8,0,1,1-11.84,10.76L181,198.23a87.69,87.69,0,0,1-45,17.4V240a8,8,0,0,1-16,0V215.63A88.13,88.13,0,0,1,40.37,136H16a8,8,0,0,1,0-16H40.37A88.31,88.31,0,0,1,63.14,68.54L42.08,45.38A8,8,0,1,1,53.92,34.62Zm-43.72-24.3L74,80.45A72,72,0,0,0,170.2,186.32Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,128a80,80,0,1,1-80-80A80,80,0,0,1,208,128Z\"/>";

export const GpsSlash = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: GpsSlashProps) => {
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
