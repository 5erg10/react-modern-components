import { SVGProps } from "react";

export type CommandVariant = "duotone" | "fill" | "light";

export interface CommandProps extends SVGProps<SVGSVGElement> {
  variant?: CommandVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M116,116h24v24H116ZM86,72a14,14,0,0,0,0,28h14V86A14,14,0,0,0,86,72Zm98,14a14,14,0,0,0-28,0v14h14A14,14,0,0,0,184,86ZM72,170a14,14,0,0,0,28,0V156H86A14,14,0,0,0,72,170ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48Zm-68,92V116h14a30,30,0,1,0-30-30v14H116V86a30,30,0,1,0-30,30h14v24H86a30,30,0,1,0,30,30V156h24v14a30,30,0,1,0,30-30Zm0,30a14,14,0,1,0,14-14H156Z\"/>";
const LIGHT_INNER     = "<path d=\"M180,146H158V110h22a34,34,0,1,0-34-34V98H110V76a34,34,0,1,0-34,34H98v36H76a34,34,0,1,0,34,34V158h36v22a34,34,0,1,0,34-34ZM158,76a22,22,0,1,1,22,22H158ZM54,76a22,22,0,0,1,44,0V98H76A22,22,0,0,1,54,76ZM98,180a22,22,0,1,1-22-22H98Zm12-70h36v36H110Zm70,92a22,22,0,0,1-22-22V158h22a22,22,0,0,1,0,44Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M180,144H160V112h20a36,36,0,1,0-36-36V96H112V76a36,36,0,1,0-36,36H96v32H76a36,36,0,1,0,36,36V160h32v20a36,36,0,1,0,36-36ZM160,76a20,20,0,1,1,20,20H160ZM56,76a20,20,0,0,1,40,0V96H76A20,20,0,0,1,56,76ZM96,180a20,20,0,1,1-20-20H96Zm16-68h32v32H112Zm68,88a20,20,0,0,1-20-20V160h20a20,20,0,0,1,0,40Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,76h0a28,28,0,0,1-28,28H152V76a28,28,0,0,1,28-28h0A28,28,0,0,1,208,76ZM76,48h0A28,28,0,0,0,48,76h0a28,28,0,0,0,28,28h28V76A28,28,0,0,0,76,48ZM180,152H152v28a28,28,0,0,0,28,28h0a28,28,0,0,0,28-28h0A28,28,0,0,0,180,152ZM48,180h0a28,28,0,0,0,28,28h0a28,28,0,0,0,28-28V152H76A28,28,0,0,0,48,180Z\"/>";

export const Command = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CommandProps) => {
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
