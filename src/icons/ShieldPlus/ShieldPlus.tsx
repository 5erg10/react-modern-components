import { SVGProps } from "react";

export type ShieldPlusVariant = "duotone" | "fill" | "light";

export interface ShieldPlusProps extends SVGProps<SVGSVGElement> {
  variant?: ShieldPlusVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.27,47,25.53a8,8,0,0,0,4.2,0c1-.26,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm-48,96H136v24a8,8,0,0,1-16,0V136H96a8,8,0,0,1,0-16h24V96a8,8,0,0,1,16,0v24h24a8,8,0,0,1,0,16Z\"/>";
const LIGHT_INNER     = "<path d=\"M166,128a6,6,0,0,1-6,6H134v26a6,6,0,0,1-12,0V134H96a6,6,0,0,1,0-12h26V96a6,6,0,0,1,12,0v26h26A6,6,0,0,1,166,128Zm56-72v56c0,51.94-25.12,83.4-46.2,100.64-22.73,18.6-45.27,24.89-46.22,25.15a6,6,0,0,1-3.16,0c-1-.26-23.49-6.55-46.22-25.15C59.12,195.4,34,163.94,34,112V56A14,14,0,0,1,48,42H208A14,14,0,0,1,222,56Zm-12,0a2,2,0,0,0-2-2H48a2,2,0,0,0-2,2v56c0,37.75,13.94,68.39,41.44,91.06A130.83,130.83,0,0,0,128,225.72a131.06,131.06,0,0,0,40.56-22.66C196.06,180.39,210,149.75,210,112Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M88,128a8,8,0,0,1,8-8h24V96a8,8,0,0,1,16,0v24h24a8,8,0,0,1,0,16H136v24a8,8,0,0,1-16,0V136H96A8,8,0,0,1,88,128ZM224,56v56c0,52.72-25.52,84.67-46.93,102.19-23.06,18.86-46,25.27-47,25.53a8,8,0,0,1-4.2,0c-1-.26-23.91-6.67-47-25.53C57.52,196.67,32,164.72,32,112V56A16,16,0,0,1,48,40H208A16,16,0,0,1,224,56Zm-16,0L48,56l0,56c0,37.3,13.82,67.51,41.07,89.81A128.25,128.25,0,0,0,128,223.62a129.3,129.3,0,0,0,39.41-22.2C194.34,179.16,208,149.07,208,112Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,56v56c0,96-88,120-88,120S40,208,40,112V56a8,8,0,0,1,8-8H208A8,8,0,0,1,216,56Z\"/>";

export const ShieldPlus = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ShieldPlusProps) => {
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
