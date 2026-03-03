import { useState, useMemo, useCallback, memo } from "react";
import { Icon, iconNames } from "../src/icons";
import type { IconVariant } from "../src/icons";

// ── IconInspector ─────────────────────────────────────────────────────────────
// Componente completamente aislado: tiene su propio estado de colores.
// Cambiar el color aquí nunca provoca re-render del grid.
interface IconInspectorProps {
  selected: string;
  variant: IconVariant;
}

const IconInspector = ({ selected, variant }: IconInspectorProps) => {
  const [primaryColor, setPrimary]  = useState("#6c63ff");
  const [secondaryColor, setSecond] = useState("#c4c1ff");
  const [size, setSize]             = useState(48);
  const [copied, setCopied]         = useState(false);

  const generatedCode = useMemo(() => {
    const lines = [`import { Icon } from 'react-modern-components/icons';`, ``];
    if (variant === "duotone") {
      lines.push(`<Icon`, `  name="${selected}"`, `  variant="duotone"`, `  primaryColor="${primaryColor}"`, `  secondaryColor="${secondaryColor}"`, `  style={{ fontSize: ${size} }}`, `/>`);
    } else {
      lines.push(`<Icon`, `  name="${selected}"`, `  variant="${variant}"`, `  primaryColor="${primaryColor}"`, `  style={{ fontSize: ${size} }}`, `/>`);
    }
    return lines.join("\n");
  }, [selected, variant, primaryColor, secondaryColor, size]);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <>
      <div className="sb-icon-preview">
        <Icon
          name={selected}
          variant={variant}
          primaryColor={primaryColor}
          secondaryColor={variant === "duotone" ? secondaryColor : undefined}
          style={{ fontSize: size }}
        />
        <span className="sb-icon-preview-name">{selected}</span>
      </div>

      <div className="sb-controls-body">
        {/* Size */}
        <div className="sb-control">
          <div className="sb-control-header">
            <span className="sb-control-name">size</span>
            <span className="sb-control-type">{size}px</span>
          </div>
          <input
            type="range"
            className="sb-range"
            min={16}
            max={128}
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
          />
        </div>

        {/* Primary color */}
        <div className="sb-control">
          <div className="sb-control-header">
            <span className="sb-control-name">primaryColor</span>
          </div>
          <input
            type="color"
            className="sb-color-picker sb-color-picker--large"
            value={primaryColor}
            onChange={(e) => setPrimary(e.target.value)}
          />
        </div>

        {/* Secondary color — solo duotone */}
        {variant === "duotone" && (
          <div className="sb-control">
            <div className="sb-control-header">
              <span className="sb-control-name">secondaryColor</span>
              <span className="sb-control-type">duotone only</span>
            </div>
            <input
              type="color"
              className="sb-color-picker sb-color-picker--large"
              value={secondaryColor}
              onChange={(e) => setSecond(e.target.value)}
            />
          </div>
        )}
      </div>

      <div className="sb-code">
        <div className="sb-code-header">
          JSX
          <button className="sb-code-copy" onClick={handleCopy}>
            {copied ? "✓ Copied" : "Copy"}
          </button>
        </div>
        <pre className="sb-code-block">{generatedCode}</pre>
      </div>
    </>
  );
};

// ── IconGrid ──────────────────────────────────────────────────────────────────
// Memoizado: solo re-renderiza si cambian filtered, selected o variant.
// El estado de colores del inspector nunca llega aquí.
interface IconGridProps {
  filtered: string[];
  selected: string | null;
  variant: IconVariant;
  search: string;
  onSelect: (name: string) => void;
}

const IconGrid = memo(({ filtered, selected, variant, search, onSelect }: IconGridProps) => {
  if (filtered.length === 0) return (
    <div className="sb-empty">
      <div className="sb-empty-icon">🔍</div>
      <div className="sb-empty-text">No icons match "{search}"</div>
    </div>
  );

  return (
    <div className="sb-icon-grid">
      {filtered.map((name) => (
        <div
          key={name}
          className={`sb-icon-cell ${selected === name ? "sb-icon-cell--selected" : ""}`}
          title={name}
          onClick={() => onSelect(name)}
        >
          <Icon name={name} variant={variant} style={{ fontSize: "2rem" }} />
          <span className="sb-icon-label">{name}</span>
        </div>
      ))}
    </div>
  );
});

// ── IconViewer ────────────────────────────────────────────────────────────────
export const IconViewer = () => {
  const [search, setSearch]   = useState("");
  const [variant, setVariant] = useState<IconVariant>("duotone");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return iconNames;
    return iconNames.filter((n) => n.includes(q));
  }, [search]);

  const handleSelect = useCallback((name: string) => setSelected(name), []);

  return (
    <>
      <main className="sb-canvas">
        <div className="sb-canvas-topbar sb-icon-topbar">
          <span>Icons</span>
          <span className="sb-canvas-topbar-sep">/</span>
          <select
            className="sb-topbar-select"
            value={variant}
            onChange={(e) => setVariant(e.target.value as IconVariant)}
          >
            <option value="duotone">duotone</option>
            <option value="fill">fill</option>
            <option value="light">light</option>
          </select>
          <span className="sb-canvas-topbar-sep">·</span>
          <input
            className="sb-topbar-search"
            type="text"
            placeholder="Search icons..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="sb-icon-count">{filtered.length} icons</span>
        </div>

        <div className="sb-icon-viewer">
          <IconGrid
            filtered={filtered}
            selected={selected}
            variant={variant}
            search={search}
            onSelect={handleSelect}
          />
        </div>
      </main>

      <aside className="sb-controls">
        <div className="sb-controls-header">Icon Inspector</div>
        {selected ? (
          <IconInspector key={selected} selected={selected} variant={variant} />
        ) : (
          <div className="sb-empty" style={{ flex: 1 }}>
            <div className="sb-empty-icon" style={{ fontSize: 32 }}>👆</div>
            <div className="sb-empty-text">Select an icon to inspect it</div>
          </div>
        )}
      </aside>
    </>
  );
};
