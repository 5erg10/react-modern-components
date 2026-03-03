import { SVGProps } from "react";

export type AirplaneTaxiingVariant = "duotone" | "fill" | "light";

export interface AirplaneTaxiingProps extends SVGProps<SVGSVGElement> {
  variant?: AirplaneTaxiingVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M248,136v24a8,8,0,0,1-8,8H61.07a39.75,39.75,0,0,1-38.31-28.51L8.69,92.6A16,16,0,0,1,24,72h8a8,8,0,0,1,5.65,2.34L59.32,96H81.81l-9-26.94A16,16,0,0,1,88,48h8a8,8,0,0,1,5.66,2.34L147.32,96H208A40,40,0,0,1,248,136Zm-40,48a16,16,0,1,0,16,16A16,16,0,0,0,208,184Zm-96,0a16,16,0,1,0,16,16A16,16,0,0,0,112,184Z\"/>";
const LIGHT_INNER     = "<path d=\"M208,98H146.49L100.25,51.76A6,6,0,0,0,96,50H88A14,14,0,0,0,74.73,68.43L84.59,98H58.49L36.25,75.76A6,6,0,0,0,32,74H24A14,14,0,0,0,10.6,92l14.07,46.9A37.77,37.77,0,0,0,61.07,166H240a6,6,0,0,0,6-6V136A38,38,0,0,0,208,98Zm26,56H61.07a25.86,25.86,0,0,1-24.91-18.53L22.1,88.57a1.91,1.91,0,0,1,.31-1.76A1.93,1.93,0,0,1,24,86h5.51l22.24,22.24A6,6,0,0,0,56,110H92.91a6,6,0,0,0,5.69-7.9L86.11,64.63A2,2,0,0,1,88,62h5.51l46.24,46.24A6,6,0,0,0,144,110h64a26,26,0,0,1,26,26Zm-12,46a14,14,0,1,1-14-14A14,14,0,0,1,222,200Zm-96,0a14,14,0,1,1-14-14A14,14,0,0,1,126,200Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M208,96H147.32L101.66,50.34A8,8,0,0,0,96,48H88A16,16,0,0,0,72.83,69.06l9,26.94H59.32L37.66,74.34A8,8,0,0,0,32,72H24A16,16,0,0,0,8.69,92.6l14.07,46.89A39.75,39.75,0,0,0,61.07,168H240a8,8,0,0,0,8-8V136A40,40,0,0,0,208,96Zm24,56H61.07a23.85,23.85,0,0,1-23-17.1L24,88h4.68l21.66,21.66A8,8,0,0,0,56,112h36.9a8,8,0,0,0,7.59-10.53L88,64h4.68l45.66,45.66A8,8,0,0,0,144,112h64a24,24,0,0,1,24,24Zm-8,48a16,16,0,1,1-16-16A16,16,0,0,1,224,200Zm-96,0a16,16,0,1,1-16-16A16,16,0,0,1,128,200Z\"/>";
const SECONDARY_PATHS = "<path d=\"M240,136v24H61.06a32,32,0,0,1-30.65-22.8L16.34,90.3A8,8,0,0,1,24,80h8l24,24H92.91L80.42,66.53A8,8,0,0,1,88,56h8l48,48h64A32,32,0,0,1,240,136Z\"/>";

export const AirplaneTaxiing = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: AirplaneTaxiingProps) => {
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
