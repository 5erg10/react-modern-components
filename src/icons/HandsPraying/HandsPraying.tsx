import { SVGProps } from "react";

export type HandsPrayingVariant = "duotone" | "fill" | "light";

export interface HandsPrayingProps extends SVGProps<SVGSVGElement> {
  variant?: HandsPrayingVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M235.32,180l-36.24-36.25L162.62,23.46A21.76,21.76,0,0,0,128,12.93,21.76,21.76,0,0,0,93.38,23.46L56.92,143.76,20.68,180a16,16,0,0,0,0,22.62l32.69,32.69a16,16,0,0,0,22.63,0L124.28,187a40.68,40.68,0,0,0,3.72-4.29,40.68,40.68,0,0,0,3.72,4.29L180,235.32a16,16,0,0,0,22.63,0l32.69-32.69A16,16,0,0,0,235.32,180ZM120,158.75a23.85,23.85,0,0,1-7,17L88.68,200,56,167.32l13.65-13.66a8,8,0,0,0,2-3.34l37-122.22A5.78,5.78,0,0,1,120,29.78Zm47.44,41.38L143,175.72a23.85,23.85,0,0,1-7-17v-129a5.78,5.78,0,0,1,11.31-1.68l37,122.22a8,8,0,0,0,2,3.34l14.49,14.49Z\"/>";
const LIGHT_INNER     = "<path d=\"M233.9,181.42l-36.59-36.6L160.71,24A19.75,19.75,0,0,0,128,15.62,19.75,19.75,0,0,0,95.29,24L58.69,144.82,22.1,181.42a14,14,0,0,0,0,19.79L54.79,233.9a14,14,0,0,0,19.79,0l48.29-48.28a38,38,0,0,0,5.13-6.38,38,38,0,0,0,5.13,6.38l48.29,48.28a14,14,0,0,0,19.79,0l32.69-32.69a14,14,0,0,0,0-19.79Zm-167.8,44a2,2,0,0,1-2.83,0L30.58,192.73a2,2,0,0,1,0-2.83l14.11-14.1L80.2,211.31Zm48.28-48.29-25.69,25.7L53.17,167.31l15.07-15.07a6,6,0,0,0,1.5-2.5l37-122.22A7.78,7.78,0,0,1,122,29.78v129A25.83,25.83,0,0,1,114.38,177.13ZM134,158.75v-129a7.78,7.78,0,0,1,15.22-2.26l37,122.22a6,6,0,0,0,1.5,2.5l15.93,15.94-36.28,34.74-25.79-25.79A25.83,25.83,0,0,1,134,158.75Zm91.42,34-32.69,32.69a2,2,0,0,1-2.83,0l-14-14,36.29-34.74,13.24,13.23A2,2,0,0,1,225.42,192.73Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M235.32,180l-36.24-36.25L162.62,23.46A21.76,21.76,0,0,0,128,12.93,21.76,21.76,0,0,0,93.38,23.46L56.92,143.76,20.68,180a16,16,0,0,0,0,22.62l32.69,32.69a16,16,0,0,0,22.63,0L124.28,187a40.68,40.68,0,0,0,3.72-4.29,40.68,40.68,0,0,0,3.72,4.29L180,235.32a16,16,0,0,0,22.63,0l32.69-32.69A16,16,0,0,0,235.32,180ZM64.68,224,32,191.32l12.69-12.69,32.69,32.69ZM120,158.75a23.85,23.85,0,0,1-7,17L88.68,200,56,167.32l13.65-13.66a8,8,0,0,0,2-3.34l37-122.22A5.78,5.78,0,0,1,120,29.78Zm23,17a23.85,23.85,0,0,1-7-17v-129a5.78,5.78,0,0,1,11.31-1.68l37,122.22a8,8,0,0,0,2,3.34l14.49,14.49-33.4,32ZM191.32,224l-12.56-12.57,33.39-32L224,191.32Z\"/>";
const SECONDARY_PATHS = "<path d=\"M229.66,197,197,229.66a8,8,0,0,1-11.31,0l-18.35-18.35,44-44,18.35,18.35A8,8,0,0,1,229.66,197ZM26.34,185.66a8,8,0,0,0,0,11.31L59,229.66a8,8,0,0,0,11.31,0l18.35-18.35-44-44Z\"/>";

export const HandsPraying = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: HandsPrayingProps) => {
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
