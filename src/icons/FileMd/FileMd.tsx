import { SVGProps } from "react";

export type FileMdVariant = "duotone" | "fill" | "light";

export interface FileMdProps extends SVGProps<SVGSVGElement> {
  variant?: FileMdVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v76a4,4,0,0,0,4,4H196a4,4,0,0,1,4,4V224a8,8,0,0,0,9.19,7.91,8.15,8.15,0,0,0,6.81-8.16V88A8,8,0,0,0,213.66,82.34ZM152,88V44l44,44Zm-8,56H128a8,8,0,0,0-8,8v56a8,8,0,0,0,8,8h15.32c19.66,0,36.21-15.48,36.67-35.13A36,36,0,0,0,144,144Zm-.49,56H136V160h8a20,20,0,0,1,20,20.77C163.58,191.59,154.34,200,143.51,200ZM104,152v55.73A8.17,8.17,0,0,1,96.53,216,8,8,0,0,1,88,208V177.38l-13.32,19a8.3,8.3,0,0,1-4.2,3.2,8,8,0,0,1-9-3L48,177.38v30.35A8.17,8.17,0,0,1,40.53,216,8,8,0,0,1,32,208V152.31a8.27,8.27,0,0,1,4.56-7.53,8,8,0,0,1,10,2.63L68,178.05l21.27-30.39a8.28,8.28,0,0,1,8.06-3.55A8,8,0,0,1,104,152Z\"/>";
const LIGHT_INNER     = "<path d=\"M212.24,83.76l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40v72a6,6,0,0,0,12,0V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50V224a6,6,0,0,0,12,0V88A6,6,0,0,0,212.24,83.76ZM158,46.48,193.52,82H158ZM144,146H128a6,6,0,0,0-6,6v56a6,6,0,0,0,6,6h16a34,34,0,0,0,0-68Zm0,56H134V158h10a22,22,0,0,1,0,44Zm-42-50v56a6,6,0,0,1-12,0V171L72.92,195.44a6,6,0,0,1-9.84,0L46,171v37a6,6,0,0,1-12,0V152a6,6,0,0,1,10.92-3.44l23.08,33,23.08-33A6,6,0,0,1,102,152Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v72a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48V224a8,8,0,0,0,16,0V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM144,144H128a8,8,0,0,0-8,8v56a8,8,0,0,0,8,8h16a36,36,0,0,0,0-72Zm0,56h-8V160h8a20,20,0,0,1,0,40Zm-40-48v56a8,8,0,0,1-16,0V177.38L74.55,196.59a8,8,0,0,1-13.1,0L48,177.38V208a8,8,0,0,1-16,0V152a8,8,0,0,1,14.55-4.59L68,178.05l21.45-30.64A8,8,0,0,1,104,152Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,88H152V32Z\"/>";

export const FileMd = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: FileMdProps) => {
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
