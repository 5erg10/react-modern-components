import { SVGProps } from "react";

export type SelectionForegroundVariant = "duotone" | "fill" | "light";

export interface SelectionForegroundProps extends SVGProps<SVGSVGElement> {
  variant?: SelectionForegroundVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM88,200H72a16,16,0,0,1-16-16V168a8,8,0,0,1,16,0v16H88a8,8,0,0,1,0,16Zm0-88H72v16a8,8,0,0,1-16,0V112A16,16,0,0,1,72,96H88a8,8,0,0,1,0,16Zm72,72a16,16,0,0,1-16,16H128a8,8,0,0,1,0-16h16V168a8,8,0,0,1,16,0Zm0-56a8,8,0,0,1-16,0V112H128a8,8,0,0,1,0-16h16a16,16,0,0,1,16,16Zm40,16a16,16,0,0,1-16,16,8,8,0,0,1,0-16h0V72H112a8,8,0,0,1-16,0,16,16,0,0,1,16-16h72a16,16,0,0,1,16,16Z\"/>";
const LIGHT_INNER     = "<path d=\"M62,216a6,6,0,0,1-6,6H48a14,14,0,0,1-14-14v-8a6,6,0,0,1,12,0v8a2,2,0,0,0,2,2h8A6,6,0,0,1,62,216Zm50-6H96a6,6,0,0,0,0,12h16a6,6,0,0,0,0-12ZM40,166a6,6,0,0,0,6-6V144a6,6,0,0,0-12,0v16A6,6,0,0,0,40,166Zm128,28a6,6,0,0,0-6,6v8a2,2,0,0,1-2,2h-8a6,6,0,0,0,0,12h8a14,14,0,0,0,14-14v-8A6,6,0,0,0,168,194Zm0-84a6,6,0,0,0,6-6V96a14,14,0,0,0-14-14h-8a6,6,0,0,0,0,12h8a2,2,0,0,1,2,2v8A6,6,0,0,0,168,110ZM56,82H48A14,14,0,0,0,34,96v8a6,6,0,0,0,12,0V96a2,2,0,0,1,2-2h8a6,6,0,0,0,0-12ZM208,34H96A14,14,0,0,0,82,48V88h0a6,6,0,0,0,6,6h24a6,6,0,0,0,0-12H94V48a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2V160a2,2,0,0,1-2,2H174V144a6,6,0,0,0-12,0v24a6,6,0,0,0,6,6h40a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M64,216a8,8,0,0,1-8,8H48a16,16,0,0,1-16-16v-8a8,8,0,0,1,16,0v8h8A8,8,0,0,1,64,216Zm48-8H96a8,8,0,0,0,0,16h16a8,8,0,0,0,0-16ZM40,168a8,8,0,0,0,8-8V144a8,8,0,0,0-16,0v16A8,8,0,0,0,40,168Zm128,24a8,8,0,0,0-8,8v8h-8a8,8,0,0,0,0,16h8a16,16,0,0,0,16-16v-8A8,8,0,0,0,168,192Zm0-80a8,8,0,0,0,8-8V96a16,16,0,0,0-16-16h-8a8,8,0,0,0,0,16h8v8A8,8,0,0,0,168,112ZM56,80H48A16,16,0,0,0,32,96v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16ZM208,32H96A16,16,0,0,0,80,48V88a4.44,4.44,0,0,0,0,.55A8,8,0,0,0,88,96h24a8,8,0,0,0,0-16H96V48H208V160H176V144a8,8,0,0,0-16,0v24a8,8,0,0,0,8,8h40a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z\"/>";
const SECONDARY_PATHS = "<path d=\"M168,96V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H160A8,8,0,0,1,168,96Z\"/>";

export const SelectionForeground = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: SelectionForegroundProps) => {
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
