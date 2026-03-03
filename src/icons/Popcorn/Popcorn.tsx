import { SVGProps } from "react";

export type PopcornVariant = "duotone" | "fill" | "light";

export interface PopcornProps extends SVGProps<SVGSVGElement> {
  variant?: PopcornVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M229.52,74.21a8,8,0,0,0-7.13-2A44,44,0,0,0,168,41.67a44,44,0,0,0-80,0,44,44,0,0,0-54.4,30.51,8,8,0,0,0-9.4,9.65L54.76,211.67A16,16,0,0,0,70.34,224H185.66a16,16,0,0,0,15.58-12.33L231.79,81.83A8,8,0,0,0,229.52,74.21ZM70.34,208,42.91,91.44l37.85,10.81L94.86,208ZM122.06,73.76,87.57,87.56,49,76.54a28,28,0,0,1,40.1-17.28,8,8,0,0,0,11.56-5.34,28,28,0,0,1,54.66,0,8,8,0,0,0,11.56,5.34A28,28,0,0,1,207,76.54l-38.56,11-34.49-13.8A16,16,0,0,0,122.06,73.76ZM185.66,208H161.14l14.1-105.75,37.85-10.81Z\"/>";
const LIGHT_INNER     = "<path d=\"M228.14,75.66a6,6,0,0,0-5.79-1.43l-1.41.4a42,42,0,0,0-54.07-30.52,42,42,0,0,0-77.74,0A42,42,0,0,0,35.06,74.63l-1.41-.4a6,6,0,0,0-7.49,7.14L56.71,211.21A14,14,0,0,0,70.34,222H185.66a14,14,0,0,0,13.63-10.79L229.84,81.37A6,6,0,0,0,228.14,75.66ZM76,54a29.54,29.54,0,0,1,14,3.49,6,6,0,0,0,8.68-4,30,30,0,0,1,58.56,0,6,6,0,0,0,8.67,4A29.6,29.6,0,0,1,180,54a30,30,0,0,1,29.39,23.94L168.32,89.67l-35.12-14a14,14,0,0,0-10.4,0l-35.12,14L46.61,77.94A30,30,0,0,1,76,54Zm85.44,45.84L146.75,210h-37.5L94.56,99.84l32.7-13.08a2,2,0,0,1,1.48,0Zm-93,108.62L40.18,88.58l42.39,12.11L97.15,210H70.34A2,2,0,0,1,68.39,208.46Zm119.22,0a2,2,0,0,1-2,1.54H158.85l14.58-109.31,42.39-12.11Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M229.52,74.21a8,8,0,0,0-7.13-2A44,44,0,0,0,168,41.67a44,44,0,0,0-80,0,44,44,0,0,0-54.4,30.51,8,8,0,0,0-9.4,9.65L54.76,211.67A16,16,0,0,0,70.34,224H185.66a16,16,0,0,0,15.58-12.33L231.79,81.83A8,8,0,0,0,229.52,74.21ZM76,56a27.68,27.68,0,0,1,13.11,3.26,8,8,0,0,0,11.56-5.34,28,28,0,0,1,54.66,0,8,8,0,0,0,11.56,5.34A28,28,0,0,1,207,76.54l-38.56,11-34.49-13.8a16,16,0,0,0-11.88,0L87.57,87.56,49,76.54A28,28,0,0,1,76,56Zm83.25,45.11L145,208H111L96.75,101.11,128,88.62ZM42.91,91.44l37.85,10.81L94.86,208H70.34ZM185.66,208H161.14l14.1-105.75,37.85-10.81Z\"/>";
const SECONDARY_PATHS = "<path d=\"M88,96l16,120H70.34a8,8,0,0,1-7.79-6.17L32,80Zm80,0L152,216h33.66a8,8,0,0,0,7.79-6.17L224,80Z\"/>";

export const Popcorn = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PopcornProps) => {
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
