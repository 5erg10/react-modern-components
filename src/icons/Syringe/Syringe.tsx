import { SVGProps } from "react";

export type SyringeVariant = "duotone" | "fill" | "light";

export interface SyringeProps extends SVGProps<SVGSVGElement> {
  variant?: SyringeVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M237.66,77.6a8,8,0,0,1-11.32,0L208,59.25,179.3,88l34.35,34.35a8,8,0,0,1-11.32,11.32L196,127.27l-84,84A16,16,0,0,1,100.65,216H51.26L29.6,237.66a8,8,0,0,1-11.72-.43,8.21,8.21,0,0,1,.61-11.1l21.45-21.46V155.28A16,16,0,0,1,44.63,144l15.18-15.18a4,4,0,0,1,5.66,0L94.3,157.63a8,8,0,1,0,11.32-11.32L76.78,117.47a4,4,0,0,1,0-5.66l11-11a4,4,0,0,1,5.66,0l28.84,28.84a8,8,0,1,0,11.32-11.32L104.79,89.46a4,4,0,0,1,0-5.66l23.87-23.86-6.35-6.35a8,8,0,0,1,.18-11.49,8.22,8.22,0,0,1,11.37.41L168,76.63l28.69-28.7L178.33,29.58a8,8,0,0,1,.17-11.49,8.23,8.23,0,0,1,11.38.41l47.78,47.78A8,8,0,0,1,237.66,77.6Z\"/>";
const LIGHT_INNER     = "<path d=\"M236.24,67.76l-48-48a6,6,0,0,0-8.48,8.48L199.51,48,168,79.51,132.24,43.76a6,6,0,1,0-8.48,8.48L131.51,60,46.1,145.41a13.94,13.94,0,0,0-4.1,9.9v50.2L19.76,227.76a6,6,0,1,0,8.48,8.48L50.49,214h50.2a13.94,13.94,0,0,0,9.9-4.1L196,124.49l7.76,7.75a6,6,0,0,0,8.48-8.48L176.49,88,208,56.49l19.76,19.75a6,6,0,0,0,8.48-8.48ZM102.1,201.41a2,2,0,0,1-1.41.59H54V155.31a2,2,0,0,1,.59-1.41L74,134.49l21.76,21.75a6,6,0,1,0,8.48-8.48L82.49,126,98,110.49l21.76,21.75a6,6,0,0,0,8.48-8.48L106.49,102,140,68.49,187.51,116Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M237.66,66.34l-48-48a8,8,0,0,0-11.32,11.32L196.69,48,168,76.69,133.66,42.34a8,8,0,0,0-11.32,11.32L128.69,60l-84,84A15.86,15.86,0,0,0,40,155.31v49.38L18.34,226.34a8,8,0,0,0,11.32,11.32L51.31,216h49.38A15.86,15.86,0,0,0,112,211.31l84-84,6.34,6.35a8,8,0,0,0,11.32-11.32L179.31,88,208,59.31l18.34,18.35a8,8,0,0,0,11.32-11.32ZM100.69,200H56V155.31l18-18,20.34,20.35a8,8,0,0,0,11.32-11.32L85.31,126,98,113.31l20.34,20.35a8,8,0,0,0,11.32-11.32L109.31,102,140,71.31,184.69,116Z\"/>";
const SECONDARY_PATHS = "<path d=\"M196,116l-89.66,89.66a8,8,0,0,1-5.65,2.34H48V155.31a8,8,0,0,1,2.34-5.65L140,60Z\"/>";

export const Syringe = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: SyringeProps) => {
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
