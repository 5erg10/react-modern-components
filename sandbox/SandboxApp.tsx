import { useState } from "react";
import { componentRegistry } from "./registry";
import { ComponentViewer } from "./ComponentViewer";

export const SandboxApp = () => {
  const [activeId, setActiveId] = useState<string>(componentRegistry[0]?.id ?? "");

  const active = componentRegistry.find((c) => c.id === activeId) ?? null;

  return (
    <div className="sb-layout">
      {/* Header */}
      <header className="sb-header">
        <span className="sb-header-logo">🧩</span>
        <span className="sb-header-title">Component Sandbox</span>
        <span className="sb-header-badge">{componentRegistry.length} components</span>
        <span className="sb-header-subtitle">modern-react-components</span>
      </header>

      {/* Sidebar */}
      <aside className="sb-sidebar">
        <div className="sb-sidebar-section-title">Components</div>
        {componentRegistry.map((comp) => (
          <div
            key={comp.id}
            className={`sb-sidebar-item ${activeId === comp.id ? "active" : ""}`}
            onClick={() => setActiveId(comp.id)}
          >
            <span className="sb-sidebar-item-icon">{comp.icon}</span>
            <span className="sb-sidebar-item-name">{comp.name}</span>
            <span className="sb-sidebar-item-tag">{comp.category}</span>
          </div>
        ))}
      </aside>

      {/* Canvas + Controls */}
      {active ? (
        <ComponentViewer key={active.id} component={active} />
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
