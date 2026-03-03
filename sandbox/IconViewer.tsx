import { useState, useMemo } from "react";

type Variant = "duotone" | "fill" | "light";

interface IconEntry {
  name: string;
  baseName: string;
  component: React.ComponentType<{
    variant?: Variant;
    style?: React.CSSProperties;
    primaryColor?: string;
    secondaryColor?: string;
  }>;
}

interface Props {
  icons: IconEntry[];
}

export const IconViewer = ({ icons }: Props) => {
  const [search, setSearch]         = useState("");
  const [variant, setVariant]       = useState<Variant>("duotone");
  const [selected, setSelected]     = useState<IconEntry | null>(null);
  const [primaryColor, setPrimary]  = useState("#6c63ff");
  const [secondaryColor, setSecond] = useState("#c4c1ff");
  const [size, setSize]             = useState(48);
  const [copied, setCopied]         = useState(false);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return icons;
    return icons.filter((i) => i.baseName.includes(q) || i.name.toLowerCase().includes(q));
  }, [icons, search]);

  const handleSelect = (icon: IconEntry) => {
    setSelected(icon);
    setCopied(false);
  };

  const generatedCode = selected
    ? variant === "duotone"
      ? [
          `import { ${selected.name} } from 'react-modern-components/icons/${selected.name.toLowerCase()}';`,
          ``,
          `<${selected.name}`,
          `  variant="duotone"`,
          `  primaryColor="${primaryColor}"`,
          `  secondaryColor="${secondaryColor}"`,
          `  style={{ fontSize: ${size} }}`,
          `/>`,
        ].join("\n")
      : [
          `import { ${selected.name} } from 'react-modern-components/icons/${selected.name.toLowerCase()}';`,
          ``,
          `<${selected.name}`,
          `  variant="${variant}"`,
          `  primaryColor="${primaryColor}"`,
          `  style={{ fontSize: ${size} }}`,
          `/>`,
        ].join("\n")
    : "";

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  const SelectedIcon = selected?.component ?? null;

  return (
    <>
      {/* Canvas */}
      <main className="sb-canvas">
        {/* Topbar con búsqueda y selector de variante */}
        <div className="sb-canvas-topbar sb-icon-topbar">
          <span>Icons</span>
          <span className="sb-canvas-topbar-sep">/</span>
          <select
            className="sb-topbar-select"
            value={variant}
            onChange={(e) => setVariant(e.target.value as Variant)}
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

        {/* Grid de iconos */}
        <div className="sb-icon-viewer">
          {filtered.length === 0 ? (
            <div className="sb-empty">
              <div className="sb-empty-icon">🔍</div>
              <div className="sb-empty-text">No icons match "{search}"</div>
            </div>
          ) : (
            <div className="sb-icon-grid">
              {filtered.map((icon) => {
                const Icon = icon.component;
                const isSelected = selected?.name === icon.name;
                return (
                  <div
                    key={icon.name}
                    className={`sb-icon-cell ${isSelected ? "sb-icon-cell--selected" : ""}`}
                    title={icon.baseName}
                    onClick={() => handleSelect(icon)}
                  >
                    <Icon
                      variant={variant}
                      primaryColor={primaryColor}
                      secondaryColor={variant === "duotone" ? secondaryColor : undefined}
                      style={{ fontSize: "2rem" }}
                    />
                    <span className="sb-icon-label">{icon.baseName}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>

      {/* Controls */}
      <aside className="sb-controls">
        <div className="sb-controls-header">Icon Inspector</div>

        {/* Preview del icono seleccionado */}
        {selected && SelectedIcon ? (
          <>
            <div className="sb-icon-preview">
              <SelectedIcon
                variant={variant}
                primaryColor={primaryColor}
                secondaryColor={variant === "duotone" ? secondaryColor : undefined}
                style={{ fontSize: size }}
              />
              <span className="sb-icon-preview-name">{selected.baseName}</span>
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
                  <span className="sb-control-type">color</span>
                </div>
                <div className="sb-color-row">
                  <input
                    type="color"
                    className="sb-color-picker"
                    value={primaryColor}
                    onChange={(e) => setPrimary(e.target.value)}
                  />
                  <input
                    className="sb-input sb-color-hex"
                    type="text"
                    value={primaryColor}
                    onChange={(e) => setPrimary(e.target.value)}
                  />
                </div>
              </div>

              {/* Secondary color — solo duotone */}
              {variant === "duotone" && (
                <div className="sb-control">
                  <div className="sb-control-header">
                    <span className="sb-control-name">secondaryColor</span>
                    <span className="sb-control-type">color · duotone only</span>
                  </div>
                  <div className="sb-color-row">
                    <input
                      type="color"
                      className="sb-color-picker"
                      value={secondaryColor}
                      onChange={(e) => setSecond(e.target.value)}
                    />
                    <input
                      className="sb-input sb-color-hex"
                      type="text"
                      value={secondaryColor}
                      onChange={(e) => setSecond(e.target.value)}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Generated code */}
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
