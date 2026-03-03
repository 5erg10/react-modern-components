import { SVGProps } from "react";

export type FastForwardCircleVariant = "duotone" | "fill" | "light";

export interface FastForwardCircleProps extends SVGProps<SVGSVGElement> {
  variant?: FastForwardCircleVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm68.8,110.4-48,36A8,8,0,0,1,144,172a8,8,0,0,1-8-8V128a8,8,0,0,1-3.2,6.4l-48,36A8,8,0,0,1,80,172a8,8,0,0,1-8-8V92a8,8,0,0,1,12.8-6.4l48,36A8,8,0,0,1,136,128V92a8,8,0,0,1,12.8-6.4l48,36a8,8,0,0,1,0,12.8Z\"/>";
const LIGHT_INNER     = "<path d=\"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm63.6-94.8-48-36A6,6,0,0,0,134,92v30L87.6,87.2A6,6,0,0,0,78,92v72a6,6,0,0,0,9.6,4.8L134,134v30a6,6,0,0,0,9.6,4.8l48-36a6,6,0,0,0,0-9.6ZM90,152V104l32,24Zm56,0V104l32,24Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm68.8-94.4-48-36A8,8,0,0,0,136,92v72a8,8,0,0,0,12.8,6.4l48-36a8,8,0,0,0,0-12.8ZM152,148V108l26.67,20Zm-19.2-26.4-48-36A8,8,0,0,0,72,92v72a8,8,0,0,0,12.8,6.4l48-36a8,8,0,0,0,0-12.8ZM88,148V108l26.67,20Z\"/>";
const SECONDARY_PATHS = "<path d=\"M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32ZM80,164V92l48,36Zm64,0V92l48,36Z\"/>";

export const FastForwardCircle = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: FastForwardCircleProps) => {
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
