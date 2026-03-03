import { SVGProps } from "react";

export type CubeTransparentVariant = "duotone" | "fill" | "light";

export interface CubeTransparentProps extends SVGProps<SVGSVGElement> {
  variant?: CubeTransparentVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M104,152V104h48v48ZM32,53v95a4,4,0,0,0,4,4H88V99.31L38.83,50.14A4,4,0,0,0,32,53Zm188,51H168v52.69l49.17,49.17A4,4,0,0,0,224,203V108A4,4,0,0,0,220,104ZM152,36a4,4,0,0,0-4-4H53a4,4,0,0,0-2.83,6.83L99.31,88H152Zm60.49,45.17L174.83,43.51A4,4,0,0,0,168,46.34V88h41.66A4,4,0,0,0,212.49,81.17ZM156.69,168H104v52a4,4,0,0,0,4,4h95a4,4,0,0,0,2.83-6.83ZM43.51,174.83l37.66,37.66A4,4,0,0,0,88,209.66V168H46.34A4,4,0,0,0,43.51,174.83Z\"/>";
const LIGHT_INNER     = "<path d=\"M220.24,91.75,164,35.56A5.93,5.93,0,0,0,160,34H40a6,6,0,0,0-6,6V160a6,6,0,0,0,1.76,4.25l56,56A6,6,0,0,0,96,222H216a6,6,0,0,0,6-6V96A6,6,0,0,0,220.24,91.75ZM166,54.48,201.52,90H166Zm-76,147L54.48,166H90ZM90,154H46V54.48l44,44ZM54.48,46H154V90H98.48ZM154,102v52H102V102ZM102,210V166h55.52l44,44Zm108-8.48-44-44V102h44Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M221.66,90.34h0l-56-56A8,8,0,0,0,160,32H40a8,8,0,0,0-8,8V160a8,8,0,0,0,2.3,5.61l56,56h0A8,8,0,0,0,96,224H216a8,8,0,0,0,8-8V96A8,8,0,0,0,221.66,90.34ZM168,59.31,196.69,88H168ZM88,196.69,59.31,168H88ZM88,152H48V59.31l40,40ZM59.31,48H152V88H99.31ZM152,104v48H104V104ZM104,208V168h52.69l40,40Zm104-11.31-40-40V104h40Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,96V216H96L40,160V40H160Z\"/>";

export const CubeTransparent = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CubeTransparentProps) => {
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
