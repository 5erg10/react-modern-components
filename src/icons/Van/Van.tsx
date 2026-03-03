import { SVGProps } from "react";

export type VanVariant = "duotone" | "fill" | "light";

export interface VanProps extends SVGProps<SVGSVGElement> {
  variant?: VanVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M254.07,106.79,208.53,53.73A16,16,0,0,0,196.26,48H32A16,16,0,0,0,16,64V176a16,16,0,0,0,16,16H49a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V112A8,8,0,0,0,254.07,106.79ZM32,104V64H88v40Zm48,96a16,16,0,1,1,16-16A16,16,0,0,1,80,200Zm80-96H104V64h56Zm32,96a16,16,0,1,1,16-16A16,16,0,0,1,192,200Zm-16-96V64h20.26l34.33,40Z\"/>";
const LIGHT_INNER     = "<path d=\"M252.55,108.09,207,55a14,14,0,0,0-10.74-5H32A14,14,0,0,0,18,64V176a14,14,0,0,0,14,14H50.6a30,30,0,0,0,58.8,0h53.2a30,30,0,0,0,58.8,0H240a14,14,0,0,0,14-14V112A6,6,0,0,0,252.55,108.09Zm-54.7-45.32L234.94,106H174V62h22.26A2,2,0,0,1,197.85,62.77ZM102,106V62h60v44ZM32,62H90v44H30V64A2,2,0,0,1,32,62ZM80,202a18,18,0,1,1,18-18A18,18,0,0,1,80,202Zm112,0a18,18,0,1,1,18-18A18,18,0,0,1,192,202Zm48-24H221.4a30,30,0,0,0-58.8,0H109.4a30,30,0,0,0-58.8,0H32a2,2,0,0,1-2-2V118H242v58A2,2,0,0,1,240,178Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M254.07,106.79,208.53,53.73A16,16,0,0,0,196.26,48H32A16,16,0,0,0,16,64V176a16,16,0,0,0,16,16H49a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V112A8,8,0,0,0,254.07,106.79ZM230.59,104H176V64h20.26ZM104,104V64h56v40ZM88,64v40H32V64ZM80,200a16,16,0,1,1,16-16A16,16,0,0,1,80,200Zm112,0a16,16,0,1,1,16-16A16,16,0,0,1,192,200Zm31-24a32,32,0,0,0-62,0H111a32,32,0,0,0-62,0H32V120H240v56Z\"/>";
const SECONDARY_PATHS = "<path d=\"M248,112v64a8,8,0,0,1-8,8H216a24,24,0,0,0-48,0H104a24,24,0,0,0-48,0H32a8,8,0,0,1-8-8V112Z\"/>";

export const Van = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: VanProps) => {
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
