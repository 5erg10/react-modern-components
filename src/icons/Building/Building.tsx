import { SVGProps } from "react";

export type BuildingVariant = "duotone" | "fill" | "light";

export interface BuildingProps extends SVGProps<SVGSVGElement> {
  variant?: BuildingVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M232,224H208V32h8a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16h8V224H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM88,56h24a8,8,0,0,1,0,16H88a8,8,0,0,1,0-16Zm0,40h24a8,8,0,0,1,0,16H88a8,8,0,0,1,0-16Zm-8,48a8,8,0,0,1,8-8h24a8,8,0,0,1,0,16H88A8,8,0,0,1,80,144Zm72,80H104V184h48Zm16-72H144a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16Zm0-40H144a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16Zm0-40H144a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16Z\"/>";
const LIGHT_INNER     = "<path d=\"M232,226H206V30h10a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12H50V226H24a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12ZM62,30H194V226H158V184a6,6,0,0,0-6-6H104a6,6,0,0,0-6,6v42H62Zm84,196H110V190h36ZM90,64a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H96A6,6,0,0,1,90,64Zm48,0a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H144A6,6,0,0,1,138,64ZM90,104a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H96A6,6,0,0,1,90,104Zm48,0a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H144A6,6,0,0,1,138,104ZM96,150a6,6,0,0,1,0-12h16a6,6,0,0,1,0,12Zm42-6a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H144A6,6,0,0,1,138,144Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M232,224H208V32h8a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16h8V224H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM64,32H192V224H160V184a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v40H64Zm80,192H112V192h32ZM88,64a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H96A8,8,0,0,1,88,64Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H144A8,8,0,0,1,136,64ZM88,104a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H96A8,8,0,0,1,88,104Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H144A8,8,0,0,1,136,104ZM88,144a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H96A8,8,0,0,1,88,144Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H144A8,8,0,0,1,136,144Z\"/>";
const SECONDARY_PATHS = "<path d=\"M200,24V232H152V184H104v48H56V24Z\"/>";

export const Building = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BuildingProps) => {
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
