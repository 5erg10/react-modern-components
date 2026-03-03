import { SVGProps } from "react";

export type PushPinSlashVariant = "duotone" | "fill" | "light";

export interface PushPinSlashProps extends SVGProps<SVGSVGElement> {
  variant?: PushPinSlashVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M235.33,104l-47.62,47.78a4,4,0,0,1-5.79-.14L108,70.27a4,4,0,0,1,.13-5.51L152,20.7a16,16,0,0,1,22.63,0l60.69,60.68A16,16,0,0,1,235.33,104ZM53.92,34.62a8,8,0,0,0-12,.21,8.18,8.18,0,0,0,.37,10.75L67.32,73.15C58.26,75.09,48.2,79.37,38,87.63a16,16,0,0,0-1.29,23.78L85,159.71,42.55,202.14a8.17,8.17,0,0,0-.6,11.09,8,8,0,0,0,11.71.43L96.29,171l48.29,48.29A16,16,0,0,0,155.9,224c.38,0,.75,0,1.13,0a15.93,15.93,0,0,0,11.64-6.33,88.62,88.62,0,0,0,11.64-20.2l21.77,23.95a8,8,0,1,0,11.84-10.76Z\"/>";
const LIGHT_INNER     = "<path d=\"M52.44,36A6,6,0,0,0,43.56,44L71.27,74.51C61.78,76,50.6,80,39.22,89.18A14,14,0,0,0,38.1,110l49.71,49.71-44.05,44a6,6,0,1,0,8.48,8.48l44.05-44.05L146,217.89a14,14,0,0,0,9.9,4.11q.49,0,1,0a14,14,0,0,0,10.19-5.54,85.51,85.51,0,0,0,12.44-22.84l24,26.45a6,6,0,1,0,8.87-8.08ZM157.49,209.21a2,2,0,0,1-3,.2L46.58,101.51a2,2,0,0,1,.18-3c13.18-10.64,25.84-12.9,34.79-12.7L170,183.11C167.83,193.74,162.11,203.07,157.49,209.21Zm76.42-106.62-44.65,44.78a6,6,0,1,1-8.5-8.47l44.65-44.79a2,2,0,0,0,0-2.84L164.73,30.59a2,2,0,0,0-2.83,0L120.68,71.94a6,6,0,0,1-8.5-8.47l41.23-41.36a14,14,0,0,1,19.81,0l60.69,60.69A14,14,0,0,1,233.91,102.59Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M53.92,34.62A8,8,0,1,0,42.08,45.38L67.37,73.2A69.82,69.82,0,0,0,38,87.63a16,16,0,0,0-1.29,23.78L85,159.71,42.34,202.34a8,8,0,0,0,11.32,11.32L96.29,171l48.29,48.29A16,16,0,0,0,155.9,224c.38,0,.75,0,1.13,0a15.93,15.93,0,0,0,11.64-6.33,89.75,89.75,0,0,0,11.58-20.27l21.84,24a8,8,0,1,0,11.84-10.76ZM155.9,208,48,100.08C58.23,91.83,69.2,87.72,80.66,87.81l87.16,95.88C165.59,193.56,160.24,202.23,155.9,208Zm79.42-104-44.64,44.79a8,8,0,1,1-11.33-11.3L224,92.7,163.32,32,122.1,73.35a8,8,0,0,1-11.33-11.29L152,20.7a16,16,0,0,1,22.63,0l60.69,60.68A16,16,0,0,1,235.32,104Z\"/>";
const SECONDARY_PATHS = "<path d=\"M229.66,98.34,172.39,155.8c11.46,22.93-1.72,45.86-10.11,57a8,8,0,0,1-12,.83L42.34,105.76A8,8,0,0,1,43,93.85c29.65-23.92,57.4-10,57.4-10l57.27-57.46a8,8,0,0,1,11.31,0L229.66,87A8,8,0,0,1,229.66,98.34Z\"/>";

export const PushPinSlash = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PushPinSlashProps) => {
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
