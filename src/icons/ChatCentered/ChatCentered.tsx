import { SVGProps } from "react";

export type ChatCenteredVariant = "duotone" | "fill" | "light";

export interface ChatCenteredProps extends SVGProps<SVGSVGElement> {
  variant?: ChatCenteredVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M232,56V184a16,16,0,0,1-16,16H155.57l-13.68,23.94a16,16,0,0,1-27.78,0L100.43,200H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z\"/>";
const LIGHT_INNER     = "<path d=\"M216,42H40A14,14,0,0,0,26,56V184a14,14,0,0,0,14,14h61.59L115.84,223a14,14,0,0,0,24.32,0L154.41,198H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42Zm2,142a2,2,0,0,1-2,2H150.93a6,6,0,0,0-5.21,3l-16,28a2,2,0,0,1-3.48,0l-16-28a6,6,0,0,0-5.21-3H40a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M216,40H40A16,16,0,0,0,24,56V184a16,16,0,0,0,16,16h60.43l13.68,23.94a16,16,0,0,0,27.78,0L155.57,200H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,144H150.93a8,8,0,0,0-7,4l-16,28-16-28a8,8,0,0,0-7-4H40V56H216Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,56V184a8,8,0,0,1-8,8H150.93l-16,28a8,8,0,0,1-13.9,0l-16-28H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z\"/>";

export const ChatCentered = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ChatCenteredProps) => {
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
