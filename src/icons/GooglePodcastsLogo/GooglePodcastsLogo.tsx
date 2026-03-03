import { SVGProps } from "react";

export type GooglePodcastsLogoVariant = "duotone" | "fill" | "light";

export interface GooglePodcastsLogoProps extends SVGProps<SVGSVGElement> {
  variant?: GooglePodcastsLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M243.32,116.68l-104-104a16,16,0,0,0-22.64,0l-104,104a16,16,0,0,0,0,22.64l104,104a16,16,0,0,0,22.64,0l104-104A16,16,0,0,0,243.32,116.68ZM56,136a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm40,40a8,8,0,0,1-16,0V160a8,8,0,0,1,16,0Zm0-48a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Zm40,88a8,8,0,0,1-16,0V200a8,8,0,0,1,16,0Zm0-48a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Zm0-112a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0Zm40,120a8,8,0,0,1-16,0V128a8,8,0,0,1,16,0Zm0-80a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Zm40,40a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Z\"/>";
const LIGHT_INNER     = "<path d=\"M134,16V48a6,6,0,0,1-12,0V16a6,6,0,0,1,12,0Zm42,42a6,6,0,0,0-6,6V96a6,6,0,0,0,12,0V64A6,6,0,0,0,176,58ZM128,202a6,6,0,0,0-6,6v32a6,6,0,0,0,12,0V208A6,6,0,0,0,128,202Zm0-120a6,6,0,0,0-6,6v80a6,6,0,0,0,12,0V88A6,6,0,0,0,128,82ZM80,58a6,6,0,0,0-6,6v56a6,6,0,0,0,12,0V64A6,6,0,0,0,80,58Zm96,72a6,6,0,0,0-6,6v56a6,6,0,0,0,12,0V136A6,6,0,0,0,176,130ZM32,106a6,6,0,0,0-6,6v32a6,6,0,0,0,12,0V112A6,6,0,0,0,32,106Zm48,48a6,6,0,0,0-6,6v32a6,6,0,0,0,12,0V160A6,6,0,0,0,80,154Zm144-48a6,6,0,0,0-6,6v32a6,6,0,0,0,12,0V112A6,6,0,0,0,224,106Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M136,16V48a8,8,0,0,1-16,0V16a8,8,0,0,1,16,0Zm40,40a8,8,0,0,0-8,8V96a8,8,0,0,0,16,0V64A8,8,0,0,0,176,56ZM128,200a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V208A8,8,0,0,0,128,200Zm0-120a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8,8,0,0,0,128,80ZM80,56a8,8,0,0,0-8,8v56a8,8,0,0,0,16,0V64A8,8,0,0,0,80,56Zm96,72a8,8,0,0,0-8,8v56a8,8,0,0,0,16,0V136A8,8,0,0,0,176,128ZM32,104a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V112A8,8,0,0,0,32,104Zm48,48a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V160A8,8,0,0,0,80,152Zm144-48a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V112A8,8,0,0,0,224,104Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,144l-96,96L32,144V112l96-96,96,96v32Z\"/>";

export const GooglePodcastsLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: GooglePodcastsLogoProps) => {
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
