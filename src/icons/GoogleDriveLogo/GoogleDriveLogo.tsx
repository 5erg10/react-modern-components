import { SVGProps } from "react";

export type GoogleDriveLogoVariant = "duotone" | "fill" | "light";

export interface GoogleDriveLogoProps extends SVGProps<SVGSVGElement> {
  variant?: GoogleDriveLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M237.6,143.78,169.13,31.52A15.91,15.91,0,0,0,155.56,24H100.43a15.89,15.89,0,0,0-13.56,7.52l-.05.07L18.44,143.7a16,16,0,0,0-.33,16.42l27.32,47.82A16,16,0,0,0,59.32,216H196.67a16,16,0,0,0,13.89-8.06l27.32-47.82A15.91,15.91,0,0,0,237.6,143.78ZM219,144H172.52L137.33,85.33l22.75-37.92ZM92.53,160h70.94l24,40H68.53Zm9.6-16L128,100.88,153.87,144ZM95.91,47.41l22.76,37.92L83.47,144H37Z\"/>";
const LIGHT_INNER     = "<path d=\"M235.9,144.82,167.43,32.58A13.91,13.91,0,0,0,155.56,26H100.43a13.92,13.92,0,0,0-11.87,6.58l0,.05L20.13,144.76a14,14,0,0,0-.28,14.37L47.17,207A14,14,0,0,0,59.32,214H196.67A14,14,0,0,0,208.83,207l27.32-47.82A14,14,0,0,0,235.9,144.82ZM222.56,146H171.39L135,85.33l25.08-41.79Zm-124,0L128,97l29.4,49Zm66,12L191,202H65l26.4-44ZM128,73.67,106.6,38h42.8ZM95.93,43.54,121,85.33,84.6,146H33.43ZM33,158H77.4L54.67,195.89Zm168.3,37.89L178.59,158H223Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M237.6,143.78,169.13,31.52A15.91,15.91,0,0,0,155.56,24H100.43a15.89,15.89,0,0,0-13.56,7.52l-.05.07L18.44,143.7a16,16,0,0,0-.33,16.42l27.32,47.82A16,16,0,0,0,59.32,216H196.67a16,16,0,0,0,13.89-8.06l27.32-47.82A15.91,15.91,0,0,0,237.6,143.78ZM219,144H172.52L137.33,85.33l22.75-37.92Zm-116.87,0L128,100.88,153.87,144Zm61.34,16,24,40H68.53l24-40ZM128,69.78,110.12,40l35.78-.05ZM95.91,47.41l22.76,37.92L83.47,144H37ZM36.54,160H73.87L54.72,191.92Zm164.74,31.93L182.12,160h37.41Z\"/>";
const SECONDARY_PATHS = "<path d=\"M24,152H88L55.12,206.8A7.91,7.91,0,0,1,52.38,204L25.05,156.15A8,8,0,0,1,24,152Zm144,0,32.88,54.8a7.91,7.91,0,0,0,2.74-2.83l27.32-47.82A8,8,0,0,0,232,152ZM100.43,32a8.06,8.06,0,0,0-3.84,1L128,85.33,159.41,33a8.07,8.07,0,0,0-3.85-1Z\"/>";

export const GoogleDriveLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: GoogleDriveLogoProps) => {
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
