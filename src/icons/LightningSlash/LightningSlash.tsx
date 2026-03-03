import { SVGProps } from "react";

export type LightningSlashVariant = "duotone" | "fill" | "light";

export interface LightningSlashProps extends SVGProps<SVGSVGElement> {
  variant?: LightningSlashVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M105.72,67.81a4,4,0,0,1,0-5.42l48.39-51.85a8,8,0,0,1,13.7,7L153.18,90.9l57.43,21.53a8.24,8.24,0,0,1,4.22,3.4,8,8,0,0,1-1,9.63l-25.27,27.07a4,4,0,0,1-5.88,0Zm27.76,54.32L53.92,34.62A8,8,0,1,0,42.08,45.38L81.34,88.56l-39,41.83A8.15,8.15,0,0,0,40,135.31a8,8,0,0,0,5.16,8.18l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l61.86-66.28,38.37,42.2a8,8,0,1,0,11.84-10.76Z\"/>";
const LIGHT_INNER     = "<path d=\"M52.44,36A6,6,0,0,0,43.56,44L84.05,88.58,43.61,131.91a6,6,0,0,0,2.28,9.71l59.23,22.21-15,75a6,6,0,0,0,3.14,6.52A6.07,6.07,0,0,0,96,246a6,6,0,0,0,4.39-1.91l63.34-67.87L203.56,220a6,6,0,0,0,8.88-8.08ZM106,220.46l11.85-59.28a6,6,0,0,0-3.77-6.8l-55.6-20.85,33.64-36,63.48,69.83Zm4-150.91a6,6,0,0,1-.29-8.48l45.88-49.16a6,6,0,0,1,10.27,5.27l-15,75,59.23,22.21a6,6,0,0,1,2.28,9.71L190.08,148a6,6,0,1,1-8.77-8.19l16.18-17.33-55.6-20.85a6,6,0,0,1-3.77-6.8L150,35.54,118.5,69.25A6,6,0,0,1,110,69.55Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M53.92,34.62A8,8,0,1,0,42.08,45.38L81.33,88.56l-39.18,42a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l61.86-66.28,38.37,42.2a8,8,0,1,0,11.84-10.76ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l30.12-32.27,60.78,66.86ZM108.66,71a8,8,0,0,1-.39-11.31l45.88-49.16a8,8,0,0,1,13.69,7L153.18,90.9l57.63,21.61a8,8,0,0,1,3,12.95l-22.3,23.89a8,8,0,0,1-11.7-10.91L194,123.29l-52.8-19.8a8,8,0,0,1-5-9.06l10.47-52.38L120,70.62A8,8,0,0,1,108.66,71Z\"/>";
const SECONDARY_PATHS = "<path d=\"M96,240l16-80L48,136,160,16,144,96l64,24Z\"/>";

export const LightningSlash = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: LightningSlashProps) => {
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
