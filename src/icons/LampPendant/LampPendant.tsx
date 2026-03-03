import { SVGProps } from "react";

export type LampPendantVariant = "duotone" | "fill" | "light";

export interface LampPendantProps extends SVGProps<SVGSVGElement> {
  variant?: LampPendantVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M176,74.78V72a16,16,0,0,0-16-16H136V16a8,8,0,0,0-16,0V56H96A16,16,0,0,0,80,72v2.78A111.73,111.73,0,0,0,16,176a8,8,0,0,0,8,8H88a40,40,0,0,0,80,0h64a8,8,0,0,0,8-8A111.73,111.73,0,0,0,176,74.78ZM128,208a24,24,0,0,1-24-24h48A24,24,0,0,1,128,208Z\"/>";
const LIGHT_INNER     = "<path d=\"M174,76.05V72a14,14,0,0,0-14-14H134V16a6,6,0,0,0-12,0V58H96A14,14,0,0,0,82,72v4A109.76,109.76,0,0,0,18,176a6,6,0,0,0,6,6H90v2a38,38,0,0,0,76,0v-2h66a6,6,0,0,0,6-6A109.76,109.76,0,0,0,174,76.05ZM154,184a26,26,0,0,1-52,0v-2h52ZM30.18,170A97.76,97.76,0,0,1,90.31,85.51,6,6,0,0,0,94,80V72a2,2,0,0,1,2-2h64a2,2,0,0,1,2,2v8a6,6,0,0,0,3.69,5.54A97.76,97.76,0,0,1,225.82,170Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M176,74.78V72a16,16,0,0,0-16-16H136V16a8,8,0,0,0-16,0V56H96A16,16,0,0,0,80,72v2.78A111.73,111.73,0,0,0,16,176a8,8,0,0,0,8,8H88a40,40,0,0,0,80,0h64a8,8,0,0,0,8-8A111.73,111.73,0,0,0,176,74.78ZM128,208a24,24,0,0,1-24-24h48A24,24,0,0,1,128,208ZM32.33,168A95.79,95.79,0,0,1,91.08,87.35,8,8,0,0,0,96,80V72h64v8a8,8,0,0,0,4.92,7.38A95.79,95.79,0,0,1,223.67,168Z\"/>";
const SECONDARY_PATHS = "<path d=\"M232,176H24A104,104,0,0,1,88,80V72a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8v8A104,104,0,0,1,232,176Z\"/>";

export const LampPendant = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: LampPendantProps) => {
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
