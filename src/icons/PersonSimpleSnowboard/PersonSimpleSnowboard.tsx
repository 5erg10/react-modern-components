import { SVGProps } from "react";

export type PersonSimpleSnowboardVariant = "duotone" | "fill" | "light";

export interface PersonSimpleSnowboardProps extends SVGProps<SVGSVGElement> {
  variant?: PersonSimpleSnowboardVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M136,52a28,28,0,1,1,28,28A28,28,0,0,1,136,52Zm87.67,70.25a8,8,0,0,1-9.93,5.42l-79.07-23.26-7.78,11.67,35.33,10.23a8,8,0,0,1,4.42,12.14l-19.75,29.44,50.89,14.75A25.32,25.32,0,0,1,216,206.81,25.28,25.28,0,0,1,190.79,232a25.88,25.88,0,0,1-7.14-1L26.21,185.35A25.32,25.32,0,0,1,8,161.18,25.25,25.25,0,0,1,40.34,137l44.73,13,33.52-50.28-40.85-12a8,8,0,1,1,4.52-15.35l136,40A8,8,0,0,1,223.67,122.25ZM117.58,130l-16.4,24.6,29.58,8.58,16.49-24.59Z\"/>";
const LIGHT_INNER     = "<path d=\"M164,78a26,26,0,1,0-26-26A26,26,0,0,0,164,78Zm0-40a14,14,0,1,1-14,14A14,14,0,0,1,164,38Zm53.69,76.24-136-40a6,6,0,1,0-3.38,11.51l43.45,12.78L85.92,152.3,39.79,138.93a23.19,23.19,0,0,0-20.54,3.75A23,23,0,0,0,10,161.18a23.32,23.32,0,0,0,16.77,22.25h0l157.44,45.63a23.67,23.67,0,0,0,6.58.94,23.17,23.17,0,0,0,6.44-45.44l-53.52-15.51L165,137.34a6,6,0,0,0-3.31-9.11l-38-11,10.11-15.16,80.49,23.67A5.82,5.82,0,0,0,216,126a6,6,0,0,0,1.69-11.76ZM202,206.81a11.05,11.05,0,0,1-4.46,8.9,11.26,11.26,0,0,1-10,1.82L30.11,171.9h0A11.24,11.24,0,0,1,22,161.18a11.05,11.05,0,0,1,4.46-8.9,11.26,11.26,0,0,1,10-1.82l157.44,45.63A11.24,11.24,0,0,1,202,206.81Zm-51.56-69.34-18.83,28.07L98,155.8l18.73-28.09Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M164,80a28,28,0,1,0-28-28A28,28,0,0,0,164,80Zm0-40a12,12,0,1,1-12,12A12,12,0,0,1,164,40Zm54.25,72.32-136-40a8,8,0,1,0-4.52,15.35l40.85,12L85.07,150,40.34,137a25.18,25.18,0,1,0-14.13,48.34L183.65,231a25.88,25.88,0,0,0,7.14,1,25.17,25.17,0,0,0,7-49.36l-50.89-14.75,19.75-29.44a8,8,0,0,0-4.42-12.14l-35.33-10.23,7.78-11.67,79.07,23.26a8,8,0,0,0,4.51-15.35ZM200,206.81a9.07,9.07,0,0,1-3.67,7.3,9.27,9.27,0,0,1-8.22,1.5L30.67,170a9.24,9.24,0,0,1-6.67-8.8,9.06,9.06,0,0,1,3.66-7.3,9.26,9.26,0,0,1,8.23-1.5L193.33,198A9.23,9.23,0,0,1,200,206.81Zm-52.75-68.18-16.49,24.59-29.58-8.58,16.4-24.6Z\"/>";
const SECONDARY_PATHS = "<path d=\"M144,52a20,20,0,1,1,20,20A20,20,0,0,1,144,52Zm51.56,138.33L38.12,144.7A17.25,17.25,0,0,0,16,161.18h0a17.19,17.19,0,0,0,12.44,16.49L185.88,223.3a17.18,17.18,0,1,0,9.68-33Z\"/>";

export const PersonSimpleSnowboard = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PersonSimpleSnowboardProps) => {
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
