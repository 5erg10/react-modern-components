import { SVGProps } from "react";

export type InvoiceVariant = "duotone" | "fill" | "light";

export interface InvoiceProps extends SVGProps<SVGSVGElement> {
  variant?: InvoiceVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M28,128a8,8,0,0,1,0-16H56a8,8,0,0,0,0-16H40a24,24,0,0,1,0-48,8,8,0,0,1,16,0h8a8,8,0,0,1,0,16H40a8,8,0,0,0,0,16H56a24,24,0,0,1,0,48,8,8,0,0,1-16,0ZM224,48H96a8,8,0,0,0,0,16H216V96H104a8,8,0,0,0,0,16h56v32H80a8,8,0,0,0,0,16h80v32H40V152a8,8,0,0,0-16,0v40a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Z\"/>";
const LIGHT_INNER     = "<path d=\"M28,126a6,6,0,0,1,0-12H56a10,10,0,0,0,0-20H40a22,22,0,0,1,0-44h2V48a6,6,0,0,1,12,0v2H64a6,6,0,0,1,0,12H40a10,10,0,0,0,0,20H56a22,22,0,0,1,0,44H54v2a6,6,0,0,1-12,0v-2ZM230,56V192a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V152a6,6,0,0,1,12,0v40a2,2,0,0,0,2,2H162V158H80a6,6,0,0,1,0-12h82V110H104a6,6,0,0,1,0-12H218V62H96a6,6,0,0,1,0-12H224A6,6,0,0,1,230,56Zm-56,90h44V110H174Zm44,46V158H174v36h42A2,2,0,0,0,218,192Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M28,128a8,8,0,0,1,0-16H56a8,8,0,0,0,0-16H40a24,24,0,0,1,0-48,8,8,0,0,1,16,0h8a8,8,0,0,1,0,16H40a8,8,0,0,0,0,16H56a24,24,0,0,1,0,48,8,8,0,0,1-16,0ZM232,56V192a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V152a8,8,0,0,1,16,0v40H160V160H80a8,8,0,0,1,0-16h80V112H104a8,8,0,0,1,0-16H216V64H96a8,8,0,0,1,0-16H224A8,8,0,0,1,232,56Zm-56,88h40V112H176Zm40,48V160H176v32Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,104v88a8,8,0,0,1-8,8H168V104Z\"/>";

export const Invoice = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: InvoiceProps) => {
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
