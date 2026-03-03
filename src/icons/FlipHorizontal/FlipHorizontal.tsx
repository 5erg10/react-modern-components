import { SVGProps } from "react";

export type FlipHorizontalVariant = "duotone" | "fill" | "light";

export interface FlipHorizontalProps extends SVGProps<SVGSVGElement> {
  variant?: FlipHorizontalVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M120,40V200a16,16,0,0,1-16,16H40a16,16,0,0,1-14.78-22.15l64-159.93.06-.14A16,16,0,0,1,120,40ZM229.33,208.84A16,16,0,0,1,216,216H152a16,16,0,0,1-16-16V40a16,16,0,0,1,30.74-6.23l.06.14,64,159.93A16,16,0,0,1,229.33,208.84ZM216,200l-.06-.15L152,40V200Z\"/>";
const LIGHT_INNER     = "<path d=\"M106.78,26.29A13.88,13.88,0,0,0,91.1,34.55s0,.08,0,.12l-64,159.94A14,14,0,0,0,40,214h64a14,14,0,0,0,14-14V40A13.87,13.87,0,0,0,106.78,26.29ZM106,200a2,2,0,0,1-2,2H40a2,2,0,0,1-1.85-2.78l.05-.11,64-159.92A2,2,0,0,1,106,40Zm122.92-5.39-64-159.94s0-.08,0-.12A14,14,0,0,0,138,40V200a14,14,0,0,0,14,14h64a14,14,0,0,0,12.93-19.39Zm-11.26,6.49a1.93,1.93,0,0,1-1.67.9H152a2,2,0,0,1-2-2V40a1.82,1.82,0,0,1,1.6-2,2.62,2.62,0,0,1,.54-.06,1.76,1.76,0,0,1,1.69,1.2l64,159.92.05.11A2,2,0,0,1,217.66,201.1Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M107.18,24.33a15.86,15.86,0,0,0-17.92,9.45l-.06.14-64,159.93A16,16,0,0,0,40,216h64a16,16,0,0,0,16-16V40A15.85,15.85,0,0,0,107.18,24.33ZM104,200H40l.06-.15L104,40Zm126.77-6.15-64-159.93-.06-.14A16,16,0,0,0,136,40V200a16,16,0,0,0,16,16h64a16,16,0,0,0,14.78-22.15ZM152,200V40l63.93,159.84.06.15Z\"/>";
const SECONDARY_PATHS = "<path d=\"M112,40V200a8,8,0,0,1-8,8H40a8,8,0,0,1-7.37-11.12l64-160C100,28.86,112,31.29,112,40Z\"/>";

export const FlipHorizontal = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: FlipHorizontalProps) => {
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
