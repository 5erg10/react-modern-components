import { useState } from "react";
import { componentRegistry } from "./registry";
import { ComponentViewer } from "./ComponentViewer";
import { IconViewer } from "./IconViewer";
import * as Icons from "../src/icons";

type View = { kind: "component"; id: string } | { kind: "icons" };

// Construir la lista de iconos para el IconViewer a partir del barrel de icons
const iconEntries = Object.entries(Icons)
  .filter(([, val]) => typeof val === "function")
  // Filtrar solo los componentes (no los tipos), uno por nombre de icono
  .filter(([key]) => !key.endsWith("Variant") && !key.endsWith("Props"))
  // Deduplicar: nos quedamos solo con el componente (no los re-exports de tipos)
  .map(([name, component]) => ({
    name,
    baseName: name
      .replace(/([A-Z])/g, (m, l, offset) => (offset > 0 ? "-" : "") + l.toLowerCase())
      .replace(/^-/, ""),
    component: component as React.ComponentType<any>,
  }));

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
      {/* Header */}
      <header className="sb-header">
        <span className="sb-header-logo">🧩</span>
        <span className="sb-header-title">Component Sandbox</span>
        <span className="sb-header-badge">{componentRegistry.length} components</span>
        <span className="sb-header-badge">{iconEntries.length} icons</span>
        <span className="sb-header-subtitle">modern-react-components</span>
      </header>

      {/* Sidebar */}
      <aside className="sb-sidebar">
        {/* Components section */}
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

        {/* Icons section */}
        <div className="sb-sidebar-section-title" style={{ marginTop: "1rem" }}>Icons</div>
        <div
          className={`sb-sidebar-item ${view.kind === "icons" ? "active" : ""}`}
          onClick={() => setView({ kind: "icons" })}
        >
          <span className="sb-sidebar-item-icon">🎨</span>
          <span className="sb-sidebar-item-name">Icon Library</span>
          <span className="sb-sidebar-item-tag">{iconEntries.length}</span>
        </div>
      </aside>

      {/* Main content */}
      {view.kind === "icons" ? (
        <IconViewer icons={iconEntries} />
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
