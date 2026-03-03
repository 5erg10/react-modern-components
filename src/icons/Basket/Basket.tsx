import { SVGProps } from "react";

export type BasketVariant = "duotone" | "fill" | "light";

export interface BasketProps extends SVGProps<SVGSVGElement> {
  variant?: BasketVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M238,82.73A8,8,0,0,0,232,80H187.63L134,18.73a8,8,0,0,0-12,0L68.37,80H24a8,8,0,0,0-7.93,9.06L31.14,202.12A16.06,16.06,0,0,0,47,216H209a16.06,16.06,0,0,0,15.86-13.88L239.93,89.06A8,8,0,0,0,238,82.73ZM81.6,184a7.32,7.32,0,0,1-.81,0,8,8,0,0,1-8-7.2l-5.6-56a8,8,0,0,1,15.92-1.6l5.6,56A8,8,0,0,1,81.6,184Zm54.4-8a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0ZM89.63,80,128,36.15,166.37,80Zm99.13,40.8-5.6,56a8,8,0,0,1-7.95,7.2,7.32,7.32,0,0,1-.81,0,8,8,0,0,1-7.16-8.76l5.6-56a8,8,0,0,1,15.92,1.6Z\"/>";
const LIGHT_INNER     = "<path d=\"M134,120v56a6,6,0,0,1-12,0V120a6,6,0,0,1,12,0Zm40.83-.6-5.6,56A6,6,0,0,0,174.6,182l.61,0a6,6,0,0,0,6-5.4l5.6-56a6,6,0,0,0-11.94-1.2Zm-93.66,0a6,6,0,0,0-11.94,1.2l5.6,56a6,6,0,0,0,6,5.4l.61,0a6,6,0,0,0,5.37-6.57ZM238,88.79,222.87,201.85A14,14,0,0,1,209,214H47a14,14,0,0,1-13.87-12.15L18.05,88.79A6,6,0,0,1,24,82H69.28l54.2-61.95a6,6,0,0,1,9,0l54.2,62H232A6,6,0,0,1,238,88.79ZM85.22,82h85.56L128,33.11ZM225.15,94H30.85L45,200.26A2,2,0,0,0,47,202H209a2,2,0,0,0,2-1.74Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M136,120v56a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm36.84-.8-5.6,56A8,8,0,0,0,174.4,184a7.32,7.32,0,0,0,.81,0,8,8,0,0,0,7.95-7.2l5.6-56a8,8,0,0,0-15.92-1.6Zm-89.68,0a8,8,0,0,0-15.92,1.6l5.6,56a8,8,0,0,0,8,7.2,7.32,7.32,0,0,0,.81,0,8,8,0,0,0,7.16-8.76ZM239.93,89.06,224.86,202.12A16.06,16.06,0,0,1,209,216H47a16.06,16.06,0,0,1-15.86-13.88L16.07,89.06A8,8,0,0,1,24,80H68.37L122,18.73a8,8,0,0,1,12,0L187.63,80H232a8,8,0,0,1,7.93,9.06ZM89.63,80h76.74L128,36.15ZM222.86,96H33.14L47,200H209Z\"/>";
const SECONDARY_PATHS = "<path d=\"M232,88,216.93,201.06A8,8,0,0,1,209,208H47a8,8,0,0,1-7.93-6.94L24,88Z\"/>";

export const Basket = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BasketProps) => {
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
