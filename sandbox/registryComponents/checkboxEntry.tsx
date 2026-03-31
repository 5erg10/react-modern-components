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
    { name: "Type", propName: 'type', type: "select", options: ["checkbox", "radio"], description: "Type of input", defaultValue: "checkbox" },
    { name: "Name", propName: 'name', type: "string", description: "", defaultValue: "color" },
    { name: "Value", propName: 'value', type: "string", description: "", defaultValue: "azul" },
    { name: "Ambient", propName: "ambient", type: "select", options: ["dark", "light"], description: "Color theme of the checkbox.", defaultValue: "dark" },
    { name: "Color", propName: "color", type: "color", description: "Text and border color for dark ambient.", defaultValue: "#f3f4f6" },
    { name: "Background Color", propName: "backgroundColor", type: "color", description: "Background color for dark ambient.", defaultValue: "#374151" },
    { name: "Dark Color", propName: "darkColor", type: "color", description: "Text and border color for light ambient.", defaultValue: "#333333" },
    { name: "Dark Background Color", propName: "darkBackgroundColor", type: "color", description: "Background color for light ambient.", defaultValue: "#dedede" },
    { name: "Disabled", propName: 'disabled', type: "boolean", description: "", defaultValue: false },
  ],
  render: ({ values }) => {
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
            ambient={values["ambient"] as "dark" | "light"}
            color={values["color"] as string}
            backgroundColor={values["backgroundColor"] as string}
            darkColor={values["darkColor"] as string}
            darkBackgroundColor={values["darkBackgroundColor"] as string}
            onChange={onChangeRefresh}
          />
          <Checkbox
            disabled={values["disabled"] as boolean}
            type={values["type"] as any}
            name={values["name"] as string}
            value="rojo"
            ambient={values["ambient"] as "dark" | "light"}
            color={values["color"] as string}
            backgroundColor={values["backgroundColor"] as string}
            darkColor={values["darkColor"] as string}
            darkBackgroundColor={values["darkBackgroundColor"] as string}
            onChange={onChangeRefresh}
          />
        </div>
        <div style={{ position: "absolute", bottom: "3rem", left: "5rem", color: "#6b7280", textAlign: "center" }}>
          Checkbox value: {chekboxValue}
        </div>
      </>
    );
  },
  generateCode: (values) => {
    const props = [
      values["disabled"] ? "disabled" : "",
      `type="${values["type"]}"`,
      `name="${values["name"]}"`,
      `value="${values["value"]}"`,
      values["ambient"] !== "dark" ? `ambient="${values["ambient"]}"` : "",
      values["color"] !== "#f3f4f6" ? `color="${values["color"]}"` : "",
      values["backgroundColor"] !== "#374151" ? `backgroundColor="${values["backgroundColor"]}"` : "",
      values["darkColor"] !== "#333333" ? `darkColor="${values["darkColor"]}"` : "",
      values["darkBackgroundColor"] !== "#dedede" ? `darkBackgroundColor="${values["darkBackgroundColor"]}"` : "",
    ].filter(p => p !== "").join("\n  ");
    return `\n<Checkbox\n  ${props}\n  onChange={() => {}}/>`;
  },
};