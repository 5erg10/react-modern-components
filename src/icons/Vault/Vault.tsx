import { SVGProps } from "react";

export type VaultVariant = "duotone" | "fill" | "light";

export interface VaultProps extends SVGProps<SVGSVGElement> {
  variant?: VaultVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216,40H40A16,16,0,0,0,24,56V192a16,16,0,0,0,16,16H56v16a8,8,0,0,0,16,0V208H184v16a8,8,0,0,0,16,0V208h16a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm-8,96H179.09a36,36,0,1,1,0-16H208a8,8,0,0,1,0,16Zm-44-8a20,20,0,1,1-20-20A20,20,0,0,1,164,128Z\"/>";
const LIGHT_INNER     = "<path d=\"M216,42H40A14,14,0,0,0,26,56V192a14,14,0,0,0,14,14H58v18a6,6,0,0,0,12,0V206H186v18a6,6,0,0,0,12,0V206h18a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42Zm0,152H40a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2v66H197.6a46,46,0,1,0,0,12H218v58A2,2,0,0,1,216,194Zm-51.37-72a14,14,0,1,0,0,12h20.83a34,34,0,1,1,0-12Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M216,40H40A16,16,0,0,0,24,56V192a16,16,0,0,0,16,16H56v16a8,8,0,0,0,16,0V208H184v16a8,8,0,0,0,16,0V208h16a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,152H40V56H216v64H199.32a48,48,0,1,0,0,16H216v56Zm-50.16-72a16,16,0,1,0,0,16H183a32,32,0,1,1,0-16Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,48H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48ZM152,168a40,40,0,1,1,40-40A40,40,0,0,1,152,168Z\"/>";

export const Vault = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: VaultProps) => {
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
