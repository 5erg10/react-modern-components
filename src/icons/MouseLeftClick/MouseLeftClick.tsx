import { SVGProps } from "react";

export type MouseLeftClickVariant = "duotone" | "fill" | "light";

export interface MouseLeftClickProps extends SVGProps<SVGSVGElement> {
  variant?: MouseLeftClickVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm48,64v24H128V32h16A48.05,48.05,0,0,1,192,80ZM144,224H112a48.05,48.05,0,0,1-48-48V120H192v56A48.05,48.05,0,0,1,144,224Z\"/>";
const LIGHT_INNER     = "<path d=\"M144,18H112A62.07,62.07,0,0,0,50,80v96a62.07,62.07,0,0,0,62,62h32a62.07,62.07,0,0,0,62-62V80A62.07,62.07,0,0,0,144,18Zm50,62v26H134V30h10A50.06,50.06,0,0,1,194,80ZM122,30V65.51L91.09,34.6A49.74,49.74,0,0,1,112,30ZM80.62,41.11,122,82.49V106h-7.51L66.9,58.42A50.3,50.3,0,0,1,80.62,41.11ZM62,80a50.17,50.17,0,0,1,.78-8.73L97.51,106H62Zm82,146H112a50.06,50.06,0,0,1-50-50V118H194v58A50.06,50.06,0,0,1,144,226Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm48,64v24H136V32h8A48.05,48.05,0,0,1,192,80Zm-76.69,24-46-46A48.49,48.49,0,0,1,80.51,43.82L120,83.31V104ZM64,80c0-1.51.08-3,.22-4.47L92.69,104H64Zm56-48V60.69L94.59,35.28A47.73,47.73,0,0,1,112,32Zm24,192H112a48.05,48.05,0,0,1-48-48V120H192v56A48.05,48.05,0,0,1,144,224Z\"/>";
const SECONDARY_PATHS = "<path d=\"M128,24v88H56V80a56,56,0,0,1,56-56Z\"/>";

export const MouseLeftClick = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: MouseLeftClickProps) => {
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
