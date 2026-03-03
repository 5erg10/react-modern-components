import { SVGProps } from "react";

export type RowsPlusBottomVariant = "duotone" | "fill" | "light";

export interface RowsPlusBottomProps extends SVGProps<SVGSVGElement> {
  variant?: RowsPlusBottomVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M224,128v24a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V128a16,16,0,0,1,16-16H208A16,16,0,0,1,224,128ZM208,40H48A16,16,0,0,0,32,56V80A16,16,0,0,0,48,96H208a16,16,0,0,0,16-16V56A16,16,0,0,0,208,40ZM152,208H136V192a8,8,0,0,0-16,0v16H104a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V224h16a8,8,0,0,0,0-16Z\"/>";
const LIGHT_INNER     = "<path d=\"M208,114H48a14,14,0,0,0-14,14v24a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V128A14,14,0,0,0,208,114Zm2,38a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V128a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM208,42H48A14,14,0,0,0,34,56V80A14,14,0,0,0,48,94H208a14,14,0,0,0,14-14V56A14,14,0,0,0,208,42Zm2,38a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM158,216a6,6,0,0,1-6,6H134v18a6,6,0,0,1-12,0V222H104a6,6,0,0,1,0-12h18V192a6,6,0,0,1,12,0v18h18A6,6,0,0,1,158,216Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M208,112H48a16,16,0,0,0-16,16v24a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V128A16,16,0,0,0,208,112Zm0,40H48V128H208v24Zm0-112H48A16,16,0,0,0,32,56V80A16,16,0,0,0,48,96H208a16,16,0,0,0,16-16V56A16,16,0,0,0,208,40Zm0,40H48V56H208V80ZM160,216a8,8,0,0,1-8,8H136v16a8,8,0,0,1-16,0V224H104a8,8,0,0,1,0-16h16V192a8,8,0,0,1,16,0v16h16A8,8,0,0,1,160,216Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,128v24a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V128a8,8,0,0,1,8-8H208A8,8,0,0,1,216,128Zm-8-80H48a8,8,0,0,0-8,8V80a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V56A8,8,0,0,0,208,48Z\"/>";

export const RowsPlusBottom = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: RowsPlusBottomProps) => {
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
