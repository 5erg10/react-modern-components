import { SVGProps } from "react";

export type VolleyballVariant = "duotone" | "fill" | "light";

export interface VolleyballProps extends SVGProps<SVGSVGElement> {
  variant?: VolleyballVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm87.63,96H181.37a104.18,104.18,0,0,0-35.78-78.23A88.18,88.18,0,0,1,215.63,120ZM44.53,155.87A87.95,87.95,0,0,1,77.27,56.13L94.39,85.78a104.14,104.14,0,0,0-49.86,70.09ZM58.9,182.43a88,88,0,0,1,43.49-82.79L118.76,128,77.27,199.87A88.62,88.62,0,0,1,58.9,182.43Zm150.84-21.85a88,88,0,0,1-93.49,3.78L132.62,136h83A87.16,87.16,0,0,1,209.74,160.58Z\"/>";
const LIGHT_INNER     = "<path d=\"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm83.37,135.89a90,90,0,0,1-97.85,3.18L131.46,134H217.8A89.49,89.49,0,0,1,211.37,161.89ZM88.3,47.24a89.54,89.54,0,0,1,27.35-8.39A90,90,0,0,1,167.34,122H131.46ZM217.8,122H179.34A102.12,102.12,0,0,0,138.5,38.62,90.15,90.15,0,0,1,217.8,122ZM77.92,53.26,97.13,86.53a102.16,102.16,0,0,0-51.79,77.06A89.93,89.93,0,0,1,77.92,53.26ZM57,183.19a90,90,0,0,1,46.17-86.26L121.07,128,77.92,202.74A90.59,90.59,0,0,1,57,183.19ZM128,218a89.5,89.5,0,0,1-39.7-9.24l19.22-33.29a102.13,102.13,0,0,0,92.58,6.34A89.91,89.91,0,0,1,128,218Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm81.74,136.58a88,88,0,0,1-93.49,3.78L132.62,136h83A87.16,87.16,0,0,1,209.74,160.58ZM91.12,48.11a87.57,87.57,0,0,1,24.22-7.2,88,88,0,0,1,50,79.09H132.62ZM215.63,120H181.37a104.18,104.18,0,0,0-35.78-78.23A88.18,88.18,0,0,1,215.63,120ZM77.27,56.13,94.39,85.78a104.14,104.14,0,0,0-49.86,70.09A87.95,87.95,0,0,1,77.27,56.13ZM58.9,182.43a88,88,0,0,1,43.49-82.79L118.76,128,77.27,199.87A88.62,88.62,0,0,1,58.9,182.43ZM128,216a87.5,87.5,0,0,1-36.88-8.11l17.13-29.67a104.23,104.23,0,0,0,85.53,8.17A87.81,87.81,0,0,1,128,216Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216.25,165.8A96,96,0,0,1,80,211.15h0a95.75,95.75,0,0,1-28.86-25.58h0A96,96,0,0,1,105.47,89L80,44.86a95.55,95.55,0,0,1,36.58-12.2h0A96,96,0,0,1,173.06,128H128l-22.53,39a96,96,0,0,0,110.78-1.22Z\"/>";

export const Volleyball = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: VolleyballProps) => {
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
