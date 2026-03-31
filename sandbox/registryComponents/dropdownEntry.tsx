import { Dropdown } from "../../src/components/Dropdown";
import { tableData } from "../data/componentsData";
import { ComponentEntry } from "../registry";

const DROPDOW_OPTIONS = tableData;

export const DropdownEntry: ComponentEntry = {
  id: "dropdown",
  name: "Dropdown",
  icon: "📱",
  category: "input",
  description: "Dropdown component.",
  props: [
    { name: "Label", propName: 'label', type: "string", description: "", defaultValue: "nombre" },
    { name: "Ambient", propName: "ambient", type: "select", options: ["dark", "light"], description: "Color theme of the dropdown.", defaultValue: "dark" },
    { name: "Color", propName: "color", type: "color", description: "Text and border color for dark ambient.", defaultValue: "#f3f4f6" },
    { name: "Background Color", propName: "backgroundColor", type: "color", description: "Background color for dark ambient.", defaultValue: "#374151" },
    { name: "Dark Color", propName: "darkColor", type: "color", description: "Text and border color for light ambient.", defaultValue: "#333333" },
    { name: "Dark Background Color", propName: "darkBackgroundColor", type: "color", description: "Background color for light ambient.", defaultValue: "#dedede" },
    { name: "Disabled", propName: "disabled", type: "boolean", description: "When true, dropdown is non-interactive and visually dimmed.", defaultValue: false },
  ],
  render: ({ values }) => {
    return (
      <>
        <Dropdown
          options={DROPDOW_OPTIONS}
          label={values['label'] as string}
          ambient={values['ambient'] as 'dark' | 'light'}
          color={values['color'] as string}
          backgroundColor={values['backgroundColor'] as string}
          darkColor={values['darkColor'] as string}
          darkBackgroundColor={values['darkBackgroundColor'] as string}
          disabled={values['disabled'] as boolean}
          onChange={(e) => console.log(e.target.value)}
        />
      </>
    )
  },
  generateCode: (values) => {
    const props = [
      values["disabled"] ? "disabled" : "",
      `options={${JSON.stringify(DROPDOW_OPTIONS)}}`,
      `label="${values["label"]}"`,
      values["ambient"] !== "dark" ? `ambient="${values["ambient"]}"` : "",
      values["color"] !== "#f3f4f6" ? `color="${values["color"]}"` : "",
      values["backgroundColor"] !== "#374151" ? `backgroundColor="${values["backgroundColor"]}"` : "",
      values["darkColor"] !== "#333333" ? `darkColor="${values["darkColor"]}"` : "",
      values["darkBackgroundColor"] !== "#dedede" ? `darkBackgroundColor="${values["darkBackgroundColor"]}"` : "",
    ].filter(p => p !== "").join("\n  ");
    return `\n<Dropdown\n  ${props}\n  onChange={() => {}}\n/>`;
  },
};
