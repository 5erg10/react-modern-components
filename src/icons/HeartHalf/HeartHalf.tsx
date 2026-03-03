import { SVGProps } from "react";

export type HeartHalfVariant = "duotone" | "fill" | "light";

export interface HeartHalfProps extends SVGProps<SVGSVGElement> {
  variant?: HeartHalfVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.67,108.21,129a8,8,0,0,0,7.58,0C136.21,228.67,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8V104a48,48,0,0,1,41.61-47.56A83.85,83.85,0,0,1,178,56a46.06,46.06,0,0,1,46,46C224,155.61,146.25,204.15,128,214.8Z\"/>";
const LIGHT_INNER     = "<path d=\"M169.1,54.82A6,6,0,1,0,166.9,43C150.3,46.13,136.65,54.82,128,67.4,117.3,51.5,99,42,78,42a60.07,60.07,0,0,0-60,60c0,29.2,18.2,59.59,54.1,90.31a334.68,334.68,0,0,0,53.06,37,5.93,5.93,0,0,0,5.68,0h0a329.42,329.42,0,0,0,40.82-27,6,6,0,0,0-7.32-9.51A341.88,341.88,0,0,1,134,213.56V81.28C140,67.5,152.76,57.88,169.1,54.82ZM122,213.54C97.4,198.51,30,152.7,30,102A48.05,48.05,0,0,1,78,54c19.87,0,36.62,10.4,44,27.22ZM232.33,102a5,5,0,0,1-.67,0,6,6,0,0,1-5.95-5.34,47.89,47.89,0,0,0-21.05-34.58,6,6,0,1,1,6.68-10,59.85,59.85,0,0,1,26.29,43.23A6,6,0,0,1,232.33,102Zm-3.66,36.72c-5.58,11.2-13.75,22.65-24.26,34a6,6,0,0,1-8.82-8.15c9.75-10.54,17.27-21.05,22.35-31.24a6,6,0,1,1,10.73,5.36Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.67,108.21,129a8,8,0,0,0,7.58,0C136.21,228.67,240,172,240,102A62.07,62.07,0,0,0,178,40ZM32,102A46.06,46.06,0,0,1,78,56c18.91,0,34.86,9.79,42,25.65V210C93.59,193.44,32,149.78,32,102ZM136,210V81.65C143.14,65.79,159.09,56,178,56a46.06,46.06,0,0,1,46,46C224,149.71,162.42,193.41,136,210Z\"/>";
const SECONDARY_PATHS = "<path d=\"M128,80V224S24,168,24,102A54,54,0,0,1,78,48C100.59,48,119.94,60.31,128,80Z\"/>";

export const HeartHalf = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: HeartHalfProps) => {
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
