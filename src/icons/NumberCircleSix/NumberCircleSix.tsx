import { SVGProps } from "react";

export type NumberCircleSixVariant = "duotone" | "fill" | "light";

export interface NumberCircleSixProps extends SVGProps<SVGSVGElement> {
  variant?: NumberCircleSixVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M148,148a20,20,0,1,1-20-20A20,20,0,0,1,148,148Zm84-20A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-68,20a36,36,0,0,0-36-36c-.61,0-1.22,0-1.82,0L142.87,84.1a8,8,0,0,0-13.74-8.2s-32.4,54.28-32.47,54.42A36,36,0,1,0,164,148Z\"/>";
const LIGHT_INNER     = "<path d=\"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm0-104a34.5,34.5,0,0,0-5.6.47l18.75-31.39a6,6,0,0,0-10.3-6.16l-32.24,54A34,34,0,1,0,128,114Zm0,56a22,22,0,1,1,22-22A22,22,0,0,1,128,170Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm0-104c-.61,0-1.22,0-1.82,0L142.87,84.1a8,8,0,0,0-13.74-8.2l-32.23,54A36,36,0,1,0,128,112Zm0,56a20,20,0,1,1,20-20A20,20,0,0,1,128,168Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z\"/>";

export const NumberCircleSix = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: NumberCircleSixProps) => {
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
