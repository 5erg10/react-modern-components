import { SVGProps } from "react";

export type NewspaperClippingVariant = "duotone" | "fill" | "light";

export interface NewspaperClippingProps extends SVGProps<SVGSVGElement> {
  variant?: NewspaperClippingVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216,40H40A16,16,0,0,0,24,56V216a8,8,0,0,0,11.58,7.15L64,208.94l28.42,14.21a8,8,0,0,0,7.16,0L128,208.94l28.42,14.21a8,8,0,0,0,7.16,0L192,208.94l28.42,14.21A8,8,0,0,0,232,216V56A16,16,0,0,0,216,40ZM116,160a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V96a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm76-8H144a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm0-32H144a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Z\"/>";
const LIGHT_INNER     = "<path d=\"M216,42H40A14,14,0,0,0,26,56V216a6,6,0,0,0,8.68,5.37L64,206.71l29.32,14.66a6,6,0,0,0,5.36,0L128,206.71l29.32,14.66a6,6,0,0,0,5.36,0L192,206.71l29.32,14.66A6,6,0,0,0,224,222a5.93,5.93,0,0,0,3.15-.9A6,6,0,0,0,230,216V56A14,14,0,0,0,216,42Zm2,164.29-23.32-11.66a6,6,0,0,0-5.36,0L160,209.29l-29.32-14.66a6,6,0,0,0-5.36,0L96,209.29,66.68,194.63a6,6,0,0,0-5.36,0L38,206.29V56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2ZM198,112a6,6,0,0,1-6,6H144a6,6,0,0,1,0-12h48A6,6,0,0,1,198,112Zm0,32a6,6,0,0,1-6,6H144a6,6,0,0,1,0-12h48A6,6,0,0,1,198,144ZM112,90H64a6,6,0,0,0-6,6v64a6,6,0,0,0,6,6h48a6,6,0,0,0,6-6V96A6,6,0,0,0,112,90Zm-6,64H70V102h36Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M216,40H40A16,16,0,0,0,24,56V216a8,8,0,0,0,11.58,7.15L64,208.94l28.42,14.21a8,8,0,0,0,7.16,0L128,208.94l28.42,14.21a8,8,0,0,0,7.16,0L192,208.94l28.42,14.21A8,8,0,0,0,232,216V56A16,16,0,0,0,216,40Zm0,163.06-20.42-10.22a8,8,0,0,0-7.16,0L160,207.06l-28.42-14.22a8,8,0,0,0-7.16,0L96,207.06,67.58,192.84a8,8,0,0,0-7.16,0L40,203.06V56H216ZM136,112a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H144A8,8,0,0,1,136,112Zm0,32a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H144A8,8,0,0,1,136,144ZM64,168h48a8,8,0,0,0,8-8V96a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8v64A8,8,0,0,0,64,168Zm8-64h32v48H72Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,48H40a8,8,0,0,0-8,8V216l32-16,32,16,32-16,32,16,32-16,32,16V56A8,8,0,0,0,216,48ZM112,160H64V96h48Z\"/>";

export const NewspaperClipping = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: NewspaperClippingProps) => {
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
