import { SVGProps } from "react";

export type FolderDashedVariant = "duotone" | "fill" | "light";

export interface FolderDashedProps extends SVGProps<SVGSVGElement> {
  variant?: FolderDashedVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M96,208a8,8,0,0,1-8,8H39.38A15.4,15.4,0,0,1,24,200.62V192a8,8,0,0,1,16,0v8H88A8,8,0,0,1,96,208Zm64-8H128a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm64-56a8,8,0,0,0-8,8v48H200a8,8,0,0,0,0,16h16.89A15.13,15.13,0,0,0,232,200.89V152A8,8,0,0,0,224,144Zm-8-72H168a8,8,0,0,0,0,16h48v24a8,8,0,0,0,16,0V88A16,16,0,0,0,216,72ZM32,88h96a8,8,0,0,0,5.66-13.66L104,44.69A15.86,15.86,0,0,0,92.69,40H40A16,16,0,0,0,24,56V80A8,8,0,0,0,32,88Zm0,72a8,8,0,0,0,8-8V120a8,8,0,0,0-16,0v32A8,8,0,0,0,32,160Z\"/>";
const LIGHT_INNER     = "<path d=\"M94,208a6,6,0,0,1-6,6H39.38A13.39,13.39,0,0,1,26,200.62V192a6,6,0,0,1,12,0v8.62A1.4,1.4,0,0,0,39.38,202H88A6,6,0,0,1,94,208Zm66-6H128a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12Zm64-56a6,6,0,0,0-6,6v48.89a1.11,1.11,0,0,1-1.11,1.11H200a6,6,0,0,0,0,12h16.89A13.12,13.12,0,0,0,230,200.89V152A6,6,0,0,0,224,146Zm-8-72H168a6,6,0,0,0,0,12h48a2,2,0,0,1,2,2v24a6,6,0,0,0,12,0V88A14,14,0,0,0,216,74ZM26,80V56A14,14,0,0,1,40,42H92.69a13.94,13.94,0,0,1,9.9,4.1l29.65,29.66A6,6,0,0,1,128,86H32A6,6,0,0,1,26,80Zm12-6h75.51L94.1,54.59A2,2,0,0,0,92.69,54H40a2,2,0,0,0-2,2Zm-6,84a6,6,0,0,0,6-6V120a6,6,0,0,0-12,0v32A6,6,0,0,0,32,158Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M96,208a8,8,0,0,1-8,8H39.38A15.4,15.4,0,0,1,24,200.62V192a8,8,0,0,1,16,0v8H88A8,8,0,0,1,96,208Zm64-8H128a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm64-56a8,8,0,0,0-8,8v48H200a8,8,0,0,0,0,16h16.89A15.13,15.13,0,0,0,232,200.89V152A8,8,0,0,0,224,144Zm-8-72H168a8,8,0,0,0,0,16h48v24a8,8,0,0,0,16,0V88A16,16,0,0,0,216,72ZM24,80V56A16,16,0,0,1,40,40H92.69A15.86,15.86,0,0,1,104,44.69l29.66,29.65A8,8,0,0,1,128,88H32A8,8,0,0,1,24,80Zm16-8h68.69l-16-16H40Zm-8,88a8,8,0,0,0,8-8V120a8,8,0,0,0-16,0v32A8,8,0,0,0,32,160Z\"/>";
const SECONDARY_PATHS = "<path d=\"M128,80H32V56a8,8,0,0,1,8-8H92.69a8,8,0,0,1,5.65,2.34Z\"/>";

export const FolderDashed = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: FolderDashedProps) => {
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
