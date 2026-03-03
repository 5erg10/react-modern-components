import { SVGProps } from "react";

export type PanoramaVariant = "duotone" | "fill" | "light";

export interface PanoramaProps extends SVGProps<SVGSVGElement> {
  variant?: PanoramaVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M241.75,51.32a15.87,15.87,0,0,0-13.86-2.77l-3.48.94C205.61,54.56,170.61,64,128,64S50.39,54.56,31.59,49.49l-3.48-.94A16,16,0,0,0,8,64V192a16,16,0,0,0,16,16,16.22,16.22,0,0,0,4.18-.55l3.18-.86C50.13,201.49,85.17,192,128,192s77.87,9.49,96.69,14.59l3.18.86A16,16,0,0,0,248,192V64A15.9,15.9,0,0,0,241.75,51.32ZM204,96a12,12,0,1,1-12,12A12,12,0,0,1,204,96Zm-76,80c-45,0-82.72,10.23-100.87,15.14L24,192v-39.3l46.34-46.35a8,8,0,0,1,11.32,0L152.28,177C144.49,176.35,136.37,176,128,176Zm100.87,15.14a448.7,448.7,0,0,0-51-11.2l-35.26-35.26L157,130.34a8,8,0,0,1,11.31,0l60.89,60.88Z\"/>";
const LIGHT_INNER     = "<path d=\"M240.53,52.9a13.88,13.88,0,0,0-12.12-2.42l-3.48.94C206,56.51,170.87,66,128,66S50,56.51,31.07,51.42l-3.48-.94A14,14,0,0,0,10,64V192a13.95,13.95,0,0,0,17.61,13.52l3.18-.85C49.7,199.53,84.91,190,128,190s78.3,9.53,97.21,14.66l3.18.85A14,14,0,0,0,246,192V64A13.93,13.93,0,0,0,240.53,52.9ZM22.78,62.42A2,2,0,0,1,24,62a2.06,2.06,0,0,1,.52.08l3.44.92C47.37,68.24,83.54,78,128,78s80.63-9.76,100.06-15l3.44-.92A2,2,0,0,1,234,64V187.57L172.53,126.1a14,14,0,0,0-19.8,0l-21.42,21.41L85.9,102.1a14,14,0,0,0-19.8,0L22,146.2V64A2,2,0,0,1,22.78,62.42ZM220.41,191a400.39,400.39,0,0,0-56.52-10.86L139.8,156l21.41-21.41a2,2,0,0,1,2.83,0ZM27.65,193.07l-3.15.86A2,2,0,0,1,22,192V163.17l52.58-52.58a2,2,0,0,1,2.84,0l67.91,67.91c-5.63-.32-11.42-.5-17.33-.5C83.31,178,45.72,188.18,27.65,193.07ZM194,108a10,10,0,1,1,10,10A10,10,0,0,1,194,108Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M241.75,51.32a15.88,15.88,0,0,0-13.86-2.77l-3.48.94C205.61,54.56,170.61,64,128,64S50.39,54.56,31.59,49.49l-3.48-.94A16,16,0,0,0,8,64V192a16,16,0,0,0,16,16,16.22,16.22,0,0,0,4.18-.55l3.18-.86C50.13,201.49,85.17,192,128,192s77.87,9.49,96.69,14.59l3.18.86A16,16,0,0,0,248,192V64A15.9,15.9,0,0,0,241.75,51.32ZM27.42,64.93C46.94,70.2,83.27,80,128,80s81.06-9.8,100.58-15.07L232,64V182.76l-58.07-58.07a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L24,141.37V64ZM213.84,187.21a391.22,391.22,0,0,0-49-9L142.63,156l20-20ZM27.13,191.14,24,192V164l52-52,64.25,64.25q-6-.24-12.25-.25C83,176,45.28,186.23,27.13,191.14ZM192,108a12,12,0,1,1,12,12A12,12,0,0,1,192,108Z\"/>";
const SECONDARY_PATHS = "<path d=\"M240,64V192a8,8,0,0,1-3.47,6.6l-68.25-68.25a8,8,0,0,0-11.31,0L131.31,156,81.66,106.34a8,8,0,0,0-11.32,0L16,160.69V64a8,8,0,0,1,10.05-7.74C43.35,60.89,81.44,72,128,72S212.65,60.89,230,56.27A8,8,0,0,1,240,64Z\"/>";

export const Panorama = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PanoramaProps) => {
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
