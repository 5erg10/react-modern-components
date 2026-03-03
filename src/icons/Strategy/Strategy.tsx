import { SVGProps } from "react";

export type StrategyVariant = "duotone" | "fill" | "light";

export interface StrategyProps extends SVGProps<SVGSVGElement> {
  variant?: StrategyVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M108,188a32,32,0,1,1-32-32A32,32,0,0,1,108,188ZM53.66,117.66,68,103.31l14.34,14.35a8,8,0,0,0,11.32-11.32L79.31,92,93.66,77.66A8,8,0,0,0,82.34,66.34L68,80.69,53.66,66.34A8,8,0,0,0,42.34,77.66L56.69,92,42.34,106.34a8,8,0,0,0,11.32,11.32ZM215.31,188l14.35-14.34a8,8,0,0,0-11.32-11.32L204,176.69l-14.34-14.35a8,8,0,0,0-11.32,11.32L192.69,188l-14.35,14.34a8,8,0,0,0,11.32,11.32L204,199.31l14.34,14.35a8,8,0,0,0,11.32-11.32ZM165.66,50.34,163.31,48H184a8,8,0,0,0,0-16H144a8,8,0,0,0-8,8V80a8,8,0,0,0,16,0V59.31l2.34,2.35c17.93,17.93,17.9,35.4,14.71,46.9-4.64,16.77-19.36,31.77-35,35.68A8,8,0,0,0,136,160a8.13,8.13,0,0,0,1.95-.24c21.21-5.3,40.35-24.6,46.53-46.93C190.58,90.78,183.9,68.59,165.66,50.34Z\"/>";
const LIGHT_INNER     = "<path d=\"M76,154a34,34,0,1,0,34,34A34,34,0,0,0,76,154Zm0,56a22,22,0,1,1,22-22A22,22,0,0,1,76,210ZM43.76,107.76,59.52,92,43.76,76.24a6,6,0,0,1,8.48-8.48L68,83.52,83.76,67.76a6,6,0,0,1,8.48,8.48L76.48,92l15.76,15.76a6,6,0,1,1-8.48,8.48L68,100.48,52.24,116.24a6,6,0,0,1-8.48-8.48Zm184.48,96a6,6,0,1,1-8.48,8.48L204,196.48l-15.76,15.76a6,6,0,0,1-8.48-8.48L195.52,188l-15.76-15.76a6,6,0,0,1,8.48-8.48L204,179.52l15.76-15.76a6,6,0,0,1,8.48,8.48L212.48,188ZM182.55,112.3c-6,21.66-24.55,40.38-45.09,45.52A6.14,6.14,0,0,1,136,158a6,6,0,0,1-1.46-11.82c16.29-4.07,31.62-19.67,36.44-37.09,3.33-12,3.39-30.24-15.22-48.85L150,54.48V80a6,6,0,0,1-12,0V40a6,6,0,0,1,6-6h40a6,6,0,0,1,0,12H158.48l5.76,5.76C182,69.47,188.45,91,182.55,112.3Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M76,152a36,36,0,1,0,36,36A36,36,0,0,0,76,152Zm0,56a20,20,0,1,1,20-20A20,20,0,0,1,76,208ZM42.34,106.34,56.69,92,42.34,77.66A8,8,0,0,1,53.66,66.34L68,80.69,82.34,66.34A8,8,0,0,1,93.66,77.66L79.31,92l14.35,14.34a8,8,0,0,1-11.32,11.32L68,103.31,53.66,117.66a8,8,0,0,1-11.32-11.32Zm187.32,96a8,8,0,0,1-11.32,11.32L204,199.31l-14.34,14.35a8,8,0,0,1-11.32-11.32L192.69,188l-14.35-14.34a8,8,0,0,1,11.32-11.32L204,176.69l14.34-14.35a8,8,0,0,1,11.32,11.32L215.31,188Zm-45.19-89.51c-6.18,22.33-25.32,41.63-46.53,46.93A8.13,8.13,0,0,1,136,160a8,8,0,0,1-1.93-15.76c15.63-3.91,30.35-18.91,35-35.68,3.19-11.5,3.22-29-14.71-46.9L152,59.31V80a8,8,0,0,1-16,0V40a8,8,0,0,1,8-8h40a8,8,0,0,1,0,16H163.31l2.35,2.34C183.9,68.59,190.58,90.78,184.47,112.83Z\"/>";
const SECONDARY_PATHS = "<path d=\"M104,188a28,28,0,1,1-28-28A28,28,0,0,1,104,188Z\"/>";

export const Strategy = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: StrategyProps) => {
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
