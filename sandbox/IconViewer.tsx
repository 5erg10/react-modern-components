import { useState, useMemo } from "react";

type Variant = "duotone" | "fill" | "light";

interface IconEntry {
  name: string;       // "AddressBook"
  baseName: string;   // "address-book" (para mostrar en UI)
  component: React.ComponentType<{ variant?: Variant; style?: React.CSSProperties }>;
}

interface Props {
  icons: IconEntry[];
}

export const IconViewer = ({ icons }: Props) => {
  const [search, setSearch]   = useState("");
  const [variant, setVariant] = useState<Variant>("duotone");
  const [copied, setCopied]   = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return icons;
    return icons.filter((i) => i.baseName.includes(q) || i.name.toLowerCase().includes(q));
  }, [icons, search]);

  const handleCopy = (name: string) => {
    const code = `<${name} variant="${variant}" />`;
    navigator.clipboard.writeText(code).then(() => {
      setCopied(name);
      setTimeout(() => setCopied(null), 1500);
    });
  };

  return (
    <>
      {/* Canvas */}
      <main className="sb-canvas">
        <div className="sb-canvas-topbar">
          <span>Icons</span>
          <span className="sb-canvas-topbar-sep">/</span>
          <span className="sb-canvas-topbar-crumb">{variant}</span>
          <span className="sb-header-badge" style={{ marginLeft: "auto" }}>
            {filtered.length} icons
          </span>
        </div>

        <div className="sb-icon-viewer">
          {filtered.length === 0 ? (
            <div className="sb-empty">
              <div className="sb-empty-icon">🔍</div>
              <div className="sb-empty-text">No icons match "{search}"</div>
            </div>
          ) : (
            <div className="sb-icon-grid">
              {filtered.map(({ name, baseName, component: Icon }) => (
                <div
                  key={name}
                  className={`sb-icon-cell ${copied === name ? "sb-icon-cell--copied" : ""}`}
                  title={`Click to copy <${name} variant="${variant}" />`}
                  onClick={() => handleCopy(name)}
                >
                  <Icon variant={variant} style={{ fontSize: "2rem" }} />
                  <span className="sb-icon-label">{baseName}</span>
                  {copied === name && <span className="sb-icon-copied">✓</span>}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Controls */}
      <aside className="sb-controls">
        <div className="sb-controls-header">Icons</div>

        <div className="sb-description">
          <div className="sb-description-title">Icon Library</div>
          <div className="sb-description-text">
            {icons.length} icons available in 3 variants. Click any icon to copy its JSX import.
          </div>
        </div>

        <div className="sb-controls-body">
          {/* Search */}
          <div className="sb-control">
            <div className="sb-control-header">
              <span className="sb-control-name">Search</span>
              <span className="sb-control-type">string</span>
            </div>
            <input
              className="sb-input"
              type="text"
              placeholder="e.g. arrow, user, check..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Variant */}
          <div className="sb-control">
            <div className="sb-control-header">
              <span className="sb-control-name">Variant</span>
              <span className="sb-control-type">select</span>
            </div>
            <select
              className="sb-select"
              value={variant}
              onChange={(e) => setVariant(e.target.value as Variant)}
            >
              <option value="duotone">duotone</option>
              <option value="fill">fill</option>
              <option value="light">light</option>
            </select>
          </div>
        </div>

        {/* Code preview */}
        {copied && (
          <div className="sb-code">
            <div className="sb-code-header">
              JSX
              <span className="sb-code-copy">✓ Copied</span>
            </div>
            <pre className="sb-code-block">{`import { ${copied} } from 'react-modern-components/icons/${copied.toLowerCase()}';\n\n<${copied} variant="${variant}" />`}</pre>
          </div>
        )}
      </aside>
    </>
  );
};
