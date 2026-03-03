import { SVGProps } from "react";

export type ChatCenteredSlashVariant = "duotone" | "fill" | "light";

export interface ChatCenteredSlashProps extends SVGProps<SVGSVGElement> {
  variant?: ChatCenteredSlashVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M232,56V184a15.93,15.93,0,0,1-4.82,11.42,4,4,0,0,1-5.68-.25L86.52,46.69a4,4,0,0,1,3-6.69H216A16,16,0,0,1,232,56ZM53.92,34.62A8,8,0,0,0,40,40h0A16,16,0,0,0,24,56V184a16,16,0,0,0,16,16h60.43l13.68,23.94a16,16,0,0,0,27.78,0L155.57,200h27.07l19.44,21.38a8,8,0,1,0,11.84-10.76Z\"/>";
const LIGHT_INNER     = "<path d=\"M52.44,36a6,6,0,0,0-10.1,6H40A14,14,0,0,0,26,56V184a14,14,0,0,0,14,14h61.59L115.84,223a14,14,0,0,0,24.32,0L154.41,198h29.12l20,22a6,6,0,0,0,8.88-8.08Zm98.49,150a6,6,0,0,0-5.21,3l-16,28a2,2,0,0,1-3.48,0l-16-28a6,6,0,0,0-5.21-3H40a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H52.62l120,132ZM230,56V186a6,6,0,0,1-12,0V56a2,2,0,0,0-2-2H98.52a6,6,0,1,1,0-12H216A14,14,0,0,1,230,56Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M53.92,34.62A8,8,0,0,0,40,40h0A16,16,0,0,0,24,56V184a16,16,0,0,0,16,16h60.43l13.68,23.94a16,16,0,0,0,27.78,0L155.57,200h27.07l19.44,21.38a8,8,0,1,0,11.84-10.76Zm97,149.38a8,8,0,0,0-7,4l-16,28-16-28a8,8,0,0,0-7-4H40V56H51.73L168.1,184ZM232,56V186a8,8,0,0,1-16,0V56H98.52a8,8,0,1,1,0-16H216A16,16,0,0,1,232,56Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,56V184a8,8,0,0,1-8,8H150.93l-16,28a8,8,0,0,1-13.9,0l-16-28H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z\"/>";

export const ChatCenteredSlash = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ChatCenteredSlashProps) => {
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
