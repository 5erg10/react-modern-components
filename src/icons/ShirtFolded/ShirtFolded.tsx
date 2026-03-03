import { SVGProps } from "react";

export type ShirtFoldedVariant = "duotone" | "fill" | "light";

export interface ShirtFoldedProps extends SVGProps<SVGSVGElement> {
  variant?: ShirtFoldedVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M201,40H179.35L165.66,26.34A8,8,0,0,0,160,24H96a8,8,0,0,0-5.66,2.34L76.65,40H55A15,15,0,0,0,40,55V209a15,15,0,0,0,15,15h61a4,4,0,0,0,4-4V104.27A8.18,8.18,0,0,1,127.47,96a8,8,0,0,1,8.53,8V220a4,4,0,0,0,4,4h61a15,15,0,0,0,15-15V55A15,15,0,0,0,201,40ZM86.54,107.08A4,4,0,0,1,80,104V59.31L95.24,44.07l23.47,35.21ZM128,80h0v0Zm48,24a4,4,0,0,1-2.3,3.63,3.93,3.93,0,0,1-4.21-.51l-32.2-27.82,23.47-35.21L176,59.31Z\"/>";
const LIGHT_INNER     = "<path d=\"M200,42H178.48L164.25,27.76A6,6,0,0,0,160,26H96a6,6,0,0,0-4.25,1.76L77.52,42H56A14,14,0,0,0,42,56V208a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42ZM128,69.18,107.21,38h41.58Zm32.93-27.76L170,50.49V104a2,2,0,0,1-3.25,1.56L135.93,78.92ZM86,50.49l9.07-9.07,25,37.5L89.25,105.54A2,2,0,0,1,86,104ZM54,208V56a2,2,0,0,1,2-2H74v50a13.87,13.87,0,0,0,8.06,12.68A14.11,14.11,0,0,0,88,118,13.87,13.87,0,0,0,97,114.74l.08-.07,25-21.56V210H56A2,2,0,0,1,54,208Zm148,0a2,2,0,0,1-2,2H134V93.11l25,21.56.08.07A13.87,13.87,0,0,0,168,118a14.08,14.08,0,0,0,6-1.35A13.87,13.87,0,0,0,182,104V54h18a2,2,0,0,1,2,2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M200,40H179.31L165.66,26.34h0A8,8,0,0,0,160,24H96a8,8,0,0,0-5.66,2.34h0L76.69,40H56A16,16,0,0,0,40,56V208a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm-38.76,4.56L168,51.31V104L138.57,78.56ZM88,51.31l6.76-6.75,22.67,34L88,104ZM56,56H72v48a15.85,15.85,0,0,0,9.21,14.49A16.1,16.1,0,0,0,88,120a15.89,15.89,0,0,0,10.2-3.73.52.52,0,0,0,.11-.1L120,97.48V208H56ZM200,208H136V97.48l21.65,18.7a.52.52,0,0,0,.11.1A15.89,15.89,0,0,0,168,120a16.1,16.1,0,0,0,6.83-1.54A15.85,15.85,0,0,0,184,104V56h16Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,56V208a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H80v56a8,8,0,0,0,13.12,6.15L128,80l34.88,30.13A8,8,0,0,0,176,104V48h24A8,8,0,0,1,208,56Z\"/>";

export const ShirtFolded = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ShirtFoldedProps) => {
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
