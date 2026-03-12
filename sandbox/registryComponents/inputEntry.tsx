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
    { name: "type", propName: "type", type: "select", options: ["text", "number", "password", "email", "tel", "search", "date", "color"], description: "Type of input", defaultValue: "text" },
    { name: "disabled", propName: "native", type: "boolean", description: "When true, input is non-interactive and visually dimmed.", defaultValue: false },
  ],
  render: ({ values }) => {
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
  },
  generateCode: (values) => {
    const props = [values["disabled"] ? "disabled" : "", `type="${values["type"]}"`].filter(p => p !== "").join("\n  ");
    return `\n<Input\n  ${props}\n  onChange={() => {}}\n/>`;
  },
};