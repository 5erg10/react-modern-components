import { SVGProps } from "react";

export type CashRegisterVariant = "duotone" | "fill" | "light";

export interface CashRegisterProps extends SVGProps<SVGSVGElement> {
  variant?: CashRegisterVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M239.76,158.06,217.28,68.12A16,16,0,0,0,201.75,56H136V40a16,16,0,0,0-16-16H80A16,16,0,0,0,64,40V56H54.25A16,16,0,0,0,38.72,68.12L16.24,158.06A7.93,7.93,0,0,0,16,160v32a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V160A7.93,7.93,0,0,0,239.76,158.06ZM168,88h16a8,8,0,0,1,0,16H168a8,8,0,0,1,0-16Zm0,32h16a8,8,0,0,1,0,16H168a8,8,0,0,1,0-16ZM136,88a8,8,0,0,1,0,16H120a8,8,0,0,1,0-16Zm8,40a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h16A8,8,0,0,1,144,128ZM80,40h40V56H80ZM72,88H88a8,8,0,0,1,0,16H72a8,8,0,0,1,0-16Zm0,32H88a8,8,0,0,1,0,16H72a8,8,0,0,1,0-16Zm152,72H32V168H224Z\"/>";
const LIGHT_INNER     = "<path d=\"M237.82,158.54,215.34,68.61A14,14,0,0,0,201.75,58H134V40a14,14,0,0,0-14-14H80A14,14,0,0,0,66,40V58H54.25A14,14,0,0,0,40.66,68.6L18.18,158.54A6,6,0,0,0,18,160v32a14,14,0,0,0,14,14H224a14,14,0,0,0,14-14V160A6,6,0,0,0,237.82,158.54ZM78,40a2,2,0,0,1,2-2h40a2,2,0,0,1,2,2V58H78ZM52.31,71.51A2,2,0,0,1,54.25,70h147.5a2,2,0,0,1,1.94,1.51L224.32,154H31.68ZM224,194H32a2,2,0,0,1-2-2V166H226v26A2,2,0,0,1,224,194ZM66,96a6,6,0,0,1,6-6H88a6,6,0,0,1,0,12H72A6,6,0,0,1,66,96Zm48,0a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H120A6,6,0,0,1,114,96Zm48,0a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H168A6,6,0,0,1,162,96ZM66,128a6,6,0,0,1,6-6H88a6,6,0,0,1,0,12H72A6,6,0,0,1,66,128Zm48,0a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H120A6,6,0,0,1,114,128Zm48,0a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H168A6,6,0,0,1,162,128Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M239.76,158.06,217.28,68.12A16,16,0,0,0,201.75,56H136V40a16,16,0,0,0-16-16H80A16,16,0,0,0,64,40V56H54.25A16,16,0,0,0,38.72,68.12L16.24,158.06A7.93,7.93,0,0,0,16,160v32a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V160A7.93,7.93,0,0,0,239.76,158.06ZM80,40h40V56H80ZM54.25,72h147.5l20,80H34.25ZM32,192V168H224v24ZM64,96a8,8,0,0,1,8-8H88a8,8,0,0,1,0,16H72A8,8,0,0,1,64,96Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H120A8,8,0,0,1,112,96Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H168A8,8,0,0,1,160,96ZM64,128a8,8,0,0,1,8-8H88a8,8,0,0,1,0,16H72A8,8,0,0,1,64,128Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H120A8,8,0,0,1,112,128Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H168A8,8,0,0,1,160,128Z\"/>";
const SECONDARY_PATHS = "<path d=\"M232,160H24L46.49,70.06A8,8,0,0,1,54.25,64h147.5a8,8,0,0,1,7.76,6.06Z\"/>";

export const CashRegister = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CashRegisterProps) => {
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
