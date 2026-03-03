import { SVGProps } from "react";

export type HoodieVariant = "duotone" | "fill" | "light";

export interface HoodieProps extends SVGProps<SVGSVGElement> {
  variant?: HoodieVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M237.31,120.53,183,39.12A16,16,0,0,0,169.73,32H86.27A16,16,0,0,0,73,39.12L18.69,120.53a16,16,0,0,0-2.13,13.09L38,212.21A16,16,0,0,0,53.43,224H80a16,16,0,0,0,16-16V192h64v16a16,16,0,0,0,16,16h26.57A16,16,0,0,0,218,212.21l21.44-78.59A16,16,0,0,0,237.31,120.53ZM80,208H53.43L32,129.41l32-48V176a16,16,0,0,0,16,16Zm40-72a8,8,0,0,1-16,0V97.14a8,8,0,1,1,16,0Zm32-8a8,8,0,0,1-16,0V97.14a8,8,0,1,1,16,0ZM128,78.71,83.35,52.39,86.27,48h83.46l2.92,4.39ZM202.57,208H176V192a16,16,0,0,0,16-16V81.41l32,48Z\"/>";
const LIGHT_INNER     = "<path d=\"M235.65,121.64,181.38,40.23A14,14,0,0,0,169.73,34H86.27a14,14,0,0,0-11.65,6.23L20.35,121.64a14,14,0,0,0-1.86,11.45l21.44,78.59A14,14,0,0,0,53.43,222H80a14,14,0,0,0,14-14V190h68v18a14,14,0,0,0,14,14h26.57a14,14,0,0,0,13.5-10.32l21.44-78.59A14,14,0,0,0,235.65,121.64ZM80,178a2,2,0,0,1-2-2V65.49L106,82v54a6,6,0,0,0,12,0V89.07l7,4.1a6,6,0,0,0,6.1,0l6.95-4.1V128a6,6,0,0,0,12,0V82l28-16.51V176a2,2,0,0,1-2,2ZM86.27,46h83.46a2,2,0,0,1,1.66.89l4.1,6.15L128,81,80.51,53l4.1-6.15A2,2,0,0,1,86.27,46ZM82,208a2,2,0,0,1-2,2H53.43a2,2,0,0,1-1.92-1.47l-21.44-78.6a2,2,0,0,1,.27-1.63L66,74.8V176a14,14,0,0,0,14,14h2Zm143.93-78.07-21.44,78.6a2,2,0,0,1-1.92,1.47H176a2,2,0,0,1-2-2V190h2a14,14,0,0,0,14-14V74.8l35.66,53.5A2,2,0,0,1,225.93,129.93Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M237.31,120.53,183,39.12A16,16,0,0,0,169.73,32H86.27A16,16,0,0,0,73,39.12L18.69,120.53a16,16,0,0,0-2.13,13.09L38,212.21A16,16,0,0,0,53.43,224H80a16,16,0,0,0,16-16V192h64v16a16,16,0,0,0,16,16h26.57A16,16,0,0,0,218,212.21l21.44-78.59A16,16,0,0,0,237.31,120.53ZM80,176V69l24,14.15V136a8,8,0,0,0,16,0V92.57l3.94,2.32a8,8,0,0,0,8.12,0L136,92.57V128a8,8,0,0,0,16,0V83.14L176,69V176ZM169.73,48l2.92,4.39L128,78.71,83.35,52.39,86.27,48ZM80,208H53.43L32,129.41l32-48V176a16,16,0,0,0,16,16Zm122.57,0H176V192a16,16,0,0,0,16-16V81.41l32,48Z\"/>";
const SECONDARY_PATHS = "<path d=\"M231.72,131.51,210.28,210.1a8,8,0,0,1-7.71,5.9H176a8,8,0,0,1-8-8V184H88v24a8,8,0,0,1-8,8H53.43a8,8,0,0,1-7.71-5.9L24.28,131.51A8,8,0,0,1,25.34,125L72,55l56,33,56-33,46.66,70A8,8,0,0,1,231.72,131.51Z\"/>";

export const Hoodie = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: HoodieProps) => {
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
