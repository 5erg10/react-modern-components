import { SVGProps } from "react";

export type BarbellVariant = "duotone" | "fill" | "light";

export interface BarbellProps extends SVGProps<SVGSVGElement> {
  variant?: BarbellVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M200,64V192a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V136H104v56a16,16,0,0,1-16,16H72a16,16,0,0,1-16-16V64A16,16,0,0,1,72,48H88a16,16,0,0,1,16,16v56h48V64a16,16,0,0,1,16-16h16A16,16,0,0,1,200,64ZM36,72H32A16,16,0,0,0,16,88v32H8.27A8.18,8.18,0,0,0,0,127.47,8,8,0,0,0,8,136h8v32a16,16,0,0,0,16,16h4a4,4,0,0,0,4-4V76A4,4,0,0,0,36,72Zm220,55.47a8.18,8.18,0,0,0-8.25-7.47H240V88a16,16,0,0,0-16-16h-4a4,4,0,0,0-4,4V180a4,4,0,0,0,4,4h4a16,16,0,0,0,16-16V136h8A8,8,0,0,0,256,127.47Z\"/>";
const LIGHT_INNER     = "<path d=\"M248,122H238V88a14,14,0,0,0-14-14H206V64a14,14,0,0,0-14-14H168a14,14,0,0,0-14,14v58H102V64A14,14,0,0,0,88,50H64A14,14,0,0,0,50,64V74H32A14,14,0,0,0,18,88v34H8a6,6,0,0,0,0,12H18v34a14,14,0,0,0,14,14H50v10a14,14,0,0,0,14,14H88a14,14,0,0,0,14-14V134h52v58a14,14,0,0,0,14,14h24a14,14,0,0,0,14-14V182h18a14,14,0,0,0,14-14V134h10a6,6,0,0,0,0-12ZM32,170a2,2,0,0,1-2-2V88a2,2,0,0,1,2-2H50v84Zm58,22a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H88a2,2,0,0,1,2,2Zm104,0a2,2,0,0,1-2,2H168a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2h24a2,2,0,0,1,2,2Zm32-24a2,2,0,0,1-2,2H206V86h18a2,2,0,0,1,2,2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M248,120h-8V88a16,16,0,0,0-16-16H208V64a16,16,0,0,0-16-16H168a16,16,0,0,0-16,16v56H104V64A16,16,0,0,0,88,48H64A16,16,0,0,0,48,64v8H32A16,16,0,0,0,16,88v32H8a8,8,0,0,0,0,16h8v32a16,16,0,0,0,16,16H48v8a16,16,0,0,0,16,16H88a16,16,0,0,0,16-16V136h48v56a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16v-8h16a16,16,0,0,0,16-16V136h8a8,8,0,0,0,0-16ZM32,168V88H48v80Zm56,24H64V64H88V192Zm104,0H168V64h24V175.83c0,.06,0,.11,0,.17s0,.12,0,.17V192Zm32-24H208V88h16Z\"/>";
const SECONDARY_PATHS = "<path d=\"M96,64V192a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H88A8,8,0,0,1,96,64Zm96-8H168a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8h24a8,8,0,0,0,8-8V64A8,8,0,0,0,192,56Z\"/>";

export const Barbell = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BarbellProps) => {
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
