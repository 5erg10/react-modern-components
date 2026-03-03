import { SVGProps } from "react";

export type PaperPlaneRightVariant = "duotone" | "fill" | "light";

export interface PaperPlaneRightProps extends SVGProps<SVGSVGElement> {
  variant?: PaperPlaneRightVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M240,127.89a16,16,0,0,1-8.18,14L63.9,237.9A16.15,16.15,0,0,1,56,240a16,16,0,0,1-15-21.33l27-79.95A4,4,0,0,1,71.72,136H144a8,8,0,0,0,8-8.53,8.19,8.19,0,0,0-8.26-7.47h-72a4,4,0,0,1-3.79-2.72l-27-79.94A16,16,0,0,1,63.84,18.07l168,95.89A16,16,0,0,1,240,127.89Z\"/>";
const LIGHT_INNER     = "<path d=\"M230.88,115.69l-168-95.88a14,14,0,0,0-20,16.87L73.66,128,42.81,219.33A14,14,0,0,0,56,238a14.15,14.15,0,0,0,6.93-1.83L230.84,140.1a14,14,0,0,0,0-24.41Zm-5.95,14L57,225.73a2,2,0,0,1-2.86-2.42.42.42,0,0,0,0-.1L84.3,134H144a6,6,0,0,0,0-12H84.3L54.17,32.8a.3.3,0,0,0,0-.1,1.87,1.87,0,0,1,.6-2.2A1.85,1.85,0,0,1,57,30.25l168,95.89a1.93,1.93,0,0,1,1,1.74A2,2,0,0,1,224.93,129.66Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M231.87,114l-168-95.89A16,16,0,0,0,40.92,37.34L71.55,128,40.92,218.67A16,16,0,0,0,56,240a16.15,16.15,0,0,0,7.93-2.1l167.92-96.05a16,16,0,0,0,.05-27.89ZM56,224a.56.56,0,0,0,0-.12L85.74,136H144a8,8,0,0,0,0-16H85.74L56.06,32.16A.46.46,0,0,0,56,32l168,95.83Z\"/>";
const SECONDARY_PATHS = "<path d=\"M227.91,134.86,59.93,231a8,8,0,0,1-11.44-9.67L80,128,48.49,34.72a8,8,0,0,1,11.44-9.67l168,95.85A8,8,0,0,1,227.91,134.86Z\"/>";

export const PaperPlaneRight = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PaperPlaneRightProps) => {
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
