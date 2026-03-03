import { SVGProps } from "react";

export type LighthouseVariant = "duotone" | "fill" | "light";

export interface LighthouseProps extends SVGProps<SVGSVGElement> {
  variant?: LighthouseVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,80a8,8,0,0,0-8,8v16H188.85L184,55.2A8,8,0,0,0,181.31,50h0L138.44,11.88l-.2-.17a16,16,0,0,0-20.48,0l-.2.17L74.68,50v0A7.93,7.93,0,0,0,72,55.2L67.15,104H56V88a8,8,0,0,0-16,0v24a8,8,0,0,0,8,8H65.54l-9.47,94.48A16,16,0,0,0,72,232H184a16,16,0,0,0,15.92-17.56L190.46,120H208a8,8,0,0,0,8-8V88A8,8,0,0,0,208,80ZM87.24,64h81.52l4,40H136V88a8,8,0,0,0-16,0v16H83.23ZM72,216l4.81-48H179.19L184,216Z\"/>";
const LIGHT_INNER     = "<path d=\"M208,82a6,6,0,0,0-6,6v18H187L182,55.4a6,6,0,0,0-2-3.88L137.11,13.37l-.15-.12a14,14,0,0,0-17.92,0l-.15.12L76,51.52a6,6,0,0,0-2,3.88L69,106H54V88a6,6,0,0,0-12,0v24a6,6,0,0,0,6,6H67.75l-9.69,96.67A14,14,0,0,0,72,230H184a14,14,0,0,0,13.93-15.36L188.25,118H208a6,6,0,0,0,6-6V88A6,6,0,0,0,208,82ZM126.77,22.42a2,2,0,0,1,2.46,0l31,27.58H95.77ZM85.43,62h85.14L175,106H134V88a6,6,0,0,0-12,0v18H81Zm100,155.35A2,2,0,0,1,184,218H72a2,2,0,0,1-2-2.16L74.2,174H181.8L186,215.81A2,2,0,0,1,185.48,217.35ZM180.6,162H75.4l4.41-44h96.38Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M208,80a8,8,0,0,0-8,8v16H188.85L184,55.2A8,8,0,0,0,181.32,50L138.44,11.88l-.2-.17a16,16,0,0,0-20.48,0l-.2.17L74.68,50A8,8,0,0,0,72,55.2L67.15,104H56V88a8,8,0,0,0-16,0v24a8,8,0,0,0,8,8H65.54l-9.47,94.48A16,16,0,0,0,72,232H184a16,16,0,0,0,15.92-17.56L190.46,120H208a8,8,0,0,0,8-8V88A8,8,0,0,0,208,80ZM128,24l27,24H101ZM87.24,64h81.52l4,40H136V88a8,8,0,0,0-16,0v16H83.23ZM72,216l4-40H180l4,40Zm106.39-56H77.61l4-40h92.76Z\"/>";
const SECONDARY_PATHS = "<path d=\"M181.61,112H74.39L80,56h96ZM192,215.24,187.23,168H68.77L64,215.24A8,8,0,0,0,72,224H184A8,8,0,0,0,192,215.24Z\"/>";

export const Lighthouse = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: LighthouseProps) => {
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
