import { SVGProps } from "react";

export type LadderVariant = "duotone" | "fill" | "light";

export interface LadderProps extends SVGProps<SVGSVGElement> {
  variant?: LadderVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M215.52,213.26,164.51,73l9.09-25H184a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16h4.58L32.48,213.26a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,40,224a8,8,0,0,0,7.52-5.27L57.24,192h47l-7.74,21.26a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,104,224a8,8,0,0,0,7.52-5.27L130,168H182l18.45,50.73A8,8,0,0,0,208,224a8.14,8.14,0,0,0,2.73-.48A8,8,0,0,0,215.52,213.26ZM109.39,64h30a8,8,0,0,1,0,16H109.39a8,8,0,1,1,0-16Zm.86,96H80.3a8,8,0,0,1,0-16h30a8,8,0,0,1,0,16Zm14.54-40H94.84a8,8,0,0,1,0-16h30a8,8,0,0,1,0,16Zm11,32L156,96.41,176.21,152Z\"/>";
const LIGHT_INNER     = "<path d=\"M213.64,214,162.38,73l9.82-27H184a6,6,0,0,0,0-12H88a6,6,0,0,0,0,12h7.43L34.36,214A6,6,0,0,0,38,221.64a6.15,6.15,0,0,0,2,.36,6,6,0,0,0,5.64-3.95L55.84,190h51.23L98.36,214a6,6,0,0,0,3.59,7.69,6.15,6.15,0,0,0,2,.36,6,6,0,0,0,5.64-3.95L128.57,166h54.86l18.93,52.05A6,6,0,0,0,208,222a6.15,6.15,0,0,0,2.05-.36A6,6,0,0,0,213.64,214ZM128.89,130H77.66L90.75,94H142Zm30.54-84L146.34,82H95.11L108.2,46ZM60.2,178l13.09-36h51.23l-13.09,36Zm72.73-24L156,90.56,179.07,154Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M215.52,213.26,164.51,73l9.09-25H184a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16h4.58L32.48,213.26a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,40,224a8,8,0,0,0,7.52-5.27L57.24,192h47l-7.74,21.26a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,104,224a8,8,0,0,0,7.52-5.27L130,168H182l18.45,50.73A8,8,0,0,0,208,224a8.14,8.14,0,0,0,2.73-.48A8,8,0,0,0,215.52,213.26Zm-88-85.26h-47L92.15,96h47Zm29.09-80L144.94,80H98L109.6,48ZM63.06,176,74.7,144h47L110,176Zm72.72-24L156,96.41,176.21,152Z\"/>";
const SECONDARY_PATHS = "<path d=\"M187.64,160H124.36L156,73Z\"/>";

export const Ladder = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: LadderProps) => {
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
