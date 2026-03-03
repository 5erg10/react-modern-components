import { SVGProps } from "react";

export type LetterCirclePVariant = "duotone" | "fill" | "light";

export interface LetterCirclePProps extends SVGProps<SVGSVGElement> {
  variant?: LetterCirclePVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M156,116a20,20,0,0,1-20,20H112V96h24A20,20,0,0,1,156,116Zm76,12A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-60-12a36,36,0,0,0-36-36H104a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V152h24A36,36,0,0,0,172,116Z\"/>";
const LIGHT_INNER     = "<path d=\"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm8-136H104a6,6,0,0,0-6,6v80a6,6,0,0,0,12,0V150h26a34,34,0,0,0,0-68Zm0,56H110V94h26a22,22,0,0,1,0,44Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm8-136H104a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V152h24a36,36,0,0,0,0-72Zm0,56H112V96h24a20,20,0,0,1,0,40Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z\"/>";

export const LetterCircleP = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: LetterCirclePProps) => {
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
