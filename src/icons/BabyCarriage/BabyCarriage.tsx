import { SVGProps } from "react";

export type BabyCarriageVariant = "duotone" | "fill" | "light";

export interface BabyCarriageProps extends SVGProps<SVGSVGElement> {
  variant?: BabyCarriageVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M215.58,54.55a7.53,7.53,0,0,0-1.32-1.27A79.68,79.68,0,0,0,160,32h-8a16,16,0,0,0-16,16v56H55.2A40.07,40.07,0,0,0,16,72a8,8,0,0,0,0,16,24,24,0,0,1,24,24,80.09,80.09,0,0,0,80,80h40A79.94,79.94,0,0,0,215.58,54.55Zm-6.91,16A63.73,63.73,0,0,1,223.48,104H166.81ZM160,48a63.59,63.59,0,0,1,36.69,11.61L152,95.35V48ZM104,224a16,16,0,1,1-16-16A16,16,0,0,1,104,224Zm104,0a16,16,0,1,1-16-16A16,16,0,0,1,208,224Z\"/>";
const LIGHT_INNER     = "<path d=\"M160,34h-8a14,14,0,0,0-14,14v58H53.52A38.05,38.05,0,0,0,16,74a6,6,0,0,0,0,12,26,26,0,0,1,26,26,78.09,78.09,0,0,0,78,78h40a78,78,0,0,0,0-156Zm65.71,72H161.1l47.82-38.25A65.66,65.66,0,0,1,225.71,106ZM152,46h8a65.67,65.67,0,0,1,40,13.53l-50,40V48A2,2,0,0,1,152,46Zm8,132H120a66.09,66.09,0,0,1-65.73-60H225.73A66.09,66.09,0,0,1,160,178Zm-58,46a14,14,0,1,1-14-14A14,14,0,0,1,102,224Zm104,0a14,14,0,1,1-14-14A14,14,0,0,1,206,224Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M160,32h-8a16,16,0,0,0-16,16v56H55.2A40.07,40.07,0,0,0,16,72a8,8,0,0,0,0,16,24,24,0,0,1,24,24,80.09,80.09,0,0,0,80,80h40a80,80,0,0,0,0-160Zm63.48,72H166.81l41.86-33.49A63.73,63.73,0,0,1,223.48,104ZM160,48a63.59,63.59,0,0,1,36.69,11.61L152,95.35V48Zm0,128H120a64.09,64.09,0,0,1-63.5-56h167A64.09,64.09,0,0,1,160,176Zm-56,48a16,16,0,1,1-16-16A16,16,0,0,1,104,224Zm104,0a16,16,0,1,1-16-16A16,16,0,0,1,208,224Z\"/>";
const SECONDARY_PATHS = "<path d=\"M232,112H144V48a8,8,0,0,1,8-8h8A72,72,0,0,1,232,112Z\"/>";

export const BabyCarriage = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BabyCarriageProps) => {
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
