import { SVGProps } from "react";

export type ArrowsInVariant = "duotone" | "fill" | "light";

export interface ArrowsInProps extends SVGProps<SVGSVGElement> {
  variant?: ArrowsInVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M144,104V64a8,8,0,0,1,13.66-5.66L172,72.69l30.34-30.35a8,8,0,0,1,11.32,11.32L183.31,84l14.35,14.34A8,8,0,0,1,192,112H152A8,8,0,0,1,144,104Zm-40,40H64a8,8,0,0,0-5.66,13.66L72.69,172,42.34,202.34a8,8,0,0,0,11.32,11.32L84,183.31l14.34,14.35A8,8,0,0,0,112,192V152A8,8,0,0,0,104,144Zm3.06-87.39a8,8,0,0,0-8.72,1.73L84,72.69,53.66,42.34A8,8,0,0,0,42.34,53.66L72.69,84,58.34,98.34A8,8,0,0,0,64,112h40a8,8,0,0,0,8-8V64A8,8,0,0,0,107.06,56.61ZM183.31,172l14.35-14.34A8,8,0,0,0,192,144H152a8,8,0,0,0-8,8v40a8,8,0,0,0,13.66,5.66L172,183.31l30.34,30.35a8,8,0,0,0,11.32-11.32Z\"/>";
const LIGHT_INNER     = "<path d=\"M146,104V64a6,6,0,0,1,12,0V89.51l45.76-45.75a6,6,0,0,1,8.48,8.48L166.48,98H192a6,6,0,0,1,0,12H152A6,6,0,0,1,146,104Zm-42,42H64a6,6,0,0,0,0,12H89.52L43.76,203.76a6,6,0,1,0,8.48,8.48L98,166.48V192a6,6,0,0,0,12,0V152A6,6,0,0,0,104,146Zm62.48,12H192a6,6,0,0,0,0-12H152a6,6,0,0,0-6,6v40a6,6,0,0,0,12,0V166.48l45.76,45.76a6,6,0,0,0,8.48-8.48ZM104,58a6,6,0,0,0-6,6V89.51L52.24,43.76a6,6,0,0,0-8.48,8.48L89.52,98H64a6,6,0,0,0,0,12h40a6,6,0,0,0,6-6V64A6,6,0,0,0,104,58Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M144,104V64a8,8,0,0,1,16,0V84.69l42.34-42.35a8,8,0,0,1,11.32,11.32L171.31,96H192a8,8,0,0,1,0,16H152A8,8,0,0,1,144,104Zm-40,40H64a8,8,0,0,0,0,16H84.69L42.34,202.34a8,8,0,0,0,11.32,11.32L96,171.31V192a8,8,0,0,0,16,0V152A8,8,0,0,0,104,144Zm67.31,16H192a8,8,0,0,0,0-16H152a8,8,0,0,0-8,8v40a8,8,0,0,0,16,0V171.31l42.34,42.35a8,8,0,0,0,11.32-11.32ZM104,56a8,8,0,0,0-8,8V84.69L53.66,42.34A8,8,0,0,0,42.34,53.66L84.69,96H64a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V64A8,8,0,0,0,104,56Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48Z\"/>";

export const ArrowsIn = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ArrowsInProps) => {
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
