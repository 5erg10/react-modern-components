import { SVGProps } from "react";

export type MicrosoftOutlookLogoVariant = "duotone" | "fill" | "light";

export interface MicrosoftOutlookLogoProps extends SVGProps<SVGSVGElement> {
  variant?: MicrosoftOutlookLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M88,144a16,16,0,1,1,16-16A16,16,0,0,1,88,144Zm144-32v96a16,16,0,0,1-16,16H88a16,16,0,0,1-16-16V192H40a16,16,0,0,1-16-16V80A16,16,0,0,1,40,64H96V40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8v64h16A8,8,0,0,1,232,112ZM112,64h24a16,16,0,0,1,16,16v74.13l40-28.89V48H112ZM88,160a32,32,0,1,0-32-32A32,32,0,0,0,88,160Zm111.26,48L152,173.87V176a16,16,0,0,1-16,16H88v16ZM216,127.65,165.66,164,216,200.35Z\"/>";
const LIGHT_INNER     = "<path d=\"M118,128a30,30,0,1,0-30,30A30,30,0,0,0,118,128Zm-48,0a18,18,0,1,1,18,18A18,18,0,0,1,70,128Zm154-22H206V40a6,6,0,0,0-6-6H104a6,6,0,0,0-6,6V66H40A14,14,0,0,0,26,80v96a14,14,0,0,0,14,14H74v18a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V112A6,6,0,0,0,224,106Zm-61.75,58L218,123.73v80.54ZM110,46h84v80.27L152,156.6l-2-1.45V80a14,14,0,0,0-14-14H110ZM38,176V80a2,2,0,0,1,2-2h96a2,2,0,0,1,2,2v96a2,2,0,0,1-2,2H40A2,2,0,0,1,38,176Zm48,32V190h50a14,14,0,0,0,14-14v-6l55.44,40H88A2,2,0,0,1,86,208Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M120,128a32,32,0,1,0-32,32A32,32,0,0,0,120,128Zm-48,0a16,16,0,1,1,16,16A16,16,0,0,1,72,128Zm152-24H208V40a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8V64H40A16,16,0,0,0,24,80v96a16,16,0,0,0,16,16H72v16a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V112A8,8,0,0,0,224,104Zm-58.34,60L216,127.65v72.7ZM112,48h80v77.24l-40,28.89V80a16,16,0,0,0-16-16H112ZM40,80h96v77.9c0,.12,0,.24,0,.36V176H40ZM88,192h48a16,16,0,0,0,16-16v-2.13L199.26,208H88Z\"/>";
const SECONDARY_PATHS = "<path d=\"M144,80v96a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h96A8,8,0,0,1,144,80Z\"/>";

export const MicrosoftOutlookLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: MicrosoftOutlookLogoProps) => {
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
