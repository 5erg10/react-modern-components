import { Dropdown } from "../../src/components/Dropdown";
import { ComponentEntry } from "../registry";

export const DropdownEntry: ComponentEntry = {
  id: "dropdown",
  name: "Dropdown",
  icon: "📱",
  category: "input",
  description: "Dropdown component.",
  props: [],
  render: () => <Dropdown />,
  generateCode: () => `\n<Dropdown />`,
};