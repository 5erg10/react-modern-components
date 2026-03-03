import { SVGProps } from "react";

export type ShowerVariant = "duotone" | "fill" | "light";

export interface ShowerProps extends SVGProps<SVGSVGElement> {
  variant?: ShowerVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M64,236a12,12,0,1,1-12-12A12,12,0,0,1,64,236Zm20-44a12,12,0,1,0,12,12A12,12,0,0,0,84,192Zm-64,0a12,12,0,1,0,12,12A12,12,0,0,0,20,192Zm32-32a12,12,0,1,0,12,12A12,12,0,0,0,52,160ZM248,32H216a8,8,0,0,0-5.66,2.34l-30.2,30.2L53.38,86.19a16,16,0,0,0-8.69,27.1l98,98a16,16,0,0,0,27.09-8.66L191.46,75.86,219.31,48H248a8,8,0,0,0,0-16Z\"/>";
const LIGHT_INNER     = "<path d=\"M62,236a10,10,0,1,1-10-10A10,10,0,0,1,62,236Zm22-42a10,10,0,1,0,10,10A10,10,0,0,0,84,194Zm-64,0a10,10,0,1,0,10,10A10,10,0,0,0,20,194Zm32-32a10,10,0,1,0,10,10A10,10,0,0,0,52,162ZM254,40a6,6,0,0,1-6,6H218.49l-28.9,28.89L167.83,202.32a14,14,0,0,1-23.71,7.57l-98-98a14,14,0,0,1,7.6-23.71l127.4-21.76,30.65-30.65A6,6,0,0,1,216,34h32A6,6,0,0,1,254,40ZM176.66,79.34,55.7,100a2,2,0,0,0-1.11,3.39l98,98a2,2,0,0,0,3.39-1.09Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M64,236a12,12,0,1,1-12-12A12,12,0,0,1,64,236Zm20-44a12,12,0,1,0,12,12A12,12,0,0,0,84,192Zm-64,0a12,12,0,1,0,12,12A12,12,0,0,0,20,192Zm32-32a12,12,0,1,0,12,12A12,12,0,0,0,52,160ZM256,40a8,8,0,0,1-8,8H219.31L191.46,75.86,169.8,202.65a16,16,0,0,1-27.09,8.66l-98-98a16,16,0,0,1,8.69-27.1L180.14,64.54l30.2-30.2A8,8,0,0,1,216,32h32A8,8,0,0,1,256,40ZM174.21,81.79,56,102l98,98Z\"/>";
const SECONDARY_PATHS = "<path d=\"M184,72,161.91,201.31a8,8,0,0,1-13.54,4.34l-98-98a8,8,0,0,1,4.34-13.54Z\"/>";

export const Shower = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ShowerProps) => {
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
