import { SVGProps } from "react";

export type BridgeVariant = "duotone" | "fill" | "light";

export interface BridgeProps extends SVGProps<SVGSVGElement> {
  variant?: BridgeVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M232,160h-8V120.5c1.63.81,3.29,1.57,5,2.26a8,8,0,0,0,6-14.83A55.78,55.78,0,0,1,200,56a8,8,0,0,0-16,0A56,56,0,0,1,72,56a8,8,0,0,0-16,0,55.78,55.78,0,0,1-35,51.93,8,8,0,0,0,6,14.83c1.71-.69,3.37-1.45,5-2.26V160H24.6c-6.31,0-8.6,4.78-8.6,8a8,8,0,0,0,8,8H56v24a8,8,0,0,0,16,0V176H184v24a8,8,0,0,0,16,0V176h32a8,8,0,0,0,0-16ZM72,152a8,8,0,0,1-16,0V104.12a8,8,0,0,1,16,0Zm40,0a8,8,0,0,1-16,0V132.32a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V132.32a8,8,0,0,1,16,0Zm40,0a8,8,0,0,1-16,0V104.12a8,8,0,0,1,16,0Z\"/>";
const LIGHT_INNER     = "<path d=\"M232,162H198V95.28a69.81,69.81,0,0,0,31.75,25.63,6,6,0,1,0,4.5-11.12A57.8,57.8,0,0,1,198,56a6,6,0,0,0-12,0A58,58,0,0,1,70,56a6,6,0,0,0-12,0,57.8,57.8,0,0,1-36.25,53.79,6,6,0,1,0,4.5,11.12A69.81,69.81,0,0,0,58,95.28V162H24a6,6,0,0,0,0,12H58v26a6,6,0,0,0,12,0V174H186v26a6,6,0,0,0,12,0V174h34a6,6,0,0,0,0-12Zm-86-38.35V162H110V123.65a70.11,70.11,0,0,0,36,0ZM70,95.15a70.49,70.49,0,0,0,28,24.09V162H70ZM158,162V119.24a70.49,70.49,0,0,0,28-24.09V162Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M232,160H200V101.34a71.89,71.89,0,0,0,29,21.42,8,8,0,0,0,6-14.83A55.78,55.78,0,0,1,200,56a8,8,0,0,0-16,0A56,56,0,0,1,72,56a8,8,0,0,0-16,0,55.78,55.78,0,0,1-35,51.93,8,8,0,0,0,6,14.83,71.89,71.89,0,0,0,29-21.42V160H24a8,8,0,0,0,0,16H56v24a8,8,0,0,0,16,0V176H184v24a8,8,0,0,0,16,0V176h32a8,8,0,0,0,0-16Zm-88-33.8V160H112V126.2a72,72,0,0,0,32,0Zm-72-25a72.47,72.47,0,0,0,24,19.27V160H72ZM160,160V120.48a72.47,72.47,0,0,0,24-19.27V160Z\"/>";
const SECONDARY_PATHS = "<path d=\"M232,168H24V115.35A64,64,0,0,0,64,56a64,64,0,0,0,128,0,64,64,0,0,0,40,59.35Z\"/>";

export const Bridge = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BridgeProps) => {
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
