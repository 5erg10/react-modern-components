import { SVGProps } from "react";

export type TrayArrowUpVariant = "duotone" | "fill" | "light";

export interface TrayArrowUpProps extends SVGProps<SVGSVGElement> {
  variant?: TrayArrowUpVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM90.34,98.34l32-32a8,8,0,0,1,11.32,0l32,32a8,8,0,0,1-11.32,11.32L136,91.31V152a8,8,0,0,1-16,0V91.31l-18.34,18.35A8,8,0,0,1,90.34,98.34ZM208,208H48V168H76.69L96,187.31A15.86,15.86,0,0,0,107.31,192h41.38A15.86,15.86,0,0,0,160,187.31L179.31,168H208v40Z\"/>";
const LIGHT_INNER     = "<path d=\"M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM48,46H208a2,2,0,0,1,2,2V154H179.31a13.9,13.9,0,0,0-9.89,4.1L150.1,177.41a2,2,0,0,1-1.41.59H107.31a2,2,0,0,1-1.41-.59L86.59,158.1a13.94,13.94,0,0,0-9.9-4.1H46V48A2,2,0,0,1,48,46ZM208,210H48a2,2,0,0,1-2-2V166H76.69a2,2,0,0,1,1.41.59L97.41,185.9a13.94,13.94,0,0,0,9.9,4.1h41.38a13.9,13.9,0,0,0,9.89-4.1l19.32-19.31a2,2,0,0,1,1.41-.59H210v42A2,2,0,0,1,208,210ZM91.76,108.24a6,6,0,0,1,0-8.48l32-32a6,6,0,0,1,8.48,0l32,32a6,6,0,1,1-8.48,8.48L134,86.49V152a6,6,0,0,1-12,0V86.49l-21.76,21.75A6,6,0,0,1,91.76,108.24Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,16V152h-28.7A15.86,15.86,0,0,0,168,156.69L148.69,176H107.31L88,156.69A15.86,15.86,0,0,0,76.69,152H48V48Zm0,160H48V168H76.69L96,187.31A15.86,15.86,0,0,0,107.31,192h41.38A15.86,15.86,0,0,0,160,187.31L179.31,168H208v40ZM90.34,109.66a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,0l32,32a8,8,0,0,1-11.32,11.32L136,91.31V152a8,8,0,0,1-16,0V91.31l-18.34,18.35A8,8,0,0,1,90.34,109.66Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,48V160H179.31a8,8,0,0,0-5.66,2.34l-19.31,19.32a8,8,0,0,1-5.66,2.34H107.31a8,8,0,0,1-5.66-2.34L82.34,162.34A8,8,0,0,0,76.68,160H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z\"/>";

export const TrayArrowUp = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: TrayArrowUpProps) => {
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
