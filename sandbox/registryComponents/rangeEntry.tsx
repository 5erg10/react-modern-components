import { useState } from "react";
import { ComponentEntry } from "../registry";
import { Range } from '../../src/components/Range';

export const RangeEntry: ComponentEntry = {
  id: "range",
  name: "Range",
  icon: "🎚️",
  category: "input",
  description: "A fully controlled custom range/slider component. Supports mouse and touch drag, keyboard navigation (arrow keys), optional tooltip, and disabled state.",
  props: [
    { name: "min", propName: 'min', type: "number", description: "Minimum allowed value.", defaultValue: 0 },
    { name: "max", propName: 'max', type: "number", description: "Maximum allowed value.", defaultValue: 1 },
    { name: "step", propName: 'step', type: "number", description: "Step increment between values.", defaultValue: 0.1 },
    { name: "disabled", propName: 'native', type: "boolean", description: "When true, the slider is non-interactive and visually dimmed.", defaultValue: false },
    { name: "showTooltip", propName: 'showTooltip', type: "boolean", description: "When true, shows the current value above the thumb while dragging.", defaultValue: true },
  ],
  render: ({ values }) => {
    const RangePreview = () => {
      const [val, setVal] = useState<number>((values["max"] as number) / 2);
      return (
        <div style={{ width: "100%", maxWidth: 400, padding: "2rem 1rem" }}>
          <Range
            min={values["min"] as number}
            max={values["max"] as number}
            step={values["step"] as number}
            disabled={values["disabled"] as boolean}
            showTooltip={values["showTooltip"] as boolean}
            value={val}
            onChange={setVal}
          />
          <div style={{ marginTop: 8, fontSize: 13, color: "#6b7280", textAlign: "center" }}>value: {val}</div>
        </div>
      );
    };
    return <RangePreview />;
  },
  generateCode: (values) => {
    const props = [
      `min={${values["min"]}}`,
      `max={${values["max"]}}`,
      `step={${values["step"]}}`,
      values["disabled"] ? "disabled" : "",
      values["showTooltip"] ? "showTooltip" : "",
      "value={value}",
      "onChange={setValue}",
    ].filter(p => p !== "").join("\n  ");
    return `\nconst [value, setValue] = useState(${values["min"]});\n\n<Range\n  ${props}/>`;
  },
};