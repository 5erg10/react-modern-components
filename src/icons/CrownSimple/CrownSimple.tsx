import { SVGProps } from "react";

export type CrownSimpleVariant = "duotone" | "fill" | "light";

export interface CrownSimpleProps extends SVGProps<SVGSVGElement> {
  variant?: CrownSimpleVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M239.75,90.81c0,.11,0,.21-.07.32L217,195a16,16,0,0,1-15.72,13H54.71A16,16,0,0,1,39,195L16.32,91.13c0-.11-.05-.21-.07-.32A16,16,0,0,1,44,77.39l33.67,36.29,35.8-80.29a1,1,0,0,0,0-.1,16,16,0,0,1,29.06,0,1,1,0,0,0,0,.1l35.8,80.29L212,77.39a16,16,0,0,1,27.71,13.42Z\"/>";
const LIGHT_INNER     = "<path d=\"M230,75.4a13.87,13.87,0,0,0-16.52,3.34l-35.74,38.52L140.71,34.13a14,14,0,0,0-25.45.07l-37,83.06L42.48,78.74A14,14,0,0,0,18.22,90.46c0,.08,0,.16.05.24L41,194.57A14,14,0,0,0,54.71,206H201.29a14,14,0,0,0,13.76-11.43L237.73,90.7c0-.08,0-.16.05-.24A13.89,13.89,0,0,0,230,75.4ZM226,88.29,203.31,192.11a2,2,0,0,0-.05.24,2,2,0,0,1-2,1.65H54.71a2,2,0,0,1-2-1.65,2,2,0,0,0-.05-.24L30,88.29a1.82,1.82,0,0,1,1.12-2.06,1.84,1.84,0,0,1,2.36.48l.12.13,42,45.24a6,6,0,0,0,9.88-1.64l40.7-91.28A1.92,1.92,0,0,1,128,38a1.87,1.87,0,0,1,1.78,1.09l40.74,91.35a6,6,0,0,0,9.88,1.64l42-45.24.12-.13a1.84,1.84,0,0,1,2.36-.48A1.82,1.82,0,0,1,226,88.29Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M230.9,73.6A15.85,15.85,0,0,0,212,77.39l-33.67,36.29-35.8-80.29a1,1,0,0,1,0-.1,16,16,0,0,0-29.06,0,1,1,0,0,1,0,.1l-35.8,80.29L44,77.39A16,16,0,0,0,16.25,90.81c0,.11,0,.21.07.32L39,195a16,16,0,0,0,15.72,13H201.29A16,16,0,0,0,217,195L239.68,91.13c0-.11,0-.21.07-.32A15.85,15.85,0,0,0,230.9,73.6ZM201.35,191.68l-.06.32H54.71l-.06-.32L32,88l.14.16,42,45.24a8,8,0,0,0,13.18-2.18L128,40l40.69,91.25a8,8,0,0,0,13.18,2.18l42-45.24L224,88Z\"/>";
const SECONDARY_PATHS = "<path d=\"M231.87,89.42l-22.7,104a8,8,0,0,1-7.88,6.61H54.71a8,8,0,0,1-7.88-6.61l-22.7-104A8,8,0,0,1,38,82.76L80,128l40.74-91.35a8,8,0,0,1,14.52,0L176,128l42-45.24A8,8,0,0,1,231.87,89.42Z\"/>";

export const CrownSimple = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CrownSimpleProps) => {
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
