import { SVGProps } from "react";

export type ShareFatVariant = "duotone" | "fill" | "light";

export interface ShareFatProps extends SVGProps<SVGSVGElement> {
  variant?: ShareFatVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M237.66,117.66l-80,80A8,8,0,0,1,144,192V152.23c-57.1,3.24-96.25,40.27-107.24,52h0a12,12,0,0,1-20.68-9.58c3.71-32.26,21.38-63.29,49.76-87.37,23.57-20,52.22-32.69,78.16-34.91V32a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,237.66,117.66Z\"/>";
const LIGHT_INNER     = "<path d=\"M236.24,107.76l-80-80A6,6,0,0,0,146,32V74.2c-54.48,3.59-120.39,55-127.93,120.66a10,10,0,0,0,17.23,8h0C46.56,190.85,87,152.6,146,150.13V192a6,6,0,0,0,10.24,4.24l80-80A6,6,0,0,0,236.24,107.76ZM158,177.52V144a6,6,0,0,0-6-6c-27.73,0-54.76,7.25-80.32,21.55a193.38,193.38,0,0,0-40.81,30.65c4.7-26.56,20.16-52,44-72.27C98.47,97.94,127.29,86,152,86a6,6,0,0,0,6-6V46.49L223.51,112Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M237.66,106.35l-80-80A8,8,0,0,0,144,32V72.35c-25.94,2.22-54.59,14.92-78.16,34.91-28.38,24.08-46.05,55.11-49.76,87.37a12,12,0,0,0,20.68,9.58h0c11-11.71,50.14-48.74,107.24-52V192a8,8,0,0,0,13.66,5.65l80-80A8,8,0,0,0,237.66,106.35ZM160,172.69V144a8,8,0,0,0-8-8c-28.08,0-55.43,7.33-81.29,21.8a196.17,196.17,0,0,0-36.57,26.52c5.8-23.84,20.42-46.51,42.05-64.86C99.41,99.77,127.75,88,152,88a8,8,0,0,0,8-8V51.32L220.69,112Z\"/>";
const SECONDARY_PATHS = "<path d=\"M152,192V144c-61.4,0-104.61,37.19-121.07,54.72a4,4,0,0,1-6.9-3.18C31.51,130.45,99.19,80,152,80V32l80,80Z\"/>";

export const ShareFat = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ShareFatProps) => {
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
