import { SVGProps } from "react";

export type ReceiptXVariant = "duotone" | "fill" | "light";

export interface ReceiptXProps extends SVGProps<SVGSVGElement> {
  variant?: ReceiptXVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216,40H40A16,16,0,0,0,24,56V208a8,8,0,0,0,11.58,7.15L64,200.94l28.42,14.21a8,8,0,0,0,7.16,0L128,200.94l28.42,14.21a8,8,0,0,0,7.16,0L192,200.94l28.42,14.21A8,8,0,0,0,232,208V56A16,16,0,0,0,216,40Zm-58.34,98.34a8,8,0,0,1-11.32,11.32L128,131.31l-18.34,18.35a8,8,0,0,1-11.32-11.32L116.69,120,98.34,101.66a8,8,0,0,1,11.32-11.32L128,108.69l18.34-18.35a8,8,0,0,1,11.32,11.32L139.31,120Z\"/>";
const LIGHT_INNER     = "<path d=\"M216,42H40A14,14,0,0,0,26,56V208a6,6,0,0,0,8.68,5.37L64,198.71l29.32,14.66a6,6,0,0,0,5.36,0L128,198.71l29.32,14.66a6,6,0,0,0,5.36,0L192,198.71l29.32,14.66A6,6,0,0,0,224,214a5.93,5.93,0,0,0,3.15-.9A6,6,0,0,0,230,208V56A14,14,0,0,0,216,42Zm2,156.29-23.32-11.66a6,6,0,0,0-5.36,0L160,201.29l-29.32-14.66a6,6,0,0,0-5.36,0L96,201.29,66.68,186.63a6,6,0,0,0-5.36,0L38,198.29V56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2Zm-61.76-98L136.48,120l19.76,19.76a6,6,0,1,1-8.48,8.48L128,128.48l-19.76,19.76a6,6,0,0,1-8.48-8.48L119.52,120,99.76,100.24a6,6,0,0,1,8.48-8.48L128,111.52l19.76-19.76a6,6,0,0,1,8.48,8.48Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M216,40H40A16,16,0,0,0,24,56V208a8,8,0,0,0,11.58,7.15L64,200.94l28.42,14.21a8,8,0,0,0,7.16,0L128,200.94l28.42,14.21a8,8,0,0,0,7.16,0L192,200.94l28.42,14.21A8,8,0,0,0,232,208V56A16,16,0,0,0,216,40Zm0,155.06-20.42-10.22a8,8,0,0,0-7.16,0L160,199.06l-28.42-14.22a8,8,0,0,0-7.16,0L96,199.06,67.58,184.84a8,8,0,0,0-7.16,0L40,195.06V56H216ZM98.34,138.34,116.69,120,98.34,101.66a8,8,0,0,1,11.32-11.32L128,108.69l18.34-18.35a8,8,0,0,1,11.32,11.32L139.31,120l18.35,18.34a8,8,0,0,1-11.32,11.32L128,131.31l-18.34,18.35a8,8,0,0,1-11.32-11.32Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,56V208l-32-16-32,16-32-16L96,208,64,192,32,208V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z\"/>";

export const ReceiptX = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ReceiptXProps) => {
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
