import { SVGProps } from "react";

export type EjectSimpleVariant = "duotone" | "fill" | "light";

export interface EjectSimpleProps extends SVGProps<SVGSVGElement> {
  variant?: EjectSimpleVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M232,200a8,8,0,0,1-8,8H32a8,8,0,1,1,0-16H224A8,8,0,0,1,232,200ZM40.09,160H215.91a16.1,16.1,0,0,0,12.48-26.23L146.74,32.94a24.11,24.11,0,0,0-37.48,0L27.61,133.77A16.1,16.1,0,0,0,40.09,160Z\"/>";
const LIGHT_INNER     = "<path d=\"M230,200a6,6,0,0,1-6,6H32a6,6,0,0,1,0-12H224A6,6,0,0,1,230,200ZM27.39,150A14,14,0,0,1,29.16,135L110.82,34.2a22.1,22.1,0,0,1,34.36,0L226.84,135a14.09,14.09,0,0,1-10.93,23H40.09A14,14,0,0,1,27.39,150Zm10.83-5.16A2,2,0,0,0,40.09,146H215.91a2,2,0,0,0,1.87-1.18,2,2,0,0,0-.27-2.24L135.86,41.76a10.1,10.1,0,0,0-15.72,0L38.49,142.58A2,2,0,0,0,38.22,144.82Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M232,200a8,8,0,0,1-8,8H32a8,8,0,1,1,0-16H224A8,8,0,0,1,232,200ZM25.59,150.84a16,16,0,0,1,2-17.07L109.26,32.94a24.11,24.11,0,0,1,37.48,0l81.65,100.83A16.1,16.1,0,0,1,215.91,160H40.09A16,16,0,0,1,25.59,150.84ZM40,143.91s0,.09.08.11l175.83,0s.08-.09.08-.13L134.3,43a8.1,8.1,0,0,0-12.6,0L40,143.84A.28.28,0,0,0,40,143.91Z\"/>";
const SECONDARY_PATHS = "<path d=\"M215.92,152H40.08a8.1,8.1,0,0,1-6.26-13.2L115.48,38a16.1,16.1,0,0,1,25,0L222.18,138.8A8.1,8.1,0,0,1,215.92,152Z\"/>";

export const EjectSimple = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: EjectSimpleProps) => {
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
