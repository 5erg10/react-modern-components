import { SVGProps } from "react";

export type AmazonLogoVariant = "duotone" | "fill" | "light";

export interface AmazonLogoProps extends SVGProps<SVGSVGElement> {
  variant?: AmazonLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M152,136a24,24,0,1,1-24-24A24,24,0,0,1,152,136Zm80-8A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-80-24v0a40,40,0,1,0,0,64v0a8,8,0,0,0,16,0V104A40,40,0,0,0,94.13,82.71a8,8,0,0,0,13.54,8.52A24,24,0,0,1,152,104Zm44.81,65.61a8,8,0,0,0-11.2,1.58,72,72,0,0,1-115.22,0,8,8,0,1,0-12.78,9.62,88,88,0,0,0,140.78,0A8,8,0,0,0,196.81,169.61Z\"/>";
const LIGHT_INNER     = "<path d=\"M246,168v32a6,6,0,0,1-12,0V182.48l-5.66,5.66C225.6,191.15,188.86,230,128,230c-62,0-98.92-40.27-100.46-42a6,6,0,1,1,8.92-8c.34.37,35.09,38,91.54,38s91.2-37.64,91.55-38l.21-.22,5.76-5.76H208a6,6,0,0,1,0-12h32A6,6,0,0,1,246,168ZM162,99.56V84A38,38,0,0,0,90.14,66.73a6,6,0,1,1-10.68-5.46A50,50,0,0,1,174,84v92a6,6,0,0,1-12,0V164.44a50,50,0,1,1,0-64.88ZM162,132a38,38,0,1,0-38,38A38,38,0,0,0,162,132Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M248,168v32a8,8,0,0,1-16,0V187.31l-2.21,2.22C226.69,192.9,189.44,232,128,232c-62.84,0-100.38-40.91-101.95-42.65A8,8,0,0,1,38,178.65C38.27,179,72.5,216,128,216s89.73-37,90.07-37.36a3.85,3.85,0,0,1,.27-.3l2.35-2.34H208a8,8,0,0,1,0-16h32A8,8,0,0,1,248,168ZM160,94.53V84A36,36,0,0,0,91.92,67.64a8,8,0,0,1-14.25-7.28A52,52,0,0,1,176,84v92a8,8,0,0,1-16,0v-6.53a52,52,0,1,1,0-74.94ZM160,132a36,36,0,1,0-36,36A36,36,0,0,0,160,132Z\"/>";
const SECONDARY_PATHS = "<path d=\"M168,132a44,44,0,1,1-44-44A44,44,0,0,1,168,132Z\"/>";

export const AmazonLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: AmazonLogoProps) => {
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
