import { SVGProps } from "react";

export type SynagogueVariant = "duotone" | "fill" | "light";

export interface SynagogueProps extends SVGProps<SVGSVGElement> {
  variant?: SynagogueVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,57.38V32a8,8,0,0,0-16,0V57.38A24,24,0,0,0,176,80v42.21L136,99.36V72a8,8,0,0,0-16,0V99.36L80,122.21V80A24,24,0,0,0,64,57.38V32a8,8,0,0,0-16,0V57.38A24,24,0,0,0,32,80V216a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V176a16,16,0,0,1,32,0v40a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V80A24,24,0,0,0,208,57.38ZM64,208H48V112H64Zm144,0H192V112h16Z\"/>";
const LIGHT_INNER     = "<path d=\"M206,58.84V32a6,6,0,0,0-12,0V58.84A22,22,0,0,0,178,80v45.66l-44-25.14V72a6,6,0,0,0-12,0v28.52L78,125.66V80A22,22,0,0,0,62,58.84V32a6,6,0,0,0-12,0V58.84A22,22,0,0,0,34,80V216a6,6,0,0,0,6,6h72a6,6,0,0,0,6-6V176a10,10,0,0,1,20,0v40a6,6,0,0,0,6,6h72a6,6,0,0,0,6-6V80A22,22,0,0,0,206,58.84ZM200,70a10,10,0,0,1,10,10v26H190V80A10,10,0,0,1,200,70ZM56,70A10,10,0,0,1,66,80v26H46V80A10,10,0,0,1,56,70ZM46,118H66v92H46Zm82,36a22,22,0,0,0-22,22v34H78V139.48l50-28.57,50,28.57V210H150V176A22,22,0,0,0,128,154Zm62,56V118h20v92Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M208,57.38V32a8,8,0,0,0-16,0V57.38A24,24,0,0,0,176,80v42.21L136,99.36V72a8,8,0,0,0-16,0V99.36L80,122.21V80A24,24,0,0,0,64,57.38V32a8,8,0,0,0-16,0V57.38A24,24,0,0,0,32,80V216a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8V176a8,8,0,0,1,16,0v40a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8V80A24,24,0,0,0,208,57.38ZM200,72a8,8,0,0,1,8,8v24H192V80A8,8,0,0,1,200,72ZM56,72a8,8,0,0,1,8,8v24H48V80A8,8,0,0,1,56,72Zm-8,48H64v88H48Zm80,32a24,24,0,0,0-24,24v32H80V140.64l48-27.43,48,27.43V208H152V176A24,24,0,0,0,128,152Zm64,56V120h16v88Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,80v32H184V80a16,16,0,0,1,16-16h0A16,16,0,0,1,216,80ZM72,80A16,16,0,0,0,56,64h0A16,16,0,0,0,40,80v32H72Zm0,56v80h40V176a16,16,0,0,1,16-16h0a16,16,0,0,1,16,16v40h40V136l-56-32Z\"/>";

export const Synagogue = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: SynagogueProps) => {
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
