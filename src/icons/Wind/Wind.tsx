import { SVGProps } from "react";

export type WindVariant = "duotone" | "fill" | "light";

export interface WindProps extends SVGProps<SVGSVGElement> {
  variant?: WindVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M120,104H24a8,8,0,0,1-8-8.53A8.17,8.17,0,0,1,24.27,88H112a8,8,0,0,0,8-8.53A8.17,8.17,0,0,0,111.73,72H92.29a4,4,0,0,1-4-4.58A32,32,0,1,1,120,104Zm119.92-2.29a32,32,0,0,0-63.59-2.29,4,4,0,0,0,4,4.58h19.44a8.17,8.17,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53H32.27A8.17,8.17,0,0,0,24,127.47,8,8,0,0,0,32,136H208A32,32,0,0,0,239.92,101.71ZM152,152H40.27A8.17,8.17,0,0,0,32,159.47,8,8,0,0,0,40,168H143.73a8.17,8.17,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53H124.29a4,4,0,0,0-4,4.58A32,32,0,1,0,152,152Z\"/>";
const LIGHT_INNER     = "<path d=\"M182,184a30,30,0,0,1-30,30c-12.9,0-25.36-8.38-29.63-19.92a6,6,0,0,1,11.26-4.16C136.13,196.69,144.2,202,152,202a18,18,0,0,0,0-36H40a6,6,0,0,1,0-12H152A30,30,0,0,1,182,184ZM150,72a30,30,0,0,0-30-30c-12.9,0-25.36,8.38-29.63,19.92a6,6,0,1,0,11.26,4.16C104.13,59.31,112.2,54,120,54a18,18,0,0,1,0,36H24a6,6,0,0,0,0,12h96A30,30,0,0,0,150,72Zm58,2c-12.9,0-25.36,8.38-29.63,19.92a6,6,0,1,0,11.26,4.16C192.13,91.31,200.2,86,208,86a18,18,0,0,1,0,36H32a6,6,0,0,0,0,12H208a30,30,0,0,0,0-60Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M184,184a32,32,0,0,1-32,32c-13.7,0-26.95-8.93-31.5-21.22a8,8,0,0,1,15-5.56C137.74,195.27,145,200,152,200a16,16,0,0,0,0-32H40a8,8,0,0,1,0-16H152A32,32,0,0,1,184,184Zm-64-80a32,32,0,0,0,0-64c-13.7,0-26.95,8.93-31.5,21.22a8,8,0,0,0,15,5.56C105.74,60.73,113,56,120,56a16,16,0,0,1,0,32H24a8,8,0,0,0,0,16Zm88-32c-13.7,0-26.95,8.93-31.5,21.22a8,8,0,0,0,15,5.56C193.74,92.73,201,88,208,88a16,16,0,0,1,0,32H32a8,8,0,0,0,0,16H208a32,32,0,0,0,0-64Z\"/>";
const SECONDARY_PATHS = "<path d=\"M120,96a24,24,0,1,1,24-24A24,24,0,0,1,120,96Zm88-16a24,24,0,1,0,24,24A24,24,0,0,0,208,80Zm-56,80a24,24,0,1,0,24,24A24,24,0,0,0,152,160Z\"/>";

export const Wind = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: WindProps) => {
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
