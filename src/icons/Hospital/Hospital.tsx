import { SVGProps } from "react";

export type HospitalVariant = "duotone" | "fill" | "light";

export interface HospitalProps extends SVGProps<SVGSVGElement> {
  variant?: HospitalVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M248,208h-8V128a16,16,0,0,0-16-16H168V48a16,16,0,0,0-16-16H56A16,16,0,0,0,40,48V208H32a8,8,0,0,0,0,16H248a8,8,0,0,0,0-16Zm-120,0H80V160h48Zm0-104H112v16a8,8,0,0,1-16,0V104H80a8,8,0,0,1,0-16H96V72a8,8,0,0,1,16,0V88h16a8,8,0,0,1,0,16Zm96,104H168V128h56Z\"/>";
const LIGHT_INNER     = "<path d=\"M248,210H238V128a14,14,0,0,0-14-14H166V48a14,14,0,0,0-14-14H56A14,14,0,0,0,42,48V210H32a6,6,0,0,0,0,12H248a6,6,0,0,0,0-12Zm-24-84a2,2,0,0,1,2,2v82H166V126ZM54,48a2,2,0,0,1,2-2h96a2,2,0,0,1,2,2V210H134V160a6,6,0,0,0-6-6H80a6,6,0,0,0-6,6v50H54Zm68,162H86V166h36ZM74,96a6,6,0,0,1,6-6H98V72a6,6,0,0,1,12,0V90h18a6,6,0,0,1,0,12H110v18a6,6,0,0,1-12,0V102H80A6,6,0,0,1,74,96Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M248,208h-8V128a16,16,0,0,0-16-16H168V48a16,16,0,0,0-16-16H56A16,16,0,0,0,40,48V208H32a8,8,0,0,0,0,16H248a8,8,0,0,0,0-16Zm-24-80v80H168V128ZM56,48h96V208H136V160a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8v48H56Zm64,160H88V168h32ZM72,96a8,8,0,0,1,8-8H96V72a8,8,0,0,1,16,0V88h16a8,8,0,0,1,0,16H112v16a8,8,0,0,1-16,0V104H80A8,8,0,0,1,72,96Z\"/>";
const SECONDARY_PATHS = "<path d=\"M160,48V216H128V160H80v56H48V48a8,8,0,0,1,8-8h96A8,8,0,0,1,160,48Z\"/>";

export const Hospital = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: HospitalProps) => {
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
