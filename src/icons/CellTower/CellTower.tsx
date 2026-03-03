import { SVGProps } from "react";

export type CellTowerVariant = "duotone" | "fill" | "light";

export interface CellTowerProps extends SVGProps<SVGSVGElement> {
  variant?: CellTowerVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M135.16,84.42a8,8,0,0,0-14.32,0l-72,144a8,8,0,0,0,14.31,7.16L77,208h102.1l13.79,27.58A8,8,0,0,0,200,240a8,8,0,0,0,7.15-11.58ZM128,105.89,155.06,160H100.94Zm31.49-12.15a32,32,0,1,0-63,0,8,8,0,1,1-15.74,2.85,48,48,0,1,1,94.46,0,8,8,0,0,1-7.86,6.58,8.74,8.74,0,0,1-1.43-.13A8,8,0,0,1,159.49,93.74ZM64.15,136.21a80,80,0,1,1,127.7,0,8,8,0,0,1-12.76-9.65,64,64,0,1,0-102.18,0,8,8,0,0,1-12.76,9.65Z\"/>";
const LIGHT_INNER     = "<path d=\"M133.37,85.32a6,6,0,0,0-10.74,0l-72,144a6,6,0,0,0,10.74,5.37L75.71,206H180.29l14.34,28.68A6,6,0,0,0,200,238a5.87,5.87,0,0,0,2.68-.64,6,6,0,0,0,2.69-8.05ZM128,101.42,158.29,162H97.71ZM81.71,194l10-20h72.58l10,20Zm79.74-99.9A33.59,33.59,0,0,0,162,88a34,34,0,0,0-68,0,33.59,33.59,0,0,0,.55,6.1,6,6,0,1,1-11.81,2.13,46,46,0,1,1,90.52,0,6,6,0,0,1-5.89,4.94,5.64,5.64,0,0,1-1.08-.1A6,6,0,0,1,161.45,94.1ZM65.75,135A78,78,0,1,1,206,88a77.33,77.33,0,0,1-15.75,47,6,6,0,1,1-9.57-7.24A65.42,65.42,0,0,0,194,88,66,66,0,0,0,62,88a65.42,65.42,0,0,0,13.32,39.76A6,6,0,1,1,65.75,135Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M135.16,84.42a8,8,0,0,0-14.32,0l-72,144a8,8,0,0,0,14.31,7.16L77,208h102.1l13.79,27.58A8,8,0,0,0,200,240a8,8,0,0,0,7.15-11.58ZM128,105.89,155.06,160H100.94ZM85,192l8-16h70.1l8,16Zm74.54-98.26a32,32,0,1,0-63,0,8,8,0,1,1-15.74,2.85,48,48,0,1,1,94.46,0,8,8,0,0,1-7.86,6.58,8.74,8.74,0,0,1-1.43-.13A8,8,0,0,1,159.49,93.74ZM64.15,136.21a80,80,0,1,1,127.7,0,8,8,0,0,1-12.76-9.65,64,64,0,1,0-102.18,0,8,8,0,0,1-12.76,9.65Z\"/>";
const SECONDARY_PATHS = "<path d=\"M200,88a72,72,0,0,1-39.8,64.4L128,88,95.8,152.4A72,72,0,1,1,200,88Z\"/>";

export const CellTower = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CellTowerProps) => {
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
