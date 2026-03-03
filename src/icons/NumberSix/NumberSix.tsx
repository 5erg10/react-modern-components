import { SVGProps } from "react";

export type NumberSixVariant = "duotone" | "fill" | "light";

export interface NumberSixProps extends SVGProps<SVGSVGElement> {
  variant?: NumberSixVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM128,192a44,44,0,0,1-38.3-65.62L123.38,68a8,8,0,0,1,13.86,8l-16.52,28.61A44.79,44.79,0,0,1,128,104a44,44,0,0,1,0,88Zm28-44a28,28,0,1,1-28-28A28,28,0,0,1,156,148Z\"/>";
const LIGHT_INNER     = "<path d=\"M128,106a53.74,53.74,0,0,0-19.94,3.83L141.23,51a6,6,0,1,0-10.46-5.89l-49.54,88A54,54,0,1,0,128,106Zm0,96a42,42,0,1,1,42-42A42,42,0,0,1,128,202Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M128,104a56,56,0,0,0-15.62,2.23L143,51.93A8,8,0,1,0,129,44.08l-49.55,88A56,56,0,1,0,128,104Zm0,96a40,40,0,1,1,40-40A40,40,0,0,1,128,200Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40Z\"/>";

export const NumberSix = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: NumberSixProps) => {
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
