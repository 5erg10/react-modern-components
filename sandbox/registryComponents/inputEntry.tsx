import { useState } from "react";
import { Input } from "../../src/components/Input";
import { ComponentEntry } from "../registry";

export const InputEntry: ComponentEntry = {
  id: "input",
  name: "Input",
  icon: "📱",
  category: "input",
  description: "Input element, available types: text, number",
  props: [
    { name: "Type", propName: "type", type: "select", options: ["text", "number", "password", "email", "tel", "search", "date", "color"], description: "Type of input", defaultValue: "text" },
    { name: "Label", propName: "label", type: "string", description: "Floating label shown inside the input that animates to the top on focus or when a value is present.", defaultValue: "Label" },
    { name: "Ambient", propName: "ambient", type: "select", options: ["dark", "light"], description: "Color theme of the input.", defaultValue: "dark" },
    { name: "Color", propName: "color", type: "color", description: "Text and border color for dark ambient.", defaultValue: "#f3f4f6" },
    { name: "Background Color", propName: "backgroundColor", type: "color", description: "Background color for dark ambient.", defaultValue: "#374151" },
    { name: "Dark Color", propName: "darkColor", type: "color", description: "Text and border color for light ambient.", defaultValue: "#333333" },
    { name: "Dark Background Color", propName: "darkBackgroundColor", type: "color", description: "Background color for light ambient.", defaultValue: "#dedede" },
    { name: "Disabled", propName: "disabled", type: "boolean", description: "When true, input is non-interactive and visually dimmed.", defaultValue: false },
    { name: "Error", propName: "error", type: "boolean", description: "When true, shows error state with red border.", defaultValue: false },
    { name: "Error Label", propName: "errorLabel", type: "string", description: "Error message shown below the input when error is true.", defaultValue: "Error message" },
  ],
  render: ({ values }) => {
    const [inputValue, setInputValue] = useState("");
    return (
      <>
        <Input
          disabled={values["disabled"] as boolean}
          type={values["type"] as any}
          label={values["label"] as string}
          ambient={values["ambient"] as "dark" | "light"}
          color={values["color"] as string}
          backgroundColor={values["backgroundColor"] as string}
          darkColor={values["darkColor"] as string}
          darkBackgroundColor={values["darkBackgroundColor"] as string}
          error={values["error"] as boolean}
          errorLabel={values["errorLabel"] as string}
          onChange={(e) => setInputValue((e.target as HTMLInputElement).value)}
        />
        <div style={{ position: "absolute", bottom: "3rem", left: "5rem", color: "#6b7280", textAlign: "center" }}>
          Input value: {inputValue}
        </div>
      </>
    );
  },
  generateCode: (values) => {
    const props = [
      values["disabled"] ? "disabled" : "",
      `type="${values["type"]}"`,
      values["label"] ? `label="${values["label"]}"` : "",
      values["ambient"] !== "dark" ? `ambient="${values["ambient"]}"` : "",
      values["color"] !== "#f3f4f6" ? `color="${values["color"]}"` : "",
      values["backgroundColor"] !== "#374151" ? `backgroundColor="${values["backgroundColor"]}"` : "",
      values["darkColor"] !== "#333333" ? `darkColor="${values["darkColor"]}"` : "",
      values["darkBackgroundColor"] !== "#dedede" ? `darkBackgroundColor="${values["darkBackgroundColor"]}"` : "",
      values["error"] ? `error` : "",
      values["error"] && values["errorLabel"] ? `errorLabel="${values["errorLabel"]}"` : "",
    ].filter(p => p !== "").join("\n  ");
    return `\n<Input\n  ${props}\n  onChange={() => {}}\n/>`;
  },
};