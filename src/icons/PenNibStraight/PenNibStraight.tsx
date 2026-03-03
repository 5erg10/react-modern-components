import { SVGProps } from "react";

export type PenNibStraightVariant = "duotone" | "fill" | "light";

export interface PenNibStraightProps extends SVGProps<SVGSVGElement> {
  variant?: PenNibStraightVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M222.33,123.89c-.06-.13-.12-.26-.19-.38L192,69.91V32a16,16,0,0,0-16-16H80A16,16,0,0,0,64,32V69.9L33.86,123.51c-.07.12-.13.25-.2.38a15.94,15.94,0,0,0,1.46,16.57l.11.14,77.61,100.81A4,4,0,0,0,120,239V154.63a24,24,0,1,1,16,0V239a4,4,0,0,0,7.16,2.44l77.6-100.81.11-.14A15.92,15.92,0,0,0,222.33,123.89ZM176,64H80V32h96Z\"/>";
const LIGHT_INNER     = "<path d=\"M220.54,124.77a1.91,1.91,0,0,0-.15-.28L190,70.42V32a14,14,0,0,0-14-14H80A14,14,0,0,0,66,32V70.44l-30.4,54.05a1.91,1.91,0,0,0-.15.28,14,14,0,0,0,1.27,14.5.76.76,0,0,1,.08.11l86.44,112.28a6,6,0,0,0,9.51,0l86.43-112.28a.76.76,0,0,1,.08-.11A14,14,0,0,0,220.54,124.77ZM80,30h96a2,2,0,0,1,2,2V66H78V32A2,2,0,0,1,80,30Zm48,116a14,14,0,1,1,14-14A14,14,0,0,1,128,146Zm81.63-13.88L134,230.38V157.29a26,26,0,1,0-12,0v73.07L46.37,132.12a2,2,0,0,1-.2-1.93L75.52,78h105l29.34,52.19A2,2,0,0,1,209.63,132.12Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M222.33,123.89c-.06-.13-.12-.26-.19-.38L192,69.9V32a16,16,0,0,0-16-16H80A16,16,0,0,0,64,32V69.92L33.86,123.51c-.07.12-.13.25-.2.38a15.94,15.94,0,0,0,1.46,16.57l.11.14,86.44,112.28a8,8,0,0,0,12.67,0L220.77,140.6l.11-.14A15.92,15.92,0,0,0,222.33,123.89ZM176,32V64H80V32ZM128,144a12,12,0,1,1,12-12A12,12,0,0,1,128,144Zm8,80.5V158.83a28,28,0,1,0-16,0v65.66L48,131,76.69,80H179.32L208,131Z\"/>";
const SECONDARY_PATHS = "<path d=\"M215.17,127.43,184,72H72L40.83,127.43a8,8,0,0,0,.73,8.29L128,248l86.43-112.28A8,8,0,0,0,215.17,127.43ZM128,152a20,20,0,1,1,20-20A20,20,0,0,1,128,152Z\"/>";

export const PenNibStraight = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PenNibStraightProps) => {
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
