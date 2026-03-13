import { useState } from "react";
import { componentRegistry } from "./registry";
import { ComponentViewer } from "./ComponentViewer";
import { IconViewer } from "./IconViewer";
import { DocsViewer } from "./DocsViewer";
import { Icon, iconNames } from "../src/icons";

type View = { kind: "component"; id: string } | { kind: "icons" } | { kind: "docs" };

export const SandboxApp = () => {

  const [mainAmbient, setMainAmbient] = useState<"light" | "dark">("dark");

  const [view, setView] = useState<View>({
    kind: "component",
    id: componentRegistry[0]?.id ?? "",
  });

  const activeComponent =
    view.kind === "component"
      ? (componentRegistry.find((c) => c.id === view.id) ?? null)
      : null;

  return (
    <div data-ambient={mainAmbient} className="sb-layout">
      <header className="sb-header">
        <span className="sb-header-title">Sandbox</span>
        <span className="sb-header-badge">{componentRegistry.length} components</span>
        <span className="sb-header-badge">{iconNames.length} icons</span>
        <span className="sb-header-subtitle">modern-react-components</span>
        <div className="sb-controls-main-ambient-selector" onClick={() => setMainAmbient( mainAmbient == 'dark' ? 'light' : 'dark' )}>
          <Icon name="sun" variant="fill" primaryColor={mainAmbient == 'dark' ? '#eeeeee' : '#333333'} style={{fontSize: 20, opacity: mainAmbient == 'dark' ? 0.5 : 1}}/>
          <span>/</span>
          <Icon name="moon" variant="fill" primaryColor={mainAmbient == 'dark' ? '#eeeeee' : '#333333'} style={{fontSize: 20, opacity: mainAmbient == 'light' ? 0.5 : 1}}/>
        </div>
      </header>

      <aside className="sb-sidebar">

        {/* ── Docs ── */}
        <div className="sb-sidebar-section-title">General</div>
        <div
          className={`sb-sidebar-item ${view.kind === "docs" ? "active" : ""}`}
          onClick={() => setView({ kind: "docs" })}
        >
          <span className="sb-sidebar-item-icon">📖</span>
          <span className="sb-sidebar-item-name">Documentación</span>
        </div>

        {/* ── Components ── */}
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

        {/* ── Icons ── */}
        <div className="sb-sidebar-section-title">Icons</div>
        <div
          className={`sb-sidebar-item ${view.kind === "icons" ? "active" : ""}`}
          onClick={() => setView({ kind: "icons" })}
        >
          <span className="sb-sidebar-item-icon">🎨</span>
          <span className="sb-sidebar-item-name">Icon Library</span>
          <span className="sb-sidebar-item-tag">{iconNames.length}</span>
        </div>
      </aside>

      {view.kind === "docs" ? (
        <DocsViewer />
      ) : view.kind === "icons" ? (
        <IconViewer ambient={mainAmbient}/>
      ) : activeComponent ? (
        <ComponentViewer key={activeComponent.id} component={activeComponent} />
      ) : (
        <div className="sb-canvas">
          <div className="sb-empty">
            <div className="sb-empty-text">Select a component to preview it</div>
          </div>
        </div>
      )}
    </div>
  );
};
