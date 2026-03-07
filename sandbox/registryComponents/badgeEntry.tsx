import { Badge } from "../../src/components/Badge";
import { ComponentEntry } from "../registry";

export const BadgeEntry: ComponentEntry = {
  id: "badge",
  name: "Badge",
  icon: "💊",
  category: "ui",
  description: "Badge component.",
  props: [
    { name: "variant", type: "select", options: ["default", "success", "warning", "error", "info"], description: "", defaultValue: "default" },
    { name: "size", type: "select", options: ["sm", "md", "lg"], description: "", defaultValue: "sm" },
    { name: "label", type: "string", description: "", defaultValue: "label", required: true },
    { name: "icon", type: "string", description: "", defaultValue: "icon" },
    { name: "outline", type: "boolean", description: "Set true to transparent background badge.", defaultValue: false },
    { name: "dismissible", type: "boolean", description: "", defaultValue: false },
  ],
  render: ({ values }) => (
    <Badge
      variant={values["variant"] as any}
      size={values["size"] as any}
      label={String(values["label"])}
      icon={String(values["icon"])}
      outline={values["outline"] as boolean}
      dismissible={values["dismissible"] as boolean}
    />
  ),
  generateCode: (values) => {
    const props = [
      `variant="${values["variant"]}"`,
      `size="${values["size"]}"`,
      values["label"] ? `label="${values["label"]}"` : "",
      values["icon"] ? `icon="${values["icon"]}"` : "",
      values["outline"] ? "outline" : "",
      values["dismissible"] ? "dismissible" : "",
    ].filter(p => p !== "").join("\n  ");
    return `<Badge\n  ${props}/>`;
  },
};