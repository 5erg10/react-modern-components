import { SVGProps } from "react";

export type CurrencyEthVariant = "duotone" | "fill" | "light";

export interface CurrencyEthProps extends SVGProps<SVGSVGElement> {
  variant?: CurrencyEthVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M222.29,123.06l-88-112a8,8,0,0,0-12.58,0l-88,112a8,8,0,0,0,0,9.88l88,112a8,8,0,0,0,12.58,0l88-112A8,8,0,0,0,222.29,123.06ZM136,155.58V39.13l67.42,85.8Zm-16,0L52.58,124.93,120,39.13Zm0,17.57v43.72l-53.43-68Z\"/>";
const LIGHT_INNER     = "<path d=\"M220.72,124.29l-88-112a6,6,0,0,0-9.44,0l-88,112a6,6,0,0,0,0,7.42l88,112a6,6,0,0,0,9.44,0l88-112A6,6,0,0,0,220.72,124.29ZM134,33.35l72.56,92.35-72.56,33ZM122,158.68l-72.56-33L122,33.35Zm0,13.18v50.79l-62.08-79Zm12,0,62.08-28.21-62.08,79Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M222.29,123.06l-88-112a8,8,0,0,0-12.58,0l-88,112a8,8,0,0,0,0,9.88l88,112a8,8,0,0,0,12.58,0l88-112A8,8,0,0,0,222.29,123.06ZM136,39.13l67.42,85.8L136,155.58ZM120,155.58,52.58,124.93,120,39.13Zm0,17.57v43.72l-53.43-68Zm16,0,53.43-24.29-53.43,68Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,128,128,240,40,128l88,40Z\"/>";

export const CurrencyEth = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CurrencyEthProps) => {
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
