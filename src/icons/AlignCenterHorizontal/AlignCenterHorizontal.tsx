import { SVGProps } from "react";

export type AlignCenterHorizontalVariant = "duotone" | "fill" | "light";

export interface AlignCenterHorizontalProps extends SVGProps<SVGSVGElement> {
  variant?: AlignCenterHorizontalVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M224,152v40a16,16,0,0,1-16,16H136v16a8,8,0,0,1-16,0V208H48a16,16,0,0,1-16-16V152a16,16,0,0,1,16-16h72V120H72a16,16,0,0,1-16-16V64A16,16,0,0,1,72,48h48V32a8,8,0,0,1,16,0V48h48a16,16,0,0,1,16,16v40a16,16,0,0,1-16,16H136v16h72A16,16,0,0,1,224,152Z\"/>";
const LIGHT_INNER     = "<path d=\"M208,138H134V118h50a14,14,0,0,0,14-14V64a14,14,0,0,0-14-14H134V32a6,6,0,0,0-12,0V50H72A14,14,0,0,0,58,64v40a14,14,0,0,0,14,14h50v20H48a14,14,0,0,0-14,14v40a14,14,0,0,0,14,14h74v18a6,6,0,0,0,12,0V206h74a14,14,0,0,0,14-14V152A14,14,0,0,0,208,138ZM70,104V64a2,2,0,0,1,2-2H184a2,2,0,0,1,2,2v40a2,2,0,0,1-2,2H72A2,2,0,0,1,70,104Zm140,88a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M208,136H136V120h48a16,16,0,0,0,16-16V64a16,16,0,0,0-16-16H136V32a8,8,0,0,0-16,0V48H72A16,16,0,0,0,56,64v40a16,16,0,0,0,16,16h48v16H48a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h72v16a8,8,0,0,0,16,0V208h72a16,16,0,0,0,16-16V152A16,16,0,0,0,208,136ZM72,64H184v40H72ZM208,192H48V152H208v40Z\"/>";
const SECONDARY_PATHS = "<path d=\"M64,104V64a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H72A8,8,0,0,1,64,104Zm144,40H48a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V152A8,8,0,0,0,208,144Z\"/>";

export const AlignCenterHorizontal = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: AlignCenterHorizontalProps) => {
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
