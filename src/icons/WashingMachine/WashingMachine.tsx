import { SVGProps } from "react";

export type WashingMachineVariant = "duotone" | "fill" | "light";

export interface WashingMachineProps extends SVGProps<SVGSVGElement> {
  variant?: WashingMachineVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM128,184a56,56,0,1,1,56-56A56,56,0,0,1,128,184ZM188,80a12,12,0,1,1,12-12A12,12,0,0,1,188,80Zm-54.34,29.66-32,32a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,11.32Zm32-3.32a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32-11.32l48-48A8,8,0,0,1,165.66,106.34Z\"/>";
const LIGHT_INNER     = "<path d=\"M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Zm2,174a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM128,66a62,62,0,1,0,62,62A62.07,62.07,0,0,0,128,66Zm0,112a50,50,0,1,1,50-50A50.06,50.06,0,0,1,128,178ZM198,68a10,10,0,1,1-10-10A10,10,0,0,1,198,68Zm-73.76,48.24-16,16a6,6,0,0,1-8.48-8.48l16-16a6,6,0,0,1,8.48,8.48Zm32-.48a6,6,0,0,1,0,8.48l-32,32a6,6,0,0,1-8.48-8.48l32-32A6,6,0,0,1,156.24,115.76Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208V208ZM128,64a64,64,0,1,0,64,64A64.07,64.07,0,0,0,128,64Zm0,112a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,176ZM200,68a12,12,0,1,1-12-12A12,12,0,0,1,200,68Zm-74.34,49.66-16,16a8,8,0,0,1-11.32-11.32l16-16a8,8,0,0,1,11.32,11.32Zm32-3.32a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32l32-32A8,8,0,0,1,157.66,114.34Z\"/>";
const SECONDARY_PATHS = "<path d=\"M184,128a56,56,0,1,1-56-56A56,56,0,0,1,184,128Z\"/>";

export const WashingMachine = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: WashingMachineProps) => {
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
