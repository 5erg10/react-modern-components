import { SVGProps } from "react";

export type BulldozerVariant = "duotone" | "fill" | "light";

export interface BulldozerProps extends SVGProps<SVGSVGElement> {
  variant?: BulldozerVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M248,200h-8a8,8,0,0,1-8-8V160a8,8,0,0,1,8-8h8a8,8,0,0,0,0-16h-8a24,24,0,0,0-24,24v8H199.2a40.1,40.1,0,0,0-33.71-31.61L129.44,49.85A16,16,0,0,0,114.67,40H24A16,16,0,0,0,8,56v96a40,40,0,0,0,32,64H160a40.07,40.07,0,0,0,39.2-32H216v8a24,24,0,0,0,24,24h8a8,8,0,0,0,0-16ZM64,56h50.67L148,136H64ZM24,56H48v80H40a39.72,39.72,0,0,0-16,3.35ZM160,184H40a8,8,0,0,1,0-16H160a8,8,0,0,1,0,16Z\"/>";
const LIGHT_INNER     = "<path d=\"M248,202h-8a10,10,0,0,1-10-10V160a10,10,0,0,1,10-10h8a6,6,0,0,0,0-12h-8a22,22,0,0,0-22,22v10H197.52a38.08,38.08,0,0,0-33.43-31.78l-36.5-87.61A14,14,0,0,0,114.67,42H24A14,14,0,0,0,10,56v96.72A38,38,0,0,0,40,214H160a38.05,38.05,0,0,0,37.52-32H218v10a22,22,0,0,0,22,22h8a6,6,0,0,0,0-12ZM116.51,55.23,151,138H62V54h52.67A2,2,0,0,1,116.51,55.23ZM24,54H50v84H40a37.82,37.82,0,0,0-18,4.54V56A2,2,0,0,1,24,54ZM160,202H40a26,26,0,0,1,0-52H160a26,26,0,0,1,0,52Zm6-26a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H160A6,6,0,0,1,166,176Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M248,200h-8a8,8,0,0,1-8-8V160a8,8,0,0,1,8-8h8a8,8,0,0,0,0-16h-8a24,24,0,0,0-24,24v8H199.2a40.09,40.09,0,0,0-33.71-31.61L129.44,49.85A16,16,0,0,0,114.67,40H24A16,16,0,0,0,8,56v96a40,40,0,0,0,32,64H160a40.07,40.07,0,0,0,39.2-32H216v8a24,24,0,0,0,24,24h8a8,8,0,0,0,0-16ZM148,136H64V56h50.67ZM48,56v80H40a39.72,39.72,0,0,0-16,3.35V56ZM160,200H40a24,24,0,0,1,0-48H160a24,24,0,0,1,0,48Zm8-24a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H160A8,8,0,0,1,168,176Z\"/>";
const SECONDARY_PATHS = "<path d=\"M192,176h0a32,32,0,0,1-32,32H40A32,32,0,0,1,8,176H8a32,32,0,0,1,32-32H160A32,32,0,0,1,192,176Z\"/>";

export const Bulldozer = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BulldozerProps) => {
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
