import { SVGProps } from "react";

export type PopsicleVariant = "duotone" | "fill" | "light";

export interface PopsicleProps extends SVGProps<SVGSVGElement> {
  variant?: PopsicleVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M128,8A72.08,72.08,0,0,0,56,80v96a16,16,0,0,0,16,16h32v40a24,24,0,0,0,48,0V192h32a16,16,0,0,0,16-16V80A72.08,72.08,0,0,0,128,8ZM112,152a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Zm24,80a8,8,0,0,1-16,0V192h16Zm24-80a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Z\"/>";
const LIGHT_INNER     = "<path d=\"M128,10A70.08,70.08,0,0,0,58,80v96a14,14,0,0,0,14,14h34v42a22,22,0,0,0,44,0V190h34a14,14,0,0,0,14-14V80A70.08,70.08,0,0,0,128,10Zm10,222a10,10,0,0,1-20,0V190h20Zm48-56a2,2,0,0,1-2,2H72a2,2,0,0,1-2-2V80a58,58,0,0,1,116,0ZM118,72v80a6,6,0,0,1-12,0V72a6,6,0,0,1,12,0Zm32,0v80a6,6,0,0,1-12,0V72a6,6,0,0,1,12,0Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M128,8A72.08,72.08,0,0,0,56,80v96a16,16,0,0,0,16,16h32v40a24,24,0,0,0,48,0V192h32a16,16,0,0,0,16-16V80A72.08,72.08,0,0,0,128,8Zm8,224a8,8,0,0,1-16,0V192h16Zm48-56H72V80a56,56,0,0,1,112,0v96ZM120,72v80a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Zm32,0v80a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Z\"/>";
const SECONDARY_PATHS = "<path d=\"M192,80v96a8,8,0,0,1-8,8H72a8,8,0,0,1-8-8V80a64,64,0,0,1,64-64h0A64,64,0,0,1,192,80Z\"/>";

export const Popsicle = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PopsicleProps) => {
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
