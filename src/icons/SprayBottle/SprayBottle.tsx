import { SVGProps } from "react";

export type SprayBottleVariant = "duotone" | "fill" | "light";

export interface SprayBottleProps extends SVGProps<SVGSVGElement> {
  variant?: SprayBottleVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M200,80a8,8,0,0,0,8-8,56.06,56.06,0,0,0-56-56H80A16,16,0,0,0,64,32V80a24,24,0,0,1-24,24,8,8,0,0,0,0,16A40,40,0,0,0,80,80h32v24.62a23.87,23.87,0,0,1-9,18.74L87,136.15a39.79,39.79,0,0,0-15,31.23V224a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V211.47A270.88,270.88,0,0,0,174,80ZM80,32h72a40.08,40.08,0,0,1,39.2,32H80Z\"/>";
const LIGHT_INNER     = "<path d=\"M200,78a6,6,0,0,0,6-6,54.06,54.06,0,0,0-54-54H80A14,14,0,0,0,66,32V80a26,26,0,0,1-26,26,6,6,0,0,0,0,12A38,38,0,0,0,78,80V78h36v26.62a25.87,25.87,0,0,1-9.76,20.3l-16,12.79A37.81,37.81,0,0,0,74,167.38V224a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V211.47A268.92,268.92,0,0,0,170.57,78ZM78,32a2,2,0,0,1,2-2h72a42.06,42.06,0,0,1,41.57,36H78ZM194,211.47V224a2,2,0,0,1-2,2H88a2,2,0,0,1-2-2V167.38a25.87,25.87,0,0,1,9.76-20.3l16-12.79A37.81,37.81,0,0,0,126,104.62V78h30.64A256.84,256.84,0,0,1,194,211.47Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M200,80a8,8,0,0,0,8-8,56.06,56.06,0,0,0-56-56H80A16,16,0,0,0,64,32V80a24,24,0,0,1-24,24,8,8,0,0,0,0,16A40,40,0,0,0,80,80h32v24.62a23.87,23.87,0,0,1-9,18.74L87,136.15a39.79,39.79,0,0,0-15,31.23V224a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V211.47A270.88,270.88,0,0,0,174,80ZM80,32h72a40.08,40.08,0,0,1,39.2,32H80ZM192,211.47V224H88V167.38a23.87,23.87,0,0,1,9-18.74l16-12.79a39.79,39.79,0,0,0,15-31.23V80h27.52A254.86,254.86,0,0,1,192,211.47Z\"/>";
const SECONDARY_PATHS = "<path d=\"M200,211.47V224a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V167.38a32,32,0,0,1,12-25l16-12.78a32,32,0,0,0,12-25V72h40A263.14,263.14,0,0,1,200,211.47Z\"/>";

export const SprayBottle = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: SprayBottleProps) => {
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
