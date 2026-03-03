import { SVGProps } from "react";

export type SecurityCameraVariant = "duotone" | "fill" | "light";

export interface SecurityCameraProps extends SVGProps<SVGSVGElement> {
  variant?: SecurityCameraVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M248,136a8,8,0,0,0-8,8v16H195.31L177,141.66l50.34-50.35a16,16,0,0,0,0-22.62L189.66,31h0L171.31,12.69a16,16,0,0,0-22.63,0L2.92,158.94A10,10,0,0,0,10,176H49.37l35.32,35.31a16,16,0,0,0,22.62,0L165.66,153,184,171.31A15.86,15.86,0,0,0,195.31,176H240v16a8,8,0,0,0,16,0V144A8,8,0,0,0,248,136ZM160,24l12.69,12.69L49.37,160H24.46Z\"/>";
const LIGHT_INNER     = "<path d=\"M248,138a6,6,0,0,0-6,6v18H195.31a2,2,0,0,1-1.41-.59l-19.76-19.75L225.9,89.9a14,14,0,0,0,0-19.8l-56-56a14,14,0,0,0-19.81,0L4.34,160.35A8,8,0,0,0,10,174H50.2l35.9,35.9a14,14,0,0,0,19.8,0l59.76-59.76,19.75,19.76a13.94,13.94,0,0,0,9.9,4.1H242v18a6,6,0,0,0,12,0V144A6,6,0,0,0,248,138ZM158.59,22.59a2,2,0,0,1,2.82,0l14.1,14.1L50.2,162H19.64ZM97.41,201.41a2,2,0,0,1-2.82,0L61.17,168,184,45.17l33.41,33.42a2,2,0,0,1,0,2.82Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M248,136a8,8,0,0,0-8,8v16H195.31L177,141.66l50.34-50.35a16,16,0,0,0,0-22.62l-56-56a16,16,0,0,0-22.63,0L2.92,158.94A10,10,0,0,0,10,176H49.37l35.32,35.31a16,16,0,0,0,22.62,0L165.66,153,184,171.31A15.86,15.86,0,0,0,195.31,176H240v16a8,8,0,0,0,16,0V144A8,8,0,0,0,248,136ZM160,24l12.69,12.69L49.37,160H24.46ZM96,200,64,168,184,48l32,32Z\"/>";
const SECONDARY_PATHS = "<path d=\"M221.66,85.66l-120,120a8,8,0,0,1-11.32,0L52.69,168,184,36.69l37.66,37.65A8,8,0,0,1,221.66,85.66Z\"/>";

export const SecurityCamera = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: SecurityCameraProps) => {
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
