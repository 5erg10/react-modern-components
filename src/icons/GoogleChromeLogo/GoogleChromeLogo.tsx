import { SVGProps } from "react";

export type GoogleChromeLogoVariant = "duotone" | "fill" | "light";

export interface GoogleChromeLogoProps extends SVGProps<SVGSVGElement> {
  variant?: GoogleChromeLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,16a88,88,0,0,1,73.72,40H128a48.08,48.08,0,0,0-45.6,33l-23.08-40A87.89,87.89,0,0,1,128,40ZM40,128a87.44,87.44,0,0,1,9.56-39.86L86.43,152c.06.1.13.19.19.28A48,48,0,0,0,137.82,175l-23.1,40A88.14,88.14,0,0,1,40,128Zm92.69,87.87L169.57,152c.08-.14.14-.28.22-.42a47.88,47.88,0,0,0-6-55.58H210a88,88,0,0,1-77.29,119.87Z\"/>";
const LIGHT_INNER     = "<path d=\"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,12a90,90,0,0,1,77.33,44H128a46.07,46.07,0,0,0-44.93,36.17L56.91,72.87A89.91,89.91,0,0,1,128,38Zm34,90a34,34,0,1,1-34-34A34,34,0,0,1,162,128ZM38,128A89.4,89.4,0,0,1,49.5,84l38.66,67c.06.1.13.18.19.27A45.94,45.94,0,0,0,142,171.83l-26.17,45.34A90.13,90.13,0,0,1,38,128Zm91.16,90,38.68-67,.21-.41A45.9,45.9,0,0,0,159,94h52.37a90,90,0,0,1-82.16,124Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,16a88,88,0,0,1,73.72,40H128a48.08,48.08,0,0,0-45.6,33l-23.08-40A87.89,87.89,0,0,1,128,40Zm32,88a32,32,0,1,1-32-32A32,32,0,0,1,160,128Zm-45.28,87A88,88,0,0,1,49.56,88.14L86.43,152c.06.1.13.19.19.28A48,48,0,0,0,137.82,175Zm18,.87L169.57,152c.08-.14.14-.28.22-.42a47.88,47.88,0,0,0-6-55.58H210a88,88,0,0,1-77.29,119.87Z\"/>";
const SECONDARY_PATHS = "<path d=\"M168,128a40,40,0,1,1-40-40A40,40,0,0,1,168,128Z\"/>";

export const GoogleChromeLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: GoogleChromeLogoProps) => {
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
