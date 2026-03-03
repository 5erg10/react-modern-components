import { SVGProps } from "react";

export type UserCheckVariant = "duotone" | "fill" | "light";

export interface UserCheckProps extends SVGProps<SVGSVGElement> {
  variant?: UserCheckVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M253.66,133.66l-32,32a8,8,0,0,1-11.32,0l-16-16a8,8,0,0,1,11.32-11.32L216,148.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM144,157.68a68,68,0,1,0-71.9,0c-20.65,6.76-39.23,19.39-54.17,37.17A8,8,0,0,0,24,208H192a8,8,0,0,0,6.13-13.15C183.18,177.07,164.6,164.44,144,157.68Z\"/>";
const LIGHT_INNER     = "<path d=\"M139,158.25a66,66,0,1,0-62,0c-22,6.23-41.88,19.16-57.61,37.89a6,6,0,0,0,9.18,7.72C49.11,179.44,77.31,166,108,166s58.9,13.44,79.41,37.86a6,6,0,1,0,9.18-7.72C180.86,177.41,161,164.48,139,158.25ZM54,100a54,54,0,1,1,54,54A54.06,54.06,0,0,1,54,100Zm198.24,32.24-32,32a6,6,0,0,1-8.48,0l-16-16a6,6,0,0,1,8.48-8.48L216,151.51l27.76-27.75a6,6,0,1,1,8.48,8.48Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M144,157.68a68,68,0,1,0-71.9,0c-20.65,6.76-39.23,19.39-54.17,37.17a8,8,0,0,0,12.25,10.3C50.25,181.19,77.91,168,108,168s57.75,13.19,77.87,37.15a8,8,0,0,0,12.25-10.3C183.18,177.07,164.6,164.44,144,157.68ZM56,100a52,52,0,1,1,52,52A52.06,52.06,0,0,1,56,100Zm197.66,33.66-32,32a8,8,0,0,1-11.32,0l-16-16a8,8,0,0,1,11.32-11.32L216,148.69l26.34-26.35a8,8,0,0,1,11.32,11.32Z\"/>";
const SECONDARY_PATHS = "<path d=\"M168,100a60,60,0,1,1-60-60A60,60,0,0,1,168,100Z\"/>";

export const UserCheck = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: UserCheckProps) => {
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
