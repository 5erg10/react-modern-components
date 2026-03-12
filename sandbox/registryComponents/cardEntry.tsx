import { Card } from "../../src/components/Card";
import { ComponentEntry } from "../registry";

export const CardEntry: ComponentEntry = {
  id: "card",
  name: "Card",
  icon: "🧩",
  category: "ui",
  description: "Card component.",
  props: [

  ],
  render: ({ values }) => {
    return (
      <Card

      />
    )
  },
  generateCode: (values) => {
    const props = [].filter(p => p !== "").join("\n  ");
    return `
<Card 
  ${props}/>`;
  },
};
