import { SVGProps } from "react";

export type CurrencyGbpVariant = "duotone" | "fill" | "light";

export interface CurrencyGbpProps extends SVGProps<SVGSVGElement> {
  variant?: CurrencyGbpVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm40,160H88a8,8,0,0,1,0-16,16,16,0,0,0,16-16V136H88a8,8,0,0,1,0-16h16V96a40,40,0,0,1,60-34.64,8,8,0,0,1-8,13.85A24,24,0,0,0,120,96v24h16a8,8,0,0,1,0,16H120v16a31.71,31.71,0,0,1-4.31,16H168a8,8,0,0,1,0,16Z\"/>";
const LIGHT_INNER     = "<path d=\"M190,208a6,6,0,0,1-6,6H56a6,6,0,0,1,0-12h4a30,30,0,0,0,30-30V134H56a6,6,0,0,1,0-12H90V84a50,50,0,0,1,81.81-38.58,6,6,0,1,1-7.64,9.26A38,38,0,0,0,102,84v38h34a6,6,0,0,1,0,12H102v38a41.88,41.88,0,0,1-12.63,30H184A6,6,0,0,1,190,208Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M192,208a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16h4a28,28,0,0,0,28-28V136H56a8,8,0,0,1,0-16H88V84a52,52,0,0,1,85.08-40.12A8,8,0,1,1,162.9,56.22,36,36,0,0,0,104,84v36h32a8,8,0,0,1,0,16H104v36a43.82,43.82,0,0,1-10.08,28H184A8,8,0,0,1,192,208Z\"/>";
const SECONDARY_PATHS = "<path d=\"M168,208H60a36,36,0,0,0,36-36V84a44,44,0,0,1,72-33.95Z\"/>";

export const CurrencyGbp = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CurrencyGbpProps) => {
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
