import { SVGProps } from "react";

export type WarningDiamondVariant = "duotone" | "fill" | "light";

export interface WarningDiamondProps extends SVGProps<SVGSVGElement> {
  variant?: WarningDiamondVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M235.33,116.72,139.28,20.66a16,16,0,0,0-22.56,0l-96,96.06a16,16,0,0,0,0,22.56l96.05,96.06h0a16,16,0,0,0,22.56,0l96.05-96.06a16,16,0,0,0,0-22.56ZM120,80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z\"/>";
const LIGHT_INNER     = "<path d=\"M122,136V80a6,6,0,0,1,12,0v56a6,6,0,0,1-12,0Zm6,26a10,10,0,1,0,10,10A10,10,0,0,0,128,162Zm110-34a13.82,13.82,0,0,1-4.09,9.86l-96,96.06a14,14,0,0,1-19.72,0h0l-96-96.06a13.93,13.93,0,0,1,0-19.72l96.05-96.06a14,14,0,0,1,19.72,0l96,96.06A13.82,13.82,0,0,1,238,128Zm-12,0a1.94,1.94,0,0,0-.57-1.38L129.38,30.56a2,2,0,0,0-2.76,0L30.57,126.62a2,2,0,0,0,0,2.76l96.05,96.06h0a2,2,0,0,0,2.76,0l96.05-96.06A1.94,1.94,0,0,0,226,128Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M128,72a8,8,0,0,1,8,8v56a8,8,0,0,1-16,0V80A8,8,0,0,1,128,72ZM116,172a12,12,0,1,0,12-12A12,12,0,0,0,116,172Zm124-44a15.85,15.85,0,0,1-4.67,11.28l-96.05,96.06a16,16,0,0,1-22.56,0h0l-96-96.06a16,16,0,0,1,0-22.56l96.05-96.06a16,16,0,0,1,22.56,0l96.05,96.06A15.85,15.85,0,0,1,240,128Zm-16,0L128,32,32,128,128,224h0Z\"/>";
const SECONDARY_PATHS = "<path d=\"M229.67,133.62l-96,96a7.94,7.94,0,0,1-11.24,0l-96-96a7.94,7.94,0,0,1,0-11.24l96.05-96a7.94,7.94,0,0,1,11.24,0l96,96.05A7.94,7.94,0,0,1,229.67,133.62Z\"/>";

export const WarningDiamond = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: WarningDiamondProps) => {
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
