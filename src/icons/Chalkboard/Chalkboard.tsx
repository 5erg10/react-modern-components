import { SVGProps } from "react";

export type ChalkboardVariant = "duotone" | "fill" | "light";

export interface ChalkboardProps extends SVGProps<SVGSVGElement> {
  variant?: ChalkboardVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M240,192h-8V56a16,16,0,0,0-16-16H40A16,16,0,0,0,24,56V192H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16Zm-24,0H144V176a8,8,0,0,1,8-8h56a8,8,0,0,1,8,8Zm0-48a8,8,0,0,1-16,0V72H56V184a8,8,0,0,1-16,0V64a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8Z\"/>";
const LIGHT_INNER     = "<path d=\"M240,194H230V56a14,14,0,0,0-14-14H40A14,14,0,0,0,26,56V194H16a6,6,0,0,0,0,12H240a6,6,0,0,0,0-12ZM38,56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2V194H198V168a6,6,0,0,0-6-6H120a6,6,0,0,0-6,6v26H70V86H186v50a6,6,0,0,0,12,0V80a6,6,0,0,0-6-6H64a6,6,0,0,0-6,6V194H38ZM186,194H126V174h60Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M240,192h-8V56a16,16,0,0,0-16-16H40A16,16,0,0,0,24,56V192H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM40,56H216V192H200V168a8,8,0,0,0-8-8H120a8,8,0,0,0-8,8v24H72V88H184v48a8,8,0,0,0,16,0V80a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8V192H40ZM184,192H128V176h56Z\"/>";
const SECONDARY_PATHS = "<path d=\"M192,80v88H120v32H64V80Z\"/>";

export const Chalkboard = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ChalkboardProps) => {
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
