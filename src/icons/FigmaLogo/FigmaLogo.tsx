import { SVGProps } from "react";

export type FigmaLogoVariant = "duotone" | "fill" | "light";

export interface FigmaLogoProps extends SVGProps<SVGSVGElement> {
  variant?: FigmaLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M192,96a40,40,0,0,0-24-72H96A40,40,0,0,0,72,96a40,40,0,0,0,1.37,65A44,44,0,1,0,144,196V160a40,40,0,1,0,48-64Zm-64,56H96a24,24,0,0,1,0-48h32Zm40-64H144V40h24a24,24,0,0,1,0,48Z\"/>";
const LIGHT_INNER     = "<path d=\"M188.45,96A38,38,0,0,0,168,26H96A38,38,0,0,0,75.55,96,38,38,0,0,0,77,160.89,42,42,0,1,0,142,196V155.68A38,38,0,1,0,188.45,96ZM194,64a26,26,0,0,1-26,26H142V38h26A26,26,0,0,1,194,64ZM70,64A26,26,0,0,1,96,38h34V90H96A26,26,0,0,1,70,64Zm26,90a26,26,0,0,1,0-52h34v52H96Zm34,42a30,30,0,1,1-30-30h30Zm38-42a26,26,0,1,1,26-26A26,26,0,0,1,168,154Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M192,96a40,40,0,0,0-24-72H96A40,40,0,0,0,72,96a40,40,0,0,0,1.37,65A44,44,0,1,0,144,196V160a40,40,0,1,0,48-64Zm0-32a24,24,0,0,1-24,24H144V40h24A24,24,0,0,1,192,64ZM72,64A24,24,0,0,1,96,40h32V88H96A24,24,0,0,1,72,64Zm24,88a24,24,0,0,1,0-48h32v48H96Zm32,44a28,28,0,1,1-28-28h28Zm40-44a24,24,0,1,1,24-24A24,24,0,0,1,168,152Z\"/>";
const SECONDARY_PATHS = "<path d=\"M200,128a32,32,0,1,1-32-32A32,32,0,0,1,200,128ZM96,96h40V32H96a32,32,0,0,0,0,64ZM64,196a36,36,0,0,0,72,0V160H100A36,36,0,0,0,64,196Z\"/>";

export const FigmaLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: FigmaLogoProps) => {
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
