import { SVGProps } from "react";

export type ChalkboardTeacherVariant = "duotone" | "fill" | "light";

export interface ChalkboardTeacherProps extends SVGProps<SVGSVGElement> {
  variant?: ChalkboardTeacherVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H53.39a8,8,0,0,0,7.23-4.57,48,48,0,0,1,86.76,0,8,8,0,0,0,7.23,4.57H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM104,168a32,32,0,1,1,32-32A32,32,0,0,1,104,168Zm112,32H159.43a63.93,63.93,0,0,0-13.16-16H192a8,8,0,0,0,8-8V80a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8v96a8,8,0,0,0,6,7.75A63.72,63.72,0,0,0,48.57,200H40V56H216Z\"/>";
const LIGHT_INNER     = "<path d=\"M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H53.39a6,6,0,0,0,5.42-3.43,50,50,0,0,1,90.38,0,6,6,0,0,0,5.42,3.43H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM78,144a26,26,0,1,1,26,26A26,26,0,0,1,78,144Zm140,56a2,2,0,0,1-2,2H158.27a62.34,62.34,0,0,0-31.48-27.61,38,38,0,1,0-45.58,0A62.34,62.34,0,0,0,49.73,202H40a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2ZM198,80v96a6,6,0,0,1-6,6H176a6,6,0,0,1,0-12h10V86H70V96a6,6,0,0,1-12,0V80a6,6,0,0,1,6-6H192A6,6,0,0,1,198,80Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H53.39a8,8,0,0,0,7.23-4.57,48,48,0,0,1,86.76,0,8,8,0,0,0,7.23,4.57H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM80,144a24,24,0,1,1,24,24A24,24,0,0,1,80,144Zm136,56H159.43a64.39,64.39,0,0,0-28.83-26.16,40,40,0,1,0-53.2,0A64.39,64.39,0,0,0,48.57,200H40V56H216ZM56,96V80a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8v96a8,8,0,0,1-8,8H176a8,8,0,0,1,0-16h8V88H72v8a8,8,0,0,1-16,0Z\"/>";
const SECONDARY_PATHS = "<path d=\"M192,80v96H104a32,32,0,1,0-32-32H64V80Z\"/>";

export const ChalkboardTeacher = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ChalkboardTeacherProps) => {
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
