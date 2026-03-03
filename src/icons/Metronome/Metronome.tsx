import { SVGProps } from "react";

export type MetronomeVariant = "duotone" | "fill" | "light";

export interface MetronomeProps extends SVGProps<SVGSVGElement> {
  variant?: MetronomeVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M187.14,114.84l26.78-29.46a8,8,0,0,0-11.84-10.76l-20.55,22.6-17.2-54.07A15.94,15.94,0,0,0,149.08,32H106.91A15.94,15.94,0,0,0,91.66,43.15l-50.91,160A16,16,0,0,0,56,224H200a16,16,0,0,0,15.25-20.85ZM71.27,160,106.91,48h42.17l20,62.9L124.46,160Zm74.81,0,28.62-31.48,10,31.48Z\"/>";
const LIGHT_INNER     = "<path d=\"M213.33,203.75l-28.45-89.41L212.43,84A6,6,0,0,0,203.55,76l-22.87,25.17L162.42,43.75A13.94,13.94,0,0,0,149.08,34H106.92a13.94,13.94,0,0,0-13.34,9.75l-50.91,160A14,14,0,0,0,56,222H200a14,14,0,0,0,13.34-18.25ZM187.45,162H141.56l34-37.39ZM105,47.39A2,2,0,0,1,106.92,46h42.16A2,2,0,0,1,151,47.39l20.36,64-46,50.61H68.55ZM201.6,209.18A1.94,1.94,0,0,1,200,210H56a2,2,0,0,1-1.9-2.61L64.73,174H191.27l10.62,33.39A1.94,1.94,0,0,1,201.6,209.18Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M187.14,114.84l26.78-29.46a8,8,0,0,0-11.84-10.76l-20.55,22.6-17.2-54.07A15.94,15.94,0,0,0,149.08,32H106.91A15.94,15.94,0,0,0,91.66,43.15l-50.91,160A16,16,0,0,0,56,224H200a16,16,0,0,0,15.25-20.85ZM184.72,160H146.08l28.62-31.48ZM106.91,48h42.17l20,62.9L124.46,160H71.27ZM56,208l10.18-32H189.81L200,208Z\"/>";
const SECONDARY_PATHS = "<path d=\"M200,216H56a8,8,0,0,1-7.63-10.43l12-37.57H195.66l12,37.57A8,8,0,0,1,200,216Z\"/>";

export const Metronome = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: MetronomeProps) => {
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
