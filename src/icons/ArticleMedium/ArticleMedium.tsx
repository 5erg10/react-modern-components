import { SVGProps } from "react";

export type ArticleMediumVariant = "duotone" | "fill" | "light";

export interface ArticleMediumProps extends SVGProps<SVGSVGElement> {
  variant?: ArticleMediumVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM72,144a8,8,0,0,1-4.89,7.37A7.86,7.86,0,0,1,64,152H52a8,8,0,0,1,0-16h4V88H52a8,8,0,0,1,0-16H64a8,8,0,0,1,6.91,4L92,112.12,113.09,76A8,8,0,0,1,120,72h12a8,8,0,0,1,0,16h-4v48h4a8,8,0,0,1,0,16H120a7.86,7.86,0,0,1-3.11-.63A8,8,0,0,1,112,144V109.59L98.91,132a8,8,0,0,1-13.82,0L72,109.59Zm128,40H88a8,8,0,0,1,0-16H200a8,8,0,0,1,0,16Zm0-32H160a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Zm0-32H160a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z\"/>";
const LIGHT_INNER     = "<path d=\"M54,136a6,6,0,0,1-6,6H24a6,6,0,0,1,0-12H34V62H24a6,6,0,0,1,0-12H40v0a6,6,0,0,1,5.09,2.8L80,108.68l34.91-55.86A6,6,0,0,1,120,50v0h16a6,6,0,0,1,0,12H126v68h10a6,6,0,0,1,0,12H112a6,6,0,0,1,0-12h2V76.92L85.09,123.18a6,6,0,0,1-10.18,0L46,76.92V130h2A6,6,0,0,1,54,136Zm114-26h64a6,6,0,0,0,0-12H168a6,6,0,0,0,0,12Zm64,20H168a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12Zm0,32H80a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12Zm0,32H80a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M56,136a8,8,0,0,1-8,8H24a8,8,0,0,1,0-16h8V64H24a8,8,0,0,1,0-16H40v0a8,8,0,0,1,6.78,3.74L80,104.91l33.22-53.15A8,8,0,0,1,120,48v0h16a8,8,0,0,1,0,16h-8v64h8a8,8,0,0,1,0,16H112a8,8,0,0,1,0-16V83.89L86.78,124.24a8,8,0,0,1-13.56,0L48,83.89V128A8,8,0,0,1,56,136Zm112-24h64a8,8,0,0,0,0-16H168a8,8,0,0,0,0,16Zm64,16H168a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm0,32H80a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Zm0,32H80a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Z\"/>";
const SECONDARY_PATHS = "<path d=\"M232,104v96H80V168h88V104Z\"/>";

export const ArticleMedium = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ArticleMediumProps) => {
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
