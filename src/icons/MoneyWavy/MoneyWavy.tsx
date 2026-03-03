import { SVGProps } from "react";

export type MoneyWavyVariant = "duotone" | "fill" | "light";

export interface MoneyWavyProps extends SVGProps<SVGSVGElement> {
  variant?: MoneyWavyVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M244.24,60a8,8,0,0,0-7.75-.4c-42.93,21-73.59,11.16-106,.78C96.4,49.53,61.2,38.28,12.49,62.06A8,8,0,0,0,8,69.24V189.17a8,8,0,0,0,11.51,7.19c42.93-21,73.59-11.16,106.05-.78,19.24,6.15,38.84,12.42,61,12.42,17.09,0,35.73-3.72,56.91-14.06a8,8,0,0,0,4.49-7.18V66.83A8,8,0,0,0,244.24,60ZM48,152a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Zm80,8a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm96,8a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z\"/>";
const LIGHT_INNER     = "<path d=\"M243.18,61.72a6,6,0,0,0-5.81-.3c-43.66,21.32-74.69,11.39-107.54.88C96.16,51.53,61.35,40.4,13.37,63.84A6,6,0,0,0,10,69.23v120a6,6,0,0,0,8.63,5.39c43.66-21.32,74.69-11.39,107.54-.88,19,6.09,38.46,12.3,60.42,12.3,16.85,0,35.21-3.66,56-13.84a6,6,0,0,0,3.37-5.39v-120A6,6,0,0,0,243.18,61.72ZM234,183c-41.9,19.21-72.17,9.53-104.17-.71C110.78,176.18,91.37,170,69.41,170c-14.49,0-30.08,2.7-47.41,9.92V73c41.9-19.21,72.17-9.53,104.17.71C157.78,83.84,190.41,94.28,234,76.11ZM128,98a30,30,0,1,0,30,30A30,30,0,0,0,128,98Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,128,146ZM54,96v48a6,6,0,0,1-12,0V96a6,6,0,1,1,12,0Zm148,64V112a6,6,0,0,1,12,0v48a6,6,0,0,1-12,0Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M244.24,60a8,8,0,0,0-7.75-.4c-42.93,21-73.59,11.16-106,.78-34-10.89-69.25-22.14-117.95,1.64A8,8,0,0,0,8,69.24V189.17a8,8,0,0,0,11.51,7.19c42.93-21,73.59-11.16,106.05-.78,19.24,6.15,38.84,12.42,61,12.42,17.09,0,35.73-3.72,56.91-14.06a8,8,0,0,0,4.49-7.18V66.83A8,8,0,0,0,244.24,60ZM232,181.67c-40.6,18.17-70.25,8.69-101.56-1.32-19.24-6.15-38.84-12.42-61-12.42a122,122,0,0,0-45.4,9V74.33c40.6-18.17,70.25-8.69,101.56,1.32S189.14,96,232,79.09ZM128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144ZM56,96v48a8,8,0,0,1-16,0V96a8,8,0,1,1,16,0Zm144,64V112a8,8,0,1,1,16,0v48a8,8,0,1,1-16,0Z\"/>";
const SECONDARY_PATHS = "<path d=\"M16,69.21v120c91.64-44.77,132.36,42.35,224-2.42v-120C148.36,111.56,107.64,24.44,16,69.21ZM128,152a24,24,0,1,1,24-24A24,24,0,0,1,128,152Z\"/>";

export const MoneyWavy = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: MoneyWavyProps) => {
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
