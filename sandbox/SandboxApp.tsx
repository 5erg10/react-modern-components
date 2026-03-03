import { useState } from "react";
import { componentRegistry } from "./registry";
import { ComponentViewer } from "./ComponentViewer";
import { IconViewer } from "./IconViewer";
import { iconNames } from "../src/icons";

type View = { kind: "component"; id: string } | { kind: "icons" };

export const SandboxApp = () => {
  const [view, setView] = useState<View>({
    kind: "component",
    id: componentRegistry[0]?.id ?? "",
  });

  const activeComponent =
    view.kind === "component"
      ? (componentRegistry.find((c) => c.id === view.id) ?? null)
      : null;

  return (
    <div className="sb-layout">
      <header className="sb-header">
        <span className="sb-header-logo">🧩</span>
        <span className="sb-header-title">Component Sandbox</span>
        <span className="sb-header-badge">{componentRegistry.length} components</span>
        <span className="sb-header-badge">{iconNames.length} icons</span>
        <span className="sb-header-subtitle">modern-react-components</span>
      </header>

      <aside className="sb-sidebar">
        <div className="sb-sidebar-section-title">Components</div>
        {componentRegistry.map((comp) => (
          <div
            key={comp.id}
            className={`sb-sidebar-item ${view.kind === "component" && view.id === comp.id ? "active" : ""}`}
            onClick={() => setView({ kind: "component", id: comp.id })}
          >
            <span className="sb-sidebar-item-icon">{comp.icon}</span>
            <span className="sb-sidebar-item-name">{comp.name}</span>
            <span className="sb-sidebar-item-tag">{comp.category}</span>
          </div>
        ))}

        <div className="sb-sidebar-section-title" style={{ marginTop: "1rem" }}>Icons</div>
        <div
          className={`sb-sidebar-item ${view.kind === "icons" ? "active" : ""}`}
          onClick={() => setView({ kind: "icons" })}
        >
          <span className="sb-sidebar-item-icon">🎨</span>
          <span className="sb-sidebar-item-name">Icon Library</span>
          <span className="sb-sidebar-item-tag">{iconNames.length}</span>
        </div>
      </aside>

      {view.kind === "icons" ? (
        <IconViewer />
      ) : activeComponent ? (
        <ComponentViewer key={activeComponent.id} component={activeComponent} />
      ) : (
        <div className="sb-canvas">
          <div className="sb-empty">
            <div className="sb-empty-icon">🧩</div>
            <div className="sb-empty-text">Select a component to preview it</div>
          </div>
        </div>
      )}
    </div>
  );
};
