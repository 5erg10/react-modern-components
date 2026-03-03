import { SVGProps } from "react";

export type BezierCurveVariant = "duotone" | "fill" | "light";

export interface BezierCurveProps extends SVGProps<SVGSVGElement> {
  variant?: BezierCurveVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M221,144.4A96.26,96.26,0,0,0,181,88h59a8,8,0,0,0,0-16H159a32,32,0,0,0-62,0H16a8,8,0,0,0,0,16H75A96.26,96.26,0,0,0,35,144.4,32,32,0,1,0,71,184H185a32,32,0,1,0,36-39.6ZM40,192a16,16,0,1,1,16-16A16,16,0,0,1,40,192ZM128,64a16,16,0,1,1-16,16A16,16,0,0,1,128,64Zm88,128a16,16,0,1,1,16-16A16,16,0,0,1,216,192Z\"/>";
const LIGHT_INNER     = "<path d=\"M219.44,146.2A94.66,94.66,0,0,0,173.92,86H240a6,6,0,0,0,0-12H157.4a30,30,0,0,0-58.8,0H16a6,6,0,0,0,0,12H82.08a94.66,94.66,0,0,0-45.52,60.2,30,30,0,1,0,12.09,1.08,82.53,82.53,0,0,1,51.4-56.39,30,30,0,0,0,55.9,0,82.53,82.53,0,0,1,51.4,56.39,30,30,0,1,0,12.09-1.08ZM58,176a18,18,0,1,1-18-18A18,18,0,0,1,58,176Zm70-78a18,18,0,1,1,18-18A18,18,0,0,1,128,98Zm88,96a18,18,0,1,1,18-18A18,18,0,0,1,216,194Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M221.07,144.41A96.68,96.68,0,0,0,181,88h59a8,8,0,0,0,0-16H159a32,32,0,0,0-62,0H16a8,8,0,0,0,0,16H75a96.68,96.68,0,0,0-40.07,56.41A32,32,0,1,0,51.08,146,80.6,80.6,0,0,1,99,93.44a32,32,0,0,0,58.06,0A80.6,80.6,0,0,1,204.92,146a32,32,0,1,0,16.15-1.57ZM56,176a16,16,0,1,1-16-16A16,16,0,0,1,56,176Zm72-80a16,16,0,1,1,16-16A16,16,0,0,1,128,96Zm88,96a16,16,0,1,1,16-16A16,16,0,0,1,216,192Z\"/>";
const SECONDARY_PATHS = "<path d=\"M152,80a24,24,0,1,1-24-24A24,24,0,0,1,152,80ZM40,152a24,24,0,1,0,24,24A24,24,0,0,0,40,152Zm176,0a24,24,0,1,0,24,24A24,24,0,0,0,216,152Z\"/>";

export const BezierCurve = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BezierCurveProps) => {
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
