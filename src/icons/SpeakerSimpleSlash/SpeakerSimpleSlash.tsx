import { SVGProps } from "react";

export type SpeakerSimpleSlashVariant = "duotone" | "fill" | "light";

export interface SpeakerSimpleSlashProps extends SVGProps<SVGSVGElement> {
  variant?: SpeakerSimpleSlashVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M221.92,210.62a8,8,0,1,1-11.84,10.76L168,175.09v48.6a8.29,8.29,0,0,1-3.91,7.18,8,8,0,0,1-9-.56L85.25,176H40a16,16,0,0,1-16-16V96A16,16,0,0,1,40,80H81.55L50.08,45.38A8,8,0,0,1,61.92,34.62ZM200.53,160a8.17,8.17,0,0,0,7.47-8.25V104.27A8.17,8.17,0,0,0,200.53,96a8,8,0,0,0-8.53,8v48A8,8,0,0,0,200.53,160ZM161,119.87a4,4,0,0,0,7-2.7V32.24a8.25,8.25,0,0,0-2.88-6.39,8,8,0,0,0-10-.16L111.83,59.33a4,4,0,0,0-.5,5.85ZM231.47,80A8.17,8.17,0,0,0,224,88.27v79.46a8.17,8.17,0,0,0,7.47,8.25,8,8,0,0,0,8.53-8V88A8,8,0,0,0,231.47,80Z\"/>";
const LIGHT_INNER     = "<path d=\"M194,152V104a6,6,0,0,1,12,0v48a6,6,0,0,1-12,0Zm38-70a6,6,0,0,0-6,6v80a6,6,0,0,0,12,0V88A6,6,0,0,0,232,82ZM220.44,212a6,6,0,0,1-8.88,8.08L166,169.92V224a6,6,0,0,1-9.68,4.74L85.94,174H40a14,14,0,0,1-14-14V96A14,14,0,0,1,40,82H86.07L51.56,44A6,6,0,0,1,60.44,36ZM154,156.72,97,94H40a2,2,0,0,0-2,2v64a2,2,0,0,0,2,2H88a6,6,0,0,1,3.68,1.26L154,211.73Zm-30.17-89L154,44.27v62.56a6,6,0,0,0,12,0V32a6,6,0,0,0-9.68-4.74l-39.85,31a6,6,0,1,0,7.36,9.47Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M192,152V104a8,8,0,0,1,16,0v48a8,8,0,0,1-16,0Zm40-72a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8,8,0,0,0,232,80ZM221.92,210.62a8,8,0,1,1-11.84,10.76L168,175.09V224a8,8,0,0,1-12.91,6.31L85.25,176H40a16,16,0,0,1-16-16V96A16,16,0,0,1,40,80H81.55L50.08,45.38A8,8,0,0,1,61.92,34.62ZM152,157.49,96.1,96H40v64H88a7.94,7.94,0,0,1,4.91,1.69L152,207.64ZM125.06,69.31l26.94-21v58.47a8,8,0,0,0,16,0V32a8,8,0,0,0-12.91-6.31l-39.85,31a8,8,0,0,0,9.82,12.63Z\"/>";
const SECONDARY_PATHS = "<path d=\"M160,32V224L88,168H40a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H88Z\"/>";

export const SpeakerSimpleSlash = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: SpeakerSimpleSlashProps) => {
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
