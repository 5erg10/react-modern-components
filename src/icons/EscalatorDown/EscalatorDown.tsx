import { SVGProps } from "react";

export type EscalatorDownVariant = "duotone" | "fill" | "light";

export interface EscalatorDownProps extends SVGProps<SVGSVGElement> {
  variant?: EscalatorDownVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M170.34,85.66a8,8,0,0,1,11.32-11.32L192,84.69V48a8,8,0,0,1,16,0V84.69l10.34-10.35a8,8,0,0,1,11.32,11.32l-24,24a8,8,0,0,1-11.32,0ZM224,144H187.5L93.88,42.57A8,8,0,0,0,88,40H32A16,16,0,0,0,16,56V96a16,16,0,0,0,16,16H68.5l93.62,101.43A8,8,0,0,0,168,216h56a16,16,0,0,0,16-16V160A16,16,0,0,0,224,144Z\"/>";
const LIGHT_INNER     = "<path d=\"M171.76,84.24a6,6,0,0,1,8.48-8.48L194,89.51V48a6,6,0,0,1,12,0V89.51l13.76-13.75a6,6,0,0,1,8.48,8.48l-24,24a6,6,0,0,1-8.48,0ZM238,160v40a14,14,0,0,1-14,14H168a6,6,0,0,1-4.41-1.93L69.37,110H32A14,14,0,0,1,18,96V56A14,14,0,0,1,32,42H88a6,6,0,0,1,4.41,1.93L186.63,146H224A14,14,0,0,1,238,160Zm-12,0a2,2,0,0,0-2-2H184a6,6,0,0,1-4.41-1.93L85.37,54H32a2,2,0,0,0-2,2V96a2,2,0,0,0,2,2H72a6,6,0,0,1,4.41,1.93L170.63,202H224a2,2,0,0,0,2-2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M170.34,85.66a8,8,0,0,1,11.32-11.32L192,84.69V48a8,8,0,0,1,16,0V84.69l10.34-10.35a8,8,0,0,1,11.32,11.32l-24,24a8,8,0,0,1-11.32,0ZM240,160v40a16,16,0,0,1-16,16H168a8,8,0,0,1-5.88-2.57L68.5,112H32A16,16,0,0,1,16,96V56A16,16,0,0,1,32,40H88a8,8,0,0,1,5.88,2.57L187.5,144H224A16,16,0,0,1,240,160Zm-16,0H184a8,8,0,0,1-5.88-2.57L84.5,56H32V96H72a8,8,0,0,1,5.88,2.57L171.5,200H224Z\"/>";
const SECONDARY_PATHS = "<path d=\"M232,160v40a8,8,0,0,1-8,8H168L72,104H32a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H88l96,104h40A8,8,0,0,1,232,160Z\"/>";

export const EscalatorDown = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: EscalatorDownProps) => {
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
