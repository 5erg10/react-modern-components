import { SVGProps } from "react";

export type ClockUserVariant = "duotone" | "fill" | "light";

export interface ClockUserProps extends SVGProps<SVGSVGElement> {
  variant?: ClockUserVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M136,72v43.06l36.42-18.22a8,8,0,1,1,7.16,14.32l-48,24A8,8,0,0,1,120,128V72a8,8,0,0,1,16,0Zm-8,144a88,88,0,1,1,88-88,8,8,0,0,0,16,0A104,104,0,1,0,128,232a8,8,0,0,0,0-16Zm86.62-17.38a32,32,0,1,0-45.24,0A40,40,0,0,0,152.27,222,8,8,0,0,0,160,232h64a8,8,0,0,0,7.73-10.06A40,40,0,0,0,214.62,198.62Z\"/>";
const LIGHT_INNER     = "<path d=\"M134,72v46.29l39.32-19.66a6,6,0,0,1,5.36,10.74l-48,24A6,6,0,0,1,122,128V72a6,6,0,0,1,12,0Zm-6,146a90,90,0,1,1,90-90,6,6,0,0,0,12,0A102,102,0,1,0,128,230a6,6,0,0,0,0-12Zm101.8,4.46a6,6,0,0,1-11.6,3.08C215.14,214,204.37,206,192,206s-23.14,8-26.2,19.54A6,6,0,0,1,160,230a6.26,6.26,0,0,1-1.54-.2,6,6,0,0,1-4.26-7.34A38.09,38.09,0,0,1,172.72,199a30,30,0,1,1,38.56,0A38.09,38.09,0,0,1,229.8,222.46ZM174,176a18,18,0,1,0,18-18A18,18,0,0,0,174,176Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M136,72v43.05l36.42-18.21a8,8,0,0,1,7.16,14.31l-48,24A8,8,0,0,1,120,128V72a8,8,0,0,1,16,0Zm-8,144a88,88,0,1,1,88-88,8,8,0,0,0,16,0A104,104,0,1,0,128,232a8,8,0,0,0,0-16Zm103.73,5.94a8,8,0,1,1-15.46,4.11C213.44,215.42,203.46,208,192,208s-21.44,7.42-24.27,18.05A8,8,0,0,1,160,232a8.15,8.15,0,0,1-2.06-.27,8,8,0,0,1-5.67-9.79,40,40,0,0,1,17.11-23.32,32,32,0,1,1,45.23,0A40,40,0,0,1,231.73,221.94ZM176,176a16,16,0,1,0,16-16A16,16,0,0,0,176,176Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,128a95.6,95.6,0,0,1-9.09,40.82A24,24,0,1,0,191.5,200l0,0a33.15,33.15,0,0,0-29,17.6A96,96,0,1,1,224,128Z\"/>";

export const ClockUser = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ClockUserProps) => {
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
