import { SVGProps } from "react";

export type TruckTrailerVariant = "duotone" | "fill" | "light";

export interface TruckTrailerProps extends SVGProps<SVGSVGElement> {
  variant?: TruckTrailerVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M224,96.8V96a56.06,56.06,0,0,0-56-56h-8a16,16,0,0,0-16,16V176H128V72a8,8,0,0,0-8-8H16A16,16,0,0,0,0,80V184a32,32,0,0,0,56,21.13A32,32,0,0,0,111,192h82a32,32,0,0,0,63-8V136A40.07,40.07,0,0,0,224,96.8ZM32,200a16,16,0,1,1,16-16A16,16,0,0,1,32,200Zm48,0a16,16,0,1,1,16-16A16,16,0,0,1,80,200Zm144,0a16,16,0,1,1,16-16A16,16,0,0,1,224,200Z\"/>";
const LIGHT_INNER     = "<path d=\"M222,98.47V96a54.06,54.06,0,0,0-54-54h-8a14,14,0,0,0-14,14V178H126V72a6,6,0,0,0-6-6H16A14,14,0,0,0,2,80V184a30,30,0,0,0,54,18,30,30,0,0,0,53.4-12h85.2a30,30,0,0,0,59.4-6V136A38.07,38.07,0,0,0,222,98.47ZM158,56a2,2,0,0,1,2-2h8a42,42,0,0,1,42,42v8a6,6,0,0,0,6,6,26,26,0,0,1,26,26v24a30,30,0,0,0-47.4,18H158ZM16,78h98V178h-4.6A30,30,0,0,0,56,166a30,30,0,0,0-42-6V80A2,2,0,0,1,16,78ZM32,202a18,18,0,1,1,18-18A18,18,0,0,1,32,202Zm48,0a18,18,0,1,1,18-18A18,18,0,0,1,80,202Zm144,0a18,18,0,1,1,18-18A18,18,0,0,1,224,202Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M224,96.8V96a56.06,56.06,0,0,0-56-56h-8a16,16,0,0,0-16,16V176H128V72a8,8,0,0,0-8-8H16A16,16,0,0,0,0,80V184a32,32,0,0,0,56,21.13A32,32,0,0,0,111,192h82a32,32,0,0,0,63-8V136A40.07,40.07,0,0,0,224,96.8ZM160,56h8a40,40,0,0,1,40,40v8a8,8,0,0,0,8,8,24,24,0,0,1,24,24v20.31A31.71,31.71,0,0,0,224,152a32.06,32.06,0,0,0-31,24H160ZM112,80v96h-1a32,32,0,0,0-55-13.13,31.9,31.9,0,0,0-40-6.56V80ZM32,200a16,16,0,1,1,16-16A16,16,0,0,1,32,200Zm48,0a16,16,0,1,1,16-16A16,16,0,0,1,80,200Zm144,0a16,16,0,1,1,16-16A16,16,0,0,1,224,200Z\"/>";
const SECONDARY_PATHS = "<path d=\"M16,72H120V184H104a24,24,0,0,0-48,0,24,24,0,0,0-48,0V80A8,8,0,0,1,16,72Zm200,32V96a48,48,0,0,0-48-48h-8a8,8,0,0,0-8,8V184h48a24,24,0,0,1,48,0V136A32,32,0,0,0,216,104Z\"/>";

export const TruckTrailer = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: TruckTrailerProps) => {
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
