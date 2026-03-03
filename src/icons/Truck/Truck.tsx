import { SVGProps } from "react";

export type TruckVariant = "duotone" | "fill" | "light";

export interface TruckProps extends SVGProps<SVGSVGElement> {
  variant?: TruckVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M255.43,117l-14-35A15.93,15.93,0,0,0,226.58,72H192V64a8,8,0,0,0-8-8H32A16,16,0,0,0,16,72V184a16,16,0,0,0,16,16H49a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V120A8.13,8.13,0,0,0,255.43,117ZM80,208a16,16,0,1,1,16-16A16,16,0,0,1,80,208ZM32,136V72H176v64Zm160,72a16,16,0,1,1,16-16A16,16,0,0,1,192,208Zm0-96V88h34.58l9.6,24Z\"/>";
const LIGHT_INNER     = "<path d=\"M253.57,117.78l-14-35a13.93,13.93,0,0,0-13-8.8H190V64a6,6,0,0,0-6-6H32A14,14,0,0,0,18,72V184a14,14,0,0,0,14,14H50.6a30,30,0,0,0,58.8,0h53.2a30,30,0,0,0,58.8,0H240a14,14,0,0,0,14-14V120A6,6,0,0,0,253.57,117.78ZM190,86h36.58a2,2,0,0,1,1.86,1.26L239.14,114H190ZM30,72a2,2,0,0,1,2-2H178v68H30ZM80,210a18,18,0,1,1,18-18A18,18,0,0,1,80,210Zm82.6-24H109.4a30,30,0,0,0-58.8,0H32a2,2,0,0,1-2-2V150H178v15.48A30.1,30.1,0,0,0,162.6,186ZM192,210a18,18,0,1,1,18-18A18,18,0,0,1,192,210Zm50-26a2,2,0,0,1-2,2H221.4A30.05,30.05,0,0,0,192,162c-.67,0-1.34,0-2,.07V126h52Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M255.42,117l-14-35A15.93,15.93,0,0,0,226.58,72H192V64a8,8,0,0,0-8-8H32A16,16,0,0,0,16,72V184a16,16,0,0,0,16,16H49a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V120A7.94,7.94,0,0,0,255.42,117ZM192,88h34.58l9.6,24H192ZM32,72H176v64H32ZM80,208a16,16,0,1,1,16-16A16,16,0,0,1,80,208Zm81-24H111a32,32,0,0,0-62,0H32V152H176v12.31A32.11,32.11,0,0,0,161,184Zm31,24a16,16,0,1,1,16-16A16,16,0,0,1,192,208Zm48-24H223a32.06,32.06,0,0,0-31-24V128h48Z\"/>";
const SECONDARY_PATHS = "<path d=\"M248,120v64a8,8,0,0,1-8,8H216a24,24,0,0,0-48,0H104a24,24,0,0,0-48,0H32a8,8,0,0,1-8-8V144H184V120Z\"/>";

export const Truck = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: TruckProps) => {
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
