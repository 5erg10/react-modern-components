import { Button } from "../src/components/Button";
import { Modal } from "../src/components/Modal";
import { useState } from "react";
import { Badge } from "../src/components/Badge";
import { DigitalClock } from "../src/components/DigitalClock";
import { Input } from "../src/components/Input";
import { Table } from "../src/components/Table";
import { Dropdown } from "../src/components/Dropdown";

/* -------------------------------------------------------
   Types
------------------------------------------------------- */
export interface PropDef {
  name: string;
  type: "string" | "boolean" | "number" | "select" | "range" | "array";
  description: string;
  defaultValue: unknown;
  required?: boolean;
  options?: string[];  // for type === "select"
  range?: number[];  // for type === "range"
  multiline?: boolean;  // for long strings
  step?: string | number
}

export interface ComponentEntry {
  id: string;
  name: string;
  icon: string;
  category: string;
  description: string;
  props: PropDef[];
  render: (args: { values: Record<string, unknown> }) => React.ReactNode;
  generateCode: (values: Record<string, unknown>) => string;
}

/* -------------------------------------------------------
   Button
------------------------------------------------------- */
const ButtonEntry: ComponentEntry = {
  id: "button",
  name: "Button",
  icon: "🔘",
  category: "input",
  description:
    "A flexible button component that extends native HTML button attributes. " +
    "Supports primary and secondary visual variants, disabled state, and any " +
    "standard button prop (onClick, type, aria-*, etc.).",
  props: [
    {
      name: "variant",
      type: "select",
      options: ["primary", "secondary", "cancel", "succes", "warning"],
      description: "Visual style of the button.",
      defaultValue: "primary",
    },
    {
      name: "size",
      type: "select",
      options: ["sm", "md", "l", "xl", "no-limit"],
      description: "Button Width limit.",
      defaultValue: "md",
    },
    {
      name: "icon",
      type: "string",
      description: "Set an Icon Name to print icon.",
      defaultValue: undefined,
    },
    {
      name: "icon position",
      type: "select",
      options: ["right", "left"],
      description: "Select right or left icon position",
      defaultValue: "left",
    },
    {
      name: "ellipsis",
      type: "boolean",
      description: "Trunk button text content with ellipsis",
      defaultValue: false,
    },
    {
      name: "children",
      type: "string",
      description: "Label text displayed inside the button.",
      defaultValue: "Click me",
    },
    {
      name: "disabled",
      type: "boolean",
      description: "When true, the button is non-interactive and visually dimmed.",
      defaultValue: false,
    },
  ],
  render: ({ values }) => (
    <Button
      variant = {values["variant"] as "primary" | "secondary" | "succes" | "cancel" | "warning"}
      size = {values["size"] as "sm" | "md" | "l" | "xl" | "no-limit"}
      icon = {values["icon"] as "string"}
      iconPosition = {values["icon position"] as "right" | "left"}
      ellipsis = {values["ellipsis"] as boolean}
      disabled = {values["disabled"] as boolean}
    >
      {String(values["children"])}
    </Button>
  ),
  generateCode: (values) => {
    const props = [
      values["variant"] !== "primary" ? `variant="${values["variant"]}"` : "",
      values["disabled"] ? "disabled" : "",
      `size=${values["size"] ? '"'+ values["size"] + '"' : "md"}`,
      values["ellipsis"] ? "ellipsis=" + '"'+ "true" + '"' : "",
      values["icon"] ? "icon=" + '"' + values["icon"] + '"' : "",
      values["icon position"] ? "iconPosition=" + '"' + values["icon position"] + '"' : "",
    ]
    .filter(prop => prop != null && prop !== "")
    .join("\n  ");

    return `<Button
      ${props}>
      ${values["children"]}
    </Button>`;
  },
};

/* -------------------------------------------------------
   Modal
------------------------------------------------------- */
const ModalEntry: ComponentEntry = {
  id: "modal",
  name: "Modal",
  icon: "🪟",
  category: "overlay",
  description:
    "A controlled modal dialog. Renders only when isOpen is true. " +
    "Clicking the backdrop calls onClose — clicks inside the content " +
    "do not propagate, preventing accidental dismissal. " +
    "Fully accessible and animates in with a fade + slide transition.",
  props: [
    {
      name: "isOpen",
      type: "boolean",
      description: "Controls whether the modal is visible.",
      defaultValue: false,
      required: true,
    },
    {
      name: "children",
      type: "string",
      description: "Content rendered inside the modal.",
      defaultValue: "Modal content goes here",
      multiline: true,
    },
  ],
  render: ({ values }) => {
    const ModalPreview = () => {
      const [open, setOpen] = useState(values["isOpen"] as boolean);
      return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          <Button variant="primary" onClick={() => setOpen(true)}>
            Open Modal
          </Button>
          {open && (
            <Modal isOpen={open} onClose={() => setOpen(false)}>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <h3 style={{ margin: 0, fontSize: 16, color: "#1f2937" }}>Modal title</h3>
                <p style={{ margin: 0, fontSize: 14, color: "#6b7280", lineHeight: 1.5 }}>
                  {String(values["children"])}
                </p>
                <Button variant="secondary" onClick={() => setOpen(false)}>
                  Close
                </Button>
              </div>
            </Modal>
          )}
        </div>
      );
    };
    return <ModalPreview />;
  },
  generateCode: (values) => {
    const children = values["children"];
    return `const [isOpen, setIsOpen] = useState(false);

<Button onClick={() => setIsOpen(true)}>Open Modal</Button>

<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
  ${children}
</Modal>`;
  },
};

/* AUTO-GENERATED: Badge — edit render/generateCode as needed */
const BadgeEntry: ComponentEntry = {
  id: "badge",
  name: "Badge",
  icon: "💊",
  category: "ui",
  description: "Badge component.",
  props: [
    {
      name: "variant",
      type: "select",
      options: ["default", "success", "warning", "error", "info"],
      description: "",
      defaultValue: "default",
    },
    {
      name: "size",
      type: "select",
      options: ["sm", "md", "lg"],
      description: "",
      defaultValue: "sm",
    },
    {
      name: "label",
      type: "string",
      description: "",
      defaultValue: "label",
      required: true,
    },
    {
      name: "icon",
      type: "string",
      description: "",
      defaultValue: "icon",
    },
    {
      name: "outline",
      type: "boolean",
      description: "Set true to transparent background badge.",
      defaultValue: false,
    },
    {
      name: "dismissible",
      type: "boolean",
      description: "",
      defaultValue: false,
    }
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
      `variant="${values["variant"]}`,
      `size="${values["size"]}"`,
      values["label"] ? `label="${String(values["label"])}"` : "",
      values["icon"] ? `icon="${String(values["icon"])}"` : "",
      values["outline"] ? "outline" : "",
      values["dismissible"] ? "dismissible" : "",
    ]
    .filter(prop => prop != null && prop !== "")
    .join("\n  ");
    return `<Badge
      ${props}/>`;
  },
};

/* AUTO-GENERATED: DigitalClock — edit render/generateCode as needed */
const DigitalClockEntry: ComponentEntry = {
  id: "digitalclock",
  name: "DigitalClock",
  icon: "⌚",
  category: "ui",
  description: "Reloj analogico Animado!!.",
  props: [
    {
      name: "Size",
      type: "select",
      options: ["large", "medium", "small"],
      description: "clock size",
      defaultValue: "small",
    },
    {
      name: "Ambient",
      type: "select",
      options: ["light", "dark"],
      description: "clock ambient theme",
      defaultValue: "dark",
    },
    {
      name: "Mask opacity",
      type: "range",
      range: [0,1],
      description: "Opacity of clock mask",
      defaultValue: 0.8,
    }
  ],
  render: ({ values }) => (
    <DigitalClock
      size={values["Size"] as any}
      ambient={values["Ambient"] as any}
      maskOpacity={values["Mask opacity"] as any}
    />
  ),
  generateCode: (values) => {
    const props = [
      `size="${values["Size"]}"`,
      `ambient="${values["Ambient"]}"`,
      values["Mask opacity"] ? ` maskOpacity="${values["Mask opacity"]}"` : "0.8"
    ]
    .filter(prop => prop != null && prop !== "")
    .join("\n  ");
    return `<Button
      ${props}>
    </Button>`;
  },
};

/* AUTO-GENERATED: Input — edit render/generateCode as needed */
const InputEntry: ComponentEntry = {
  id: "input",
  name: "Input",
  icon: "📱",
  category: "input",
  description: "Input component.",
  props: [
    {
      name: "type",
      type: "select",
      options: ["text", "number", "select", "range"],
      description: "clock size",
      defaultValue: "small",
    },
    {
      name: "options list",
      type: "array",
      description: "List options to select.",
      defaultValue: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    },
  ],
  render: ({ values }) => (
    <Input
      type={values["type"] as any}
      options={values["options list"] as any}/>
  ),
  generateCode: (values) => {
    const props = [
      `type=${values["type"]}`,
      `options=${values["options list"]}`
    ]
    .filter(prop => prop != null && prop !== "")
    .join("\n  ");
    return `<Input 
    ${props}/>`;
  },
};

/* AUTO-GENERATED: Table — edit render/generateCode as needed */
const TableEntry: ComponentEntry = {
  id: "table",
  name: "Table",
  icon: "📋",
  category: "tabla",
  description: "Table component.",
  props: [

  ],
  render: ({ values }) => (
    <Table/>
  ),
  generateCode: (values) => {
    return `<Table />`;
  },
};

/* AUTO-GENERATED: Dropdown — edit render/generateCode as needed */
const DropdownEntry: ComponentEntry = {
  id: "dropdown",
  name: "Dropdown",
  icon: "📱",
  category: "input",
  description: "Dropdown component.",
  props: [

  ],
  render: ({ values }) => (
    <Dropdown/>
  ),
  generateCode: (values) => {
    return `<Dropdown />`;
  },
};

export const componentRegistry: ComponentEntry[] = [
  ButtonEntry,
  ModalEntry,
  BadgeEntry,
  DigitalClockEntry,
  InputEntry,
  TableEntry,
  DropdownEntry
];
