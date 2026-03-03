import { SVGProps } from "react";

export type FirstAidVariant = "duotone" | "fill" | "light";

export interface FirstAidProps extends SVGProps<SVGSVGElement> {
  variant?: FirstAidVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M232,108v40a16,16,0,0,1-16,16H164v52a16,16,0,0,1-16,16H108a16,16,0,0,1-16-16V164H40a16,16,0,0,1-16-16V108A16,16,0,0,1,40,92H92V40a16,16,0,0,1,16-16h40a16,16,0,0,1,16,16V92h52A16,16,0,0,1,232,108Z\"/>";
const LIGHT_INNER     = "<path d=\"M216,90H166V40a14,14,0,0,0-14-14H104A14,14,0,0,0,90,40V90H40a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14H90v50a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V166h50a14,14,0,0,0,14-14V104A14,14,0,0,0,216,90Zm2,62a2,2,0,0,1-2,2H160a6,6,0,0,0-6,6v56a2,2,0,0,1-2,2H104a2,2,0,0,1-2-2V160a6,6,0,0,0-6-6H40a2,2,0,0,1-2-2V104a2,2,0,0,1,2-2H96a6,6,0,0,0,6-6V40a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2V96a6,6,0,0,0,6,6h56a2,2,0,0,1,2,2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M216,88H168V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V88H40a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16H88v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V168h48a16,16,0,0,0,16-16V104A16,16,0,0,0,216,88Zm0,64H160a8,8,0,0,0-8,8v56H104V160a8,8,0,0,0-8-8H40V104H96a8,8,0,0,0,8-8V40h48V96a8,8,0,0,0,8,8h56Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,104v48a8,8,0,0,1-8,8H160v56a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V160H40a8,8,0,0,1-8-8V104a8,8,0,0,1,8-8H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8V96h56A8,8,0,0,1,224,104Z\"/>";

export const FirstAid = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: FirstAidProps) => {
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
