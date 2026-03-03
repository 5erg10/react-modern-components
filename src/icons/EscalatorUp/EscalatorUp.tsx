import { SVGProps } from "react";

export type EscalatorUpVariant = "duotone" | "fill" | "light";

export interface EscalatorUpProps extends SVGProps<SVGSVGElement> {
  variant?: EscalatorUpVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M240,56V96a16,16,0,0,1-16,16H187.5L93.88,213.43A8,8,0,0,1,88,216H32a16,16,0,0,1-16-16V160a16,16,0,0,1,16-16H68.5L162.12,42.57A8,8,0,0,1,168,40h56A16,16,0,0,1,240,56Zm-34.34,90.34a8,8,0,0,0-11.32,0l-24,24a8,8,0,0,0,11.32,11.32L192,171.31V208a8,8,0,0,0,16,0V171.31l10.34,10.35a8,8,0,0,0,11.32-11.32Z\"/>";
const LIGHT_INNER     = "<path d=\"M224,42H168a6,6,0,0,0-4.41,1.93L69.37,146H32a14,14,0,0,0-14,14v40a14,14,0,0,0,14,14H88a6,6,0,0,0,4.41-1.93L186.63,110H224a14,14,0,0,0,14-14V56A14,14,0,0,0,224,42Zm2,54a2,2,0,0,1-2,2H184a6,6,0,0,0-4.41,1.93L85.37,202H32a2,2,0,0,1-2-2V160a2,2,0,0,1,2-2H72a6,6,0,0,0,4.41-1.93L170.63,54H224a2,2,0,0,1,2,2Zm2.24,75.76a6,6,0,1,1-8.48,8.48L206,166.49V208a6,6,0,0,1-12,0V166.49l-13.76,13.75a6,6,0,0,1-8.48-8.48l24-24a6,6,0,0,1,8.48,0Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M224,40H168a8,8,0,0,0-5.88,2.57L68.5,144H32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16H88a8,8,0,0,0,5.88-2.57L187.5,112H224a16,16,0,0,0,16-16V56A16,16,0,0,0,224,40Zm0,56H184a8,8,0,0,0-5.88,2.57L84.5,200H32V160H72a8,8,0,0,0,5.88-2.57L171.5,56H224Zm5.66,74.34a8,8,0,0,1-11.32,11.32L208,171.31V208a8,8,0,0,1-16,0V171.31l-10.34,10.35a8,8,0,0,1-11.32-11.32l24-24a8,8,0,0,1,11.32,0Z\"/>";
const SECONDARY_PATHS = "<path d=\"M232,56V96a8,8,0,0,1-8,8H184L88,208H32a8,8,0,0,1-8-8V160a8,8,0,0,1,8-8H72L168,48h56A8,8,0,0,1,232,56Z\"/>";

export const EscalatorUp = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: EscalatorUpProps) => {
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
