import { SVGProps } from "react";

export type ArrowSquareInVariant = "duotone" | "fill" | "light";

export interface ArrowSquareInProps extends SVGProps<SVGSVGElement> {
  variant?: ArrowSquareInVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M128,136v64a8,8,0,0,1-13.66,5.66L88,179.31,45.66,221.66a8,8,0,0,1-11.32-11.32L76.69,168,50.34,141.66A8,8,0,0,1,56,128h64A8,8,0,0,1,128,136ZM208,32H80A16,16,0,0,0,64,48V96a8,8,0,0,0,16,0V48H208V176H160a8,8,0,0,0,0,16h48a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z\"/>";
const LIGHT_INNER     = "<path d=\"M126,136v64a6,6,0,0,1-12,0V150.49L44.24,220.24a6,6,0,0,1-8.48-8.48L105.51,142H56a6,6,0,0,1,0-12h64A6,6,0,0,1,126,136ZM208,34H80A14,14,0,0,0,66,48V96a6,6,0,0,0,12,0V48a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2V176a2,2,0,0,1-2,2H160a6,6,0,0,0,0,12h48a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M128,136v64a8,8,0,0,1-16,0V155.32L45.66,221.66a8,8,0,0,1-11.32-11.32L100.68,144H56a8,8,0,0,1,0-16h64A8,8,0,0,1,128,136ZM208,32H80A16,16,0,0,0,64,48V96a8,8,0,0,0,16,0V48H208V176H160a8,8,0,0,0,0,16h48a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,48V176a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z\"/>";

export const ArrowSquareIn = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ArrowSquareInProps) => {
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
