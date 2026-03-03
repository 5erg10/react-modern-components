import { SVGProps } from "react";

export type ReadCvLogoVariant = "duotone" | "fill" | "light";

export interface ReadCvLogoProps extends SVGProps<SVGSVGElement> {
  variant?: ReadCvLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M210.78,39.25l-130.25-23A16,16,0,0,0,62,29.23l-29.75,169a16,16,0,0,0,13,18.53l130.25,23a16,16,0,0,0,18.54-13l29.75-169A16,16,0,0,0,210.78,39.25ZM135.5,131.56a8,8,0,0,1-7.87,6.61,8.27,8.27,0,0,1-1.4-.12l-41.5-7.33A8,8,0,0,1,87.52,115L129,122.29A8,8,0,0,1,135.5,131.56Zm47-24.18a8,8,0,0,1-7.86,6.61,7.55,7.55,0,0,1-1.41-.13l-83-14.65a8,8,0,0,1,2.79-15.76l83,14.66A8,8,0,0,1,182.53,107.38Zm5.55-31.52a8,8,0,0,1-7.87,6.61,8.36,8.36,0,0,1-1.4-.12l-83-14.66a8,8,0,1,1,2.78-15.75l83,14.65A8,8,0,0,1,188.08,75.86Z\"/>";
const LIGHT_INNER     = "<path d=\"M210.43,41.22l-130.25-23A14,14,0,0,0,64,29.58l-29.75,169a14,14,0,0,0,11.36,16.22l130.25,23h0a13.64,13.64,0,0,0,2.46.22A14,14,0,0,0,192,226.42l29.75-169A14,14,0,0,0,210.43,41.22ZM210,55.36l-29.75,169a2,2,0,0,1-.82,1.3,2,2,0,0,1-1.49.33L47.65,203A2,2,0,0,1,46,200.64l29.75-169a2,2,0,0,1,.82-1.3A2.06,2.06,0,0,1,78.1,30L208.35,53A2,2,0,0,1,210,55.36ZM186.11,75.51a6,6,0,0,1-5.9,5,6.2,6.2,0,0,1-1.05-.09l-83-14.66a6,6,0,1,1,2.09-11.81l83,14.65A6,6,0,0,1,186.11,75.51ZM180.56,107a6,6,0,0,1-5.9,5,5.48,5.48,0,0,1-1-.1l-83-14.65a6,6,0,0,1,2.09-11.82l83,14.66A6,6,0,0,1,180.56,107Zm-47,24.19a6,6,0,0,1-5.91,4.95,6.38,6.38,0,0,1-1.05-.09l-41.49-7.33a6,6,0,1,1,2.09-11.81l41.49,7.32A6,6,0,0,1,133.53,131.22Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M210.78,39.25l-130.25-23A16,16,0,0,0,62,29.23l-29.75,169a16,16,0,0,0,13,18.53l130.25,23h0a16,16,0,0,0,18.54-13l29.75-169A16,16,0,0,0,210.78,39.25ZM178.26,224h0L48,201,77.75,32,208,55ZM89.34,58.42a8,8,0,0,1,9.27-6.48l83,14.65a8,8,0,0,1-1.39,15.88,8.36,8.36,0,0,1-1.4-.12l-83-14.66A8,8,0,0,1,89.34,58.42ZM83.8,89.94a8,8,0,0,1,9.27-6.49l83,14.66A8,8,0,0,1,174.67,114a7.55,7.55,0,0,1-1.41-.13l-83-14.65A8,8,0,0,1,83.8,89.94Zm-5.55,31.51A8,8,0,0,1,87.52,115L129,122.29a8,8,0,0,1-1.38,15.88,8.27,8.27,0,0,1-1.4-.12l-41.5-7.33A8,8,0,0,1,78.25,121.45Z\"/>";
const SECONDARY_PATHS = "<path d=\"M215.88,56.39l-29.75,169a8,8,0,0,1-9.27,6.49l-130.25-23a8,8,0,0,1-6.49-9.26l29.75-169a8,8,0,0,1,9.27-6.49l130.25,23A8,8,0,0,1,215.88,56.39Z\"/>";

export const ReadCvLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ReadCvLogoProps) => {
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
