import { SVGProps } from "react";

export type UserGearVariant = "duotone" | "fill" | "light";

export interface UserGearProps extends SVGProps<SVGSVGElement> {
  variant?: UserGearVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M198.13,194.85A8,8,0,0,1,192,208H24a8,8,0,0,1-6.12-13.15c14.94-17.78,33.52-30.41,54.17-37.17a68,68,0,1,1,71.9,0C164.6,164.44,183.18,177.07,198.13,194.85ZM255.18,154a8,8,0,0,1-6.94,4,7.92,7.92,0,0,1-4-1.07l-4.67-2.7a23.92,23.92,0,0,1-7.58,4.39V164a8,8,0,0,1-16,0v-5.38a23.92,23.92,0,0,1-7.58-4.39l-4.67,2.7a7.92,7.92,0,0,1-4,1.07,8,8,0,0,1-4-14.93l4.66-2.69a23.6,23.6,0,0,1,0-8.76l-4.66-2.69a8,8,0,1,1,8-13.86l4.67,2.7a23.92,23.92,0,0,1,7.58-4.39V108a8,8,0,0,1,16,0v5.38a23.92,23.92,0,0,1,7.58,4.39l4.67-2.7a8,8,0,1,1,8,13.86l-4.66,2.69a23.6,23.6,0,0,1,0,8.76l4.66,2.69A8,8,0,0,1,255.18,154ZM224,144a8,8,0,1,0-8-8A8,8,0,0,0,224,144Z\"/>";
const LIGHT_INNER     = "<path d=\"M139,158.25a66,66,0,1,0-62,0c-22,6.23-41.88,19.16-57.61,37.89a6,6,0,0,0,9.18,7.72C49.1,179.44,77.31,166,108,166s58.9,13.44,79.41,37.86a6,6,0,1,0,9.18-7.72C180.86,177.41,161,164.48,139,158.25ZM54,100a54,54,0,1,1,54,54A54.06,54.06,0,0,1,54,100Zm197.25,44.8-5.92-3.41a22,22,0,0,0,0-10.78l5.92-3.41a6,6,0,0,0-6-10.4l-5.93,3.43a22,22,0,0,0-9.32-5.39V108a6,6,0,0,0-12,0v6.84a22,22,0,0,0-9.32,5.39l-5.93-3.43a6,6,0,0,0-6,10.4l5.92,3.41a22,22,0,0,0,0,10.78l-5.92,3.41a6,6,0,0,0,6,10.4l5.93-3.43a22,22,0,0,0,9.32,5.39V164a6,6,0,0,0,12,0v-6.84a22,22,0,0,0,9.32-5.39l5.93,3.43a6,6,0,0,0,6-10.4ZM224,146a10,10,0,1,1,10-10A10,10,0,0,1,224,146Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M144,157.68a68,68,0,1,0-71.9,0c-20.65,6.76-39.23,19.39-54.17,37.17a8,8,0,1,0,12.24,10.3C50.25,181.19,77.91,168,108,168s57.75,13.19,77.87,37.15a8,8,0,0,0,12.26-10.3C183.18,177.07,164.6,164.44,144,157.68ZM56,100a52,52,0,1,1,52,52A52.06,52.06,0,0,1,56,100Zm196.25,43.07-4.66-2.69a23.6,23.6,0,0,0,0-8.76l4.66-2.69a8,8,0,1,0-8-13.86l-4.67,2.7a23.92,23.92,0,0,0-7.58-4.39V108a8,8,0,0,0-16,0v5.38a23.92,23.92,0,0,0-7.58,4.39l-4.67-2.7a8,8,0,1,0-8,13.86l4.66,2.69a23.6,23.6,0,0,0,0,8.76l-4.66,2.69a8,8,0,0,0,8,13.86l4.67-2.7a23.92,23.92,0,0,0,7.58,4.39V164a8,8,0,0,0,16,0v-5.38a23.92,23.92,0,0,0,7.58-4.39l4.67,2.7a7.92,7.92,0,0,0,4,1.07,8,8,0,0,0,4-14.93ZM224,144a8,8,0,1,1,8-8A8,8,0,0,1,224,144Z\"/>";
const SECONDARY_PATHS = "<path d=\"M168,100a60,60,0,1,1-60-60A60,60,0,0,1,168,100Z\"/>";

export const UserGear = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: UserGearProps) => {
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
