import { SVGProps } from "react";

export type HardHatVariant = "duotone" | "fill" | "light";

export interface HardHatProps extends SVGProps<SVGSVGElement> {
  variant?: HardHatVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M152,152H104V40a16,16,0,0,1,16-16h16a16,16,0,0,1,16,16Zm72,16H32a16,16,0,0,0-16,16v8a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16v-8A16,16,0,0,0,224,168Zm0-20V136a96.44,96.44,0,0,0-50.11-84.31A4,4,0,0,0,168,55.22V152h52A4,4,0,0,0,224,148ZM36,152H88V55.22a4,4,0,0,0-5.89-3.53A96.44,96.44,0,0,0,32,136v12A4,4,0,0,0,36,152Z\"/>";
const LIGHT_INNER     = "<path d=\"M224,154h-2V136a94.37,94.37,0,0,0-64-89.1V40a14,14,0,0,0-14-14H112A14,14,0,0,0,98,40v6.9A94.37,94.37,0,0,0,34,136v18H32a14,14,0,0,0-14,14v24a14,14,0,0,0,14,14H224a14,14,0,0,0,14-14V168A14,14,0,0,0,224,154Zm-14-18v18H158V59.68A82.33,82.33,0,0,1,210,136ZM112,38h32a2,2,0,0,1,2,2V154H110V40A2,2,0,0,1,112,38ZM46,136A82.33,82.33,0,0,1,98,59.68V154H46Zm180,56a2,2,0,0,1-2,2H32a2,2,0,0,1-2-2V168a2,2,0,0,1,2-2H224a2,2,0,0,1,2,2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M224,152V136a96.37,96.37,0,0,0-64-90.51V40a16,16,0,0,0-16-16H112A16,16,0,0,0,96,40v5.49A96.37,96.37,0,0,0,32,136v16a16,16,0,0,0-16,16v24a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V168A16,16,0,0,0,224,152Zm-16-16v16H160V62.67A80.36,80.36,0,0,1,208,136ZM144,40V152H112V40ZM48,136A80.36,80.36,0,0,1,96,62.67V152H48Zm176,56H32V168H224v24Z\"/>";
const SECONDARY_PATHS = "<path d=\"M104,51.31V160H40V136A88,88,0,0,1,104,51.31Zm48,0V160h64V136A88,88,0,0,0,152,51.31Z\"/>";

export const HardHat = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: HardHatProps) => {
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
