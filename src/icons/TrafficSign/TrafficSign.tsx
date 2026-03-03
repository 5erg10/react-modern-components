import { SVGProps } from "react";

export type TrafficSignVariant = "duotone" | "fill" | "light";

export interface TrafficSignProps extends SVGProps<SVGSVGElement> {
  variant?: TrafficSignVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M243.15,116.29,139.71,12.85a16.56,16.56,0,0,0-23.42,0L12.85,116.29a16.56,16.56,0,0,0,0,23.42L116.29,243.15h0a16.56,16.56,0,0,0,23.42,0L243.15,139.71a16.56,16.56,0,0,0,0-23.42Zm-69.49,9.37-24,24a8,8,0,0,1-11.32-11.32L148.69,128H112a16,16,0,0,0-16,16v8a8,8,0,0,1-16,0v-8a32,32,0,0,1,32-32h36.69l-10.35-10.34a8,8,0,0,1,11.32-11.32l24,24A8,8,0,0,1,173.66,125.66Z\"/>";
const LIGHT_INNER     = "<path d=\"M241.74,117.71,138.29,14.26a14.56,14.56,0,0,0-20.58,0L14.26,117.71a14.56,14.56,0,0,0,0,20.58L117.71,241.74h0a14.56,14.56,0,0,0,20.58,0L241.74,138.29a14.56,14.56,0,0,0,0-20.58Zm-8.49,12.1L129.81,233.25a2.56,2.56,0,0,1-3.62,0h0L22.75,129.81a2.56,2.56,0,0,1,0-3.62L126.19,22.75a2.56,2.56,0,0,1,3.62,0L233.25,126.19a2.56,2.56,0,0,1,0,3.62Zm-61-14a6,6,0,0,1,0,8.48l-24,24a6,6,0,0,1-8.48-8.48L153.51,126H112a18,18,0,0,0-18,18v8a6,6,0,0,1-12,0v-8a30,30,0,0,1,30-30h41.51l-13.75-13.76a6,6,0,0,1,8.48-8.48Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M243.15,116.29,139.71,12.85a16.56,16.56,0,0,0-23.42,0L12.85,116.29a16.56,16.56,0,0,0,0,23.42L116.29,243.15h0a16.56,16.56,0,0,0,23.42,0L243.15,139.71a16.56,16.56,0,0,0,0-23.42Zm-11.31,12.1L128.39,231.84a.56.56,0,0,1-.78,0h0L24.16,128.39a.56.56,0,0,1,0-.78L127.61,24.16A.52.52,0,0,1,128,24a.58.58,0,0,1,.4.16L231.84,127.61a.56.56,0,0,1,0,.78Zm-58.18-14a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L148.69,128H112a16,16,0,0,0-16,16v8a8,8,0,0,1-16,0v-8a32,32,0,0,1,32-32h36.69l-10.35-10.34a8,8,0,0,1,11.32-11.32Z\"/>";
const SECONDARY_PATHS = "<path d=\"M237.49,134.05,134.05,237.49a8.54,8.54,0,0,1-12.1,0L18.51,134.05a8.54,8.54,0,0,1,0-12.1L122,18.51a8.54,8.54,0,0,1,12.1,0L237.49,122A8.54,8.54,0,0,1,237.49,134.05Z\"/>";

export const TrafficSign = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: TrafficSignProps) => {
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
