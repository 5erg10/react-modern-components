import { SVGProps } from "react";

export type TwitchLogoVariant = "duotone" | "fill" | "light";

export interface TwitchLogoProps extends SVGProps<SVGSVGElement> {
  variant?: TwitchLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,32H48A16,16,0,0,0,32,48V192a16,16,0,0,0,16,16H64v32a8,8,0,0,0,13.12,6.15L122.9,208h42.2a16,16,0,0,0,10.25-3.71l42.89-35.75A15.93,15.93,0,0,0,224,156.25V48A16,16,0,0,0,208,32ZM128,136a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z\"/>";
const LIGHT_INNER     = "<path d=\"M208,34H48A14,14,0,0,0,34,48V192a14,14,0,0,0,14,14H66v34a6,6,0,0,0,9.84,4.61L122.17,206H165.1a14,14,0,0,0,9-3.25L217,167a14,14,0,0,0,5-10.76V48A14,14,0,0,0,208,34Zm2,122.25a2,2,0,0,1-.72,1.54l-42.9,35.75a2,2,0,0,1-1.28.46H120a6,6,0,0,0-3.84,1.39L78,227.19V200a6,6,0,0,0-6-6H48a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM174,88v48a6,6,0,0,1-12,0V88a6,6,0,0,1,12,0Zm-48,0v48a6,6,0,0,1-12,0V88a6,6,0,0,1,12,0Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M208,32H48A16,16,0,0,0,32,48V192a16,16,0,0,0,16,16H64v32a8,8,0,0,0,13.12,6.15L122.9,208h42.2a16,16,0,0,0,10.25-3.71l42.89-35.75A15.93,15.93,0,0,0,224,156.25V48A16,16,0,0,0,208,32Zm0,124.25L165.1,192H120a8,8,0,0,0-5.12,1.85L80,222.92V200a8,8,0,0,0-8-8H48V48H208ZM160,136V88a8,8,0,0,1,16,0v48a8,8,0,0,1-16,0Zm-48,0V88a8,8,0,0,1,16,0v48a8,8,0,0,1-16,0Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,48V156.25a8,8,0,0,1-2.88,6.15l-42.89,35.75A8.05,8.05,0,0,1,165.1,200H120L72,240V200H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z\"/>";

export const TwitchLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: TwitchLogoProps) => {
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
