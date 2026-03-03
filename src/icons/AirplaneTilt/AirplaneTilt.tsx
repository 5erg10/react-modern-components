import { SVGProps } from "react";

export type AirplaneTiltVariant = "duotone" | "fill" | "light";

export interface AirplaneTiltProps extends SVGProps<SVGSVGElement> {
  variant?: AirplaneTiltVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M215.52,197.26a8,8,0,0,1-1.86,8.39l-24,24A8,8,0,0,1,184,232a7.09,7.09,0,0,1-.79,0,8,8,0,0,1-5.87-3.52l-44.07-66.12L112,183.59V208a8,8,0,0,1-2.34,5.65s-14,14.06-15.88,15.88A7.91,7.91,0,0,1,91,231.41a8,8,0,0,1-10.41-4.35l-.06-.15-14.7-36.76L29,175.42a8,8,0,0,1-2.69-13.08l16-16A8,8,0,0,1,48,144H72.4l21.27-21.27L27.56,78.65a8,8,0,0,1-1.22-12.32l24-24a8,8,0,0,1,8.39-1.86l85.94,31.25L176.2,40.19a28,28,0,0,1,39.6,39.6l-31.53,31.53Z\"/>";
const LIGHT_INNER     = "<path d=\"M183,113.65l30.1-28.32.13-.13A30,30,0,0,0,170.8,42.77l-.13.13L142.35,73,58.05,42.35a6,6,0,0,0-6.29,1.39l-24,24A6,6,0,0,0,28.67,77l65.92,43.94L77.52,138H56a6,6,0,0,0-4.24,1.76l-24,24a6,6,0,0,0,2,9.82l37.62,15,15,37.56,0,.12a6,6,0,0,0,7.81,3.27,5.94,5.94,0,0,0,2.07-1.41l23.91-23.91A6,6,0,0,0,118,200V178.48l17.07-17.07L179,227.33a6,6,0,0,0,9.23.91l24-24a6,6,0,0,0,1.39-6.29Zm1.94,100.93L141,148.66a6,6,0,0,0-4.4-2.64l-.59,0a6,6,0,0,0-4.24,1.76l-24,24A6,6,0,0,0,106,176v21.52L90.2,213.32,77.57,181.77a6,6,0,0,0-3.34-3.35L42.68,165.8,58.49,150H80a6,6,0,0,0,4.25-1.76l24-24a6,6,0,0,0-.92-9.23L41.42,71.06,57.54,54.93,142,85.63a6,6,0,0,0,6.42-1.53l31-32.9A18,18,0,0,1,204.8,76.66l-32.9,31a6,6,0,0,0-1.53,6.42l30.7,84.41Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M185.33,114.21l29.14-27.43.17-.16a32,32,0,0,0-45.26-45.26l-.16.17L141.79,70.67l-83-30.2a8,8,0,0,0-8.39,1.86l-24,24a8,8,0,0,0,1.22,12.31l63.89,42.59L76.69,136H56a8,8,0,0,0-5.65,2.34l-24,24A8,8,0,0,0,29,175.42l36.82,14.73,14.7,36.75.06.16a8,8,0,0,0,13.18,2.47l23.87-23.88A8,8,0,0,0,120,200V179.31l14.76-14.76,42.59,63.89a8,8,0,0,0,12.31,1.22l24-24a8,8,0,0,0,1.86-8.39Zm-.07,97.23-42.59-63.89A8,8,0,0,0,136.8,144a7.09,7.09,0,0,0-.79,0,8,8,0,0,0-5.66,2.34l-24,24A8,8,0,0,0,104,176v20.69L90.93,209.76,79.43,181A8,8,0,0,0,75,176.57l-28.74-11.5L59.32,152H80a8,8,0,0,0,5.66-2.34l24-24a8,8,0,0,0-1.22-12.32L44.56,70.74l13.5-13.49,83.22,30.26a8,8,0,0,0,8.56-2l30.94-32.88A16,16,0,0,1,203.4,75.22l-32.87,30.94a8,8,0,0,0-2,8.56l30.26,83.22Z\"/>";
const SECONDARY_PATHS = "<path d=\"M209,81l-33,31,32,88-24,24-48-72-24,24v24L88,224,72,184,32,168l24-24H80l24-24L32,72,56,48l88,32,31-33A24,24,0,0,1,209,81Z\"/>";

export const AirplaneTilt = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: AirplaneTiltProps) => {
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
