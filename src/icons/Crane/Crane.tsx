import { SVGProps } from "react";

export type CraneVariant = "duotone" | "fill" | "light";

export interface CraneProps extends SVGProps<SVGSVGElement> {
  variant?: CraneVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M228.12,17.14a8,8,0,0,0-7.88-.2L102,80H32A16,16,0,0,0,16,96V200a16,16,0,0,0,16,16h88a16,16,0,0,0,16-16V168a7.31,7.31,0,0,0-.08-1.05l0-.24a9.6,9.6,0,0,0-.22-1,.09.09,0,0,0,0-.05v0a.64.64,0,0,1,0-.07L113.54,92,216,37.33V160H200v-8a8,8,0,0,0-16,0v8a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V24A8,8,0,0,0,228.12,17.14ZM48,96v64H32V96ZM32,200h0V176h88v24Z\"/>";
const LIGHT_INNER     = "<path d=\"M227.09,18.86a6,6,0,0,0-5.91-.15L102.5,82H32A14,14,0,0,0,18,96V200a14,14,0,0,0,14,14h88a14,14,0,0,0,14-14V168a6.28,6.28,0,0,0-.25-1.72L111.16,91,218,34V160a2,2,0,0,1-2,2H200a2,2,0,0,1-2-2v-8a6,6,0,0,0-12,0v8a14,14,0,0,0,14,14h16a14,14,0,0,0,14-14V24A6,6,0,0,0,227.09,18.86ZM99.54,94l20.4,68H62V94ZM32,94H50v68H30V96A2,2,0,0,1,32,94Zm88,108H32a2,2,0,0,1-2-2V174h92v26A2,2,0,0,1,120,202Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M228.12,17.14a8,8,0,0,0-7.88-.2L102,80H32A16,16,0,0,0,16,96V200a16,16,0,0,0,16,16h88a16,16,0,0,0,16-16V168a7.81,7.81,0,0,0-.34-2.3L113.54,92,216,37.33V160H200v-8a8,8,0,0,0-16,0v8a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V24A8,8,0,0,0,228.12,17.14ZM98.05,96l19.2,64H64V96ZM48,96v64H32V96ZM32,200h0V176h88v24Z\"/>";
const SECONDARY_PATHS = "<path d=\"M128,168H56V88h48Z\"/>";

export const Crane = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CraneProps) => {
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
