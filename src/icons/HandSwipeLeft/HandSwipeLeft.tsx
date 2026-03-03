import { SVGProps } from "react";

export type HandSwipeLeftVariant = "duotone" | "fill" | "light";

export interface HandSwipeLeftProps extends SVGProps<SVGSVGElement> {
  variant?: HandSwipeLeftVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216,128v50.93c0,25.59-8.48,39.93-8.84,40.65A8,8,0,0,1,200,224H64a8,8,0,0,1-6.9-3.95L26.15,160a16,16,0,0,1,6.53-22.23c7.66-4,17.1-.84,21.4,6.62l21,36.44a6.09,6.09,0,0,0,6,3.09l.12,0A8.19,8.19,0,0,0,88,175.74V56a16,16,0,0,1,16.77-16c8.61.4,15.23,7.82,15.23,16.43V128a8,8,0,0,0,8.53,8,8.17,8.17,0,0,0,7.47-8.25V112a16,16,0,0,1,16.77-16c8.61.4,15.23,7.82,15.23,16.43V136a8,8,0,0,0,8.53,8,8.18,8.18,0,0,0,7.47-8.25v-7.28c0-8.61,6.62-16,15.23-16.43A16,16,0,0,1,216,128Zm32-80H195.31l18.35-18.34a8,8,0,1,0-11.32-11.32l-32,32a8,8,0,0,0,0,11.32l32,32a8,8,0,0,0,11.32-11.32L195.31,64H248a8,8,0,0,0,0-16Z\"/>";
const LIGHT_INNER     = "<path d=\"M214,140v36c0,25.13-8.28,42-8.64,42.68a6,6,0,1,1-10.73-5.36c.07-.14,7.37-15.19,7.37-37.32V140a14,14,0,0,0-28,0v4a6,6,0,0,1-12,0V124a14,14,0,0,0-28,0v12a6,6,0,0,1-12,0V68a14,14,0,0,0-28,0V176a6,6,0,0,1-11.09,3.17l-18.68-30a1,1,0,0,1-.1-.17,14,14,0,0,0-24.25,14l29.29,50A6,6,0,0,1,58.81,219L29.49,169a26,26,0,0,1,45-26.13L82,155V68a26,26,0,0,1,52,0v34.1a26,26,0,0,1,39.42,16.39A26,26,0,0,1,214,140Zm34-90H190.48l21.76-21.76a6,6,0,0,0-8.49-8.48l-32,32a6,6,0,0,0,0,8.48l32,32a6,6,0,0,0,8.49-8.48L190.48,62H248a6,6,0,0,0,0-12Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M216,140v36c0,25.59-8.49,42.85-8.85,43.58A8,8,0,0,1,200,224a7.9,7.9,0,0,1-3.57-.85,8,8,0,0,1-3.58-10.73c.06-.12,7.16-14.81,7.16-36.42V140a12,12,0,0,0-24,0v4a8,8,0,0,1-16,0V124a12,12,0,0,0-24,0v12a8,8,0,0,1-16,0V68a12,12,0,0,0-24,0V176a8,8,0,0,1-14.79,4.23l-18.68-30-.14-.23A12,12,0,1,0,41.6,162L70.89,212A8,8,0,1,1,57.08,220l-29.32-50a28,28,0,0,1,48.41-28.17L80,148V68a28,28,0,0,1,56,0V98.7a28,28,0,0,1,38.65,16.69A28,28,0,0,1,216,140Zm32-92H195.31l18.34-18.34a8,8,0,0,0-11.31-11.32l-32,32a8,8,0,0,0,0,11.32l32,32a8,8,0,0,0,11.31-11.32L195.31,64H248a8,8,0,0,0,0-16Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,140v36c0,24-8,40-8,40H64L34.68,166a20,20,0,0,1,34.64-20L88,176V68a20,20,0,0,1,40,0v56a20,20,0,0,1,40,0v16a20,20,0,0,1,40,0Z\"/>";

export const HandSwipeLeft = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: HandSwipeLeftProps) => {
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
