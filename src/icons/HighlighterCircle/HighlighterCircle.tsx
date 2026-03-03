import { SVGProps } from "react";

export type HighlighterCircleVariant = "duotone" | "fill" | "light";

export interface HighlighterCircleProps extends SVGProps<SVGSVGElement> {
  variant?: HighlighterCircleVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM96,210V152h64v58a88.33,88.33,0,0,1-64,0Zm94.22-19.78A88.09,88.09,0,0,1,176,201.77V152a16,16,0,0,0-16-16V72a8,8,0,0,0-11.58-7.16l-48,24A8,8,0,0,0,96,96v40a16,16,0,0,0-16,16v49.77a88,88,0,1,1,110.22-11.55Z\"/>";
const LIGHT_INNER     = "<path d=\"M200.12,55.87A102,102,0,1,0,55.88,200.12,102,102,0,1,0,200.12,55.87ZM94,211.37V152a2,2,0,0,1,2-2h64a2,2,0,0,1,2,2v59.37a90.49,90.49,0,0,1-68,0ZM146,138H110V99.71l36-18Zm45.64,53.64h0A90.93,90.93,0,0,1,174,205.39V152a14,14,0,0,0-14-14h-2V72a6,6,0,0,0-8.68-5.37l-48,24A6,6,0,0,0,98,96v42H96a14,14,0,0,0-14,14v53.39a90.93,90.93,0,0,1-17.64-13.75,90,90,0,1,1,127.28,0Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM96,210V152h64v58a88.33,88.33,0,0,1-64,0Zm48-74H112V100.94l32-16Zm46.22,54.22A88.09,88.09,0,0,1,176,201.77V152a16,16,0,0,0-16-16V72a8,8,0,0,0-11.58-7.16l-48,24A8,8,0,0,0,96,96v40a16,16,0,0,0-16,16v49.77a88,88,0,1,1,110.22-11.55Z\"/>";
const SECONDARY_PATHS = "<path d=\"M195.88,195.88A95.7,95.7,0,0,1,168,215.29V152a8,8,0,0,0-8-8h-8V72L104,96v48H96a8,8,0,0,0-8,8v63.29a96,96,0,1,1,107.88-19.41Z\"/>";

export const HighlighterCircle = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: HighlighterCircleProps) => {
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
