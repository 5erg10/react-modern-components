import { SVGProps } from "react";

export type DresserVariant = "duotone" | "fill" | "light";

export interface DresserProps extends SVGProps<SVGSVGElement> {
  variant?: DresserVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M200,24H56A16,16,0,0,0,40,40V80a4,4,0,0,0,4,4H212a4,4,0,0,0,4-4V40A16,16,0,0,0,200,24ZM136,64H120a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm76,36H44a4,4,0,0,0-4,4v48a4,4,0,0,0,4,4H212a4,4,0,0,0,4-4V104A4,4,0,0,0,212,100Zm-76,36H120.27a8.18,8.18,0,0,1-8.25-7.47,8,8,0,0,1,8-8.53h15.73a8.18,8.18,0,0,1,8.25,7.47A8,8,0,0,1,136,136Zm76,36H44a4,4,0,0,0-4,4v40a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V176A4,4,0,0,0,212,172Zm-76,36H120a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Z\"/>";
const LIGHT_INNER     = "<path d=\"M142,192a6,6,0,0,1-6,6H120a6,6,0,0,1,0-12h16A6,6,0,0,1,142,192ZM120,70h16a6,6,0,0,0,0-12H120a6,6,0,0,0,0,12Zm16,52H120a6,6,0,0,0,0,12h16a6,6,0,0,0,0-12Zm78-82V216a14,14,0,0,1-14,14H56a14,14,0,0,1-14-14V40A14,14,0,0,1,56,26H200A14,14,0,0,1,214,40ZM54,154H202V102H54ZM54,40V90H202V40a2,2,0,0,0-2-2H56A2,2,0,0,0,54,40ZM202,216V166H54v50a2,2,0,0,0,2,2H200A2,2,0,0,0,202,216Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M144,192a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h16A8,8,0,0,1,144,192ZM120,72h16a8,8,0,0,0,0-16H120a8,8,0,0,0,0,16Zm16,48H120a8,8,0,0,0,0,16h16a8,8,0,0,0,0-16Zm80-80V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40ZM56,152H200V104H56ZM56,40V88H200V40ZM200,216V168H56v48H200Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,40V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H200A8,8,0,0,1,208,40Z\"/>";

export const Dresser = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: DresserProps) => {
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
