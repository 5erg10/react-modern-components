import { SVGProps } from "react";

export type HeadlightsVariant = "duotone" | "fill" | "light";

export interface HeadlightsProps extends SVGProps<SVGSVGElement> {
  variant?: HeadlightsVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M160,80a8,8,0,0,1,8-8h72a8,8,0,0,1,0,16H168A8,8,0,0,1,160,80Zm80,88H168a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm0-64H168a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm0,32H168a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16ZM128,48H88.9C44.62,48,8.33,83.62,8,127.39A80,80,0,0,0,88,208h40a16,16,0,0,0,16-16V64A16,16,0,0,0,128,48Z\"/>";
const LIGHT_INNER     = "<path d=\"M162,80a6,6,0,0,1,6-6h72a6,6,0,0,1,0,12H168A6,6,0,0,1,162,80Zm78,90H168a6,6,0,0,0,0,12h72a6,6,0,0,0,0-12Zm0-64H168a6,6,0,0,0,0,12h72a6,6,0,0,0,0-12Zm0,32H168a6,6,0,0,0,0,12h72a6,6,0,0,0,0-12ZM142,64V192a14,14,0,0,1-14,14H88a78,78,0,0,1-78-78.59C10.32,84.73,45.71,50,88.9,50H128A14,14,0,0,1,142,64Zm-12,0a2,2,0,0,0-2-2H88.9C52.28,62,22.27,91.38,22,127.5A66,66,0,0,0,88,194h40a2,2,0,0,0,2-2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M160,80a8,8,0,0,1,8-8h72a8,8,0,0,1,0,16H168A8,8,0,0,1,160,80Zm80,88H168a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm0-64H168a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm0,32H168a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16ZM144,64V192a16,16,0,0,1-16,16H88A80,80,0,0,1,8,127.39C8.33,83.62,44.62,48,88.9,48H128A16,16,0,0,1,144,64Zm-16,0H88.9C53.38,64,24.26,92.49,24,127.51A64,64,0,0,0,88,192h40Z\"/>";
const SECONDARY_PATHS = "<path d=\"M136,64V192a8,8,0,0,1-8,8H88a72,72,0,0,1-72-72.55C16.3,87.75,49.2,56,88.9,56H128A8,8,0,0,1,136,64Z\"/>";

export const Headlights = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: HeadlightsProps) => {
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
