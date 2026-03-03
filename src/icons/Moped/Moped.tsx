import { SVGProps } from "react";

export type MopedVariant = "duotone" | "fill" | "light";

export interface MopedProps extends SVGProps<SVGSVGElement> {
  variant?: MopedVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216,128a39.3,39.3,0,0,0-6.27.5L175.49,37.19A8,8,0,0,0,168,32H136a8,8,0,0,0,0,16h26.46l32.3,86.13a40.13,40.13,0,0,0-18,25.87H136.54l-25-66.81A8,8,0,0,0,104,88H24a8,8,0,0,0,0,16h8v13.39A56.12,56.12,0,0,0,0,168a8,8,0,0,0,8,8h8.8a40,40,0,0,0,78.4,0h81.6A40,40,0,1,0,216,128ZM56,192a24,24,0,0,1-22.62-16H78.62A24,24,0,0,1,56,192Zm160,0a24,24,0,0,1-15.43-42.36l7.94,21.17a8,8,0,0,0,15-5.62L215.55,144H216a24,24,0,0,1,0,48Z\"/>";
const LIGHT_INNER     = "<path d=\"M216,130a37.72,37.72,0,0,0-7.56.76L173.62,37.89A6,6,0,0,0,168,34H136a6,6,0,0,0,0,12h27.84l33.37,89a38.08,38.08,0,0,0-18.73,27H135.16L109.62,93.89A6,6,0,0,0,104,90H24a6,6,0,0,0,0,12H34v16.67A54.12,54.12,0,0,0,2,168a6,6,0,0,0,6,6H18.48a38,38,0,0,0,75,0h85A38,38,0,1,0,216,130ZM42,128.39a6,6,0,0,0,4-5.66V102H99.84l22.5,60H14.43A42.07,42.07,0,0,1,42,128.39ZM56,194a26,26,0,0,1-25.29-20H81.29A26,26,0,0,1,56,194Zm160,0a26,26,0,0,1-14.5-47.57l8.88,23.68a6,6,0,0,0,11.24-4.22l-8.88-23.68A26.91,26.91,0,0,1,216,142a26,26,0,0,1,0,52Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M216,128a39.3,39.3,0,0,0-6.27.5L175.49,37.19A8,8,0,0,0,168,32H136a8,8,0,0,0,0,16h26.46l32.3,86.13a40.13,40.13,0,0,0-18,25.87H136.54l-25-66.81A8,8,0,0,0,104,88H24a8,8,0,0,0,0,16h8v13.39A56.12,56.12,0,0,0,0,168a8,8,0,0,0,8,8h8.8a40,40,0,0,0,78.4,0h81.6A40,40,0,1,0,216,128ZM56,192a24,24,0,0,1-22.62-16H78.62A24,24,0,0,1,56,192ZM16.81,160a40.07,40.07,0,0,1,25.86-29.73A8,8,0,0,0,48,122.73V104H98.46l21,56ZM216,192a24,24,0,0,1-15.43-42.36l7.94,21.17a8,8,0,0,0,15-5.62L215.55,144H216a24,24,0,0,1,0,48Z\"/>";
const SECONDARY_PATHS = "<path d=\"M131,168H8a48,48,0,0,1,32-45.27V96h64Z\"/>";

export const Moped = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: MopedProps) => {
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
