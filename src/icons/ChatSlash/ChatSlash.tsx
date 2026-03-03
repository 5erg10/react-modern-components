import { SVGProps } from "react";

export type ChatSlashVariant = "duotone" | "fill" | "light";

export interface ChatSlashProps extends SVGProps<SVGSVGElement> {
  variant?: ChatSlashVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M213.92,210.61a8,8,0,1,1-11.84,10.76L189.92,208H83l-32.6,28.16-.08.07A15.94,15.94,0,0,1,40,240a16.13,16.13,0,0,1-6.8-1.52A15.85,15.85,0,0,1,24,224V64A16,16,0,0,1,40,48h4.46l-2.38-2.62A8,8,0,1,1,53.92,34.62ZM216,48H96.75a4,4,0,0,0-3,6.69L225,199.06a4,4,0,0,0,7-2.69V64A16,16,0,0,0,216,48Z\"/>";
const LIGHT_INNER     = "<path d=\"M52.44,36A6,6,0,0,0,43.56,44L49,50H40A14,14,0,0,0,26,64V224a13.86,13.86,0,0,0,8.09,12.69,13.89,13.89,0,0,0,15-2L82.23,206H190.8l12.76,14a6,6,0,1,0,8.88-8.07ZM80,194a6,6,0,0,0-3.92,1.46l-34.79,30A2,2,0,0,1,38,224V64a2,2,0,0,1,2-2H59.89l120,132ZM230,64V186a6,6,0,0,1-12,0V64a2,2,0,0,0-2-2H105.79a6,6,0,0,1,0-12H216A14,14,0,0,1,230,64Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M53.92,34.62A8,8,0,1,0,42.08,45.38L44.46,48H40A16,16,0,0,0,24,64V224a15.85,15.85,0,0,0,9.24,14.5A16.13,16.13,0,0,0,40,240a15.94,15.94,0,0,0,10.26-3.78l.08-.07L83,208H189.92l12.16,13.38a8,8,0,1,0,11.84-10.76ZM80,192a8,8,0,0,0-5.23,1.95L40,224V64H59L175.37,192ZM232,64V186a8,8,0,0,1-16,0V64H105.79a8,8,0,0,1,0-16H216A16,16,0,0,1,232,64Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,64V192a8,8,0,0,1-8,8H80L45.15,230.11A8,8,0,0,1,32,224V64a8,8,0,0,1,8-8H216A8,8,0,0,1,224,64Z\"/>";

export const ChatSlash = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ChatSlashProps) => {
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
