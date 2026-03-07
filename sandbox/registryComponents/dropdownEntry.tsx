import { Dropdown } from "../../src/components/Dropdown";
import { dropdownOptions } from "../data/componentsData";
import { ComponentEntry } from "../registry";

const DROPDOW_OPTIONS = dropdownOptions;

export const DropdownEntry: ComponentEntry = {
  id: "dropdown",
  name: "Dropdown",
  icon: "📱",
  category: "input",
  description: "Dropdown component.",
  props: [
    { name: "label", propName: 'label', type: "string", description: "", defaultValue: "name" },
  ],
  render: ({ values }) => {
    const Entry = () => {
      return (
        <>
          <Dropdown
            options={DROPDOW_OPTIONS}
            label={values['label'] as string}
            onChange={(e) => console.log(e.target.value)}
          />
        </>
      )
    }
    return <Entry/>;
  },
  generateCode: (values) => {
    const props = [
      values["disabled"] ? "disabled" : "",
      `options="${JSON.stringify(DROPDOW_OPTIONS)}"`,
      `label="${values["label"]}"`,
    ].filter(p => p !== "").join("\n  ");
    return `
<Dropdown 
  ${props}/>`;
  },
};