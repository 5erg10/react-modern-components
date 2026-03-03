import { SVGProps } from "react";

export type FolderUserVariant = "duotone" | "fill" | "light";

export interface FolderUserProps extends SVGProps<SVGSVGElement> {
  variant?: FolderUserVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M231.73,221.94A8,8,0,0,1,224,232H160A8,8,0,0,1,152.27,222a40,40,0,0,1,17.11-23.33,32,32,0,1,1,45.24,0A40,40,0,0,1,231.73,221.94ZM232,88v32a8,8,0,0,1-16,0V88H40V200h80.56a8,8,0,0,1,0,16H39.38A15.4,15.4,0,0,1,24,200.62V56A16,16,0,0,1,40,40H92.69A15.86,15.86,0,0,1,104,44.69L131.31,72H216A16,16,0,0,1,232,88ZM108.69,72l-16-16H40V72Z\"/>";
const LIGHT_INNER     = "<path d=\"M211.28,199a30,30,0,1,0-38.56,0,38.09,38.09,0,0,0-18.52,23.5,6,6,0,0,0,4.26,7.34,6.26,6.26,0,0,0,1.54.2,6,6,0,0,0,5.8-4.46C168.86,214,179.63,206,192,206s23.14,8,26.2,19.54a6,6,0,0,0,11.6-3.09A38.09,38.09,0,0,0,211.28,199ZM192,158a18,18,0,1,1-18,18A18,18,0,0,1,192,158Zm24-84H130.48L102.59,46.1a13.94,13.94,0,0,0-9.9-4.1H40A14,14,0,0,0,26,56V200.61A13.4,13.4,0,0,0,39.38,214h81.18a6,6,0,0,0,0-12H39.38A1.4,1.4,0,0,1,38,200.61V86H216a2,2,0,0,1,2,2v32a6,6,0,0,0,12,0V88A14,14,0,0,0,216,74ZM40,54H92.69a2,2,0,0,1,1.41.59L113.51,74H38V56A2,2,0,0,1,40,54Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M214.61,198.62a32,32,0,1,0-45.23,0,40,40,0,0,0-17.11,23.32,8,8,0,0,0,5.67,9.79A8.15,8.15,0,0,0,160,232a8,8,0,0,0,7.73-5.95C170.56,215.42,180.54,208,192,208s21.44,7.42,24.27,18.05a8,8,0,1,0,15.46-4.11A40,40,0,0,0,214.61,198.62ZM192,160a16,16,0,1,1-16,16A16,16,0,0,1,192,160Zm24-88H131.31L104,44.69A15.86,15.86,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.61A15.4,15.4,0,0,0,39.38,216h81.18a8,8,0,0,0,0-16H40V88H216v32a8,8,0,0,0,16,0V88A16,16,0,0,0,216,72ZM92.69,56l16,16H40V56Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,176a24,24,0,1,1-24-24A24,24,0,0,1,216,176Z\"/>";

export const FolderUser = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: FolderUserProps) => {
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
