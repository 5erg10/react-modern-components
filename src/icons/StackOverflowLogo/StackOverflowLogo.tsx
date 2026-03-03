import { SVGProps } from "react";

export type StackOverflowLogoVariant = "duotone" | "fill" | "light";

export interface StackOverflowLogoProps extends SVGProps<SVGSVGElement> {
  variant?: StackOverflowLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM134.86,46.86a8,8,0,0,1,11.32,0l45.25,45.26a8,8,0,0,1-11.31,11.31L134.86,58.18A8,8,0,0,1,134.86,46.86ZM100.18,98.77a8,8,0,0,1,10.45-4.33l59.13,24.49a8,8,0,0,1-3.06,15.4,7.89,7.89,0,0,1-3.06-.62l-59.13-24.49A8,8,0,0,1,100.18,98.77ZM96,152h64a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16Zm104,40a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v40H184V144a8,8,0,0,1,16,0Z\"/>";
const LIGHT_INNER     = "<path d=\"M214,152.09V216a6,6,0,0,1-6,6H48a6,6,0,0,1-6-6V152.09a6,6,0,0,1,12,0V210H202V152.09a6,6,0,0,1,12,0Zm-126,30h80a6,6,0,1,0,0-12H88a6,6,0,1,0,0,12Zm5.4-52.93,77.27,20.67a6,6,0,1,0,3.11-11.57L96.5,117.54a6,6,0,1,0-3.1,11.58Zm18.93-49.74,69.28,40a6.05,6.05,0,0,0,3,.8,6,6,0,0,0,3-11.18L118.33,69a6,6,0,1,0-6,10.38Zm87.75,13.35a6,6,0,0,0,8.48-8.48L152,27.76a6,6,0,1,0-8.48,8.47Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M216,152.09V216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152.09a8,8,0,0,1,16,0V208H200V152.09a8,8,0,0,1,16,0Zm-128,32h80a8,8,0,1,0,0-16H88a8,8,0,1,0,0,16Zm4.88-53,77.27,20.68a7.89,7.89,0,0,0,2.08.28,8,8,0,0,0,2.07-15.71L97,115.61A8,8,0,1,0,92.88,131Zm18.45-49.93,69.28,40a8,8,0,0,0,10.93-2.93,8,8,0,0,0-2.93-10.91L119.33,67.27a8,8,0,1,0-8,13.84Zm87.33,13A8,8,0,1,0,210,82.84l-56.57-56.5a8,8,0,0,0-11.32,11.3Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,152v64H48V152Z\"/>";

export const StackOverflowLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: StackOverflowLogoProps) => {
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
