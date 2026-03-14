import { Badge } from "../../src/components/Badge";
import { ComponentEntry } from "../registry";

export const BadgeEntry: ComponentEntry = {
  id: "badge",
  name: "Badge",
  icon: "💊",
  category: "ui",
  description: "Badge component.",
  props: [
    { name: "Variant", propName: 'variant', type: "select", options: ["default", "success", "warning", "error", "info"], description: "", defaultValue: "default" },
    { name: "Size", propName: 'size', type: "select", options: ["sm", "md", "lg"], description: "", defaultValue: "sm" },
    { name: "Label", propName: 'label', type: "string", description: "", defaultValue: "label", required: true },
    { name: "Icon", propName: 'icon', type: "string", description: "", defaultValue: undefined },
    { name: "Outline", propName: 'outline', type: "boolean", description: "Set true to transparent background badge.", defaultValue: false },
  ],
  render: ({ values }) => {
    return (
        <Badge
          variant={values["variant"] as any}
          size={values["size"] as any}
          label={String(values["label"])}
          icon={String(values["icon"])}
          outline={values["outline"] as boolean}
        />
    )
  },
  generateCode: (values) => {
    const props = [
      `variant="${values["variant"]}"`,
      `size="${values["size"]}"`,
      values["label"] ? `label="${values["label"]}"` : "",
      values["icon"] ? `icon="${values["icon"]}"` : "",
      values["outline"] ? "outline" : ""
    ].filter(p => p !== "").join("\n  ");
    return `<Badge\n  ${props}/>`;
  },
};