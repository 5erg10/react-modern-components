import { Accordion } from "../../src/components/Accordion";
import { ComponentEntry } from "../registry";

export const AccordionEntry: ComponentEntry = {
  id: "accordion",
  name: "Accordion",
  icon: "🧩",
  category: "ui",
  description: "Accordion component.",
  props: [

  ],
  render: ({ values }) => {
    return (
      <Accordion
  
      />
    )
  },
  generateCode: (values) => {
    const props = [].filter(p => p !== "").join("\n  ");
    return `
<Accordion 
  ${props}/>`;
  },
};
