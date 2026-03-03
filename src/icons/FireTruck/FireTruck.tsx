import { SVGProps } from "react";

export type FireTruckVariant = "duotone" | "fill" | "light";

export interface FireTruckProps extends SVGProps<SVGSVGElement> {
  variant?: FireTruckVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M255.43,117l-14-35A15.93,15.93,0,0,0,226.58,72H192V64a8,8,0,0,0-16,0v64H24a8,8,0,0,0-8,8v48a16,16,0,0,0,16,16H49a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V120A7.92,7.92,0,0,0,255.43,117ZM80,208a16,16,0,1,1,16-16A16,16,0,0,1,80,208Zm112,0a16,16,0,1,1,16-16A16,16,0,0,1,192,208Zm0-96V88h34.58l9.6,24ZM24,96a8,8,0,0,0,0,16H152a8,8,0,0,0,0-16H136V72h16a8,8,0,0,0,0-16H24a8,8,0,0,0,0,16H40V96ZM96,72h24V96H96ZM56,72H80V96H56Z\"/>";
const LIGHT_INNER     = "<path d=\"M253.57,117.77l-14-35a13.93,13.93,0,0,0-13-8.8H190V64a6,6,0,0,0-12,0V165.48A30.1,30.1,0,0,0,162.6,186H109.4a30,30,0,0,0-58.8,0H32a2,2,0,0,1-2-2V136a6,6,0,0,0-12,0v48a14,14,0,0,0,14,14H50.6a30,30,0,0,0,58.8,0h53.2a30,30,0,0,0,58.8,0H240a14,14,0,0,0,14-14V120A6.1,6.1,0,0,0,253.57,117.77ZM226.58,86a2,2,0,0,1,1.86,1.26L239.14,114H190V86ZM80,210a18,18,0,1,1,18-18A18,18,0,0,1,80,210Zm112,0a18,18,0,1,1,18-18A18,18,0,0,1,192,210Zm48-24H221.4A30.05,30.05,0,0,0,192,162c-.67,0-1.34,0-2,.07V126h52v58A2,2,0,0,1,240,186ZM24,98a6,6,0,0,0,0,12H152a6,6,0,0,0,0-12H134V70h18a6,6,0,0,0,0-12H24a6,6,0,0,0,0,12H42V98Zm98,0H94V70h28ZM54,70H82V98H54Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M255.43,117l-14-35A15.93,15.93,0,0,0,226.58,72H192V64a8,8,0,0,0-16,0V164.31A32.11,32.11,0,0,0,161,184H111a32,32,0,0,0-62,0H32V136a8,8,0,0,0-16,0v48a16,16,0,0,0,16,16H49a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V120A7.92,7.92,0,0,0,255.43,117ZM226.58,88l9.6,24H192V88ZM80,208a16,16,0,1,1,16-16A16,16,0,0,1,80,208Zm112,0a16,16,0,1,1,16-16A16,16,0,0,1,192,208Zm31-24a32.06,32.06,0,0,0-31-24V128h48v56ZM24,96a8,8,0,0,0,0,16H152a8,8,0,0,0,0-16H136V72h16a8,8,0,0,0,0-16H24a8,8,0,0,0,0,16H40V96Zm96,0H96V72h24ZM56,72H80V96H56Z\"/>";
const SECONDARY_PATHS = "<path d=\"M248,120v64a8,8,0,0,1-8,8H216a24,24,0,0,0-32-22.63h0A24,24,0,0,0,168,192H104a24,24,0,0,0-48,0H32a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H184v56Z\"/>";

export const FireTruck = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: FireTruckProps) => {
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
