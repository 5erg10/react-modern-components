import { SVGProps } from "react";

export type PaypalLogoVariant = "duotone" | "fill" | "light";

export interface PaypalLogoProps extends SVGProps<SVGSVGElement> {
  variant?: PaypalLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M220.12,93.54a55.8,55.8,0,0,0-20.19-16.18A56,56,0,0,0,144,24H84A16,16,0,0,0,68.48,36.12l-36,144A16,16,0,0,0,48,200h27.5l-3,12.12A16,16,0,0,0,88,232h31.5A16,16,0,0,0,135,219.88L144,184h32a56,56,0,0,0,44.14-90.46ZM48,184,84,40h60a40,40,0,0,1,39.3,32.49A57,57,0,0,0,176,72H120a16,16,0,0,0-15.53,12.12L79.52,184H48Zm166.77-46.3A39.94,39.94,0,0,1,176,168H144a16,16,0,0,0-15.52,12.12l-9,35.88H88l20-80h36a55.9,55.9,0,0,0,54-41.39,40.2,40.2,0,0,1,9.48,8.77A39.73,39.73,0,0,1,214.78,137.7Z\"/>";
const LIGHT_INNER     = "<path d=\"M218.54,94.77A53.84,53.84,0,0,0,198,78.66,54,54,0,0,0,144,26H84A14,14,0,0,0,70.42,36.6l-36,144A14,14,0,0,0,48,198H78.07l-3.65,14.6A14,14,0,0,0,88,230h31.5a14,14,0,0,0,13.58-10.6l9-35.88A2,2,0,0,1,144,182h32a54,54,0,0,0,42.56-87.23ZM79.51,186H48a2,2,0,0,1-1.94-2.49l36-144A2,2,0,0,1,84,38h60a42,42,0,0,1,41.69,36.87A54.57,54.57,0,0,0,176,74H120a14,14,0,0,0-13.59,10.6l-25,99.89A2,2,0,0,1,79.51,186ZM185.37,87.05c-.18,1-.39,2.09-.65,3.14A41.94,41.94,0,0,1,144,122H109.44l8.62-34.48A2,2,0,0,1,120,86h56A42.43,42.43,0,0,1,185.37,87.05Zm31.35,51.14A41.94,41.94,0,0,1,176,170H144a14,14,0,0,0-13.58,10.6l-9,35.89a2,2,0,0,1-1.94,1.51H88a2,2,0,0,1-1.94-2.49l20-80a2,2,0,0,1,2-1.52h36a53.92,53.92,0,0,0,52.38-40.9c.14-.55.25-1.1.36-1.64a42.06,42.06,0,0,1,20,46.73Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M220.12,93.54a55.8,55.8,0,0,0-20.19-16.18A56,56,0,0,0,144,24H84A16,16,0,0,0,68.48,36.12l-36,144A16,16,0,0,0,48,200h27.5l-3,12.12A16,16,0,0,0,88,232h31.5A16,16,0,0,0,135,219.88L144,184h32a56,56,0,0,0,44.14-90.46ZM79.52,184H48L84,40h60a40,40,0,0,1,39.3,32.49A57,57,0,0,0,176,72H120a16,16,0,0,0-15.53,12.12ZM183,88.62c-.08.36-.15.72-.24,1.08A39.94,39.94,0,0,1,144,120H112l8-32h56A40.07,40.07,0,0,1,183,88.62Zm31.76,49.08A39.94,39.94,0,0,1,176,168H144a16,16,0,0,0-15.52,12.12l-9,35.88H88l20-80h36a55.9,55.9,0,0,0,54-41.39,40.2,40.2,0,0,1,9.48,8.77A39.73,39.73,0,0,1,214.78,137.7Z\"/>";
const SECONDARY_PATHS = "<path d=\"M191.91,82.7a49,49,0,0,1-1.37,8.94h0A48,48,0,0,1,144,128H108a8,8,0,0,0-7.76,6.06l12-48A8,8,0,0,1,120,80h56A48.25,48.25,0,0,1,191.91,82.7Z\"/>";

export const PaypalLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PaypalLogoProps) => {
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
