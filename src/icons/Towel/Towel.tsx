import { SVGProps } from "react";

export type TowelVariant = "duotone" | "fill" | "light";

export interface TowelProps extends SVGProps<SVGSVGElement> {
  variant?: TowelVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M224,48V152a8,8,0,0,1-8.53,8,8.17,8.17,0,0,1-7.47-8.25V48a8,8,0,0,0-8.55-8A8.19,8.19,0,0,0,192,48.28V180a4,4,0,0,1-4,4H52a4,4,0,0,1-4-4V48A24,24,0,0,1,72,24H200A24,24,0,0,1,224,48ZM188,200H52a4,4,0,0,0-4,4v12a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V204A4,4,0,0,0,188,200Z\"/>";
const LIGHT_INNER     = "<path d=\"M200,26H72A22,22,0,0,0,50,48V216a14,14,0,0,0,14,14H176a14,14,0,0,0,14-14V48a10,10,0,0,1,20,0V152a6,6,0,0,0,12,0V48A22,22,0,0,0,200,26ZM72,38H180.41A21.84,21.84,0,0,0,178,48V186H62V48A10,10,0,0,1,72,38ZM176,218H64a2,2,0,0,1-2-2V198H178v18A2,2,0,0,1,176,218Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M200,24H72A24,24,0,0,0,48,48V216a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V48a8,8,0,0,1,16,0V152a8,8,0,0,0,16,0V48A24,24,0,0,0,200,24ZM72,40H177.37A23.84,23.84,0,0,0,176,48V184H64V48A8,8,0,0,1,72,40ZM64,216V200H176v16Z\"/>";
const SECONDARY_PATHS = "<path d=\"M184,192v24a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V192Z\"/>";

export const Towel = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: TowelProps) => {
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
