import { SVGProps } from "react";

export type BicycleVariant = "duotone" | "fill" | "light";

export interface BicycleProps extends SVGProps<SVGSVGElement> {
  variant?: BicycleVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M54.46,164.71,82.33,126.5a48,48,0,1,1-12.92-9.44L41.54,155.29a8,8,0,1,0,12.92,9.42ZM208,112a47.81,47.81,0,0,0-16.93,3.09L214.91,156A8,8,0,1,1,201.09,164l-23.83-40.86A48,48,0,1,0,208,112ZM165.93,72H192a8,8,0,0,1,8,8,8,8,0,0,0,16,0,24,24,0,0,0-24-24H152a8,8,0,0,0-6.91,12l11.65,20H99.26L82.91,60A8,8,0,0,0,76,56H48a8,8,0,0,0,0,16H71.41L85.12,95.51,69.41,117.06a47.87,47.87,0,0,1,12.92,9.44l11.59-15.9L125.09,164A8,8,0,1,0,138.91,156l-30.32-52h57.48l11.19,19.17a48.11,48.11,0,0,1,13.81-8.08Z\"/>";
const LIGHT_INNER     = "<path d=\"M208,114a45.88,45.88,0,0,0-17.8,3.58L162.45,70H192a10,10,0,0,1,10,10,6,6,0,0,0,12,0,22,22,0,0,0-22-22H152a6,6,0,0,0-5.18,9l13.4,23H98.11L81.18,61A6,6,0,0,0,76,58H48a6,6,0,0,0,0,12H72.55l15,25.64L70,119.62a46.22,46.22,0,1,0,9.68,7.09L94.11,107,126.82,163a6,6,0,0,0,5.19,3,5.91,5.91,0,0,0,3-.82,6,6,0,0,0,2.16-8.2l-32.07-55h62.11l12.63,21.66A46,46,0,1,0,208,114ZM82,160a34,34,0,1,1-19.13-30.57l-19.72,27a6,6,0,0,0,9.7,7.08l19.7-27A33.88,33.88,0,0,1,82,160Zm126,34a34,34,0,0,1-22-59.86L202.82,163a6,6,0,0,0,5.19,3,5.91,5.91,0,0,0,3-.82,6,6,0,0,0,2.16-8.2l-16.86-28.91A34,34,0,1,1,208,194Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M208,112a47.81,47.81,0,0,0-16.93,3.09L165.93,72H192a8,8,0,0,1,8,8,8,8,0,0,0,16,0,24,24,0,0,0-24-24H152a8,8,0,0,0-6.91,12l11.65,20H99.26L82.91,60A8,8,0,0,0,76,56H48a8,8,0,0,0,0,16H71.41L85.12,95.51,69.41,117.06a48.13,48.13,0,1,0,12.92,9.44l11.59-15.9L125.09,164A8,8,0,1,0,138.91,156l-30.32-52h57.48l11.19,19.17A48,48,0,1,0,208,112ZM80,160a32,32,0,1,1-20.21-29.74l-18.25,25a8,8,0,1,0,12.92,9.42l18.25-25A31.88,31.88,0,0,1,80,160Zm128,32a32,32,0,0,1-22.51-54.72L201.09,164A8,8,0,1,0,214.91,156L199.3,129.21A32,32,0,1,1,208,192Z\"/>";
const SECONDARY_PATHS = "<path d=\"M248,160a40,40,0,1,1-40-40A40,40,0,0,1,248,160ZM48,120a40,40,0,1,0,40,40A40,40,0,0,0,48,120Z\"/>";

export const Bicycle = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BicycleProps) => {
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
