import { SVGProps } from "react";

export type DetectiveVariant = "duotone" | "fill" | "light";

export interface DetectiveProps extends SVGProps<SVGSVGElement> {
  variant?: DetectiveVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M256,120a8,8,0,0,1-8,8H8a8,8,0,0,1,0-16H35.92l47.5-65.41a16,16,0,0,1,25.31-.72l12.85,14.9.2.23a7.95,7.95,0,0,0,12.44,0l.2-.23,12.85-14.9a16,16,0,0,1,25.31.72L220.08,112H248A8,8,0,0,1,256,120Zm-76,24a36,36,0,0,0-35.77,32H111.77a36,36,0,1,0-1.83,16h36.12A36,36,0,1,0,180,144Z\"/>";
const LIGHT_INNER     = "<path d=\"M248,114H219.06L171,47.77a14,14,0,0,0-22.16-.61L135.93,62.08a1.15,1.15,0,0,0-.14.17,10,10,0,0,1-15.58,0,1.15,1.15,0,0,0-.14-.17L107.2,47.16A14,14,0,0,0,85,47.77L36.94,114H8a6,6,0,0,0,0,12H248a6,6,0,0,0,0-12ZM94.75,54.82a2,2,0,0,1,3.15-.07l.15.17,12.86,14.92A21.88,21.88,0,0,0,128,78h0a21.88,21.88,0,0,0,17.09-8.16L158,54.92l.15-.17a2,2,0,0,1,3.15.07l43,59.18H51.77ZM180,146a34,34,0,0,0-33.94,32H109.94a34,34,0,1,0-1.44,12h39A34,34,0,1,0,180,146ZM76,202a22,22,0,1,1,22-22A22,22,0,0,1,76,202Zm104,0a22,22,0,1,1,22-22A22,22,0,0,1,180,202Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M248,112H220.08l-47.5-65.41a16,16,0,0,0-25.31-.72l-12.85,14.9-.2.23a7.95,7.95,0,0,1-12.44,0l-.2-.23-12.85-14.9a16,16,0,0,0-25.31.72L35.92,112H8a8,8,0,0,0,0,16H248a8,8,0,0,0,0-16ZM96.34,56l.19.24,12.85,14.89a24,24,0,0,0,37.24,0l12.85-14.89c.06-.08.1-.16.17-.24l40.66,56H55.69ZM180,144a36,36,0,0,0-35.77,32H111.77a36,36,0,1,0-1.83,16h36.12A36,36,0,1,0,180,144ZM76,200a20,20,0,1,1,20-20A20,20,0,0,1,76,200Zm104,0a20,20,0,1,1,20-20A20,20,0,0,1,180,200Z\"/>";
const SECONDARY_PATHS = "<path d=\"M104,180a28,28,0,1,1-28-28A28,28,0,0,1,104,180Zm76-28a28,28,0,1,0,28,28A28,28,0,0,0,180,152ZM166.11,51.29a8,8,0,0,0-12.7-.29L140.47,66a16,16,0,0,1-24.94,0L102.59,51a8,8,0,0,0-12.7.29L40,120H216Z\"/>";

export const Detective = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: DetectiveProps) => {
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
