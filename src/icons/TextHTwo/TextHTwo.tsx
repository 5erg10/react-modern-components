import { SVGProps } from "react";

export type TextHTwoVariant = "duotone" | "fill" | "light";

export interface TextHTwoProps extends SVGProps<SVGSVGElement> {
  variant?: TextHTwoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM128,160a8,8,0,0,1-16,0V128H72v32a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0v32h40V80a8,8,0,0,1,16,0Zm64,24H152a8,8,0,0,1-6.4-12.8l36-48a12,12,0,1,0-19.15-14.46,13.06,13.06,0,0,0-2.58,4.81,8,8,0,1,1-15.68-3.18,28.17,28.17,0,1,1,50.2,22.44L168,168h24a8,8,0,0,1,0,16Z\"/>";
const LIGHT_INNER     = "<path d=\"M150,56V176a6,6,0,0,1-12,0V122H46v54a6,6,0,0,1-12,0V56a6,6,0,0,1,12,0v54h92V56a6,6,0,0,1,12,0Zm90,146H204L240,154.05A30,30,0,1,0,187.71,126,6,6,0,1,0,199,130a18,18,0,0,1,14.47-11.82,18,18,0,0,1,16.87,28.66L187.2,204.4A6,6,0,0,0,192,214h48a6,6,0,0,0,0-12Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M248,208a8,8,0,0,1-8,8H192a8,8,0,0,1-6.4-12.8l43.16-57.56a16,16,0,1,0-25.54-19.27,16.28,16.28,0,0,0-2.32,4.3,8,8,0,1,1-15.08-5.34,32,32,0,1,1,55.73,29.93L208,200h32A8,8,0,0,1,248,208ZM144,48a8,8,0,0,0-8,8v52H48V56a8,8,0,0,0-16,0V176a8,8,0,0,0,16,0V124h88v52a8,8,0,0,0,16,0V56A8,8,0,0,0,144,48Z\"/>";
const SECONDARY_PATHS = "<path d=\"M240,72V208H56a16,16,0,0,1-16-16V56H224A16,16,0,0,1,240,72Z\"/>";

export const TextHTwo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: TextHTwoProps) => {
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
