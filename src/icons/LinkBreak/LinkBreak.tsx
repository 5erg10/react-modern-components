import { SVGProps } from "react";

export type LinkBreakVariant = "duotone" | "fill" | "light";

export interface LinkBreakProps extends SVGProps<SVGSVGElement> {
  variant?: LinkBreakVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM96,64a8,8,0,0,1,16,0V80a8,8,0,0,1-16,0ZM64,96H80a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm64.08,85.66-7.21,7.21a38,38,0,1,1-53.74-53.74l7.21-7.21a8,8,0,1,1,11.32,11.31l-7.22,7.21a22,22,0,0,0,31.12,31.12l7.21-7.22a8,8,0,1,1,11.31,11.32ZM160,192a8,8,0,0,1-16,0V176a8,8,0,0,1,16,0Zm32-32H176a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm-3.13-39.13-7.21,7.21a8,8,0,1,1-11.32-11.31l7.22-7.21a22,22,0,0,0-31.12-31.12l-7.21,7.22a8,8,0,1,1-11.31-11.32l7.21-7.21a38,38,0,1,1,53.74,53.74Z\"/>";
const LIGHT_INNER     = "<path d=\"M200,56a34,34,0,0,0-48-.05L140.34,68.14a6,6,0,1,1-8.68-8.28l11.71-12.28.1-.11a46,46,0,0,1,65.06,65.06l-.11.1-12.28,11.71a6,6,0,1,1-8.28-8.68L200.09,104A34,34,0,0,0,200,56Zm-84.38,131.9L104,200.09A34,34,0,0,1,55.91,152l12.23-11.67a6,6,0,0,0-8.28-8.68L47.58,143.37l-.11.1a46,46,0,0,0,65.06,65.06l.1-.11,11.71-12.28a6,6,0,1,0-8.68-8.28ZM216,154H192a6,6,0,0,0,0,12h24a6,6,0,0,0,0-12ZM40,102H64a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12Zm120,84a6,6,0,0,0-6,6v24a6,6,0,0,0,12,0V192A6,6,0,0,0,160,186ZM96,70a6,6,0,0,0,6-6V40a6,6,0,0,0-12,0V64A6,6,0,0,0,96,70Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M198.63,57.37a32,32,0,0,0-45.19-.06L141.79,69.52a8,8,0,0,1-11.58-11l11.72-12.29a1.59,1.59,0,0,1,.13-.13,48,48,0,0,1,67.88,67.88,1.59,1.59,0,0,1-.13.13l-12.29,11.72a8,8,0,0,1-11-11.58l12.21-11.65A32,32,0,0,0,198.63,57.37ZM114.21,186.48l-11.65,12.21a32,32,0,0,1-45.25-45.25l12.21-11.65a8,8,0,0,0-11-11.58L46.19,141.93a1.59,1.59,0,0,0-.13.13,48,48,0,0,0,67.88,67.88,1.59,1.59,0,0,0,.13-.13l11.72-12.29a8,8,0,1,0-11.58-11ZM216,152H192a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16ZM40,104H64a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm120,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V192A8,8,0,0,0,160,184ZM96,72a8,8,0,0,0,8-8V40a8,8,0,0,0-16,0V64A8,8,0,0,0,96,72Z\"/>";
const SECONDARY_PATHS = "<path d=\"M204.28,108.28l-96,96a40,40,0,0,1-56.56-56.56l96-96a40,40,0,0,1,56.56,56.56Z\"/>";

export const LinkBreak = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: LinkBreakProps) => {
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
