import { SVGProps } from "react";

export type CouchVariant = "duotone" | "fill" | "light";

export interface CouchProps extends SVGProps<SVGSVGElement> {
  variant?: CouchVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M16,100V72A16,16,0,0,1,32,56h84a4,4,0,0,1,4,4v76H64a32,32,0,0,0-32-32H20A4,4,0,0,1,16,100Zm208,4h12a4,4,0,0,0,4-4V72a16,16,0,0,0-16-16H140a4,4,0,0,0-4,4v76h56A32,32,0,0,1,224,104Zm8,16h-8a16,16,0,0,0-16,16v8a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8v-8a16,16,0,0,0-16-16H24A16,16,0,0,0,8,136v32a16,16,0,0,0,16,16h8v15.73A8.18,8.18,0,0,0,39.47,208,8,8,0,0,0,48,200V184H208v15.73a8.17,8.17,0,0,0,7.47,8.25,8,8,0,0,0,8.53-8V184h8a16,16,0,0,0,16-16V136A16,16,0,0,0,232,120Z\"/>";
const LIGHT_INNER     = "<path d=\"M238,107.37V72a14,14,0,0,0-14-14H32A14,14,0,0,0,18,72v35.37A14,14,0,0,0,10,120v48a14,14,0,0,0,14,14H34v18a6,6,0,0,0,12,0V182H210v18a6,6,0,0,0,12,0V182h10a14,14,0,0,0,14-14V120A14,14,0,0,0,238,107.37ZM226,72v34H216a14,14,0,0,0-14,14v18H134V70h90A2,2,0,0,1,226,72ZM32,70h90v68H54V120a14,14,0,0,0-14-14H30V72A2,2,0,0,1,32,70Zm202,98a2,2,0,0,1-2,2H24a2,2,0,0,1-2-2V120a2,2,0,0,1,2-2H40a2,2,0,0,1,2,2v24a6,6,0,0,0,6,6H208a6,6,0,0,0,6-6V120a2,2,0,0,1,2-2h16a2,2,0,0,1,2,2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M240,106.17V72a16,16,0,0,0-16-16H32A16,16,0,0,0,16,72v34.17A16,16,0,0,0,8,120v48a16,16,0,0,0,16,16h8v16a8,8,0,0,0,16,0V184H208v16a8,8,0,0,0,16,0V184h8a16,16,0,0,0,16-16V120A16,16,0,0,0,240,106.17ZM224,104h-8a16,16,0,0,0-16,16v16H136V72h88ZM120,72v64H56V120a16,16,0,0,0-16-16H32V72Zm112,96H24V120H40v24a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V120h16Z\"/>";
const SECONDARY_PATHS = "<path d=\"M240,120v48a8,8,0,0,1-8,8H24a8,8,0,0,1-8-8V120a8,8,0,0,1,8-8V72a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8v40A8,8,0,0,1,240,120Z\"/>";

export const Couch = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CouchProps) => {
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
