import { SVGProps } from "react";

export type WechatLogoVariant = "duotone" | "fill" | "light";

export interface WechatLogoProps extends SVGProps<SVGSVGElement> {
  variant?: WechatLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M232.07,186.76A80,80,0,0,0,169.58,72.59,80,80,0,1,0,23.93,138.76l-7.27,24.71a16,16,0,0,0,19.87,19.87l24.71-7.27a79,79,0,0,0,25.19,7.35,80,80,0,0,0,108.33,40.65l24.71,7.27a16,16,0,0,0,19.87-19.87ZM132,152a12,12,0,1,1,12-12A12,12,0,0,1,132,152Zm-52,0a80.32,80.32,0,0,0,1.3,14.3,63.45,63.45,0,0,1-15.49-5.85,8,8,0,0,0-6-.63L32,168l8.17-27.76a8,8,0,0,0-.63-6A64,64,0,0,1,151.68,72.43,80.12,80.12,0,0,0,80,152Zm108,0a12,12,0,1,1,12-12A12,12,0,0,1,188,152Z\"/>";
const LIGHT_INNER     = "<path d=\"M142,140a10,10,0,1,1-10-10A10,10,0,0,1,142,140Zm46-10a10,10,0,1,0,10,10A10,10,0,0,0,188,130Zm49.42,82A14,14,0,0,1,220,229.42l-25.46-7.49A78,78,0,0,1,87.84,181.58a77,77,0,0,1-26.42-7.65L36,181.42A14,14,0,0,1,18.58,164l7.49-25.46A78,78,0,1,1,168.19,74.43a78,78,0,0,1,61.74,112.15ZM83.86,168.87a77.92,77.92,0,0,1,71-94.68,66,66,0,1,0-117.1,60.94,6.05,6.05,0,0,1,.47,4.53l-8.17,27.76a2,2,0,0,0,2.48,2.49l27.77-8.17a6.06,6.06,0,0,1,4.53.47A65.2,65.2,0,0,0,83.86,168.87Zm134.35,14.26a66,66,0,1,0-27.08,27.08,6.06,6.06,0,0,1,4.53-.47l27.77,8.17a2,2,0,0,0,2.48-2.48l-8.17-27.77A6.05,6.05,0,0,1,218.21,183.13Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M144,140a12,12,0,1,1-12-12A12,12,0,0,1,144,140Zm44-12a12,12,0,1,0,12,12A12,12,0,0,0,188,128Zm51.34,83.47a16,16,0,0,1-19.87,19.87l-24.71-7.27A80,80,0,0,1,86.43,183.42a79,79,0,0,1-25.19-7.35l-24.71,7.27a16,16,0,0,1-19.87-19.87l7.27-24.71A80,80,0,1,1,169.58,72.59a80,80,0,0,1,62.49,114.17ZM81.3,166.3a79.94,79.94,0,0,1,70.38-93.87A64,64,0,0,0,39.55,134.19a8,8,0,0,1,.63,6L32,168l27.76-8.17a8,8,0,0,1,6,.63A63.45,63.45,0,0,0,81.3,166.3Zm135.15,15.89a64,64,0,1,0-26.26,26.26,8,8,0,0,1,6-.63L224,216l-8.17-27.76A8,8,0,0,1,216.45,182.19Z\"/>";
const SECONDARY_PATHS = "<path d=\"M163.94,80.11h0C162.63,80,161.32,80,160,80a72,72,0,0,0-67.93,95.88h0a71.53,71.53,0,0,1-30-8.39l-27.76,8.16a8,8,0,0,1-9.93-9.93L32.5,138A72,72,0,1,1,163.94,80.11Z\"/>";

export const WechatLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: WechatLogoProps) => {
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
