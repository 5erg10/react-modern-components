import { DigitalClock } from "../../src/components/DigitalClock";
import { ComponentEntry } from "../registry";

export const DigitalClockEntry: ComponentEntry = {
  id: "digitalclock",
  name: "DigitalClock",
  icon: "⌚",
  category: "ui",
  description: "Reloj analogico Animado!!.",
  props: [
    { name: "Size", propName: 'size', type: "select", options: ["large", "medium", "small"], description: "clock size", defaultValue: "small" },
    { name: "Ambient", propName: 'ambient', type: "select", options: ["light", "dark"], description: "clock ambient theme", defaultValue: "dark" },
    { name: "Mask opacity", propName: 'maskOpacity', type: "range", range: [0, 1], step: 0.01, description: "Opacity of clock mask", defaultValue: 0.9 },
  ],
  render: ({ values }) => (
    <DigitalClock size={values["size"] as any} ambient={values["ambient"] as any} maskOpacity={values["maskOpacity"] as any} />
  ),
  generateCode: (values) => {
    const props = [
      `size="${values["size"]}"`,
      `ambient="${values["ambient"]}"`,
      `maskOpacity={${values["maskOpacity"]}}`,
    ].join("\n  ");
    return `\n<DigitalClock\n  ${props} />`;
  },
};