import { SVGProps } from "react";

export type NumberFiveVariant = "duotone" | "fill" | "light";

export interface NumberFiveProps extends SVGProps<SVGSVGElement> {
  variant?: NumberFiveVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24Zm-76,80a44,44,0,1,1-34.22,71.66,8,8,0,0,1,12.44-10.06,28,28,0,1,0,.35-35.62,8,8,0,0,1-14-6.29l7.55-52.82A8,8,0,0,1,104,64h56a8,8,0,0,1,0,16H110.94L107,107.4A44,44,0,0,1,124,104Z\"/>";
const LIGHT_INNER     = "<path d=\"M174,160a54,54,0,0,1-90,40.25,6,6,0,1,1,8-8.94A42,42,0,1,0,92.8,128,6,6,0,0,1,83,122.25L98.12,46.82A6,6,0,0,1,104,42h64a6,6,0,0,1,0,12H108.92L97.54,110.89A54,54,0,0,1,174,160Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M176,160a56,56,0,0,1-93.33,41.74,8,8,0,1,1,10.66-11.92,40,40,0,1,0,.77-60.3,8,8,0,0,1-13-7.66L96.16,46.43A8,8,0,0,1,104,40h64a8,8,0,0,1,0,16H110.56l-10.32,51.6A56,56,0,0,1,176,160Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40Z\"/>";

export const NumberFive = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: NumberFiveProps) => {
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
