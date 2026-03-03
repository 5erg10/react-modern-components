import { SVGProps } from "react";

export type PencilCircleVariant = "duotone" | "fill" | "light";

export interface PencilCircleProps extends SVGProps<SVGSVGElement> {
  variant?: PencilCircleVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM128,170.87a31.93,31.93,0,0,0-32.31-9.77L111,128H145l15.27,33.1A31.93,31.93,0,0,0,128,170.87Zm40,35.5a88,88,0,0,1-32,9.22V192a16,16,0,0,1,32,0Zm22.22-16.14c-2,2-4.08,3.87-6.22,5.64V176a7.91,7.91,0,0,0-.74-3.35l-48-104a8,8,0,0,0-14.52,0l-48,104A7.91,7.91,0,0,0,72,176v19.87c-2.14-1.77-4.22-3.64-6.22-5.64a88,88,0,1,1,124.44,0Z\"/>";
const LIGHT_INNER     = "<path d=\"M200.12,55.87A102,102,0,1,0,55.88,200.12,102,102,0,1,0,200.12,55.87ZM106,134h44l14.1,30.56A30,30,0,0,0,128,174a30,30,0,0,0-36.11-9.46Zm5.54-12L128,86.32,144.47,122ZM134,192a18,18,0,0,1,36,0v15.64a89.26,89.26,0,0,1-36,10.14Zm-48,0a18,18,0,0,1,36,0v25.78a89.26,89.26,0,0,1-36-10.14Zm105.64-.36A92.76,92.76,0,0,1,182,200V176a6,6,0,0,0-.55-2.51l-48-104a6,6,0,0,0-10.9,0l-48,104A6,6,0,0,0,74,176v24a92.76,92.76,0,0,1-9.64-8.37,90,90,0,1,1,127.28,0Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM88,192a16,16,0,0,1,32,0v23.59a88,88,0,0,1-32-9.22Zm48,0a16,16,0,0,1,32,0v14.37a88,88,0,0,1-32,9.22Zm-28.73-56h41.46l11.58,25.1A31.93,31.93,0,0,0,128,170.87a31.93,31.93,0,0,0-32.31-9.77Zm7.39-16L128,91.09,141.34,120Zm75.56,70.23c-2,2-4.08,3.87-6.22,5.64V176a7.91,7.91,0,0,0-.74-3.35l-48-104a8,8,0,0,0-14.52,0l-48,104A7.91,7.91,0,0,0,72,176v19.87c-2.14-1.77-4.22-3.64-6.22-5.64a88,88,0,1,1,124.44,0Z\"/>";
const SECONDARY_PATHS = "<path d=\"M176,211.16Zm-96,0ZM224,128A96,96,0,1,0,80,211.16V176L128,72l48,104v35.16A96,96,0,0,0,224,128Z\"/>";

export const PencilCircle = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PencilCircleProps) => {
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
