import { SVGProps } from "react";

export type ShapesVariant = "duotone" | "fill" | "light";

export interface ShapesProps extends SVGProps<SVGSVGElement> {
  variant?: ShapesVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M111.59,181.47A8,8,0,0,1,104,192H24a8,8,0,0,1-7.59-10.53l40-120a8,8,0,0,1,15.18,0ZM208,76a52,52,0,1,0-52,52A52.06,52.06,0,0,0,208,76Zm16,68H136a8,8,0,0,0-8,8v56a8,8,0,0,0,8,8h88a8,8,0,0,0,8-8V152A8,8,0,0,0,224,144Z\"/>";
const LIGHT_INNER     = "<path d=\"M69.69,62.1a6,6,0,0,0-11.38,0l-40,120A6,6,0,0,0,24,190h80a6,6,0,0,0,5.69-7.9ZM32.32,178,64,83l31.68,95ZM206,76a50,50,0,1,0-50,50A50.06,50.06,0,0,0,206,76Zm-88,0a38,38,0,1,1,38,38A38,38,0,0,1,118,76Zm106,70H136a6,6,0,0,0-6,6v56a6,6,0,0,0,6,6h88a6,6,0,0,0,6-6V152A6,6,0,0,0,224,146Zm-6,56H142V158h76Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M224,144H136a8,8,0,0,0-8,8v56a8,8,0,0,0,8,8h88a8,8,0,0,0,8-8V152A8,8,0,0,0,224,144Zm-8,56H144V160h72ZM71.59,61.47a8,8,0,0,0-15.18,0l-40,120A8,8,0,0,0,24,192h80a8,8,0,0,0,7.59-10.53ZM35.1,176,64,89.3,92.9,176ZM208,76a52,52,0,1,0-52,52A52.06,52.06,0,0,0,208,76Zm-88,0a36,36,0,1,1,36,36A36,36,0,0,1,120,76Z\"/>";
const SECONDARY_PATHS = "<path d=\"M64,64l40,120H24ZM200,76a44,44,0,1,0-44,44A44,44,0,0,0,200,76Zm-64,76v56h88V152Z\"/>";

export const Shapes = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ShapesProps) => {
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
