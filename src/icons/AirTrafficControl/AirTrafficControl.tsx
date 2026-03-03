import { SVGProps } from "react";

export type AirTrafficControlVariant = "duotone" | "fill" | "light";

export interface AirTrafficControlProps extends SVGProps<SVGSVGElement> {
  variant?: AirTrafficControlVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M229.11,70.82A16,16,0,0,0,216,64H136V32h16a8,8,0,0,0,0-16H104a8,8,0,0,0,0,16h16V64H40A16,16,0,0,0,25,85.47l26.19,72a16,16,0,0,0,15,10.53H189.82a16,16,0,0,0,15-10.53l26.19-72A16,16,0,0,0,229.11,70.82ZM102.52,151.87a7.87,7.87,0,0,1-1.44.13,8,8,0,0,1-7.86-6.57L83,89.43a8,8,0,0,1,15.75-2.86l10.18,56A8,8,0,0,1,102.52,151.87ZM173,89.43l-10.19,56a8,8,0,0,1-7.86,6.57,7.87,7.87,0,0,1-1.44-.13,8,8,0,0,1-6.44-9.3l10.18-56A8,8,0,0,1,173,89.43ZM160,188v44a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V188a4,4,0,0,1,4-4h56A4,4,0,0,1,160,188Z\"/>";
const LIGHT_INNER     = "<path d=\"M227.47,72A14,14,0,0,0,216,66H134V30h18a6,6,0,0,0,0-12H104a6,6,0,0,0,0,12h18V66H40A14,14,0,0,0,26.84,84.78l26.19,72A14,14,0,0,0,66.18,166H98v66a6,6,0,0,0,12,0V166h36v66a6,6,0,0,0,12,0V166h31.82A14,14,0,0,0,203,156.78l26.19-72A14,14,0,0,0,227.47,72ZM109,154,95.19,78h65.62L147,154ZM64.3,152.68l-26.18-72a2,2,0,0,1,.24-1.83A1.94,1.94,0,0,1,40,78H83l13.82,76H66.18A2,2,0,0,1,64.3,152.68Zm153.58-72-26.18,72a2,2,0,0,1-1.88,1.32H159.19L173,78h43a1.94,1.94,0,0,1,1.64.85A2,2,0,0,1,217.88,80.68Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M229.11,70.82A16,16,0,0,0,216,64H136V32h16a8,8,0,0,0,0-16H104a8,8,0,0,0,0,16h16V64H40A16,16,0,0,0,25,85.47l26.19,72a16,16,0,0,0,15,10.53H96v64a8,8,0,0,0,16,0V168h32v64a8,8,0,0,0,16,0V168h29.82a16,16,0,0,0,15-10.53l26.19-72A16,16,0,0,0,229.11,70.82ZM110.68,152,97.58,80h60.84l-13.1,72ZM40,80H81.32l13.09,72H66.18Zm149.82,72H161.59l13.09-72H216Z\"/>";
const SECONDARY_PATHS = "<path d=\"M223.51,82.73l-26.18,72a8,8,0,0,1-7.52,5.27H66.19a8,8,0,0,1-7.52-5.27l-26.18-72A8,8,0,0,1,40,72H216A8,8,0,0,1,223.51,82.73Z\"/>";

export const AirTrafficControl = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: AirTrafficControlProps) => {
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
