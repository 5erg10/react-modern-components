import { SVGProps } from "react";

export type OctagonVariant = "duotone" | "fill" | "light";

export interface OctagonProps extends SVGProps<SVGSVGElement> {
  variant?: OctagonVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M227.31,80.23,175.77,28.69A16.13,16.13,0,0,0,164.45,24H91.55a16.13,16.13,0,0,0-11.32,4.69L28.69,80.23A16.13,16.13,0,0,0,24,91.55v72.9a16.13,16.13,0,0,0,4.69,11.32l51.54,51.54A16.13,16.13,0,0,0,91.55,232h72.9a16.13,16.13,0,0,0,11.32-4.69l51.54-51.54A16.13,16.13,0,0,0,232,164.45V91.55A16.13,16.13,0,0,0,227.31,80.23Z\"/>";
const LIGHT_INNER     = "<path d=\"M225.9,81.65,174.35,30.1a13.92,13.92,0,0,0-9.9-4.1H91.55a13.92,13.92,0,0,0-9.9,4.1L30.1,81.65a13.92,13.92,0,0,0-4.1,9.9v72.9a13.92,13.92,0,0,0,4.1,9.9L81.65,225.9a13.92,13.92,0,0,0,9.9,4.1h72.9a13.92,13.92,0,0,0,9.9-4.1l51.55-51.55a13.92,13.92,0,0,0,4.1-9.9V91.55A13.92,13.92,0,0,0,225.9,81.65Zm-7.9,82.8a2,2,0,0,1-.59,1.42l-51.55,51.54a2,2,0,0,1-1.41.59H91.55a2,2,0,0,1-1.42-.59L38.59,165.87a2,2,0,0,1-.59-1.42V91.55a2,2,0,0,1,.59-1.42L90.14,38.59A2,2,0,0,1,91.55,38h72.9a2,2,0,0,1,1.42.59l51.54,51.55a2,2,0,0,1,.59,1.41Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M227.31,80.24,175.76,28.69A15.86,15.86,0,0,0,164.45,24H91.55a15.86,15.86,0,0,0-11.31,4.69L28.69,80.24A15.86,15.86,0,0,0,24,91.55v72.9a15.86,15.86,0,0,0,4.69,11.31l51.55,51.55A15.86,15.86,0,0,0,91.55,232h72.9a15.86,15.86,0,0,0,11.31-4.69l51.55-51.55A15.86,15.86,0,0,0,232,164.45V91.55A15.86,15.86,0,0,0,227.31,80.24ZM216,164.45,164.45,216H91.55L40,164.45V91.55L91.55,40h72.9L216,91.55Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,91.55v72.9a8,8,0,0,1-2.34,5.66l-51.55,51.55a8,8,0,0,1-5.66,2.34H91.55a8,8,0,0,1-5.66-2.34L34.34,170.11A8,8,0,0,1,32,164.45V91.55a8,8,0,0,1,2.34-5.66L85.89,34.34A8,8,0,0,1,91.55,32h72.9a8,8,0,0,1,5.66,2.34l51.55,51.55A8,8,0,0,1,224,91.55Z\"/>";

export const Octagon = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: OctagonProps) => {
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
