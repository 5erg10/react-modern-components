import { SVGProps } from "react";

export type VirtualRealityVariant = "duotone" | "fill" | "light";

export interface VirtualRealityProps extends SVGProps<SVGSVGElement> {
  variant?: VirtualRealityVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M176,48H80a80,80,0,0,0,0,160h96a80,80,0,0,0,0-160ZM123.49,98.81l-24,64a8,8,0,0,1-15,0l-24-64a8,8,0,1,1,15-5.62l16.51,44,16.51-44a8,8,0,1,1,15,5.62ZM191,156a8,8,0,0,1-13.9,7.94l-11.44-20c-.53,0-1.07.05-1.61.05H152v16a8,8,0,0,1-16,0V96a8,8,0,0,1,8-8h20a28,28,0,0,1,16.84,50.35ZM176,116a12,12,0,0,1-12,12H152V104h12A12,12,0,0,1,176,116Z\"/>";
const LIGHT_INNER     = "<path d=\"M121.62,98.11l-24,64a6,6,0,0,1-11.24,0l-24-64a6,6,0,0,1,11.24-4.22l18.38,49,18.38-49a6,6,0,1,1,11.24,4.22ZM254,128a78.09,78.09,0,0,1-78,78H80A78,78,0,0,1,80,50h96A78.09,78.09,0,0,1,254,128Zm-12,0a66.08,66.08,0,0,0-66-66H80a66,66,0,0,0,0,132h96A66.08,66.08,0,0,0,242,128Zm-63.8,9.76,11,19.26a6,6,0,0,1-10.42,6l-12.07-21.12A27.06,27.06,0,0,1,164,142H150v18a6,6,0,0,1-12,0V96a6,6,0,0,1,6-6h20a26,26,0,0,1,14.2,47.76ZM164,130a14,14,0,0,0,0-28H150v28Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M123.49,98.81l-24,64a8,8,0,0,1-15,0l-24-64a8,8,0,1,1,15-5.62l16.51,44,16.51-44a8,8,0,1,1,15,5.62ZM256,128a80.09,80.09,0,0,1-80,80H80A80,80,0,0,1,80,48h96A80.09,80.09,0,0,1,256,128Zm-16,0a64.07,64.07,0,0,0-64-64H80a64,64,0,0,0,0,128h96A64.07,64.07,0,0,0,240,128Zm-59.16,10.35L191,156a8,8,0,0,1-13.9,7.94l-11.44-20c-.53,0-1.07.05-1.61.05H152v16a8,8,0,0,1-16,0V96a8,8,0,0,1,8-8h20a28,28,0,0,1,16.84,50.35ZM152,128h12a12,12,0,0,0,0-24H152Z\"/>";
const SECONDARY_PATHS = "<path d=\"M248,128h0a72,72,0,0,1-72,72H80A72,72,0,0,1,8,128H8A72,72,0,0,1,80,56h96A72,72,0,0,1,248,128Z\"/>";

export const VirtualReality = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: VirtualRealityProps) => {
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
