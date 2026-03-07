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
  render: ({ values }) => (
    <Card

    />
  ),
  generateCode: (values) => {

    return `<Card />`;
  },
};
