import { SVGProps } from "react";

export type ArrowLineRightVariant = "duotone" | "fill" | "light";

export interface ArrowLineRightProps extends SVGProps<SVGSVGElement> {
  variant?: ArrowLineRightVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M224,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0ZM117.66,50.34A8,8,0,0,0,104,56v64H32a8,8,0,0,0,0,16h72v64a8,8,0,0,0,13.66,5.66l72-72a8,8,0,0,0,0-11.32Z\"/>";
const LIGHT_INNER     = "<path d=\"M188.24,123.76a6,6,0,0,1,0,8.48l-72,72a6,6,0,0,1-8.48-8.48L169.51,134H32a6,6,0,0,1,0-12H169.51L107.76,60.24a6,6,0,0,1,8.48-8.48ZM216,34a6,6,0,0,0-6,6V216a6,6,0,0,0,12,0V40A6,6,0,0,0,216,34Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M117.66,50.34A8,8,0,0,0,104,56v64H32a8,8,0,0,0,0,16h72v64a8,8,0,0,0,13.66,5.66l72-72a8,8,0,0,0,0-11.32ZM120,180.69V75.31L172.69,128ZM224,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0Z\"/>";
const SECONDARY_PATHS = "<path d=\"M184,128l-72,72V56Z\"/>";

export const ArrowLineRight = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ArrowLineRightProps) => {
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
