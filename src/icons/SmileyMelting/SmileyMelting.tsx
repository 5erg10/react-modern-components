import { SVGProps } from "react";

export type SmileyMeltingVariant = "duotone" | "fill" | "light";

export interface SmileyMeltingProps extends SVGProps<SVGSVGElement> {
  variant?: SmileyMeltingVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M235.6,176H220.24a104,104,0,1,0-184.52,0H20.4A12.26,12.26,0,0,0,8,187.78,12,12,0,0,0,20,200H80a8,8,0,0,1,0,16H72.16a8.2,8.2,0,0,0-8,6.33A8,8,0,0,0,72,232H199.73a8.18,8.18,0,0,0,8.25-7.47,8,8,0,0,0-8-8.53H144a8,8,0,0,1,0-16h7.79a8.28,8.28,0,0,0,8.15-7.05A8,8,0,0,0,152,184H136c-14.93,0-30.59-5.78-43-15.85-13.55-11-21-25.27-21-40.15a57,57,0,0,1,.71-9,8.21,8.21,0,0,1,8.85-7,8,8,0,0,1,7,9.27A41.33,41.33,0,0,0,88,128c0,22.16,26.26,40,48,40h15.44c13.5,0,24.86,11.05,24.55,24.55a24,24,0,0,1-.23,2.83,4,4,0,0,0,4,4.62H236a12,12,0,0,0,12-12.22A12.26,12.26,0,0,0,235.6,176ZM127.9,93.56A12,12,0,1,1,114.44,80.1,12,12,0,0,1,127.9,93.56Zm48,48a12,12,0,1,1-13.46-13.46A12,12,0,0,1,175.9,141.56Z\"/>";
const LIGHT_INNER     = "<path d=\"M174,140a10,10,0,1,1-10-10A10,10,0,0,1,174,140ZM126,92a10,10,0,1,0-10,10A10,10,0,0,0,126,92Zm73.62-36.63A102,102,0,0,0,52,196a6,6,0,1,0,8.94-8A90.09,90.09,0,0,1,126.72,38H128a90,90,0,0,1,67.07,150,6,6,0,0,0,8.95,8,102,102,0,0,0-4.41-140.63ZM152,170H136c-22.65,0-50-18.73-50-42a43.15,43.15,0,0,1,.58-7,6,6,0,1,0-11.83-2,54,54,0,0,0-.75,9c0,14.26,7.2,28,20.27,38.6,12,9.79,27.26,15.4,41.73,15.4h16a10,10,0,0,1,0,20H96a22,22,0,0,0,0,44,6,6,0,0,0,0-12,10,10,0,0,1,0-20h56a22,22,0,0,0,0-44Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M176,140a12,12,0,1,1-12-12A12,12,0,0,1,176,140ZM128,92a12,12,0,1,0-12,12A12,12,0,0,0,128,92Zm73-38A103.24,103.24,0,0,0,128,24h-1.49a104,104,0,0,0-76,173.32A8,8,0,1,0,62.4,186.67a88,88,0,1,1,131.19,0,8,8,0,0,0,11.93,10.66A104,104,0,0,0,201,54ZM152,168H136c-21.74,0-48-17.84-48-40a41.33,41.33,0,0,1,.55-6.68,8,8,0,1,0-15.78-2.64A56.9,56.9,0,0,0,72,128c0,14.88,7.46,29.13,21,40.15C105.4,178.22,121.07,184,136,184h16a8,8,0,0,1,0,16H96a24,24,0,0,0,0,48,8,8,0,0,0,0-16,8,8,0,0,1,0-16h56a24,24,0,0,0,0-48Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,128a95.63,95.63,0,0,1-24.44,64H56.44A95.67,95.67,0,0,1,32,126.06C33,74.58,75.15,32.73,126.63,32A96,96,0,0,1,224,128Z\"/>";

export const SmileyMelting = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: SmileyMeltingProps) => {
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
