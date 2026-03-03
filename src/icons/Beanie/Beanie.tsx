import { SVGProps } from "react";

export type BeanieVariant = "duotone" | "fill" | "light";

export interface BeanieProps extends SVGProps<SVGSVGElement> {
  variant?: BeanieVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M224,162.16V144a96.18,96.18,0,0,0-72.34-93,28,28,0,1,0-47.32,0A96.18,96.18,0,0,0,32,144v18.16A16,16,0,0,0,24,176v32a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V176A16,16,0,0,0,224,162.16ZM120,176v32H80V176Zm16,0h40v32H136ZM116,36a12,12,0,1,1,12,12A12,12,0,0,1,116,36ZM40,176H64v32H40Zm176,32H192V176h24v32Z\"/>";
const LIGHT_INNER     = "<path d=\"M222,163.37V144a94.17,94.17,0,0,0-73.7-91.79,26,26,0,1,0-40.6,0A94.17,94.17,0,0,0,34,144v19.37A14,14,0,0,0,26,176v32a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V176A14,14,0,0,0,222,163.37ZM114,36a14,14,0,1,1,14,14A14,14,0,0,1,114,36Zm14,26a82.1,82.1,0,0,1,82,82v18H46V144A82.1,82.1,0,0,1,128,62Zm-6,112v36H78V174Zm12,0h44v36H134ZM38,208V176a2,2,0,0,1,2-2H66v36H40A2,2,0,0,1,38,208Zm180,0a2,2,0,0,1-2,2H190V174h26a2,2,0,0,1,2,2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M224,162.16V144a96.18,96.18,0,0,0-72.34-93,28,28,0,1,0-47.32,0A96.18,96.18,0,0,0,32,144v18.16A16,16,0,0,0,24,176v32a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V176A16,16,0,0,0,224,162.16ZM116,36a12,12,0,1,1,12,12A12,12,0,0,1,116,36Zm12,28a80.09,80.09,0,0,1,80,80v16H48V144A80.09,80.09,0,0,1,128,64Zm-8,112v32H80V176Zm16,0h40v32H136Zm-96,0H64v32H40Zm176,32H192V176h24v32Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,144v24H40V144a88,88,0,0,1,176,0Z\"/>";

export const Beanie = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BeanieProps) => {
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
