import { useState, useCallback } from "react";
import type { ComponentEntry, PropDef } from "./registry";

interface Props {
  component: ComponentEntry;
}

export const ComponentViewer = ({ component }: Props) => {
  // Initialise state from prop defaults
  const [values, setValues] = useState<Record<string, unknown>>(() =>
    Object.fromEntries(component.props.map((p) => [p.name, p.defaultValue]))
  );

  const [copied, setCopied] = useState(false);

  const set = useCallback((name: string, value: unknown) => {
    console.log('llama a set: ', value)
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  const Preview = component.render;

  const codeStr = component.generateCode(values);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeStr).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <>
      {/* Canvas */}
      <main className="sb-canvas">
        <div className="sb-canvas-topbar">
          <span>Components</span>
          <span className="sb-canvas-topbar-sep">/</span>
          <span className="sb-canvas-topbar-crumb">{component.name}</span>
        </div>
        <div className="sb-canvas-area">
          <div className="sb-canvas-inner">
            <div className="sb-canvas-component">
              <span className="sb-canvas-component-label">&lt;{component.name} /&gt;</span>
              <Preview values={values} />
            </div>
          </div>
        </div>
      </main>

      {/* Controls */}
      <aside className="sb-controls">
        <div className="sb-controls-header">Controls</div>

        {/* Description */}
        <div className="sb-description">
          <div className="sb-description-title">{component.name}</div>
          <div className="sb-description-text">{component.description}</div>
        </div>

        {/* Props */}
        <div className="sb-controls-body">
          {component.props.map((prop) => (
            <PropControl
              key={prop.name}
              prop={prop}
              value={values[prop.name]}
              onChange={(v) => set(prop.name, v)}
            />
          ))}
        </div>

        {/* Code preview */}
        <div className="sb-code">
          <div className="sb-code-header">
            JSX
            <button className="sb-code-copy" onClick={handleCopy}>
              {copied ? "✓ Copied" : "Copy"}
            </button>
          </div>
          <pre className="sb-code-block">{codeStr}</pre>
        </div>
      </aside>
    </>
  );
};

/* ---------- Individual prop control ---------- */
interface PropControlProps {
  prop: PropDef;
  value: unknown;
  onChange: (v: unknown) => void;
}

const PropControl = ({ prop, value, onChange }: PropControlProps) => (
  <div className="sb-control">
    <div className="sb-control-header">
      <span className="sb-control-name">{prop.name}</span>
      <span className="sb-control-type">{prop.type}</span>
      {prop.required && <span className="sb-control-required">required</span>}
    </div>
    {prop.description && (
      <div className="sb-control-desc">{prop.description}</div>
    )}
    <ControlInput prop={prop} value={value} onChange={onChange} />
  </div>
);

const ControlInput = ({ prop, value, onChange }: PropControlProps) => {
  if (prop.type === "boolean") {
    return (
      <label htmlFor="booleanInput" className="sb-toggle">
        <input
          id="booleanInput"
          type="checkbox"
          checked={!!value}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className="sb-toggle-label">{value ? "true" : "false"}</span>
      </label>
    );
  }

  if(prop.type == "range") {
    return (
      <label htmlFor="rangeInput" className="sb-toggle">
        <input
          id="rangeInput"
          type="range"
          aria-label="range-selector"
          min={prop.range?.[0] || 0}
          max={prop.range?.[1] || 1}
          step="0.1"
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    )
  }

  if (prop.options) {
    return (
      <label htmlFor="dropdownInput">
        <select
          id="dropdownInput"
          aria-label="dropdown-selector"
          className="sb-select"
          value={String(value)}
          onChange={(e) => onChange(e.target.value)}
        >
          {prop.options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </label>
    );
  }

  if (prop.type === "string" && prop.multiline) {
    return (
      <label htmlFor="textInput">
        <textarea
          id="textInput"
          aria-label="text-input"
          className="sb-textarea"
          value={String(value ?? "")}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    );
  }

  if (prop.type === "array") {
    return (
      <label htmlFor="textInput">
        <textarea
          id="textInput"
          aria-label="text-input"
          className="sb-textarea"
          value={value as string[]}
          onChange={(e) => onChange(e.target.value.split(','))}
        />
      </label>
    );
  }

  return (
    <label htmlFor="genericInput">
      <input
        id="genericInput"
        className="sb-input"
        aria-label="generic-input"
        type={prop.type === "number" ? "number" : "text"}
        value={String(value ?? "")}
        onChange={(e) =>
          onChange(prop.type === "number" ? Number(e.target.value) : e.target.value)
        }
      />
    </label>
  );
};
