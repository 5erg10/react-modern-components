import { SVGProps } from "react";

export type TextStrikethroughVariant = "duotone" | "fill" | "light";

export interface TextStrikethroughProps extends SVGProps<SVGSVGElement> {
  variant?: TextStrikethroughVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM82.71,94.58C86,76.57,104.58,64,128,64c18.2,0,33.59,7.41,41.18,19.83a8,8,0,1,1-13.66,8.34C150.94,84.66,140.39,80,128,80c-15.3,0-27.73,7.33-29.55,17.42A8,8,0,0,1,90.59,104a7.76,7.76,0,0,1-1.43-.13A8,8,0,0,1,82.71,94.58ZM192,136H168.29A28.45,28.45,0,0,1,176,156c0,20.19-21.08,36-48,36-23.89,0-43.83-12.78-47.43-30.4a8,8,0,1,1,15.67-3.2c2,9.87,16,17.6,31.76,17.6,17.35,0,32-9.16,32-20,0-9.14-6.76-14.43-25.72-20H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z\"/>";
const LIGHT_INNER     = "<path d=\"M222,128a6,6,0,0,1-6,6H169.45c11.28,6.92,20.55,17.38,20.55,34,0,25.36-27.81,46-62,46s-62-20.64-62-46a6,6,0,0,1,12,0c0,18.75,22.43,34,50,34s50-15.25,50-34c0-18.23-15.46-26.59-40.47-34H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128ZM76.33,102a6.2,6.2,0,0,0,1.88-.3A6,6,0,0,0,82,94.13,19.74,19.74,0,0,1,81.11,88c0-19.38,20.16-34,46.89-34,19.58,0,35.56,7.81,42.74,20.89a6,6,0,0,0,10.52-5.78C171.94,52.13,152,42,128,42,94.43,42,69.11,61.77,69.11,88a31.62,31.62,0,0,0,1.52,9.87A6,6,0,0,0,76.33,102Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M224,128a8,8,0,0,1-8,8H175.93c9.19,7.11,16.07,17.2,16.07,32,0,13.34-7,25.7-19.75,34.79C160.33,211.31,144.61,216,128,216s-32.33-4.69-44.25-13.21C71,193.7,64,181.34,64,168a8,8,0,0,1,16,0c0,17.35,22,32,48,32s48-14.65,48-32c0-14.85-10.54-23.58-38.77-32H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM76.33,104a8,8,0,0,0,7.61-10.49A17.3,17.3,0,0,1,83.11,88c0-18.24,19.3-32,44.89-32,18.84,0,34.16,7.42,41,19.85a8,8,0,0,0,14-7.7C173.33,50.52,152.77,40,128,40,93.29,40,67.11,60.63,67.11,88a33.73,33.73,0,0,0,1.62,10.49A8,8,0,0,0,76.33,104Z\"/>";
const SECONDARY_PATHS = "<path d=\"M176,72l-55.31,51.05c-24-6.7-45.58-14.26-45.58-35,0-22.09,22-40,52.89-40C151.2,48,168.37,57.64,176,72Zm-55.31,51.05L72,168c0,22.09,25.07,40,56,40s56-17.91,56-40C184,138.43,150.52,131.4,120.69,123.05Z\"/>";

export const TextStrikethrough = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: TextStrikethroughProps) => {
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
