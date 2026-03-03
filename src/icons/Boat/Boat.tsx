import { SVGProps } from "react";

export type BoatVariant = "duotone" | "fill" | "light";

export interface BoatProps extends SVGProps<SVGSVGElement> {
  variant?: BoatVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M221.06,110.59,208,106.23V56a16,16,0,0,0-16-16H136V24a8,8,0,0,0-16,0V40H64A16,16,0,0,0,48,56v50.23l-13.06,4.36A16,16,0,0,0,24,125.77V152c0,61.54,97.89,86.72,102.06,87.76a8,8,0,0,0,3.88,0C134.11,238.72,232,213.54,232,152V125.77A16,16,0,0,0,221.06,110.59ZM136,168a8,8,0,0,1-16,0V104.87a8,8,0,0,1,16,0Zm56-67.1L130.53,80.41a8,8,0,0,0-5.06,0L64,100.9V56H192Z\"/>";
const LIGHT_INNER     = "<path d=\"M220.43,112.48,206,107.68V56a14,14,0,0,0-14-14H134V24a6,6,0,0,0-12,0V42H64A14,14,0,0,0,50,56v51.68l-14.43,4.8A14,14,0,0,0,26,125.77V152c0,60,96.44,84.79,100.54,85.82a6,6,0,0,0,2.92,0,235.44,235.44,0,0,0,49.4-19.54C212.32,200.15,230,177.24,230,152V125.77A14,14,0,0,0,220.43,112.48ZM62,56a2,2,0,0,1,2-2H192a2,2,0,0,1,2,2v47.68L129.9,82.31a6,6,0,0,0-3.8,0L62,103.68Zm156,96c0,47.1-78.28,70.54-90,73.79C116.27,222.54,38,199.1,38,152V125.77a2,2,0,0,1,1.37-1.9L122,96.32V168a6,6,0,0,0,12,0V96.32l82.63,27.55a2,2,0,0,1,1.37,1.9Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M221.06,110.59,208,106.23V56a16,16,0,0,0-16-16H136V24a8,8,0,0,0-16,0V40H64A16,16,0,0,0,48,56v50.23l-13.06,4.36A16,16,0,0,0,24,125.77V152c0,61.54,97.89,86.72,102.06,87.76a8,8,0,0,0,3.88,0C134.11,238.72,232,213.54,232,152V125.77A16,16,0,0,0,221.06,110.59ZM64,56H192v44.9L130.53,80.41a8,8,0,0,0-5.06,0L64,100.9Zm152,96c0,24.91-23.68,43-43.55,53.83A228.13,228.13,0,0,1,128,223.72,226.85,226.85,0,0,1,83.81,206C47.6,186.35,40,165.79,40,152V125.77L120,99.1V168a8,8,0,0,0,16,0V99.1l80,26.67Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,125.77V152c0,56-96,80-96,80s-96-24-96-80V125.77a8,8,0,0,1,5.47-7.59L128,88l90.53,30.18A8,8,0,0,1,224,125.77Z\"/>";

export const Boat = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BoatProps) => {
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
