import { SVGProps } from "react";

export type AcornVariant = "duotone" | "fill" | "light";

export interface AcornProps extends SVGProps<SVGSVGElement> {
  variant?: AcornVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M232,104a56.06,56.06,0,0,0-56-56H136a24,24,0,0,1,24-24,8,8,0,0,0,0-16,40,40,0,0,0-40,40H80a56.06,56.06,0,0,0-56,56,16,16,0,0,0,8,13.84V128c0,35.53,33.12,62.12,59.74,83.49C103.66,221.07,120,234.18,120,240a8,8,0,0,0,16,0c0-5.82,16.34-18.93,28.26-28.51C190.88,190.12,224,163.53,224,128V117.84A16,16,0,0,0,232,104Zm-77.75,95c-10.62,8.52-20,16-26.25,23.37-6.25-7.32-15.63-14.85-26.25-23.37C77.8,179.79,48,155.86,48,128v-8H208v8C208,155.86,178.2,179.79,154.25,199Z\"/>";
const LIGHT_INNER     = "<path d=\"M230,104a54.06,54.06,0,0,0-54-54H134V48a26,26,0,0,1,26-26,6,6,0,0,0,0-12,38,38,0,0,0-38,38v2H80a54.06,54.06,0,0,0-54,54,14,14,0,0,0,8,12.63V128c0,34.57,32.71,60.83,59,81.93,14.26,11.45,29,23.29,29,30.07a6,6,0,0,0,12,0c0-6.78,14.75-18.62,29-30.07,26.28-21.1,59-47.36,59-81.93V116.63A14,14,0,0,0,230,104ZM80,62h96a42,42,0,0,1,42,42,2,2,0,0,1-2,2H40a2,2,0,0,1-2-2A42,42,0,0,1,80,62Zm75.5,138.58c-11.48,9.21-21.48,17.24-27.5,25-6-7.72-16-15.75-27.5-25C76.22,181.08,46,156.82,46,128V118H210v10C210,156.82,179.78,181.08,155.5,200.58Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M232,104a56.06,56.06,0,0,0-56-56H136a24,24,0,0,1,24-24,8,8,0,0,0,0-16,40,40,0,0,0-40,40H80a56.06,56.06,0,0,0-56,56,16,16,0,0,0,8,13.83V128c0,35.53,33.12,62.12,59.74,83.49C103.66,221.07,120,234.18,120,240a8,8,0,0,0,16,0c0-5.82,16.34-18.93,28.26-28.51C190.88,190.12,224,163.53,224,128V117.83A16,16,0,0,0,232,104ZM80,64h96a40.06,40.06,0,0,1,40,40H40A40,40,0,0,1,80,64Zm74.25,135c-10.62,8.52-20,16-26.25,23.37-6.25-7.32-15.63-14.85-26.25-23.37C77.8,179.79,48,155.86,48,128v-8H208v8C208,155.86,178.2,179.79,154.25,199Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,112v16c0,53-88,88-88,112,0-24-88-59-88-112V112Z\"/>";

export const Acorn = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: AcornProps) => {
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
