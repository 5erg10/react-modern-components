import { SVGProps } from "react";

export type GraphicsCardVariant = "duotone" | "fill" | "light";

export interface GraphicsCardProps extends SVGProps<SVGSVGElement> {
  variant?: GraphicsCardVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M232,48H16a8,8,0,0,0-8,8V208a8,8,0,0,0,16,0V192H40v16a8,8,0,0,0,16,0V192H72v16a8,8,0,0,0,16,0V192h16v16a8,8,0,0,0,16,0V192H232a16,16,0,0,0,16-16V64A16,16,0,0,0,232,48Zm-20,72a35.81,35.81,0,0,1-5.53,19.16L156.84,89.53A36,36,0,0,1,212,120Zm-96,0a35.81,35.81,0,0,1-5.53,19.16L60.84,89.53A36,36,0,0,1,116,120ZM80,156a36,36,0,0,1-30.47-55.16l49.63,49.63A35.81,35.81,0,0,1,80,156Zm60-36a35.81,35.81,0,0,1,5.53-19.16l49.63,49.63A36,36,0,0,1,140,120Z\"/>";
const LIGHT_INNER     = "<path d=\"M232,50H16a6,6,0,0,0-6,6V208a6,6,0,0,0,12,0V190H42v18a6,6,0,0,0,12,0V190H74v18a6,6,0,0,0,12,0V190h20v18a6,6,0,0,0,12,0V190H232a14,14,0,0,0,14-14V64A14,14,0,0,0,232,50Zm2,126a2,2,0,0,1-2,2H22V62H232a2,2,0,0,1,2,2ZM176,82a38,38,0,1,0,38,38A38,38,0,0,0,176,82Zm26,38a25.81,25.81,0,0,1-3.88,13.64L162.36,97.88A26,26,0,0,1,202,120Zm-52,0a25.81,25.81,0,0,1,3.88-13.64l35.76,35.76A26,26,0,0,1,150,120ZM80,82a38,38,0,1,0,38,38A38,38,0,0,0,80,82Zm26,38a25.81,25.81,0,0,1-3.88,13.64L66.36,97.88A26,26,0,0,1,106,120Zm-52,0a25.81,25.81,0,0,1,3.88-13.64l35.76,35.76A26,26,0,0,1,54,120Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M232,48H16a8,8,0,0,0-8,8V208a8,8,0,0,0,16,0V192H40v16a8,8,0,0,0,16,0V192H72v16a8,8,0,0,0,16,0V192h16v16a8,8,0,0,0,16,0V192H232a16,16,0,0,0,16-16V64A16,16,0,0,0,232,48Zm0,128H24V64H232Zm-56-16a40,40,0,1,0-40-40A40,40,0,0,0,176,160Zm-24-40a23.74,23.74,0,0,1,2.35-10.34l32,32A23.74,23.74,0,0,1,176,144,24,24,0,0,1,152,120Zm48,0a23.74,23.74,0,0,1-2.35,10.34l-32-32A23.74,23.74,0,0,1,176,96,24,24,0,0,1,200,120ZM80,160a40,40,0,1,0-40-40A40,40,0,0,0,80,160ZM56,120a23.74,23.74,0,0,1,2.35-10.34l32,32A23.74,23.74,0,0,1,80,144,24,24,0,0,1,56,120Zm48,0a23.74,23.74,0,0,1-2.35,10.34l-32-32A23.74,23.74,0,0,1,80,96,24,24,0,0,1,104,120Z\"/>";
const SECONDARY_PATHS = "<path d=\"M232,56H16V184H232a8,8,0,0,0,8-8V64A8,8,0,0,0,232,56ZM80,152a32,32,0,1,1,32-32A32,32,0,0,1,80,152Zm96,0a32,32,0,1,1,32-32A32,32,0,0,1,176,152Z\"/>";

export const GraphicsCard = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: GraphicsCardProps) => {
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
