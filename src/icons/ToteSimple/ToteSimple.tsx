import { SVGProps } from "react";

export type ToteSimpleVariant = "duotone" | "fill" | "light";

export interface ToteSimpleProps extends SVGProps<SVGSVGElement> {
  variant?: ToteSimpleVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M236,69.4A16.13,16.13,0,0,0,223.92,64H176a48,48,0,0,0-96,0H32.08a16.13,16.13,0,0,0-12,5.4,16,16,0,0,0-3.92,12.48l14.26,120a16,16,0,0,0,16,14.12H209.67a16,16,0,0,0,16-14.12l14.26-120A16,16,0,0,0,236,69.4ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Z\"/>";
const LIGHT_INNER     = "<path d=\"M234.47,70.73A14.09,14.09,0,0,0,223.92,66H174V64a46,46,0,0,0-92,0v2H32.08a14,14,0,0,0-14,15.64l14.25,120a14.06,14.06,0,0,0,14,12.36H209.67a14.06,14.06,0,0,0,14-12.36l14.25-120A14,14,0,0,0,234.47,70.73ZM94,64a34,34,0,0,1,68,0v2H94ZM211.73,200.23a2,2,0,0,1-2.06,1.77H46.33a2,2,0,0,1-2.06-1.77L30,80.23a1.92,1.92,0,0,1,.49-1.53,2.07,2.07,0,0,1,1.58-.7H223.92a2.07,2.07,0,0,1,1.58.7,1.92,1.92,0,0,1,.49,1.53Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M236,69.4A16.13,16.13,0,0,0,223.92,64H176a48,48,0,0,0-96,0H32.08a16.13,16.13,0,0,0-12,5.4,16,16,0,0,0-3.92,12.48l14.26,120a16,16,0,0,0,16,14.12H209.67a16,16,0,0,0,16-14.12l14.26-120A16,16,0,0,0,236,69.4ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm81.76,168a.13.13,0,0,1-.09,0H46.25L32.08,80H224Z\"/>";
const SECONDARY_PATHS = "<path d=\"M231.94,80.93l-14.25,120a8.06,8.06,0,0,1-8,7.07H46.33a8.06,8.06,0,0,1-8-7.07l-14.25-120a8,8,0,0,1,8-8.93H223.92A8,8,0,0,1,231.94,80.93Z\"/>";

export const ToteSimple = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ToteSimpleProps) => {
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
