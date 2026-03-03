import { SVGProps } from "react";

export type CloudFogVariant = "duotone" | "fill" | "light";

export interface CloudFogProps extends SVGProps<SVGSVGElement> {
  variant?: CloudFogVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M168,232a8,8,0,0,1-8,8H104a8,8,0,0,1,0-16h56A8,8,0,0,1,168,232Zm-40-32a8,8,0,0,0-8-8H72a8,8,0,0,0,0,16h48A8,8,0,0,0,128,200Zm56-8H160a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Zm47.87-96.45a76,76,0,0,0-151.78.73A8.18,8.18,0,0,1,72,104l-.6,0A8.14,8.14,0,0,1,64,95.39a92.48,92.48,0,0,1,2.33-16.51,4,4,0,0,0-5-4.78A52.09,52.09,0,0,0,24,124.36C24.2,153.07,48.12,176,76.84,176H156A76.08,76.08,0,0,0,231.87,95.55Z\"/>";
const LIGHT_INNER     = "<path d=\"M120,206H72a6,6,0,0,1,0-12h48a6,6,0,0,1,0,12Zm64-12H160a6,6,0,0,0,0,12h24a6,6,0,0,0,0-12Zm-24,32H104a6,6,0,0,0,0,12h56a6,6,0,0,0,0-12Zm70-126a74.09,74.09,0,0,1-74,74H76A50,50,0,1,1,86.2,75,74.08,74.08,0,0,1,230,100Zm-12,0A62.06,62.06,0,0,0,94,96.35a6,6,0,0,1-12-.7,75.84,75.84,0,0,1,1.07-9A38,38,0,1,0,76,162h80A62.07,62.07,0,0,0,218,100Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M120,208H72a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm64-16H160a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Zm-24,32H104a8,8,0,0,0,0,16h56a8,8,0,0,0,0-16Zm72-124a76.08,76.08,0,0,1-76,76H76A52,52,0,0,1,76,72a53.26,53.26,0,0,1,8.92.76A76.08,76.08,0,0,1,232,100Zm-16,0A60.06,60.06,0,0,0,96,96.46a8,8,0,0,1-16-.92q.21-3.66.77-7.23A38.11,38.11,0,0,0,76,88a36,36,0,0,0,0,72h80A60.07,60.07,0,0,0,216,100Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,100a68,68,0,0,1-68,68H76A44,44,0,1,1,90.2,82.34v.11A68.06,68.06,0,0,1,224,100Z\"/>";

export const CloudFog = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CloudFogProps) => {
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
