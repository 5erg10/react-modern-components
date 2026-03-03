import { SVGProps } from "react";

export type LegoSmileyVariant = "duotone" | "fill" | "light";

export interface LegoSmileyProps extends SVGProps<SVGSVGElement> {
  variant?: LegoSmileyVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M184,48H168V32a16,16,0,0,0-16-16H104A16,16,0,0,0,88,32V48H72A32,32,0,0,0,40,80v96a32.06,32.06,0,0,0,24,31v17a16,16,0,0,0,16,16h96a16,16,0,0,0,16-16V207a32.06,32.06,0,0,0,24-31V80A32,32,0,0,0,184,48Zm-28,52a12,12,0,1,1-12,12A12,12,0,0,1,156,100Zm4.27,58.77a61,61,0,0,1-64.54,0,8,8,0,0,1,8.54-13.54,45,45,0,0,0,47.46,0,8,8,0,0,1,8.54,13.54ZM104,32h48V48H104Zm-4,68a12,12,0,1,1-12,12A12,12,0,0,1,100,100Zm76,124H80V208h96Z\"/>";
const LIGHT_INNER     = "<path d=\"M100,122a10,10,0,1,1,10-10A10,10,0,0,1,100,122Zm56-20a10,10,0,1,0,10,10A10,10,0,0,0,156,102Zm-3.2,44.92a47,47,0,0,1-49.6,0,6,6,0,0,0-6.4,10.16,59,59,0,0,0,62.4,0,6,6,0,1,0-6.4-10.16ZM214,80v96a30.05,30.05,0,0,1-24,29.4V224a14,14,0,0,1-14,14H80a14,14,0,0,1-14-14V205.4A30.05,30.05,0,0,1,42,176V80A30,30,0,0,1,72,50H90V32a14,14,0,0,1,14-14h48a14,14,0,0,1,14,14V50h18A30,30,0,0,1,214,80ZM102,50h52V32a2,2,0,0,0-2-2H104a2,2,0,0,0-2,2Zm76,174V206H78v18a2,2,0,0,0,2,2h96A2,2,0,0,0,178,224ZM202,80a18,18,0,0,0-18-18H72A18,18,0,0,0,54,80v96a18,18,0,0,0,18,18H184a18,18,0,0,0,18-18Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M100,124a12,12,0,1,1,12-12A12,12,0,0,1,100,124Zm56-24a12,12,0,1,0,12,12A12,12,0,0,0,156,100Zm-4.27,45.23a45,45,0,0,1-47.46,0,8,8,0,0,0-8.54,13.54,61,61,0,0,0,64.54,0,8,8,0,0,0-8.54-13.54ZM216,80v96a32.06,32.06,0,0,1-24,31v17a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V207a32.06,32.06,0,0,1-24-31V80A32,32,0,0,1,72,48H88V32a16,16,0,0,1,16-16h48a16,16,0,0,1,16,16V48h16A32,32,0,0,1,216,80ZM104,48h48V32H104Zm72,176V208H80v16ZM200,80a16,16,0,0,0-16-16H72A16,16,0,0,0,56,80v96a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,80v96a24,24,0,0,1-24,24H72a24,24,0,0,1-24-24V80A24,24,0,0,1,72,56H184A24,24,0,0,1,208,80Z\"/>";

export const LegoSmiley = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: LegoSmileyProps) => {
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
