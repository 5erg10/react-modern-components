import { SVGProps } from "react";

export type IceCreamVariant = "duotone" | "fill" | "light";

export interface IceCreamProps extends SVGProps<SVGSVGElement> {
  variant?: IceCreamVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,97.37V96A80,80,0,0,0,48,96v1.37A24,24,0,0,0,56,144h3.29l54.82,95.94a16,16,0,0,0,27.78,0L196.71,144H200a24,24,0,0,0,8-46.63ZM146.89,198.94,115.5,144h19.29l21.75,38.06ZM77.71,144H97.07l40.61,71.06L128,232Zm88,21.94L153.21,144h25.08Z\"/>";
const LIGHT_INNER     = "<path d=\"M206,98.83V96A78,78,0,0,0,50,96v2.83A22,22,0,0,0,56,142h4.45L115.84,239a14,14,0,0,0,24.32,0L195.55,142H200a22,22,0,0,0,6-43.17ZM129.74,233a2,2,0,0,1-3.48,0l-52-91h24L140,215.06ZM136,142l22.89,40.06-12,20.91-34.84-61Zm29.8,28-16-28h32ZM200,130H56a10,10,0,0,1,0-20,6,6,0,0,0,6-6V96a66,66,0,0,1,132,0v8a6,6,0,0,0,6,6,10,10,0,0,1,0,20Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M208,97.37V96A80,80,0,0,0,48,96v1.37A24,24,0,0,0,56,144h3.29l54.82,95.94a16,16,0,0,0,27.78,0L196.71,144H200a24,24,0,0,0,8-46.63ZM77.71,144H97.07l40.61,71.06L128,232Zm57.08,0,21.75,38.06-9.65,16.88L115.5,144Zm31,21.94L153.21,144h25.08ZM200,128H56a8,8,0,0,1,0-16,8,8,0,0,0,8-8V96a64,64,0,0,1,128,0v8a8,8,0,0,0,8,8,8,8,0,0,1,0,16Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,120a16,16,0,0,1-16,16H56a16,16,0,0,1,0-32V96a72,72,0,0,1,144,0v8A16,16,0,0,1,216,120Z\"/>";

export const IceCream = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: IceCreamProps) => {
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
