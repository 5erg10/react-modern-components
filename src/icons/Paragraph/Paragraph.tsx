import { SVGProps } from "react";

export type ParagraphVariant = "duotone" | "fill" | "light";

export interface ParagraphProps extends SVGProps<SVGSVGElement> {
  variant?: ParagraphVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216,48a8,8,0,0,1-8,8H192V208a8,8,0,0,1-16,0V56H152V208a8,8,0,0,1-16,0V168H96A64,64,0,0,1,96,40H208A8,8,0,0,1,216,48Z\"/>";
const LIGHT_INNER     = "<path d=\"M208,42H96a62,62,0,0,0,0,124h42v42a6,6,0,0,0,12,0V54h28V208a6,6,0,0,0,12,0V54h18a6,6,0,0,0,0-12ZM138,154H96A50,50,0,0,1,96,54h42Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M208,40H96a64,64,0,0,0,0,128h40v40a8,8,0,0,0,16,0V56h24V208a8,8,0,0,0,16,0V56h16a8,8,0,0,0,0-16ZM136,152H96a48,48,0,0,1,0-96h40Z\"/>";
const SECONDARY_PATHS = "<path d=\"M144,48V160H96A56,56,0,0,1,96,48Z\"/>";

export const Paragraph = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ParagraphProps) => {
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
