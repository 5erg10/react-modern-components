import { SVGProps } from "react";

export type ChefHatVariant = "duotone" | "fill" | "light";

export interface ChefHatProps extends SVGProps<SVGSVGElement> {
  variant?: ChefHatVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M240,112a56.06,56.06,0,0,0-56-56c-1.77,0-3.54.1-5.29.26a56,56,0,0,0-101.42,0C75.54,56.1,73.77,56,72,56A56,56,0,0,0,48,162.59V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V162.59A56.09,56.09,0,0,0,240,112Zm-87.76,30.06,8-32a8,8,0,0,1,15.52,3.88l-8,32A8,8,0,0,1,160,152a8.13,8.13,0,0,1-1.95-.24A8,8,0,0,1,152.24,142.06ZM120,112a8,8,0,0,1,16,0v32a8,8,0,0,1-16,0Zm-33.94-7.76a8,8,0,0,1,9.7,5.82l8,32a8,8,0,0,1-5.82,9.7,8.13,8.13,0,0,1-2,.24,8,8,0,0,1-7.75-6.06l-8-32A8,8,0,0,1,86.06,104.24ZM192,208H64V167.42a55.49,55.49,0,0,0,8,.58H184a55.49,55.49,0,0,0,8-.58Z\"/>";
const LIGHT_INNER     = "<path d=\"M238,112a54.06,54.06,0,0,0-54-54,54.6,54.6,0,0,0-6.52.4,54,54,0,0,0-99,0A54.6,54.6,0,0,0,72,58,54,54,0,0,0,50,161.3V208a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V161.3A54.07,54.07,0,0,0,238,112Zm-44,96a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V165.06A54,54,0,0,0,72,166H184a54,54,0,0,0,10-.94Zm-10-54H167.69l6.13-24.54a6,6,0,1,0-11.64-2.92L155.31,154H134V128a6,6,0,0,0-12,0v26H100.69l-6.87-27.46a6,6,0,0,0-11.64,2.92L88.31,154H72a42,42,0,0,1,0-84c1,0,2,0,2.92.11A54.63,54.63,0,0,0,74,80a6,6,0,0,0,12,0,42,42,0,0,1,84,0,6,6,0,0,0,12,0,54.63,54.63,0,0,0-.92-9.89c1-.06,1.94-.11,2.92-.11a42,42,0,0,1,0,84Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M240,112a56.06,56.06,0,0,0-56-56c-1.77,0-3.54.1-5.29.26a56,56,0,0,0-101.42,0C75.54,56.1,73.77,56,72,56A56,56,0,0,0,48,162.59V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V162.59A56.09,56.09,0,0,0,240,112Zm-48,96H64V167.42a55.49,55.49,0,0,0,8,.58H184a55.49,55.49,0,0,0,8-.58Zm-8-56H170.25l5.51-22.06a8,8,0,0,0-15.52-3.88L153.75,152H136V128a8,8,0,0,0-16,0v24H102.25l-6.49-25.94a8,8,0,1,0-15.52,3.88L85.75,152H72a40,40,0,0,1,0-80l.58,0A55.21,55.21,0,0,0,72,80a8,8,0,0,0,16,0,40,40,0,0,1,80,0,8,8,0,0,0,16,0,55.21,55.21,0,0,0-.58-8l.58,0a40,40,0,0,1,0,80Z\"/>";
const SECONDARY_PATHS = "<path d=\"M232,112a48,48,0,0,1-48,48H72A48,48,0,1,1,82.35,65.12h0a48,48,0,0,1,91.28,0h0A48,48,0,0,1,232,112Z\"/>";

export const ChefHat = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ChefHatProps) => {
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
