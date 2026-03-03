import { SVGProps } from "react";

export type HandVariant = "duotone" | "fill" | "light";

export interface HandProps extends SVGProps<SVGSVGElement> {
  variant?: HandVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216,64v90.93c0,46.2-36.85,84.55-83,85.06A83.71,83.71,0,0,1,72.6,215.4C50.79,192.33,26.15,136,26.15,136a16,16,0,0,1,6.53-22.23c7.66-4,17.1-.84,21.4,6.62l21,36.44a6.09,6.09,0,0,0,6,3.09l.12,0A8.19,8.19,0,0,0,88,151.74V48a16,16,0,0,1,16.77-16c8.61.4,15.23,7.82,15.23,16.43V112a8,8,0,0,0,8.53,8,8.17,8.17,0,0,0,7.47-8.25V32a16,16,0,0,1,16.77-16c8.61.4,15.23,7.82,15.23,16.43V120a8,8,0,0,0,8.53,8,8.17,8.17,0,0,0,7.47-8.25V64.45c0-8.61,6.62-16,15.23-16.43A16,16,0,0,1,216,64Z\"/>";
const LIGHT_INNER     = "<path d=\"M188,50a25.8,25.8,0,0,0-14,4.11V44a26,26,0,0,0-51.41-5.51A26,26,0,0,0,82,60v71l-7.53-12.1a26,26,0,0,0-45.11,25.87C60.76,211,78.51,238,128,238a86.1,86.1,0,0,0,86-86V76A26,26,0,0,0,188,50Zm14,102a74.09,74.09,0,0,1-74,74c-21,0-34.51-5.05-46.75-17.45C67.81,195,55.54,172,40.1,139.43l-.23-.43a14,14,0,0,1,24.25-14l.1.17,18.68,30A6,6,0,0,0,94,152V60a14,14,0,0,1,28,0v60a6,6,0,0,0,12,0V44a14,14,0,0,1,28,0v76a6,6,0,0,0,12,0V76a14,14,0,0,1,28,0Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M188,48a27.75,27.75,0,0,0-12,2.71V44a28,28,0,0,0-54.65-8.6A28,28,0,0,0,80,60v64l-3.82-6.13a28,28,0,0,0-48.6,27.82c16,33.77,28.93,57.72,43.72,72.69C86.24,233.54,103.2,240,128,240a88.1,88.1,0,0,0,88-88V76A28,28,0,0,0,188,48Zm12,104a72.08,72.08,0,0,1-72,72c-20.38,0-33.51-4.88-45.33-16.85C69.44,193.74,57.26,171,41.9,138.58a6.36,6.36,0,0,0-.3-.58,12,12,0,0,1,20.79-12,1.76,1.76,0,0,0,.14.23l18.67,30A8,8,0,0,0,96,152V60a12,12,0,0,1,24,0v60a8,8,0,0,0,16,0V44a12,12,0,0,1,24,0v76a8,8,0,0,0,16,0V76a12,12,0,0,1,24,0Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,76v76a80,80,0,0,1-80,80c-44.18,0-60.75-21.28-93.32-90a20,20,0,0,1,34.64-20L88,152V60a20,20,0,0,1,40,0V44a20,20,0,0,1,40,0V76a20,20,0,0,1,40,0Z\"/>";

export const Hand = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: HandProps) => {
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
