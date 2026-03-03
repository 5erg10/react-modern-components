import { SVGProps } from "react";

export type BrandyVariant = "duotone" | "fill" | "light";

export interface BrandyProps extends SVGProps<SVGSVGElement> {
  variant?: BrandyVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M224,88h0a95.63,95.63,0,0,0-15.53-52.37,8,8,0,0,0-6.7-3.63H54.23a8,8,0,0,0-6.7,3.63A95.63,95.63,0,0,0,32,88h0a96.12,96.12,0,0,0,88,95.66V216H88a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16H136V183.66A96.12,96.12,0,0,0,224,88ZM58.7,48H197.3a79.52,79.52,0,0,1,10.3,32H48.4A79.52,79.52,0,0,1,58.7,48Z\"/>";
const LIGHT_INNER     = "<path d=\"M222,88h0a93.64,93.64,0,0,0-15.21-51.28,6,6,0,0,0-5-2.72H54.23a6,6,0,0,0-5,2.72A93.64,93.64,0,0,0,34,88h0a94.1,94.1,0,0,0,88,93.8V218H88a6,6,0,0,0,0,12h80a6,6,0,0,0,0-12H134V181.8A94.1,94.1,0,0,0,222,88ZM57.56,46H198.44a81.62,81.62,0,0,1,11.34,36H46.22A81.62,81.62,0,0,1,57.56,46ZM128,170A82.09,82.09,0,0,1,46.24,94H209.76A82.09,82.09,0,0,1,128,170Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M224,88h0a95.63,95.63,0,0,0-15.53-52.37,8,8,0,0,0-6.7-3.63H54.23a8,8,0,0,0-6.7,3.63A95.63,95.63,0,0,0,32,88h0a96.12,96.12,0,0,0,88,95.66V216H88a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16H136V183.66A96.12,96.12,0,0,0,224,88ZM58.7,48H197.3a79.52,79.52,0,0,1,10.3,32H48.4A79.52,79.52,0,0,1,58.7,48ZM128,168A80.11,80.11,0,0,1,48.4,96H207.6A80.11,80.11,0,0,1,128,168Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,88A88,88,0,0,1,40,88Z\"/>";

export const Brandy = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BrandyProps) => {
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
