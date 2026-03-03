import { SVGProps } from "react";

export type NumberThreeVariant = "duotone" | "fill" | "light";

export interface NumberThreeProps extends SVGProps<SVGSVGElement> {
  variant?: NumberThreeVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM124,192a43.85,43.85,0,0,1-34.22-16.34,8,8,0,0,1,12.44-10.06A28,28,0,1,0,126,120.07a8,8,0,0,1-5.58-13.1l22.48-27H96a8,8,0,0,1,0-16h64a8,8,0,0,1,6.15,13.12l-25.23,30.27A44,44,0,0,1,124,192Z\"/>";
const LIGHT_INNER     = "<path d=\"M174,160a54,54,0,0,1-90,40.25,6,6,0,1,1,8-8.94A42,42,0,1,0,120,118a6,6,0,0,1-4.8-9.6L156,54H88a6,6,0,0,1,0-12h80a6,6,0,0,1,4.8,9.6l-41.67,55.55A54.1,54.1,0,0,1,174,160Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M176,160a56,56,0,0,1-93.33,41.74,8,8,0,1,1,10.66-11.92A40,40,0,1,0,120,120a8,8,0,0,1-6.4-12.8L152,56H88a8,8,0,0,1,0-16h80a8,8,0,0,1,6.4,12.8l-39.84,53.12A56.1,56.1,0,0,1,176,160Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40Z\"/>";

export const NumberThree = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: NumberThreeProps) => {
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
