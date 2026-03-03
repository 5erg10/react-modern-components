import { SVGProps } from "react";

export type CarSimpleVariant = "duotone" | "fill" | "light";

export interface CarSimpleProps extends SVGProps<SVGSVGElement> {
  variant?: CarSimpleVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M240,104H229.2L201.42,41.5A16,16,0,0,0,186.8,32H69.2a16,16,0,0,0-14.62,9.5L26.8,104H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16v-8h96v8a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V120h8a8,8,0,0,0,0-16ZM44.31,104,69.2,48H186.8l24.89,56Z\"/>";
const LIGHT_INNER     = "<path d=\"M240,106H227.9L199.59,42.31A14,14,0,0,0,186.8,34H69.2a14,14,0,0,0-12.79,8.31L28.1,106H16a6,6,0,0,0,0,12H26v82a14,14,0,0,0,14,14H64a14,14,0,0,0,14-14V182H178v18a14,14,0,0,0,14,14h24a14,14,0,0,0,14-14V118h10a6,6,0,0,0,0-12ZM67.37,47.19A2,2,0,0,1,69.2,46H186.8a2,2,0,0,1,1.83,1.19L214.77,106H41.23ZM218,200a2,2,0,0,1-2,2H192a2,2,0,0,1-2-2V176a6,6,0,0,0-6-6H72a6,6,0,0,0-6,6v24a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V118H218Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M240,104H229.2L201.42,41.5A16,16,0,0,0,186.8,32H69.2a16,16,0,0,0-14.62,9.5L26.8,104H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V184h96v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V120h8a8,8,0,0,0,0-16ZM69.2,48H186.8l24.89,56H44.31ZM216,200H192V176a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8v24H40V120H216Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,112H32L61.89,44.75A8,8,0,0,1,69.2,40H186.8a8,8,0,0,1,7.31,4.75Z\"/>";

export const CarSimple = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CarSimpleProps) => {
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
