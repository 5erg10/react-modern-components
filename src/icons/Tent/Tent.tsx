import { SVGProps } from "react";

export type TentVariant = "duotone" | "fill" | "light";

export interface TentProps extends SVGProps<SVGSVGElement> {
  variant?: TentVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M255.31,188.75l-64-144A8,8,0,0,0,184,40H72a8,8,0,0,0-7.31,4.75h0l0,.12v0L.69,188.75A8,8,0,0,0,8,200H248a8,8,0,0,0,7.31-11.25ZM64,184H20.31L64,85.7Zm16,0V85.7L123.69,184Z\"/>";
const LIGHT_INNER     = "<path d=\"M253.48,189.56l-64-144A6,6,0,0,0,184,42H72a6,6,0,0,0-5.45,3.51l0,.05,0,.09v0L2.52,189.56A6,6,0,0,0,8,198H248a6,6,0,0,0,5.48-8.44ZM66,76.27V186H17.23ZM78,186V76.27L126.77,186Zm61.9,0L81.23,54H180.1l58.67,132Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M255.31,188.75l-64-144A8,8,0,0,0,184,40H72a8,8,0,0,0-7.27,4.69.21.21,0,0,0,0,.06l0,.12,0,0L.69,188.75A8,8,0,0,0,8,200H248a8,8,0,0,0,7.31-11.25ZM64,184H20.31L64,85.7Zm16,0V85.7L123.69,184Zm61.2,0L84.31,56H178.8l56.89,128Z\"/>";
const SECONDARY_PATHS = "<path d=\"M136,192H8L72,48Z\"/>";

export const Tent = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: TentProps) => {
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
