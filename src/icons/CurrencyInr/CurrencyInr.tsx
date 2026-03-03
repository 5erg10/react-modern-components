import { SVGProps } from "react";

export type CurrencyInrVariant = "duotone" | "fill" | "light";

export interface CurrencyInrProps extends SVGProps<SVGSVGElement> {
  variant?: CurrencyInrVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm38.32,72H176a8,8,0,0,1,0,16h-8.19A44.06,44.06,0,0,1,124,152H111.32l53.59,41.69a8,8,0,1,1-9.82,12.62l-72-56A8,8,0,0,1,88,136h36a28,28,0,0,0,27.71-24H88a8,8,0,0,1,0-16h61.29A28,28,0,0,0,124,80H88a8,8,0,0,1,0-16h88a8,8,0,0,1,0,16H157.92A43.87,43.87,0,0,1,166.32,96Z\"/>";
const LIGHT_INNER     = "<path d=\"M206,80a6,6,0,0,1-6,6H165.69a59.36,59.36,0,0,1,.31,6,58.07,58.07,0,0,1-58,58H87.52L164,219.56a6,6,0,0,1-8.08,8.88l-88-80A6,6,0,0,1,72,138h36a46.06,46.06,0,0,0,46-46,47.61,47.61,0,0,0-.4-6H72a6,6,0,0,1,0-12h78.33A46.08,46.08,0,0,0,108,46H72a6,6,0,0,1,0-12H200a6,6,0,0,1,0,12H143.27a58.25,58.25,0,0,1,19.86,28H200A6,6,0,0,1,206,80Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M208,80a8,8,0,0,1-8,8H167.85c.09,1.32.15,2.65.15,4a60.07,60.07,0,0,1-60,60H92.69l72.69,66.08a8,8,0,1,1-10.76,11.84l-88-80A8,8,0,0,1,72,136h36a44.05,44.05,0,0,0,44-44c0-1.35-.07-2.68-.19-4H72a8,8,0,0,1,0-16h75.17A44,44,0,0,0,108,48H72a8,8,0,0,1,0-16H200a8,8,0,0,1,0,16H148.74a60.13,60.13,0,0,1,15.82,24H200A8,8,0,0,1,208,80Z\"/>";
const SECONDARY_PATHS = "<path d=\"M160,92a52,52,0,0,1-52,52H72V40h36A52,52,0,0,1,160,92Z\"/>";

export const CurrencyInr = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CurrencyInrProps) => {
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
