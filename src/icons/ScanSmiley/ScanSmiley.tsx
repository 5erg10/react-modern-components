import { SVGProps } from "react";

export type ScanSmileyVariant = "duotone" | "fill" | "light";

export interface ScanSmileyProps extends SVGProps<SVGSVGElement> {
  variant?: ScanSmileyVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M224,40V76a8,8,0,0,1-16,0V48H180a8,8,0,0,1,0-16h36A8,8,0,0,1,224,40Zm-8,132a8,8,0,0,0-8,8v28H180a8,8,0,0,0,0,16h36a8,8,0,0,0,8-8V180A8,8,0,0,0,216,172ZM76,208H48V180a8,8,0,0,0-16,0v36a8,8,0,0,0,8,8H76a8,8,0,0,0,0-16ZM40,84a8,8,0,0,0,8-8V48H76a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8V76A8,8,0,0,0,40,84Zm88,116a72,72,0,1,1,72-72A72.08,72.08,0,0,1,128,200Zm-24-72a12,12,0,1,0-12-12A12,12,0,0,0,104,128Zm54,18.71a8,8,0,0,0-11.29-.71c-3.81,3.37-12,6-18.71,6s-14.9-2.63-18.71-6a8,8,0,1,0-10.58,12c7.83,6.91,20.35,10,29.29,10s21.46-3.09,29.29-10A8,8,0,0,0,158,146.71ZM164,116a12,12,0,1,0-12,12A12,12,0,0,0,164,116Z\"/>";
const LIGHT_INNER     = "<path d=\"M222,40V76a6,6,0,0,1-12,0V46H180a6,6,0,0,1,0-12h36A6,6,0,0,1,222,40Zm-6,134a6,6,0,0,0-6,6v30H180a6,6,0,0,0,0,12h36a6,6,0,0,0,6-6V180A6,6,0,0,0,216,174ZM76,210H46V180a6,6,0,0,0-12,0v36a6,6,0,0,0,6,6H76a6,6,0,0,0,0-12ZM40,82a6,6,0,0,0,6-6V46H76a6,6,0,0,0,0-12H40a6,6,0,0,0-6,6V76A6,6,0,0,0,40,82Zm88,116a70,70,0,1,1,70-70A70.08,70.08,0,0,1,128,198Zm58-70a58,58,0,1,0-58,58A58.07,58.07,0,0,0,186,128Zm-72-12a10,10,0,1,0-10,10A10,10,0,0,0,114,116Zm38-10a10,10,0,1,0,10,10A10,10,0,0,0,152,106Zm-4,41.5c-4.2,3.71-12.81,6.5-20,6.5s-15.83-2.79-20-6.5a6,6,0,0,0-7.94,9c7.44,6.56,19.41,9.5,28,9.5s20.53-2.94,28-9.5a6,6,0,1,0-7.94-9Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M224,40V76a8,8,0,0,1-16,0V48H180a8,8,0,0,1,0-16h36A8,8,0,0,1,224,40Zm-8,132a8,8,0,0,0-8,8v28H180a8,8,0,0,0,0,16h36a8,8,0,0,0,8-8V180A8,8,0,0,0,216,172ZM76,208H48V180a8,8,0,0,0-16,0v36a8,8,0,0,0,8,8H76a8,8,0,0,0,0-16ZM40,84a8,8,0,0,0,8-8V48H76a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8V76A8,8,0,0,0,40,84Zm88,116a72,72,0,1,1,72-72A72.08,72.08,0,0,1,128,200Zm56-72a56,56,0,1,0-56,56A56.06,56.06,0,0,0,184,128Zm-68-12a12,12,0,1,0-12,12A12,12,0,0,0,116,116Zm36-12a12,12,0,1,0,12,12A12,12,0,0,0,152,104Zm-5.29,42c-3.81,3.37-12,6-18.71,6s-14.9-2.63-18.71-6a8,8,0,1,0-10.58,12c7.83,6.91,20.35,10,29.29,10s21.46-3.09,29.29-10a8,8,0,1,0-10.58-12Z\"/>";
const SECONDARY_PATHS = "<path d=\"M192,128a64,64,0,1,1-64-64A64,64,0,0,1,192,128Z\"/>";

export const ScanSmiley = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ScanSmileyProps) => {
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
