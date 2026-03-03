import { SVGProps } from "react";

export type NumberCircleFourVariant = "duotone" | "fill" | "light";

export interface NumberCircleFourProps extends SVGProps<SVGSVGElement> {
  variant?: NumberCircleFourVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M104.36,144,136,103.32V144ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-64,24a8,8,0,0,0-8-8h-8V80a8,8,0,0,0-14.31-4.91l-56,72A8,8,0,0,0,88,160h48v16a8,8,0,0,0,16,0V160h8A8,8,0,0,0,168,152Z\"/>";
const LIGHT_INNER     = "<path d=\"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm32-72H150V80a6,6,0,0,0-10.74-3.68l-56,72A6,6,0,0,0,88,158h50v18a6,6,0,0,0,12,0V158h10a6,6,0,0,0,0-12Zm-22,0H100.27L138,97.49Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm32-72h-8V80a8,8,0,0,0-14.31-4.91l-56,72A8,8,0,0,0,88,160h48v16a8,8,0,0,0,16,0V160h8a8,8,0,0,0,0-16Zm-24,0H104.36L136,103.32Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z\"/>";

export const NumberCircleFour = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: NumberCircleFourProps) => {
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
