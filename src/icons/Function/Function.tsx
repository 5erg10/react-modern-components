import { SVGProps } from "react";

export type FunctionVariant = "duotone" | "fill" | "light";

export interface FunctionProps extends SVGProps<SVGSVGElement> {
  variant?: FunctionVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM176,72H159.92a16,16,0,0,0-15.73,13l-6.55,35H168a8,8,0,0,1,0,16H134.64l-7.11,37.9A32,32,0,0,1,96.08,200H80a8,8,0,0,1,0-16H96.08A16,16,0,0,0,111.81,171L118.36,136H88a8,8,0,0,1,0-16h33.36l7.11-37.9A32,32,0,0,1,159.92,56H176a8,8,0,0,1,0,16Z\"/>";
const LIGHT_INNER     = "<path d=\"M206,40a6,6,0,0,1-6,6H170.71a26,26,0,0,0-25.58,21.35L135.19,122H184a6,6,0,0,1,0,12H133l-10.33,56.8A38,38,0,0,1,85.29,222H56a6,6,0,0,1,0-12H85.29a26,26,0,0,0,25.58-21.35L120.81,134H72a6,6,0,0,1,0-12h51l10.33-56.8A38,38,0,0,1,170.71,34H200A6,6,0,0,1,206,40Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M208,40a8,8,0,0,1-8,8H170.71a24,24,0,0,0-23.62,19.71L137.59,120H184a8,8,0,0,1,0,16H134.68l-10,55.16A40,40,0,0,1,85.29,224H56a8,8,0,0,1,0-16H85.29a24,24,0,0,0,23.62-19.71l9.5-52.29H72a8,8,0,0,1,0-16h49.32l10-55.16A40,40,0,0,1,170.71,32H200A8,8,0,0,1,208,40Z\"/>";
const SECONDARY_PATHS = "<path d=\"M200,40V200a16,16,0,0,1-16,16H56V56A16,16,0,0,1,72,40Z\"/>";

export const Function = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: FunctionProps) => {
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
