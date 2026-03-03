import { SVGProps } from "react";

export type AngularLogoVariant = "duotone" | "fill" | "light";

export interface AngularLogoProps extends SVGProps<SVGSVGElement> {
  variant?: AngularLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M128,104.47,141.07,128H114.93ZM231.93,73.06l-16,120a8,8,0,0,1-4.35,6.1l-80,40a8,8,0,0,1-7.16,0l-80-40a8,8,0,0,1-4.35-6.1l-16-120a8,8,0,0,1,4.85-8.44l96-40a7.93,7.93,0,0,1,6.16,0l96,40A8,8,0,0,1,231.93,73.06ZM175,156.12l-40-72a8,8,0,0,0-14,0l-40,72a8,8,0,1,0,14,7.76L106,144H150l11,19.88a8,8,0,1,0,14-7.76Z\"/>";
const LIGHT_INNER     = "<path d=\"M226.31,66.46l-96-40a6.06,6.06,0,0,0-4.62,0l-96,40a6,6,0,0,0-3.64,6.33l16,120a6,6,0,0,0,3.27,4.58l80,40a6,6,0,0,0,5.36,0l80-40a6,6,0,0,0,3.27-4.58l16-120A6,6,0,0,0,226.31,66.46Zm-23.84,121.6L128,225.29,53.53,188.06l-15-112.29L128,38.5l89.44,37.27Zm-79.72-103-40,72a6,6,0,0,0,10.5,5.82L104.86,142h46.28l11.61,20.91A6,6,0,0,0,168,166a5.88,5.88,0,0,0,2.9-.76,6,6,0,0,0,2.34-8.15l-40-72a6,6,0,0,0-10.5,0ZM144.47,130H111.53L128,100.35Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M227.08,64.62l-96-40a7.93,7.93,0,0,0-6.16,0l-96,40a8,8,0,0,0-4.85,8.44l16,120a8,8,0,0,0,4.35,6.1l80,40a8,8,0,0,0,7.16,0l80-40a8,8,0,0,0,4.35-6.1l16-120A8,8,0,0,0,227.08,64.62ZM200.63,186.74,128,223.06,55.37,186.74,40.74,77,128,40.67,215.26,77ZM121,84.12l-40,72a8,8,0,1,0,14,7.76L106,144H150l11,19.88a8,8,0,1,0,14-7.76l-40-72a8,8,0,0,0-14,0ZM141.07,128H114.93L128,104.47Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,72,208,192l-80,40L48,192,32,72l96-40Z\"/>";

export const AngularLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: AngularLogoProps) => {
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
