import { SVGProps } from "react";

export type SirenVariant = "duotone" | "fill" | "light";

export interface SirenProps extends SVGProps<SVGSVGElement> {
  variant?: SirenVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M120,16V8a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0Zm80,32a8,8,0,0,0,5.66-2.34l8-8a8,8,0,0,0-11.32-11.32l-8,8A8,8,0,0,0,200,48ZM50.34,45.66A8,8,0,0,0,61.66,34.34l-8-8A8,8,0,0,0,42.34,37.66ZM232,176v24a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V176a16,16,0,0,1,16-16V128a88,88,0,0,1,88.67-88c48.15.36,87.33,40.29,87.33,89v31A16,16,0,0,1,232,176ZM134.68,87.89C153.67,91.08,168,108.32,168,128a8,8,0,0,0,16,0c0-27.4-20.07-51.43-46.68-55.89a8,8,0,1,0-2.64,15.78ZM216,200V176H40v24H216Z\"/>";
const LIGHT_INNER     = "<path d=\"M122,16V8a6,6,0,0,1,12,0v8a6,6,0,0,1-12,0Zm78,30a6,6,0,0,0,4.24-1.76l8-8a6,6,0,1,0-8.48-8.48l-8,8A6,6,0,0,0,200,46ZM51.76,44.24a6,6,0,0,0,8.48-8.48l-8-8a6,6,0,0,0-8.48,8.48ZM137,74.08a6,6,0,1,0-2,11.84c20,3.34,35,21.44,35,42.08a6,6,0,0,0,12,0C182,101.57,162.65,78.39,137,74.08ZM230,176v24a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V176a14,14,0,0,1,14-14h2V128a86,86,0,0,1,86-86h.65c47.06.35,85.35,39.38,85.35,87v33h2A14,14,0,0,1,230,176ZM54,162H202V129c0-41-32.94-74.7-73.44-75H128a74,74,0,0,0-74,74Zm164,14a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2v24a2,2,0,0,0,2,2H216a2,2,0,0,0,2-2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M120,16V8a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0Zm80,32a8,8,0,0,0,5.66-2.34l8-8a8,8,0,0,0-11.32-11.32l-8,8A8,8,0,0,0,200,48ZM50.34,45.66A8,8,0,0,0,61.66,34.34l-8-8A8,8,0,0,0,42.34,37.66Zm87,26.45a8,8,0,1,0-2.64,15.78C153.67,91.08,168,108.32,168,128a8,8,0,0,0,16,0C184,100.6,163.93,76.57,137.32,72.11ZM232,176v24a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V176a16,16,0,0,1,16-16V128a88,88,0,0,1,88-88h.68c48.15.36,87.33,40.29,87.33,89v31A16,16,0,0,1,232,176ZM56,160H200V129c0-40-32.05-72.71-71.45-73H128a72,72,0,0,0-72,72Zm160,40V176H40v24H216Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,129v39H48V128a80,80,0,0,1,80.61-80C172.72,48.33,208,84.89,208,129Z\"/>";

export const Siren = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: SirenProps) => {
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
