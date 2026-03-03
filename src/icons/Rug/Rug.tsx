import { SVGProps } from "react";

export type RugVariant = "duotone" | "fill" | "light";

export interface RugProps extends SVGProps<SVGSVGElement> {
  variant?: RugVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M200,16a8,8,0,0,0-8,8V40H160V24a8,8,0,0,0-16,0V40H112V24a8,8,0,0,0-16,0V40H64V24a8,8,0,0,0-16,0V232a8,8,0,0,0,16,0V216H96v16a8,8,0,0,0,16,0V216h32v16a8,8,0,0,0,16,0V216h32v16a8,8,0,0,0,16,0V24A8,8,0,0,0,200,16ZM155.43,130.06l-24,40a4,4,0,0,1-6.86,0l-24-40a4,4,0,0,1,0-4.12l24-40a4,4,0,0,1,6.86,0l24,40A4,4,0,0,1,155.43,130.06Z\"/>";
const LIGHT_INNER     = "<path d=\"M200,18a6,6,0,0,0-6,6V42H158V24a6,6,0,0,0-12,0V42H110V24a6,6,0,0,0-12,0V42H62V24a6,6,0,0,0-12,0V232a6,6,0,0,0,12,0V214H98v18a6,6,0,0,0,12,0V214h36v18a6,6,0,0,0,12,0V214h36v18a6,6,0,0,0,12,0V24A6,6,0,0,0,200,18ZM62,54H194V202H62Zm66,120a6,6,0,0,0,5.14-2.91l24-40a6,6,0,0,0,0-6.18l-24-40a6,6,0,0,0-10.28,0l-24,40a6,6,0,0,0,0,6.18l24,40A6,6,0,0,0,128,174Zm0-74.34L145,128l-17,28.34L111,128Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M200,16a8,8,0,0,0-8,8V40H160V24a8,8,0,0,0-16,0V40H112V24a8,8,0,0,0-16,0V40H64V24a8,8,0,0,0-16,0V232a8,8,0,0,0,16,0V216H96v16a8,8,0,0,0,16,0V216h32v16a8,8,0,0,0,16,0V216h32v16a8,8,0,0,0,16,0V24A8,8,0,0,0,200,16Zm-8,184H64V56H192Zm-70.86-27.88a8,8,0,0,0,13.72,0l24-40a8,8,0,0,0,0-8.24l-24-40a8,8,0,0,0-13.72,0l-24,40a8,8,0,0,0,0,8.24ZM128,103.55,142.67,128,128,152.45,113.33,128Z\"/>";
const SECONDARY_PATHS = "<path d=\"M56,48V208H200V48Zm72,120-24-40,24-40,24,40Z\"/>";

export const Rug = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: RugProps) => {
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
