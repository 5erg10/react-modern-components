import { SVGProps } from "react";

export type TractorVariant = "duotone" | "fill" | "light";

export interface TractorProps extends SVGProps<SVGSVGElement> {
  variant?: TractorVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M80,172a12,12,0,1,1-12-12A12,12,0,0,1,80,172Zm40,0a52,52,0,1,1-52-52A52.06,52.06,0,0,1,120,172Zm-24,0a28,28,0,1,0-28,28A28,28,0,0,0,96,172Zm152,16a36,36,0,0,1-71.77,4H144a8,8,0,0,1-8-8V172a68.07,68.07,0,0,0-68-68H40a8,8,0,0,1,0-16h8V56H40a8,8,0,0,1,0-16H160a8,8,0,0,1,0,16h-8V97.88l24,6.5V72a8,8,0,0,1,16,0v36.71l36.39,9.86.21.06A15.89,15.89,0,0,1,240,134v31.46A35.8,35.8,0,0,1,248,188Zm-20,0a16,16,0,1,0-16,16A16,16,0,0,0,228,188Z\"/>";
const LIGHT_INNER     = "<path d=\"M238,166.12V134a13.91,13.91,0,0,0-10-13.41l-.15,0L190,110.24V72a6,6,0,0,0-12,0v35l-28-7.58V54h10a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12H50V90H40a6,6,0,0,0,0,12H68a70.08,70.08,0,0,1,70,70v12a6,6,0,0,0,6,6h34.06A34,34,0,1,0,238,166.12ZM68,90H62V54h76v75.34A82,82,0,0,0,68,90Zm82,82V111.84l74.63,20.21A2,2,0,0,1,226,134V157a34,34,0,0,0-46.5,21H150Zm62,38a22,22,0,1,1,22-22A22,22,0,0,1,212,210ZM68,122a50,50,0,1,0,50,50A50.06,50.06,0,0,0,68,122Zm0,88a38,38,0,1,1,38-38A38,38,0,0,1,68,210Zm10-38a10,10,0,1,1-10-10A10,10,0,0,1,78,172Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M240,165.41V134a15.89,15.89,0,0,0-11.4-15.32l-.21-.06L192,108.71V72a8,8,0,0,0-16,0v32.38l-24-6.5V56h8a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16h8V88H40a8,8,0,0,0,0,16H68a68.07,68.07,0,0,1,68,68v12a8,8,0,0,0,8,8h32.23A36,36,0,1,0,240,165.41ZM68,88H64V56h72v66.77A83.92,83.92,0,0,0,68,88Zm84,26.45L224,134v20.1A36,36,0,0,0,178.06,176H152ZM212,208a20,20,0,1,1,20-20A20,20,0,0,1,212,208ZM68,120a52,52,0,1,0,52,52A52.06,52.06,0,0,0,68,120Zm0,88a36,36,0,1,1,36-36A36,36,0,0,1,68,208Zm12-36a12,12,0,1,1-12-12A12,12,0,0,1,80,172Z\"/>";
const SECONDARY_PATHS = "<path d=\"M240,188a28,28,0,1,1-28-28A28,28,0,0,1,240,188ZM68,128a44,44,0,1,0,44,44A44,44,0,0,0,68,128Z\"/>";

export const Tractor = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: TractorProps) => {
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
