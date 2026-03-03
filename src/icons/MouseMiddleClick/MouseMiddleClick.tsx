import { SVGProps } from "react";

export type MouseMiddleClickVariant = "duotone" | "fill" | "light";

export interface MouseMiddleClickProps extends SVGProps<SVGSVGElement> {
  variant?: MouseMiddleClickVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm48,64v24H152V88a16,16,0,0,0-16-16V32h8A48.05,48.05,0,0,1,192,80ZM112,32h8V72a16,16,0,0,0-16,16v16H64V80A48.05,48.05,0,0,1,112,32Zm32,192H112a48.05,48.05,0,0,1-48-48V120h40v16a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V120h40v56A48.05,48.05,0,0,1,144,224Z\"/>";
const LIGHT_INNER     = "<path d=\"M144,18H112A62.07,62.07,0,0,0,50,80v96a62.07,62.07,0,0,0,62,62h32a62.07,62.07,0,0,0,62-62V80A62.07,62.07,0,0,0,144,18Zm50,62v26H150V88a14,14,0,0,0-14-14h-2V30h10A50.06,50.06,0,0,1,194,80Zm-76,8a2,2,0,0,1,2-2h16a2,2,0,0,1,2,2v48a2,2,0,0,1-2,2H120a2,2,0,0,1-2-2Zm-6-58h10V74h-2a14,14,0,0,0-14,14v18H62V80A50.06,50.06,0,0,1,112,30Zm32,196H112a50.06,50.06,0,0,1-50-50V118h44v18a14,14,0,0,0,14,14h16a14,14,0,0,0,14-14V118h44v58A50.06,50.06,0,0,1,144,226Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm48,64v24H152V88a16,16,0,0,0-16-16V32h8A48.05,48.05,0,0,1,192,80Zm-56,56H120V88h16v23.9a.51.51,0,0,0,0,.2ZM112,32h8V72a16,16,0,0,0-16,16v16H64V80A48.05,48.05,0,0,1,112,32Zm32,192H112a48.05,48.05,0,0,1-48-48V120h40v16a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V120h40v56A48.05,48.05,0,0,1,144,224Z\"/>";
const SECONDARY_PATHS = "<path d=\"M144,88v48a8,8,0,0,1-8,8H120a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8h16A8,8,0,0,1,144,88Z\"/>";

export const MouseMiddleClick = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: MouseMiddleClickProps) => {
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
