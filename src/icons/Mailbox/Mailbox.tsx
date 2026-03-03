import { SVGProps } from "react";

export type MailboxVariant = "duotone" | "fill" | "light";

export interface MailboxProps extends SVGProps<SVGSVGElement> {
  variant?: MailboxVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M104,152a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H96A8,8,0,0,1,104,152ZM168,32h24a8,8,0,0,0,0-16H160a8,8,0,0,0-8,8V56h16Zm72,84v60a16,16,0,0,1-16,16H136v32a8,8,0,0,1-16,0V192H32a16,16,0,0,1-16-16V116A60.07,60.07,0,0,1,76,56h76v88a8,8,0,0,0,16,0V56h12A60.07,60.07,0,0,1,240,116Zm-120,0a44,44,0,0,0-88,0v60h88Z\"/>";
const LIGHT_INNER     = "<path d=\"M102,152a6,6,0,0,1-6,6H56a6,6,0,0,1,0-12H96A6,6,0,0,1,102,152Zm136-36v60a14,14,0,0,1-14,14H134v34a6,6,0,0,1-12,0V190H32a14,14,0,0,1-14-14V116A58.07,58.07,0,0,1,76,58h78V24a6,6,0,0,1,6-6h32a6,6,0,0,1,0,12H166V58h14A58.07,58.07,0,0,1,238,116ZM122,178V116a46,46,0,0,0-92,0v60a2,2,0,0,0,2,2Zm104-62a46.06,46.06,0,0,0-46-46H166v74a6,6,0,0,1-12,0V70H111.29A57.93,57.93,0,0,1,134,116v62h90a2,2,0,0,0,2-2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M104,152a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H96A8,8,0,0,1,104,152Zm136-36v60a16,16,0,0,1-16,16H136v32a8,8,0,0,1-16,0V192H32a16,16,0,0,1-16-16V116A60.07,60.07,0,0,1,76,56h76V24a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H168V56h12A60.07,60.07,0,0,1,240,116ZM120,176V116a44,44,0,0,0-88,0v60Zm104-60a44.05,44.05,0,0,0-44-44H168v72a8,8,0,0,1-16,0V72H116.75A59.86,59.86,0,0,1,136,116v60h88Z\"/>";
const SECONDARY_PATHS = "<path d=\"M232,116v60a8,8,0,0,1-8,8H128V116A52,52,0,0,0,76,64H180A52,52,0,0,1,232,116Z\"/>";

export const Mailbox = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: MailboxProps) => {
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
