import { SVGProps } from "react";

export type OfficeChairVariant = "duotone" | "fill" | "light";

export interface OfficeChairProps extends SVGProps<SVGSVGElement> {
  variant?: OfficeChairVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M248,128a8,8,0,0,1-8,8H223.33A48.08,48.08,0,0,1,176,176H136v24h24a32,32,0,0,1,32,32,8,8,0,0,1-16,0,16,16,0,0,0-16-16H136v16a8,8,0,0,1-16,0V216H96a16,16,0,0,0-16,16,8,8,0,0,1-16,0,32,32,0,0,1,32-32h24V176H80a48.08,48.08,0,0,1-47.33-40H16a8,8,0,0,1,0-16H40a8,8,0,0,1,8,8,32,32,0,0,0,32,32h96a32,32,0,0,0,32-32,8,8,0,0,1,8-8h24A8,8,0,0,1,248,128ZM80,144h96a16,16,0,0,0,15.84-18.26l-13.72-96A16.08,16.08,0,0,0,162.28,16H93.72A16.08,16.08,0,0,0,77.88,29.74l-13.72,96A16,16,0,0,0,80,144Z\"/>";
const LIGHT_INNER     = "<path d=\"M246,128a6,6,0,0,1-6,6H221.61A46.07,46.07,0,0,1,176,174H134v28h26a30,30,0,0,1,30,30,6,6,0,0,1-12,0,18,18,0,0,0-18-18H134v18a6,6,0,0,1-12,0V214H96a18,18,0,0,0-18,18,6,6,0,0,1-12,0,30,30,0,0,1,30-30h26V174H80a46.07,46.07,0,0,1-45.61-40H16a6,6,0,0,1,0-12H40a6,6,0,0,1,6,6,34,34,0,0,0,34,34h96a34,34,0,0,0,34-34,6,6,0,0,1,6-6h24A6,6,0,0,1,246,128ZM69.43,137.17A14,14,0,0,1,66.14,126L79.86,30A14.07,14.07,0,0,1,93.72,18h68.56a14.07,14.07,0,0,1,13.86,12l13.72,96A14,14,0,0,1,176,142H80A14,14,0,0,1,69.43,137.17Zm9.06-7.86A2,2,0,0,0,80,130h96a2,2,0,0,0,1.51-.69,2,2,0,0,0,.47-1.59l-13.72-96a2,2,0,0,0-2-1.72H93.72a2,2,0,0,0-2,1.72L78,127.72A2,2,0,0,0,78.49,129.31Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M248,128a8,8,0,0,1-8,8H223.33A48.08,48.08,0,0,1,176,176H136v24h24a32,32,0,0,1,32,32,8,8,0,0,1-16,0,16,16,0,0,0-16-16H136v16a8,8,0,0,1-16,0V216H96a16,16,0,0,0-16,16,8,8,0,0,1-16,0,32,32,0,0,1,32-32h24V176H80a48.08,48.08,0,0,1-47.33-40H16a8,8,0,0,1,0-16H40a8,8,0,0,1,8,8,32,32,0,0,0,32,32h96a32,32,0,0,0,32-32,8,8,0,0,1,8-8h24A8,8,0,0,1,248,128ZM67.91,138.48a16,16,0,0,1-3.75-12.74l13.72-96A16.08,16.08,0,0,1,93.72,16h68.56a16.08,16.08,0,0,1,15.84,13.74l13.72,96A16,16,0,0,1,176,144H80A16,16,0,0,1,67.91,138.48ZM80,128h96L162.28,32H93.71Z\"/>";
const SECONDARY_PATHS = "<path d=\"M176,136H80a8,8,0,0,1-7.92-9.13l13.72-96A8,8,0,0,1,93.72,24h68.56a8,8,0,0,1,7.92,6.87l13.72,96A8,8,0,0,1,176,136Z\"/>";

export const OfficeChair = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: OfficeChairProps) => {
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
