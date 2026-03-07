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
    { name: "Mask opacity", propName: 'maskOpacity', type: "range", range: [0, 1], description: "Opacity of clock mask", defaultValue: 0.8 },
  ],
  render: ({ values }) => (
    <DigitalClock size={values["Size"] as any} ambient={values["Ambient"] as any} maskOpacity={values["Mask opacity"] as any} />
  ),
  generateCode: (values) => {
    const props = [
      `size="${values["Size"]}"`,
      `ambient="${values["Ambient"]}"`,
      `maskOpacity={${values["Mask opacity"]}}`,
    ].join("\n  ");
    return `\n<DigitalClock\n  ${props} />`;
  },
};