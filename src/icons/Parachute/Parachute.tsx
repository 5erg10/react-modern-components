import { SVGProps } from "react";

export type ParachuteVariant = "duotone" | "fill" | "light";

export interface ParachuteProps extends SVGProps<SVGSVGElement> {
  variant?: ParachuteVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M232,120A104.12,104.12,0,0,0,128,16h0A104.12,104.12,0,0,0,24,120a8,8,0,0,0,3.21,6.39h0L120,196v20h-8a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16h-8V196l92.8-69.6h0A8,8,0,0,0,232,120Zm-16.36-8H175.83c-1.54-37.95-13.91-62.43-25.11-77A88.2,88.2,0,0,1,215.64,112ZM154.4,128,128,175.53,101.6,128Zm-71.11,0,19.5,35.09L56,128Zm89.42,0H200l-46.79,35.09ZM105.28,35c-11.2,14.57-23.57,39.05-25.11,77H40.36A88.2,88.2,0,0,1,105.28,35Z\"/>";
const LIGHT_INNER     = "<path d=\"M230,120a102,102,0,0,0-204,0,6,6,0,0,0,2.27,4.69l.13.11L122,195v23H112a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12H134V195l93.6-70.2h0A6,6,0,0,0,230,120Zm-12.2-6H173.9c-1.3-42.92-16.5-68.62-28.43-82.3A90.2,90.2,0,0,1,217.8,114ZM128,31.43A77.14,77.14,0,0,1,143.42,49C157.26,70.08,161.24,95,161.89,114H94.11c1.06-31.88,10.49-52.86,18.47-65A76.69,76.69,0,0,1,128,31.43ZM157.8,126,128,179.65,98.2,126Zm-73.33,0,24.62,44.32L50,126Zm87.06,0H206l-59.09,44.32Zm-61-94.3C98.6,45.38,83.4,71.08,82.1,114H38.2A90.2,90.2,0,0,1,110.53,31.7Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M232,120A104.12,104.12,0,0,0,128,16h0A104.12,104.12,0,0,0,24,120a8,8,0,0,0,3.12,6.33l.08.07L120,196v20h-8a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16h-8V196l92.8-69.6h0A8,8,0,0,0,232,120Zm-16.36-8H175.83c-1.54-37.95-13.91-62.43-25.11-77A88.2,88.2,0,0,1,215.64,112ZM128,34a76.89,76.89,0,0,1,13.88,16.22C149.49,62,158.45,81.87,159.82,112H96.18c1.37-30.13,10.33-50,17.94-61.74A76.92,76.92,0,0,1,128,34Zm26.4,94L128,175.53,101.6,128Zm-71.11,0,19.5,35.09L56,128Zm89.42,0H200l-46.79,35.09ZM105.28,35c-11.2,14.57-23.57,39.05-25.11,77H40.36A88.2,88.2,0,0,1,105.28,35Z\"/>";
const SECONDARY_PATHS = "<path d=\"M128,24S88,48,88,120H32A96,96,0,0,1,128,24Zm0,0s40,24,40,96h56A96,96,0,0,0,128,24Z\"/>";

export const Parachute = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ParachuteProps) => {
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
