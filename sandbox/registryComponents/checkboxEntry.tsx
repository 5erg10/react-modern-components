import { useState } from "react";
import { Checkbox } from "../../src/components/Checkbox";
import { ComponentEntry } from "../registry";

export const CheckboxEntry: ComponentEntry = {
  id: "checkbox",
  name: "Checkbox",
  icon: "📱",
  category: "input",
  description: "Checkbox component.",
  props: [
    { name: "type", propName: 'type', type: "select", options: ["checkbox", "radio"], description: "Type of input", defaultValue: "checkbox" },
    { name: "name", propName: 'name', type: "string", description: "", defaultValue: "color" },
    { name: "value", propName: 'value', type: "string", description: "", defaultValue: "azul" },
    { name: "disabled", propName: 'native', type: "boolean", description: "", defaultValue: false },
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