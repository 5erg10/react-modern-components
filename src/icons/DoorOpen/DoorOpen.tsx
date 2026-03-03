import { SVGProps } from "react";

export type DoorOpenVariant = "duotone" | "fill" | "light";

export interface DoorOpenProps extends SVGProps<SVGSVGElement> {
  variant?: DoorOpenVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M232,216H208V40a16,16,0,0,0-16-16H64A16,16,0,0,0,48,40V216H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Zm-64,0H64V40H168Zm-40-84a12,12,0,1,1,12,12A12,12,0,0,1,128,132Z\"/>";
const LIGHT_INNER     = "<path d=\"M232,218H206V40a14,14,0,0,0-14-14H64A14,14,0,0,0,50,40V218H24a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12ZM194,40V218H174V38h18A2,2,0,0,1,194,40ZM62,40a2,2,0,0,1,2-2h98V218H62Zm80,92a10,10,0,1,1-10-10A10,10,0,0,1,142,132Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M232,216H208V40a16,16,0,0,0-16-16H64A16,16,0,0,0,48,40V216H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Zm-40,0H176V40h16ZM64,40h96V216H64Zm80,92a12,12,0,1,1-12-12A12,12,0,0,1,144,132Z\"/>";
const SECONDARY_PATHS = "<path d=\"M200,40V224H168V32h24A8,8,0,0,1,200,40Z\"/>";

export const DoorOpen = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: DoorOpenProps) => {
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
