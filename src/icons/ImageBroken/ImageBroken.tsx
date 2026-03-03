import { SVGProps } from "react";

export type ImageBrokenVariant = "duotone" | "fill" | "light";

export interface ImageBrokenProps extends SVGProps<SVGSVGElement> {
  variant?: ImageBrokenVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16h64a8,8,0,0,0,7.59-5.47l14.83-44.48L163,151.43a8.07,8.07,0,0,0,4.46-4.46l14.62-36.55,44.48-14.83A8,8,0,0,0,232,88V56A16,16,0,0,0,216,40ZM117,152.57a8,8,0,0,0-4.62,4.9L98.23,200H40V160.69l46.34-46.35a8,8,0,0,1,11.32,0l32.84,32.84Zm115-30.84V200a16,16,0,0,1-16,16H137.73a8,8,0,0,1-7.59-10.53l7.94-23.8a8,8,0,0,1,4.61-4.9l35.77-14.31,14.31-35.77a8,8,0,0,1,4.9-4.61l23.8-7.94A8,8,0,0,1,232,121.73Z\"/>";
const LIGHT_INNER     = "<path d=\"M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14h64a6,6,0,0,0,5.69-4.1l15.12-45.36,37.42-15a6,6,0,0,0,3.34-3.34l15-37.42L225.9,93.69A6,6,0,0,0,230,88V56A14,14,0,0,0,216,42ZM117.77,154.43a6,6,0,0,0-3.46,3.67L99.68,202H40a2,2,0,0,1-2-2V171.17l52.58-52.58a2,2,0,0,1,2.83,0L126,151.15ZM218,83.68,174.1,98.31a6,6,0,0,0-3.67,3.46l-15.05,37.61L138.1,146.3l-36.2-36.2a14,14,0,0,0-19.8,0L38,154.2V56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2Zm9.51,33.18a6,6,0,0,0-5.41-.82L198.3,124a6,6,0,0,0-3.67,3.47L180,164l-36.56,14.63A6,6,0,0,0,140,182.3L132,206.1a6,6,0,0,0,5.69,7.9H216a14,14,0,0,0,14-14V121.73A6,6,0,0,0,227.51,116.86ZM218,200a2,2,0,0,1-2,2H146.06l4.42-13.26,36.37-14.55a6,6,0,0,0,3.34-3.34l14.55-36.37L218,130.06Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16h64a8,8,0,0,0,7.59-5.47l14.83-44.48L163,151.43a8.07,8.07,0,0,0,4.46-4.46l14.62-36.55,44.48-14.83A8,8,0,0,0,232,88V56A16,16,0,0,0,216,40ZM112.41,157.47,98.23,200H40V172l52-52,30.42,30.42L117,152.57A8,8,0,0,0,112.41,157.47ZM216,82.23,173.47,96.41a8,8,0,0,0-4.9,4.62l-14.72,36.82L138.58,144l-35.27-35.27a16,16,0,0,0-22.62,0L40,149.37V56H216Zm12.68,33a8,8,0,0,0-7.21-1.1l-23.8,7.94a8,8,0,0,0-4.9,4.61l-14.31,35.77-35.77,14.31a8,8,0,0,0-4.61,4.9l-7.94,23.8A8,8,0,0,0,137.73,216H216a16,16,0,0,0,16-16V121.73A8,8,0,0,0,228.68,115.24ZM216,200H148.83l3.25-9.75,35.51-14.2a8.07,8.07,0,0,0,4.46-4.46l14.2-35.51,9.75-3.25Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,56V88l-48,16-16,40-23.35,9.34-39-39a8,8,0,0,0-11.32,0L32,168.69V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z\"/>";

export const ImageBroken = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ImageBrokenProps) => {
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
