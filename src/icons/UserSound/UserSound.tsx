import { SVGProps } from "react";

export type UserSoundVariant = "duotone" | "fill" | "light";

export interface UserSoundProps extends SVGProps<SVGSVGElement> {
  variant?: UserSoundVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M198.13,202.85A8,8,0,0,1,192,216H24a8,8,0,0,1-6.12-13.15c14.94-17.78,33.52-30.41,54.17-37.17a68,68,0,1,1,71.9,0C164.6,172.44,183.18,185.07,198.13,202.85ZM196.86,61.39a8,8,0,0,0-4.22,10.5,92.26,92.26,0,0,1,0,72.22,8,8,0,1,0,14.72,6.29,108.36,108.36,0,0,0,0-84.8A8,8,0,0,0,196.86,61.39Zm39.85-8.54a8,8,0,1,0-14.7,6.3,124.43,124.43,0,0,1,0,97.7,8,8,0,1,0,14.7,6.3,140.34,140.34,0,0,0,0-110.3Z\"/>";
const LIGHT_INNER     = "<path d=\"M139,166.26a66,66,0,1,0-62,0c-22,6.22-41.88,19.15-57.61,37.88a6,6,0,0,0,9.18,7.72C49.11,187.45,77.31,174,108,174s58.9,13.45,79.41,37.86a6,6,0,1,0,9.18-7.72C180.86,185.41,161,172.48,139,166.26ZM54,108a54,54,0,1,1,54,54A54.06,54.06,0,0,1,54,108ZM205.52,66.39a106.33,106.33,0,0,1,0,83.22,6,6,0,0,1-11-4.71,94.29,94.29,0,0,0,0-73.8,6,6,0,0,1,11-4.71ZM246,108a137.16,137.16,0,0,1-11.12,54.37,6,6,0,0,1-11-4.74,126.41,126.41,0,0,0,0-99.26,6,6,0,0,1,11-4.74A137.16,137.16,0,0,1,246,108Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M144,165.68a68,68,0,1,0-71.9,0c-20.65,6.76-39.23,19.39-54.17,37.17a8,8,0,0,0,12.25,10.3C50.25,189.19,77.91,176,108,176s57.75,13.19,77.88,37.15a8,8,0,1,0,12.25-10.3C183.18,185.07,164.6,172.44,144,165.68ZM56,108a52,52,0,1,1,52,52A52.06,52.06,0,0,1,56,108ZM207.36,65.6a108.36,108.36,0,0,1,0,84.8,8,8,0,0,1-7.36,4.86,8,8,0,0,1-7.36-11.15,92.26,92.26,0,0,0,0-72.22,8,8,0,0,1,14.72-6.29ZM248,108a139,139,0,0,1-11.29,55.15,8,8,0,0,1-14.7-6.3,124.43,124.43,0,0,0,0-97.7,8,8,0,1,1,14.7-6.3A139,139,0,0,1,248,108Z\"/>";
const SECONDARY_PATHS = "<path d=\"M168,108a60,60,0,1,1-60-60A60,60,0,0,1,168,108Z\"/>";

export const UserSound = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: UserSoundProps) => {
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
