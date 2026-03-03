import { SVGProps } from "react";

export type BeerSteinVariant = "duotone" | "fill" | "light";

export interface BeerSteinProps extends SVGProps<SVGSVGElement> {
  variant?: BeerSteinVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216,88H200V72a40,40,0,0,0-40-40H148.82c-11.91-10.2-28-16-44.82-16C68.71,16,40,41.12,40,72V208a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16v-8h16a24,24,0,0,0,24-24V112A24,24,0,0,0,216,88ZM104,184a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0ZM57,64c4.46-18.24,23.85-32,47-32,13.87,0,27.06,5,36.21,13.78A8,8,0,0,0,145.74,48H160a24,24,0,0,1,22.62,16ZM224,176a8,8,0,0,1-8,8H200V104h16a8,8,0,0,1,8,8Z\"/>";
const LIGHT_INNER     = "<path d=\"M216,90H198V72a38,38,0,0,0-38-38H148.07C136.47,23.8,120.56,18,104,18,69.81,18,42,42.22,42,72V208a14,14,0,0,0,14,14H184a14,14,0,0,0,14-14V198h18a22,22,0,0,0,22-22V112A22,22,0,0,0,216,90ZM104,30c14.38,0,28.08,5.22,37.59,14.33A6,6,0,0,0,145.74,46H160a26,26,0,0,1,25.29,20H54.52C58,45.67,78.86,30,104,30Zm82,178a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V78H186Zm40-32a10,10,0,0,1-10,10H198V102h18a10,10,0,0,1,10,10ZM102,104v80a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Zm48,0v80a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M104,104v80a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm40-8a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V104A8,8,0,0,0,144,96Zm96,16v64a24,24,0,0,1-24,24H200v8a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V72c0-30.88,28.71-56,64-56,16.77,0,32.91,5.8,44.82,16H160a40,40,0,0,1,40,40V88h16A24,24,0,0,1,240,112ZM57,64H182.62A24,24,0,0,0,160,48H145.74a8,8,0,0,1-5.53-2.22C131.06,37,117.87,32,104,32,80.82,32,61.43,45.76,57,64ZM184,208V192.17c0-.06,0-.11,0-.17s0-.11,0-.17V80H56V208H184Zm40-96a8,8,0,0,0-8-8H200v80h16a8,8,0,0,0,8-8Z\"/>";
const SECONDARY_PATHS = "<path d=\"M192,72V208a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V72Z\"/>";

export const BeerStein = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BeerSteinProps) => {
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
