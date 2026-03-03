import { SVGProps } from "react";

export type PrescriptionVariant = "duotone" | "fill" | "light";

export interface PrescriptionProps extends SVGProps<SVGSVGElement> {
  variant?: PrescriptionVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M128,120H96V72h32a24,24,0,0,1,0,48Zm96-72V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM189.66,186.34,175.31,172l14.35-14.34a8,8,0,0,0-11.32-11.32L164,160.69l-26-26A40,40,0,0,0,128,56H88a8,8,0,0,0-8,8V176a8,8,0,0,0,16,0V136h20.69l36,36-14.35,14.34a8,8,0,0,0,11.32,11.32L164,183.31l14.34,14.35a8,8,0,0,0,11.32-11.32Z\"/>";
const LIGHT_INNER     = "<path d=\"M180.49,188l23.75-23.76a6,6,0,0,0-8.48-8.48L172,179.51l-45.58-45.57A50,50,0,0,0,124,34H72a6,6,0,0,0-6,6V192a6,6,0,0,0,12,0V134h31.51l54,54-23.75,23.76a6,6,0,1,0,8.48,8.48L172,196.49l23.76,23.75a6,6,0,0,0,8.48-8.48ZM78,46h46a38,38,0,0,1,0,76H78Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M183.31,188l22.35-22.34a8,8,0,0,0-11.32-11.32L172,176.69l-41.15-41.16A52,52,0,0,0,124,32H72a8,8,0,0,0-8,8V192a8,8,0,0,0,16,0V136h28.69l52,52-22.35,22.34a8,8,0,0,0,11.32,11.32L172,199.31l22.34,22.35a8,8,0,0,0,11.32-11.32ZM80,48h44a36,36,0,0,1,0,72H80Z\"/>";
const SECONDARY_PATHS = "<path d=\"M168,84a44,44,0,0,1-44,44H72V40h52A44,44,0,0,1,168,84Z\"/>";

export const Prescription = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PrescriptionProps) => {
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
