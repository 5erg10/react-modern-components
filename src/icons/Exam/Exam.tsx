import { SVGProps } from "react";

export type ExamVariant = "duotone" | "fill" | "light";

export interface ExamProps extends SVGProps<SVGSVGElement> {
  variant?: ExamVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M96,113.89,107.06,136H84.94ZM232,56V216a8,8,0,0,1-11.58,7.16L192,208.94l-28.42,14.22a8,8,0,0,1-7.16,0L128,208.94,99.58,223.16a8,8,0,0,1-7.16,0L64,208.94,35.58,223.16A8,8,0,0,1,24,216V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM135.16,156.42l-32-64a8,8,0,0,0-14.32,0l-32,64a8,8,0,0,0,14.32,7.16L76.94,152h38.12l5.78,11.58a8,8,0,1,0,14.32-7.16ZM208,128a8,8,0,0,0-8-8H184V104a8,8,0,0,0-16,0v16H152a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V136h16A8,8,0,0,0,208,128Z\"/>";
const LIGHT_INNER     = "<path d=\"M216,42H40A14,14,0,0,0,26,56V216a6,6,0,0,0,8.68,5.37L64,206.71l29.32,14.66a6,6,0,0,0,5.36,0L128,206.71l29.32,14.66a6,6,0,0,0,5.36,0L192,206.71l29.32,14.66A6,6,0,0,0,224,222a5.93,5.93,0,0,0,3.15-.9A6,6,0,0,0,230,216V56A14,14,0,0,0,216,42Zm2,164.29-23.32-11.66a6,6,0,0,0-5.36,0L160,209.29l-29.32-14.66a6,6,0,0,0-5.36,0L96,209.29,66.68,194.63a6,6,0,0,0-5.36,0L38,206.29V56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2Zm-116.63-113a6,6,0,0,0-10.74,0l-32,64a6,6,0,1,0,10.74,5.36L75.71,150h40.58l6.34,12.68a6,6,0,1,0,10.74-5.36ZM81.71,138,96,109.42,110.29,138ZM198,128a6,6,0,0,1-6,6H174v18a6,6,0,0,1-12,0V134H144a6,6,0,0,1,0-12h18V104a6,6,0,0,1,12,0v18h18A6,6,0,0,1,198,128Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M216,40H40A16,16,0,0,0,24,56V216a8,8,0,0,0,11.58,7.16L64,208.94l28.42,14.22a8,8,0,0,0,7.16,0L128,208.94l28.42,14.22a8,8,0,0,0,7.16,0L192,208.94l28.42,14.22A8,8,0,0,0,232,216V56A16,16,0,0,0,216,40Zm0,163.06-20.42-10.22a8,8,0,0,0-7.16,0L160,207.06l-28.42-14.22a8,8,0,0,0-7.16,0L96,207.06,67.58,192.84a8,8,0,0,0-7.16,0L40,203.06V56H216ZM60.42,167.16a8,8,0,0,0,10.74-3.58L76.94,152h38.12l5.78,11.58a8,8,0,1,0,14.32-7.16l-32-64a8,8,0,0,0-14.32,0l-32,64A8,8,0,0,0,60.42,167.16ZM96,113.89,107.06,136H84.94ZM136,128a8,8,0,0,1,8-8h16V104a8,8,0,0,1,16,0v16h16a8,8,0,0,1,0,16H176v16a8,8,0,0,1-16,0V136H144A8,8,0,0,1,136,128Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,56V216l-32-16-32,16-32-16L96,216,64,200,32,216V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z\"/>";

export const Exam = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ExamProps) => {
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
