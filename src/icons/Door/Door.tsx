import { SVGProps } from "react";

export type DoorVariant = "duotone" | "fill" | "light";

export interface DoorProps extends SVGProps<SVGSVGElement> {
  variant?: DoorVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M232,216H208V40a16,16,0,0,0-16-16H64A16,16,0,0,0,48,40V216H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Zm-68-72a12,12,0,1,1,12-12A12,12,0,0,1,164,144Z\"/>";
const LIGHT_INNER     = "<path d=\"M232,218H206V40a14,14,0,0,0-14-14H64A14,14,0,0,0,50,40V218H24a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12ZM62,40a2,2,0,0,1,2-2H192a2,2,0,0,1,2,2V218H62Zm104,92a10,10,0,1,1-10-10A10,10,0,0,1,166,132Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M232,216H208V40a16,16,0,0,0-16-16H64A16,16,0,0,0,48,40V216H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM64,40H192V216H64Zm104,92a12,12,0,1,1-12-12A12,12,0,0,1,168,132Z\"/>";
const SECONDARY_PATHS = "<path d=\"M200,40V224H56V40a8,8,0,0,1,8-8H192A8,8,0,0,1,200,40Z\"/>";

export const Door = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: DoorProps) => {
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
