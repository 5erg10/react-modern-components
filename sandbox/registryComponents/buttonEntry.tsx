import { useState } from "react";
import { Button } from "../../src/components/Button";
import { ComponentEntry } from "../registry";

export const ButtonEntry: ComponentEntry = {
  id: "button",
  name: "Button",
  icon: "🔘",
  category: "input",
  description:
    "A flexible button component that extends native HTML button attributes. " +
    "Supports primary and secondary visual variants, disabled state, and any " +
    "standard button prop (onClick, type, aria-*, etc.).",
  props: [
    { name: "variant", propName: 'variant', type: "select", options: ["primary", "secondary", "cancel", "succes", "warning"], description: "Visual style of the button.", defaultValue: "primary" },
    { name: "outline", propName: 'outline',  type: "boolean", description: "When true, the button change to outline style.", defaultValue: false },
    { name: "size", propName: 'size',type: "select", options: ["sm", "md", "l", "xl", "no-limit"], description: "Button Width limit.", defaultValue: "md" },
    { name: "icon", propName: 'icon', type: "string", description: "Set an Icon Name to print icon.", defaultValue: undefined },
    { name: "icon position", propName: 'iconPosition', type: "select", options: ["right", "left"], description: "Select right or left icon position", defaultValue: "left" },
    { name: "ellipsis", propName: 'ellipsis', type: "boolean", description: "Trunk button text content with ellipsis", defaultValue: false },
    { name: "disabled", propName: 'disabled', type: "boolean", description: "When true, the button is non-interactive and visually dimmed.", defaultValue: false },
    { name: "children", propName: 'children', type: "string", description: "Label text displayed inside the button.", defaultValue: "Click me" },
  ],
  render: ({ values }) => {
    const [buttonpressed, setButtonPressed] = useState(false);
    return (
      <div>
        <Button
          variant={values["variant"] as any}
          size={values["size"] as any}
          icon={values["icon"] as any}
          iconPosition={values["iconPosition"] as any}
          ellipsis={values["ellipsis"] as boolean}
          disabled={values["disabled"] as boolean}
          outline={values["outline"] as boolean}
          onClick={() => { setButtonPressed(true); setTimeout(() => setButtonPressed(false), 3000); }}>
          {String(values["children"])}
        </Button>
        {buttonpressed && (<div style={{ position: "absolute", bottom: "3rem", right: "5rem", color: "#6b7280", textAlign: "center" }}>button pressed!!</div>)}
      </div>
    );
  },
  generateCode: (values) => {
    const props = [
      values["variant"] !== "primary" ? `variant="${values["variant"]}"` : "",
      values["outline"] ? "outline" : "",
      values["disabled"] ? "disabled" : "",
      `size=${values["size"] ? '"' + values["size"] + '"' : "md"}`,
      values["ellipsis"] ? `ellipsis="true"` : "",
      values["icon"] ? `icon="${values["icon"]}"` : "",
      values["icon position"] ? `iconPosition="${values["icon position"]}"` : "",
    ].filter(p => p !== "").join("\n  ");
    return `<Button\n  ${props}\n  onClick={() => {}}>\n  ${values["children"]}\n</Button>`;
  },
};