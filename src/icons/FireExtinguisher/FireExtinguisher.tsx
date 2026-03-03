import { SVGProps } from "react";

export type FireExtinguisherVariant = "duotone" | "fill" | "light";

export interface FireExtinguisherProps extends SVGProps<SVGSVGElement> {
  variant?: FireExtinguisherVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M218.3,48.34l-60.68-18.2,30-15A8,8,0,0,0,180.42.85L134,24.05a80.08,80.08,0,0,0-78,80V208a8,8,0,0,0,16,0V176H88v56a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16V104a48.07,48.07,0,0,0-40-47.32V42.75l69.7,20.91a8,8,0,1,0,4.6-15.32ZM72,160V104a64.07,64.07,0,0,1,56-63.48V56.68A48.07,48.07,0,0,0,88,104v56Zm96-56v56H104V104a32,32,0,0,1,64,0Z\"/>";
const LIGHT_INNER     = "<path d=\"M217.72,50.25,152.21,30.6l34.47-17.23a6,6,0,1,0-5.36-10.74L134.51,26A78.07,78.07,0,0,0,58,104V208a6,6,0,0,0,12,0V174H90v58a14,14,0,0,0,14,14h64a14,14,0,0,0,14-14V104a46.07,46.07,0,0,0-40-45.6V40.07l72.27,21.68A6.14,6.14,0,0,0,216,62a6,6,0,0,0,1.72-11.75ZM70,162V104a66.07,66.07,0,0,1,60-65.71V58.4A46.07,46.07,0,0,0,90,104v58Zm98,72H104a2,2,0,0,1-2-2V174h68v58A2,2,0,0,1,168,234Zm2-130v58H102V104a34,34,0,0,1,68,0Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M218.3,48.34l-60.68-18.2,30-15A8,8,0,0,0,180.42.85L134,24.05a80.08,80.08,0,0,0-78,80V208a8,8,0,0,0,16,0V176H88v56a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16V104a48.07,48.07,0,0,0-40-47.32V42.75l69.7,20.91a8,8,0,1,0,4.6-15.32ZM88,104v56H72V104a64.07,64.07,0,0,1,56-63.48V56.68A48.07,48.07,0,0,0,88,104Zm80,128H104V176h64Zm0-128v56H104V104a32,32,0,0,1,64,0Z\"/>";
const SECONDARY_PATHS = "<path d=\"M176,168v64a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V168Z\"/>";

export const FireExtinguisher = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: FireExtinguisherProps) => {
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
