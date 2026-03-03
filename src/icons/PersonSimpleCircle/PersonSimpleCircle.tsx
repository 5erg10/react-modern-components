import { SVGProps } from "react";

export type PersonSimpleCircleVariant = "duotone" | "fill" | "light";

export interface PersonSimpleCircleProps extends SVGProps<SVGSVGElement> {
  variant?: PersonSimpleCircleVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,40a16,16,0,1,1-16,16A16,16,0,0,1,128,64Zm48,56H136v13.58l30.66,46a8,8,0,0,1-13.32,8.88l-25.34-38-25.34,38a8,8,0,1,1-13.32-8.88l30.66-46V120H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Z\"/>";
const LIGHT_INNER     = "<path d=\"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218ZM114,80a14,14,0,1,1,14,14A14,14,0,0,1,114,80Zm68,32a6,6,0,0,1-6,6H134v16.18l31,46.49a6,6,0,1,1-10,6.66l-27-40.51-27,40.51a6,6,0,1,1-10-6.66l31-46.49V118H80a6,6,0,0,1,0-12h96A6,6,0,0,1,182,112Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM112,80a16,16,0,1,1,16,16A16,16,0,0,1,112,80Zm72,32a8,8,0,0,1-8,8H136v13.58l30.66,46a8,8,0,0,1-13.32,8.88l-25.34-38-25.34,38a8,8,0,1,1-13.32-8.88l30.66-46V120H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,112Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z\"/>";

export const PersonSimpleCircle = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PersonSimpleCircleProps) => {
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
