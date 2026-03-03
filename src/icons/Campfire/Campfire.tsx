import { SVGProps } from "react";

export type CampfireVariant = "duotone" | "fill" | "light";

export interface CampfireProps extends SVGProps<SVGSVGElement> {
  variant?: CampfireVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M132.19,25.19a8,8,0,0,0-8.38,0A156,156,0,0,0,96.24,48C77.77,67.13,68,87.9,68,108a60,60,0,0,0,120,0C188,60.08,134.47,26.59,132.19,25.19ZM128,152a24,24,0,0,1-24-24c0-24,24-40,24-40s24,16,24,40A24,24,0,0,1,128,152Zm95.62,74.42a8,8,0,0,1-10.05,5.2L128,204.39,42.43,231.62a8,8,0,1,1-4.85-15.25l64-20.37-64-20.38a8,8,0,1,1,4.85-15.24L128,187.6l85.57-27.22a8,8,0,1,1,4.85,15.24l-64,20.38,64,20.37A8,8,0,0,1,223.62,226.42Z\"/>";
const LIGHT_INNER     = "<path d=\"M221.72,225.82a6,6,0,0,1-7.54,3.9L128,202.3,41.82,229.72a6,6,0,1,1-3.64-11.44l70-22.28-70-22.28a6,6,0,1,1,3.64-11.44L128,189.7l86.18-27.42a6,6,0,1,1,3.64,11.44l-70,22.28,70,22.28A6,6,0,0,1,221.72,225.82ZM70,108c0-46.81,52.62-79.73,54.86-81.11a6,6,0,0,1,6.28,0C133.38,28.27,186,61.19,186,108a58,58,0,0,1-116,0Zm58,46a18,18,0,0,0,18-18c0-15.48-12-27.43-18-32.44-6,5-18,17-18,32.44A18,18,0,0,0,128,154ZM82,108a45.93,45.93,0,0,0,17,35.67A29.87,29.87,0,0,1,98,136c0-26.9,25.58-44.27,26.67-45a6,6,0,0,1,6.66,0c1.09.72,26.67,18.09,26.67,45a29.87,29.87,0,0,1-1,7.67A45.93,45.93,0,0,0,174,108c0-34.06-35.15-61.22-46-68.78C117.15,46.78,82,73.93,82,108Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M128,168a60.07,60.07,0,0,0,60-60c0-47.92-53.53-81.41-55.81-82.81a8,8,0,0,0-8.38,0A156,156,0,0,0,96.24,48C77.77,67.13,68,87.9,68,108A60.07,60.07,0,0,0,128,168Zm-16-32c0-13.57,10-24.46,16-29.79,6,5.33,16,16.22,16,29.79a16,16,0,0,1-32,0Zm16-94.34C139.74,50,172,76,172,108a43.83,43.83,0,0,1-12.09,30.24c.05-.74.09-1.49.09-2.24,0-28-26.44-45.91-27.56-46.66a8,8,0,0,0-8.88,0C122.44,90.09,96,108,96,136c0,.75,0,1.5.09,2.24A43.83,43.83,0,0,1,84,108C84,76,116.27,50,128,41.66Zm95.62,184.76a8,8,0,0,1-10.05,5.2L128,204.39,42.43,231.62a8,8,0,1,1-4.85-15.25l64-20.37-64-20.38a8,8,0,1,1,4.85-15.24L128,187.6l85.57-27.22a8,8,0,1,1,4.85,15.24l-64,20.38,64,20.37A8,8,0,0,1,223.62,226.42Z\"/>";
const SECONDARY_PATHS = "<path d=\"M180,108a52,52,0,0,1-52,52,24,24,0,0,0,24-24c0-24-24-40-24-40s-24,16-24,40a24,24,0,0,0,24,24,52,52,0,0,1-52-52c0-44,52-76,52-76S180,64,180,108Z\"/>";

export const Campfire = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CampfireProps) => {
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
