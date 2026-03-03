import { SVGProps } from "react";

export type ProjectorScreenChartVariant = "duotone" | "fill" | "light";

export interface ProjectorScreenChartProps extends SVGProps<SVGSVGElement> {
  variant?: ProjectorScreenChartVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M232,64V48a16,16,0,0,0-16-16H40A16,16,0,0,0,24,48V64A16,16,0,0,0,40,80v96H32a8,8,0,0,0,0,16h88v17.38a24,24,0,1,0,16,0V192h88a8,8,0,0,0,0-16h-8V80A16,16,0,0,0,232,64ZM104,144a8,8,0,0,1-16,0V128a8,8,0,0,1,16,0Zm24,96a8,8,0,1,1,8-8A8,8,0,0,1,128,240Zm8-96a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32,0a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM40,64V48H216V64H40Z\"/>";
const LIGHT_INNER     = "<path d=\"M90,144V128a6,6,0,0,1,12,0v16a6,6,0,0,1-12,0Zm38,6a6,6,0,0,0,6-6V120a6,6,0,0,0-12,0v24A6,6,0,0,0,128,150Zm32,0a6,6,0,0,0,6-6V112a6,6,0,0,0-12,0v32A6,6,0,0,0,160,150Zm54-72V178h10a6,6,0,0,1,0,12H134v20.84a22,22,0,1,1-12,0V190H32a6,6,0,0,1,0-12H42V78H40A14,14,0,0,1,26,64V48A14,14,0,0,1,40,34H216a14,14,0,0,1,14,14V64a14,14,0,0,1-14,14ZM128,222a10,10,0,1,0,10,10A10,10,0,0,0,128,222ZM40,66H216a2,2,0,0,0,2-2V48a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V64A2,2,0,0,0,40,66ZM202,78H54V178H202Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M88,144V128a8,8,0,0,1,16,0v16a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V120a8,8,0,0,0-16,0v24A8,8,0,0,0,128,152Zm32,0a8,8,0,0,0,8-8V112a8,8,0,0,0-16,0v32A8,8,0,0,0,160,152Zm56-72v96h8a8,8,0,0,1,0,16H136v17.38a24,24,0,1,1-16,0V192H32a8,8,0,0,1,0-16h8V80A16,16,0,0,1,24,64V48A16,16,0,0,1,40,32H216a16,16,0,0,1,16,16V64A16,16,0,0,1,216,80ZM136,232a8,8,0,1,0-8,8A8,8,0,0,0,136,232ZM40,64H216V48H40ZM200,80H56v96H200Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,72V184H48V72Z\"/>";

export const ProjectorScreenChart = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ProjectorScreenChartProps) => {
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
