import { SVGProps } from "react";

export type FileIniVariant = "duotone" | "fill" | "light";

export interface FileIniProps extends SVGProps<SVGSVGElement> {
  variant?: FileIniVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M48,152v55.73A8.17,8.17,0,0,1,40.53,216,8,8,0,0,1,32,208V152.27A8.17,8.17,0,0,1,39.47,144,8,8,0,0,1,48,152Zm71.47-8a8.17,8.17,0,0,0-7.47,8.25V183L86.69,147.6a8.26,8.26,0,0,0-8-3.48A8,8,0,0,0,72,152v55.73A8.17,8.17,0,0,0,79.47,216,8,8,0,0,0,88,208V177l25.49,35.69A8,8,0,0,0,123.87,215a8.23,8.23,0,0,0,4.13-7.25V152A8,8,0,0,0,119.47,144Zm40,0a8.17,8.17,0,0,0-7.47,8.25v55.46a8.17,8.17,0,0,0,7.47,8.25,8,8,0,0,0,8.53-8V152A8,8,0,0,0,159.47,144ZM216,88V223.75a8.15,8.15,0,0,1-6.81,8.16A8,8,0,0,1,200,224V124a4,4,0,0,0-4-4H44a4,4,0,0,1-4-4V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-20,0L152,44V88Z\"/>";
const LIGHT_INNER     = "<path d=\"M46,152v56a6,6,0,0,1-12,0V152a6,6,0,0,1,12,0Zm74-6a6,6,0,0,0-6,6v37.28L84.88,148.51A6,6,0,0,0,74,152v56a6,6,0,0,0,12,0V170.72l29.12,40.77A6,6,0,0,0,120,214a5.78,5.78,0,0,0,1.83-.29A6,6,0,0,0,126,208V152A6,6,0,0,0,120,146Zm40,0a6,6,0,0,0-6,6v56a6,6,0,0,0,12,0V152A6,6,0,0,0,160,146Zm54-58V224a6,6,0,0,1-12,0V94H152a6,6,0,0,1-6-6V38H56a2,2,0,0,0-2,2v72a6,6,0,0,1-12,0V40A14,14,0,0,1,56,26h96a6,6,0,0,1,4.25,1.76l56,56A6,6,0,0,1,214,88Zm-56-6h35.52L158,46.48Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M48,152v56a8,8,0,0,1-16,0V152a8,8,0,0,1,16,0Zm72-8a8,8,0,0,0-8,8v31L86.51,147.35A8,8,0,0,0,72,152v56a8,8,0,0,0,16,0V177l25.49,35.69A8,8,0,0,0,120,216a7.91,7.91,0,0,0,2.44-.38A8,8,0,0,0,128,208V152A8,8,0,0,0,120,144Zm40,0a8,8,0,0,0-8,8v56a8,8,0,0,0,16,0V152A8,8,0,0,0,160,144Zm56-56V224a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,88H152V32Z\"/>";

export const FileIni = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: FileIniProps) => {
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
