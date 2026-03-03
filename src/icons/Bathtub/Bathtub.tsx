import { SVGProps } from "react";

export type BathtubVariant = "duotone" | "fill" | "light";

export interface BathtubProps extends SVGProps<SVGSVGElement> {
  variant?: BathtubVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M240,96H216a8,8,0,0,0-8-8H136a8,8,0,0,0-8,8H64V52A12,12,0,0,1,76,40a12.44,12.44,0,0,1,12.16,9.59,8,8,0,0,0,15.68-3.18A28.32,28.32,0,0,0,76,24,28,28,0,0,0,48,52V96H16a8,8,0,0,0-8,8v40a56.06,56.06,0,0,0,56,56v16a8,8,0,0,0,16,0V200h96v16a8,8,0,0,0,16,0V200a56.06,56.06,0,0,0,56-56V104A8,8,0,0,0,240,96Zm-40,8v40H144V104Z\"/>";
const LIGHT_INNER     = "<path d=\"M240,98H206V96a6,6,0,0,0-6-6H136a6,6,0,0,0-6,6v2H62V52A14,14,0,0,1,76,38,14.47,14.47,0,0,1,90.12,49.19a6,6,0,1,0,11.76-2.38A26.32,26.32,0,0,0,76,26,26,26,0,0,0,50,52V98H16a6,6,0,0,0-6,6v40a54.06,54.06,0,0,0,54,54h2v18a6,6,0,0,0,12,0V198H178v18a6,6,0,0,0,12,0V198h2a54.06,54.06,0,0,0,54-54V104A6,6,0,0,0,240,98Zm-98,4h52v36H142Zm92,42a42,42,0,0,1-42,42H64a42,42,0,0,1-42-42V110H130v34a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V110h28Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M240,96H208a8,8,0,0,0-8-8H136a8,8,0,0,0-8,8H64V52A12,12,0,0,1,76,40a12.44,12.44,0,0,1,12.16,9.59,8,8,0,0,0,15.68-3.18A28.32,28.32,0,0,0,76,24,28,28,0,0,0,48,52V96H16a8,8,0,0,0-8,8v40a56.06,56.06,0,0,0,56,56v16a8,8,0,0,0,16,0V200h96v16a8,8,0,0,0,16,0V200a56.06,56.06,0,0,0,56-56V104A8,8,0,0,0,240,96Zm-48,8v32H144V104Zm40,40a40,40,0,0,1-40,40H64a40,40,0,0,1-40-40V112H128v32a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V112h24Z\"/>";
const SECONDARY_PATHS = "<path d=\"M240,104v40a48,48,0,0,1-48,48H64a48,48,0,0,1-48-48V104H136v40h64V104Z\"/>";

export const Bathtub = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BathtubProps) => {
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
