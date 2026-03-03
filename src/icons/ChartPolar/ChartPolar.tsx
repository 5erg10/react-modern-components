import { SVGProps } from "react";

export type ChartPolarVariant = "duotone" | "fill" | "light";

export interface ChartPolarProps extends SVGProps<SVGSVGElement> {
  variant?: ChartPolarVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M120,199.54v27.74a4,4,0,0,1-4.46,4,104.22,104.22,0,0,1-90.8-90.8,4,4,0,0,1,4-4.46H56.46A72.11,72.11,0,0,0,120,199.54ZM183.42,136H136v47.42A56.11,56.11,0,0,0,183.42,136ZM136,72.58V120h47.42A56.11,56.11,0,0,0,136,72.58ZM227.28,136H199.54A72.11,72.11,0,0,1,136,199.54v27.74a4,4,0,0,0,4.46,4,104.22,104.22,0,0,0,90.8-90.8A4,4,0,0,0,227.28,136Zm-27.74-16h27.74a4,4,0,0,0,4-4.46,104.22,104.22,0,0,0-90.8-90.8,4,4,0,0,0-4.46,4V56.46A72.11,72.11,0,0,1,199.54,120Zm-84-95.26a104.22,104.22,0,0,0-90.8,90.8,4,4,0,0,0,4,4.46H56.46A72.11,72.11,0,0,1,120,56.46V28.72A4,4,0,0,0,115.54,24.74ZM72.58,120H120V72.58A56.11,56.11,0,0,0,72.58,120ZM120,183.42V136H72.58A56.11,56.11,0,0,0,120,183.42Z\"/>";
const LIGHT_INNER     = "<path d=\"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm89.8,96H189.7A62.07,62.07,0,0,0,134,66.3V38.2A90.15,90.15,0,0,1,217.8,122ZM122,122H78.37A50.09,50.09,0,0,1,122,78.37Zm0,12v43.63A50.09,50.09,0,0,1,78.37,134Zm12,0h43.63A50.09,50.09,0,0,1,134,177.63Zm0-12V78.37A50.09,50.09,0,0,1,177.63,122ZM122,38.2V66.3A62.07,62.07,0,0,0,66.3,122H38.2A90.15,90.15,0,0,1,122,38.2ZM38.2,134H66.3A62.07,62.07,0,0,0,122,189.7v28.1A90.15,90.15,0,0,1,38.2,134ZM134,217.8V189.7A62.07,62.07,0,0,0,189.7,134h28.1A90.15,90.15,0,0,1,134,217.8Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm87.63,96H191.48A64.1,64.1,0,0,0,136,64.52V40.37A88.13,88.13,0,0,1,215.63,120ZM120,120H80.68A48.09,48.09,0,0,1,120,80.68Zm0,16v39.32A48.09,48.09,0,0,1,80.68,136Zm16,0h39.32A48.09,48.09,0,0,1,136,175.32Zm0-16V80.68A48.09,48.09,0,0,1,175.32,120ZM120,40.37V64.52A64.1,64.1,0,0,0,64.52,120H40.37A88.13,88.13,0,0,1,120,40.37ZM40.37,136H64.52A64.1,64.1,0,0,0,120,191.48v24.15A88.13,88.13,0,0,1,40.37,136ZM136,215.63V191.48A64.1,64.1,0,0,0,191.48,136h24.15A88.13,88.13,0,0,1,136,215.63Z\"/>";
const SECONDARY_PATHS = "<path d=\"M184,128a56,56,0,1,1-56-56A56,56,0,0,1,184,128Z\"/>";

export const ChartPolar = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ChartPolarProps) => {
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
