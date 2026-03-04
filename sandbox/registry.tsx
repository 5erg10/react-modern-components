import { Button } from "../src/components/Button";
import { Modal } from "../src/components/Modal";
import { useState } from "react";
import { Badge } from "../src/components/Badge";
import { DigitalClock } from "../src/components/DigitalClock";
import { Input } from "../src/components/Input";
import { Table } from "../src/components/Table";
import { Dropdown } from "../src/components/Dropdown";
import { Range } from "../src/components/Range";
import { Checkbox } from "../src/components/Checkbox";

/* -------------------------------------------------------
   Types
------------------------------------------------------- */
export interface PropDef {
  name: string;
  type: "string" | "boolean" | "number" | "select" | "range" | "array";
  description: string;
  defaultValue: unknown;
  required?: boolean;
  options?: string[];
  range?: number[];
  multiline?: boolean;
  step?: string | number;
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
    { name: "variant", type: "select", options: ["primary", "secondary", "cancel", "succes", "warning"], description: "Visual style of the button.", defaultValue: "primary" },
    { name: "outline", type: "boolean", description: "When true, the button change to outline style.", defaultValue: false },
    { name: "size", type: "select", options: ["sm", "md", "l", "xl", "no-limit"], description: "Button Width limit.", defaultValue: "md" },
    { name: "icon", type: "string", description: "Set an Icon Name to print icon.", defaultValue: undefined },
    { name: "icon position", type: "select", options: ["right", "left"], description: "Select right or left icon position", defaultValue: "left" },
    { name: "ellipsis", type: "boolean", description: "Trunk button text content with ellipsis", defaultValue: false },
    { name: "disabled", type: "boolean", description: "When true, the button is non-interactive and visually dimmed.", defaultValue: false },
    { name: "children", type: "string", description: "Label text displayed inside the button.", defaultValue: "Click me" },
  ],
  render: ({ values }) => {
    const ButtonComponentPreview = () => {
      const [buttonpressed, setButtonPressed] = useState(false);
      return (
        <div>
          <Button
            variant={values["variant"] as any}
            size={values["size"] as any}
            icon={values["icon"] as any}
            iconPosition={values["icon position"] as any}
            ellipsis={values["ellipsis"] as boolean}
            disabled={values["disabled"] as boolean}
            outline={values["outline"] as boolean}
            onClick={() => { setButtonPressed(true); setTimeout(() => setButtonPressed(false), 3000); }}>
            {String(values["children"])}
          </Button>
          {buttonpressed && (<div style={{ position: "absolute", bottom: "3rem", right: "5rem", color: "#6b7280", textAlign: "center" }}>button pressed!!</div>)}
        </div>
      );
    };
    return <ButtonComponentPreview />;
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
    return `\n<Button\n  ${props}\n  onClick={() => {}}>\n  ${values["children"]}\n</Button>`;
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
    "do not propagate, preventing accidental dismissal.",
  props: [
    { name: "isOpen", type: "boolean", description: "Controls whether the modal is visible.", defaultValue: false, required: true },
    { name: "children", type: "string", description: "Content rendered inside the modal.", defaultValue: "Modal content goes here", multiline: true },
  ],
  render: ({ values }) => {
    const ModalPreview = () => {
      const [open, setOpen] = useState(values["isOpen"] as boolean);
      return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          <Button variant="primary" onClick={() => setOpen(true)}>Open Modal</Button>
          {open && (
            <Modal isOpen={open} onClose={() => setOpen(false)}>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <h3 style={{ margin: 0, fontSize: 16, color: "#1f2937" }}>Modal title</h3>
                <p style={{ margin: 0, fontSize: 14, color: "#6b7280", lineHeight: 1.5 }}>{String(values["children"])}</p>
                <Button variant="secondary" onClick={() => setOpen(false)}>Close</Button>
              </div>
            </Modal>
          )}
        </div>
      );
    };
    return <ModalPreview />;
  },
  generateCode: (values) =>
    `\nconst [isOpen, setIsOpen] = useState(false);\n\n<Button onClick={() => setIsOpen(true)}>\n  Open Modal\n</Button>\n\n<Modal\n  isOpen={isOpen}\n  onClose={() => setIsOpen(false)}>\n  ${values["children"]}\n</Modal>`,
};

/* -------------------------------------------------------
   Badge
------------------------------------------------------- */
const BadgeEntry: ComponentEntry = {
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

/* -------------------------------------------------------
   DigitalClock
------------------------------------------------------- */
const DigitalClockEntry: ComponentEntry = {
  id: "digitalclock",
  name: "DigitalClock",
  icon: "⌚",
  category: "ui",
  description: "Reloj analogico Animado!!.",
  props: [
    { name: "Size", type: "select", options: ["large", "medium", "small"], description: "clock size", defaultValue: "small" },
    { name: "Ambient", type: "select", options: ["light", "dark"], description: "clock ambient theme", defaultValue: "dark" },
    { name: "Mask opacity", type: "range", range: [0, 1], description: "Opacity of clock mask", defaultValue: 0.8 },
  ],
  render: ({ values }) => (
    <DigitalClock size={values["Size"] as any} ambient={values["Ambient"] as any} maskOpacity={values["Mask opacity"] as any} />
  ),
  generateCode: (values) => {
    const props = [
      `size="${values["Size"]}"`,
      `ambient="${values["Ambient"]}"`,
      `maskOpacity={${values["Mask opacity"]}}`,
    ].join("\n  ");
    return `\n<DigitalClock\n  ${props} />`;
  },
};

/* -------------------------------------------------------
   Input
------------------------------------------------------- */
const InputEntry: ComponentEntry = {
  id: "input",
  name: "Input",
  icon: "📱",
  category: "input",
  description: "Input element, available types: text, number",
  props: [
    { name: "type", type: "select", options: ["text", "number", "password", "email", "tel", "search", "date", "color"], description: "Type of input", defaultValue: "text" },
    { name: "disabled", type: "boolean", description: "When true, input is non-interactive and visually dimmed.", defaultValue: false },
  ],
  render: ({ values }) => {
    const InputEntryPreview = () => {
      const [inputValue, setInputValue] = useState("");
      return (
        <>
          <Input
            disabled={values["disabled"] as boolean}
            type={values["type"] as any}
            onChange={(e) => setInputValue((e.target as HTMLInputElement).value)}
          />
          <div style={{ position: "absolute", bottom: "3rem", left: "5rem", color: "#6b7280", textAlign: "center" }}>
            Input value: {inputValue}
          </div>
        </>
      );
    };
    return <InputEntryPreview />;
  },
  generateCode: (values) => {
    const props = [values["disabled"] ? "disabled" : "", `type="${values["type"]}"`].filter(p => p !== "").join("\n  ");
    return `\n<Input\n  ${props}\n  onChange={() => {}}\n/>`;
  },
};

/* -------------------------------------------------------
   Table
------------------------------------------------------- */
const TABLE_SAMPLE_DATA = [
  { id: 1,  nombre: "Ana García",       departamento: "Ingeniería", cargo: "Dev Frontend",     salario: 42000, activo: "Sí"  },
  { id: 2,  nombre: "Carlos López",     departamento: "Diseño",     cargo: "UI/UX Designer",   salario: 38000, activo: "Sí"  },
  { id: 3,  nombre: "Marta Sánchez",    departamento: "Producto",   cargo: "Product Manager",  salario: 55000, activo: "No"  },
  { id: 4,  nombre: "David Martínez",   departamento: "Ingeniería", cargo: "Dev Backend",      salario: 46000, activo: "Sí"  },
  { id: 5,  nombre: "Lucía Fernández",  departamento: "RRHH",       cargo: "HR Specialist",    salario: 34000, activo: "Sí"  },
  { id: 6,  nombre: "Pablo Ruiz",       departamento: "Ingeniería", cargo: "DevOps",           salario: 50000, activo: "Sí"  },
  { id: 7,  nombre: "Sara Torres",      departamento: "Marketing",  cargo: "SEO Analyst",      salario: 31000, activo: "No"  },
  { id: 8,  nombre: "Javier Moreno",    departamento: "Ventas",     cargo: "Sales Lead",       salario: 44000, activo: "Sí"  },
  { id: 9,  nombre: "Elena Jiménez",    departamento: "Ingeniería", cargo: "QA Engineer",      salario: 39000, activo: "Sí"  },
  { id: 10, nombre: "Raúl Díaz",        departamento: "Finanzas",   cargo: "Controller",       salario: 52000, activo: "Sí"  },
  { id: 11, nombre: "Isabel Romero",    departamento: "Diseño",     cargo: "Motion Designer",  salario: 36000, activo: "No"  },
  { id: 12, nombre: "Miguel Álvarez",   departamento: "Producto",   cargo: "Scrum Master",     salario: 49000, activo: "Sí"  },
  { id: 13, nombre: "Nuria Vega",       departamento: "Marketing",  cargo: "Content Manager",  salario: 33000, activo: "Sí"  },
  { id: 14, nombre: "Tomás Castillo",   departamento: "Ingeniería", cargo: "Tech Lead",        salario: 62000, activo: "Sí"  },
  { id: 15, nombre: "Beatriz Molina",   departamento: "RRHH",       cargo: "Talent Recruiter", salario: 35000, activo: "No"  },
];

const TableEntry: ComponentEntry = {
  id: "table",
  name: "Table",
  icon: "📋",
  category: "data",
  description:
    "A data table that accepts an array of objects and renders one column per " +
    "shared key. Includes a column selector + search bar to filter rows, " +
    "configurable page size (10 / 50 / 100), and pagination controls that " +
    "show the current page and the visible row range.",
  props: [],
  render: () => (
    <div style={{ width: "100%", padding: "1rem 0" }}>
      <Table data={TABLE_SAMPLE_DATA} />
    </div>
  ),
  generateCode: () => `
const data = [
  { id: 1, nombre: "Ana García",   departamento: "Ingeniería", cargo: "Dev Frontend",   salario: 42000, activo: "Sí" },
  { id: 2, nombre: "Carlos López", departamento: "Diseño",     cargo: "UI/UX Designer", salario: 38000, activo: "Sí" },
  // ...more rows
];

<Table data={data} />`,
};

/* -------------------------------------------------------
   Dropdown
------------------------------------------------------- */
const DropdownEntry: ComponentEntry = {
  id: "dropdown",
  name: "Dropdown",
  icon: "📱",
  category: "input",
  description: "Dropdown component.",
  props: [],
  render: () => <Dropdown />,
  generateCode: () => `\n<Dropdown />`,
};

/* -------------------------------------------------------
   Range
------------------------------------------------------- */
const RangeEntry: ComponentEntry = {
  id: "range",
  name: "Range",
  icon: "🎚️",
  category: "input",
  description: "A fully controlled custom range/slider component. Supports mouse and touch drag, keyboard navigation (arrow keys), optional tooltip, and disabled state.",
  props: [
    { name: "min", type: "number", description: "Minimum allowed value.", defaultValue: 0 },
    { name: "max", type: "number", description: "Maximum allowed value.", defaultValue: 1 },
    { name: "step", type: "number", description: "Step increment between values.", defaultValue: 0.1 },
    { name: "disabled", type: "boolean", description: "When true, the slider is non-interactive and visually dimmed.", defaultValue: false },
    { name: "showTooltip", type: "boolean", description: "When true, shows the current value above the thumb while dragging.", defaultValue: true },
  ],
  render: ({ values }) => {
    const RangePreview = () => {
      const [val, setVal] = useState<number>((values["max"] as number) / 2);
      return (
        <div style={{ width: "100%", maxWidth: 400, padding: "2rem 1rem" }}>
          <Range
            min={values["min"] as number}
            max={values["max"] as number}
            step={values["step"] as number}
            disabled={values["disabled"] as boolean}
            showTooltip={values["showTooltip"] as boolean}
            value={val}
            onChange={setVal}
          />
          <div style={{ marginTop: 8, fontSize: 13, color: "#6b7280", textAlign: "center" }}>value: {val}</div>
        </div>
      );
    };
    return <RangePreview />;
  },
  generateCode: (values) => {
    const props = [
      `min={${values["min"]}}`,
      `max={${values["max"]}}`,
      `step={${values["step"]}}`,
      values["disabled"] ? "disabled" : "",
      values["showTooltip"] ? "showTooltip" : "",
      "value={value}",
      "onChange={setValue}",
    ].filter(p => p !== "").join("\n  ");
    return `\nconst [value, setValue] = useState(${values["min"]});\n\n<Range\n  ${props}/>`;
  },
};

/* -------------------------------------------------------
   Checkbox
------------------------------------------------------- */
const CheckboxEntry: ComponentEntry = {
  id: "checkbox",
  name: "Checkbox",
  icon: "📱",
  category: "input",
  description: "Checkbox component.",
  props: [
    { name: "type", type: "select", options: ["checkbox", "radio"], description: "Type of input", defaultValue: "checkbox" },
    { name: "name", type: "string", description: "", defaultValue: "color" },
    { name: "value", type: "string", description: "", defaultValue: "azul" },
    { name: "disabled", type: "boolean", description: "", defaultValue: false },
  ],
  render: ({ values }) => {
    const CheckboxCompPreview = () => {
      const [chekboxValue, setChexboxValue] = useState("");
      const onChangeRefresh = (value: any) => { setChexboxValue(JSON.stringify(value)); };
      return (
        <>
          <div style={{ display: "flex", gap: "2rem" }}>
            <Checkbox
              disabled={values["disabled"] as boolean}
              type={values["type"] as any}
              name={values["name"] as string}
              value={values["value"] as string}
              onChange={onChangeRefresh}
            />
            <Checkbox
              disabled={values["disabled"] as boolean}
              type={values["type"] as any}
              name={values["name"] as string}
              value="rojo"
              onChange={onChangeRefresh}
            />
          </div>
          <div style={{ position: "absolute", bottom: "3rem", left: "5rem", color: "#6b7280", textAlign: "center" }}>
            Checkbox value: {chekboxValue}
          </div>
        </>
      );
    };
    return <CheckboxCompPreview />;
  },
  generateCode: (values) => {
    const props = [
      values["disabled"] ? "disabled" : "",
      `type="${values["type"]}"`,
      `name="${values["name"]}"`,
      `value="${values["value"]}"`,
    ].filter(p => p !== "").join("\n  ");
    return `\n<Checkbox\n  ${props}\n  onChange={() => {}}/>`;
  },
};

export const componentRegistry: ComponentEntry[] = [
  ButtonEntry,
  ModalEntry,
  BadgeEntry,
  DigitalClockEntry,
  InputEntry,
  TableEntry,
  DropdownEntry,
  RangeEntry,
  CheckboxEntry,
];
