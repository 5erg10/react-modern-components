import { SVGProps } from "react";

export type ChurchVariant = "duotone" | "fill" | "light";

export interface ChurchProps extends SVGProps<SVGSVGElement> {
  variant?: ChurchVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M228.12,145.14,192,123.47V104a8,8,0,0,0-4-7L136,67.36V48h16a8,8,0,0,0,0-16H136V16a8,8,0,0,0-16,0V32H104a8,8,0,0,0,0,16h16V67.36L68,97.05a8,8,0,0,0-4,7v19.47L27.88,145.14A8,8,0,0,0,24,152v64a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8V168a16,16,0,0,1,32,0v48a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8V152A8,8,0,0,0,228.12,145.14ZM64,208H40V156.53l24-14.4Zm152,0H192V142.13l24,14.4Z\"/>";
const LIGHT_INNER     = "<path d=\"M227.09,146.86,190,124.6V104a6,6,0,0,0-3-5.21L134,68.52V46h18a6,6,0,0,0,0-12H134V16a6,6,0,0,0-12,0V34H104a6,6,0,0,0,0,12h18V68.52L69,98.79A6,6,0,0,0,66,104v20.6L28.91,146.86A6,6,0,0,0,26,152v64a6,6,0,0,0,6,6h80a6,6,0,0,0,6-6V168a10,10,0,0,1,20,0v48a6,6,0,0,0,6,6h80a6,6,0,0,0,6-6V152A6,6,0,0,0,227.09,146.86ZM38,155.4l28-16.8V210H38Zm90-9.4a22,22,0,0,0-22,22v42H78V107.48l50-28.57,50,28.57V210H150V168A22,22,0,0,0,128,146Zm90,64H190V138.6l28,16.8Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M228.12,145.14,192,123.47V104a8,8,0,0,0-4-7L136,67.36V48h16a8,8,0,0,0,0-16H136V16a8,8,0,0,0-16,0V32H104a8,8,0,0,0,0,16h16V67.36L68,97.05a8,8,0,0,0-4,7v19.47L27.88,145.14A8,8,0,0,0,24,152v64a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V168a8,8,0,0,1,16,0v48a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V152A8,8,0,0,0,228.12,145.14ZM40,156.53l24-14.4V208H40ZM128,144a24,24,0,0,0-24,24v40H80V108.64l48-27.43,48,27.43V208H152V168A24,24,0,0,0,128,144Zm88,64H192V142.13l24,14.4Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,152v64H184V128ZM32,216H72V128L32,152Z\"/>";

export const Church = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ChurchProps) => {
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
