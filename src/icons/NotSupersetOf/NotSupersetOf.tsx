import { SVGProps } from "react";

export type NotSupersetOfVariant = "duotone" | "fill" | "light";

export interface NotSupersetOfProps extends SVGProps<SVGSVGElement> {
  variant?: NotSupersetOfVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M164.09,98.9A24,24,0,0,1,144,136H131.63ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM189.27,58a8,8,0,0,0-11.29.75L162.42,76.51A39.82,39.82,0,0,0,144,72H80a8,8,0,0,0,0,16h64a23.87,23.87,0,0,1,7.36,1.16l-41,46.84H80a8,8,0,0,0,0,16H96.37L66,186.73a8,8,0,0,0,12,10.54L89.63,184H176a8,8,0,0,0,0-16H103.63l14-16H144a40,40,0,0,0,30.87-65.41L190,69.27A8,8,0,0,0,189.27,58Z\"/>";
const LIGHT_INNER     = "<path d=\"M208,194H76.11l25.45-28H152A62,62,0,0,0,196.81,61.22L212.44,44A6,6,0,1,0,203.56,36L187.73,53.38A61.61,61.61,0,0,0,152,42H56a6,6,0,0,0,0,12h96a49.67,49.67,0,0,1,27.59,8.33L96.25,154H56a6,6,0,0,0,0,12H85.35L43.56,212A6,6,0,0,0,52.44,220L65.2,206H208a6,6,0,0,0,0-12ZM188.73,70.12A50,50,0,0,1,152,154H112.47Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M208,192H80.63l21.82-24H152A64,64,0,0,0,199.54,61.2l14.38-15.82a8,8,0,0,0-11.84-10.76L187.43,50.73A63.66,63.66,0,0,0,152,40H56a8,8,0,0,0,0,16h96a47.72,47.72,0,0,1,24.51,6.75L95.37,152H56a8,8,0,0,0,0,16H80.82L42.08,210.62a8,8,0,1,0,11.84,10.76L66.08,208H208a8,8,0,0,0,0-16ZM188.71,73.12A48,48,0,0,1,152,152H117Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,104a56,56,0,0,1-56,56H56V48h96A56,56,0,0,1,208,104Z\"/>";

export const NotSupersetOf = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: NotSupersetOfProps) => {
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
