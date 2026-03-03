import { SVGProps } from "react";

export type MicrosoftWordLogoVariant = "duotone" | "fill" | "light";

export interface MicrosoftWordLogoProps extends SVGProps<SVGSVGElement> {
  variant?: MicrosoftWordLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M200,24H72A16,16,0,0,0,56,40V64H40A16,16,0,0,0,24,80v96a16,16,0,0,0,16,16H56v24a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM68.24,153.94l-12-48a8,8,0,1,1,15.52-3.88l6.76,27,6.32-12.66a8,8,0,0,1,14.32,0l6.32,12.66,6.76-27a8,8,0,0,1,15.52,3.88l-12,48a8,8,0,0,1-6.89,6,8.46,8.46,0,0,1-.87.05,8,8,0,0,1-7.16-4.42L92,137.89l-8.84,17.69a8,8,0,0,1-14.92-1.64ZM200,216H72V192h72a16,16,0,0,0,16-16v-8h40Zm0-64H160V104h40Zm0-64H160V80a16,16,0,0,0-16-16H72V40H200Z\"/>";
const LIGHT_INNER     = "<path d=\"M200,26H72A14,14,0,0,0,58,40V66H40A14,14,0,0,0,26,80v96a14,14,0,0,0,14,14H58v26a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V40A14,14,0,0,0,200,26Zm-42,76h44v52H158ZM70,40a2,2,0,0,1,2-2H200a2,2,0,0,1,2,2V90H158V80a14,14,0,0,0-14-14H70ZM38,176V80a2,2,0,0,1,2-2H144a2,2,0,0,1,2,2v96a2,2,0,0,1-2,2H40A2,2,0,0,1,38,176Zm162,42H72a2,2,0,0,1-2-2V190h74a14,14,0,0,0,14-14V166h44v50A2,2,0,0,1,200,218ZM70.18,153.46l-12-48a6,6,0,1,1,11.64-2.92l8.07,32.27,8.74-17.49a6,6,0,0,1,10.74,0l8.74,17.49,8.07-32.27a6,6,0,1,1,11.64,2.92l-12,48a6,6,0,0,1-5.17,4.5,4.63,4.63,0,0,1-.65,0,6,6,0,0,1-5.37-3.32L92,133.42,81.37,154.68a6,6,0,0,1-11.19-1.22Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M200,24H72A16,16,0,0,0,56,40V64H40A16,16,0,0,0,24,80v96a16,16,0,0,0,16,16H56v24a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24Zm-40,80h40v48H160ZM72,40H200V88H160V80a16,16,0,0,0-16-16H72ZM40,80H144v79.83c0,.06,0,.11,0,.17s0,.11,0,.17V176H40ZM72,216V192h72a16,16,0,0,0,16-16v-8h40v48Zm-3.76-62.06-12-48a8,8,0,1,1,15.52-3.88l6.76,27,6.32-12.66a8,8,0,0,1,14.32,0l6.32,12.66,6.76-27a8,8,0,0,1,15.52,3.88l-12,48a8,8,0,0,1-6.89,6,8.46,8.46,0,0,1-.87.05,8,8,0,0,1-7.16-4.42L92,137.89l-8.84,17.69a8,8,0,0,1-14.92-1.64Z\"/>";
const SECONDARY_PATHS = "<path d=\"M152,80v96a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H144A8,8,0,0,1,152,80Z\"/>";

export const MicrosoftWordLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: MicrosoftWordLogoProps) => {
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
