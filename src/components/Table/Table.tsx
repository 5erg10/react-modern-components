import { forwardRef, useState, useMemo, useCallback, useEffect } from "react";
import { TableProps } from "./Table.types";
import "./Table.css";

const PAGE_SIZE_OPTIONS = [10, 50, 100] as const;

type SortDirection = "asc" | "desc";

interface SortState {
  column: string;
  direction: SortDirection;
}

// ─── Color utils ─────────────────────────────────────────────────────────────

/** Convierte cualquier string hex (#rgb, #rrggbb) o rgb(...) a [r, g, b]. */
function parseColor(color: string): [number, number, number] | null {
  const trimmed = color.trim();

  // rgb(r, g, b) / rgba(r, g, b, a)
  const rgbMatch = trimmed.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);
  if (rgbMatch) {
    return [Number(rgbMatch[1]), Number(rgbMatch[2]), Number(rgbMatch[3])];
  }

  // #rgb -> #rrggbb
  let hex = trimmed.startsWith("#") ? trimmed.slice(1) : trimmed;
  if (hex.length === 3) hex = hex.split("").map((c) => c + c).join("");
  if (hex.length === 6) {
    return [
      parseInt(hex.slice(0, 2), 16),
      parseInt(hex.slice(2, 4), 16),
      parseInt(hex.slice(4, 6), 16),
    ];
  }

  return null;
}

/** Oscurece un color RGB en un porcentaje (0–100). */
function darken(rgb: [number, number, number], amount: number): string {
  const factor = 1 - amount / 100;
  const [r, g, b] = rgb.map((c) => Math.round(Math.max(0, c * factor)));
  return `rgb(${r}, ${g}, ${b})`;
}

/** Oscurece un color RGB en un porcentaje (0–100). */
function lighter(rgb: [number, number, number], amount: number): string {
  const factor = 1 + amount / 100;
  const [r, g, b] = rgb.map((c) => Math.round(Math.max(0, c * factor)));
  return `rgb(${r}, ${g}, ${b})`;
}

/**
 * Dado un accentColor (hex o rgb), devuelve un objeto de CSS custom properties
 * listo para pasarlo como `style` al wrapper.
 */
function buildAccentVars(
  accentColor: string | undefined
): React.CSSProperties {
  if (!accentColor) return {};
  const rgb = parseColor(accentColor);
  if (!rgb) return {};
  return {
    "--table-accent":       accentColor,
    "--table-accent-darker": darken(rgb, 20),
    "--table-accent-lighter": lighter(rgb, 20)
  } as React.CSSProperties;
}

// ─── Inner component ──────────────────────────────────────────────────────────

interface TableInnerProps extends TableProps{
  containerRef: React.ForwardedRef<HTMLDivElement>;
}

const TableInner = ({ data, onRowClick, accentColor, ambient, containerRef }: TableInnerProps) => {

  /* ── Columns: intersection of all row keys ── */
  const columns = useMemo<string[]>(() => {
    if (data.length === 0) return [];
    const first = Object.keys(data[0]);
    if (data.length === 1) return first;
    const rest = data.slice(1).map((row) => new Set(Object.keys(row)));
    return first.filter((key) => rest.every((set) => set.has(key)));
  }, [data]);

  const [searchField, setSearchField] = useState<string>(() => columns[0] ?? "");
  const [searchValue, setSearchValue] = useState<string>("");
  const [pageSize, setPageSize] = useState<10 | 50 | 100>(10);
  const [page, setPage] = useState<number>(1);
  const [sort, setSort] = useState<SortState | null>(null);

  /* ── Keep searchField in sync if columns array changes ── */
  useEffect(() => {
    if (columns.length > 0 && !columns.includes(searchField)) {
      setSearchField(columns[0]);
    }
  }, [columns, searchField]);

  /* ── Sorting handler ── */
  const handleSortColumn = useCallback((col: string) => {
    setSort((prev) => {
      if (prev?.column === col) {
        return { column: col, direction: prev.direction === "asc" ? "desc" : "asc" };
      }
      return { column: col, direction: "asc" };
    });
    setPage(1);
  }, []);

  /* ── Filter ── */
  const filteredData = useMemo(() => {
    if (!searchValue.trim() || !searchField) return data;
    return data.filter((row) =>
      String(row[searchField] ?? "")
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    );
  }, [data, searchField, searchValue]);

  /* ── Sort ── */
  const sortedData = useMemo(() => {
    if (!sort) return filteredData;
    return [...filteredData].sort((a, b) => {
      const aVal = a[sort.column];
      const bVal = b[sort.column];
      const aNum = Number(aVal);
      const bNum = Number(bVal);
      const isNumeric = !isNaN(aNum) && !isNaN(bNum);
      let cmp: number;
      if (isNumeric) {
        cmp = aNum - bNum;
      } else {
        cmp = String(aVal ?? "").localeCompare(String(bVal ?? ""), undefined, { sensitivity: "base" });
      }
      return sort.direction === "asc" ? cmp : -cmp;
    });
  }, [filteredData, sort]);

  const totalRows = sortedData.length;
  const totalPages = Math.max(1, Math.ceil(totalRows / pageSize));
  const safePage = Math.min(page, totalPages);
  const firstIndex = (safePage - 1) * pageSize;
  const lastIndex = Math.min(firstIndex + pageSize, totalRows);

  const visibleRows = useMemo(
    () => sortedData.slice(firstIndex, lastIndex),
    [sortedData, firstIndex, lastIndex]
  );

  const handleSearchFieldChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSearchField(e.target.value);
      setPage(1);
    },
    []
  );

  const handleSearchValueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
      setPage(1);
    },
    []
  );

  const handlePageSizeChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setPageSize(Number(e.target.value) as 10 | 50 | 100);
      setPage(1);
    },
    []
  );

  const hasPagination = totalRows > pageSize;
  const isClickable = typeof onRowClick === "function";
  const accentVars = useMemo(() => buildAccentVars(accentColor), [accentColor]);

  return (
    <div ref={containerRef} className="modern-table-wrapper" style={accentVars} data-table-ambient={ambient}>

      {/* ── Toolbar ── */}
      <div className="modern-table-toolbar">
        <div className="modern-table-search-group">
          <select
            className="modern-table-select"
            value={searchField}
            onChange={handleSearchFieldChange}
            aria-label="Campo de búsqueda"
          >
            {columns.map((col) => (
              <option key={col} value={col}>
                {col}
              </option>
            ))}
          </select>
          <input
            className="modern-table-search-input"
            type="text"
            placeholder={`Buscar por ${searchField}…`}
            value={searchValue}
            onChange={handleSearchValueChange}
            aria-label="Valor de búsqueda"
          />
        </div>
      </div>

      {/* ── Table ── */}
      <div className="modern-table-scroll">
        <table className="modern-table">
          <thead>
            <tr>
              {columns.map((col) => {
                const isActive = sort?.column === col;
                const ariaSort: "ascending" | "descending" | "none" = isActive ? (sort!.direction === "asc" ? "ascending" : "descending") : "none";
                const arrow = isActive
                  ? sort!.direction === "asc" ? " ↑" : " ↓"
                  : "";
                return (
                  <th
                    key={col}
                    className={`modern-table-th modern-table-th--sortable${isActive ? " modern-table-th--active" : ""}`}
                    onClick={() => handleSortColumn(col)}
                    aria-sort={ariaSort}
                  >
                    <span className="modern-table-th-content">
                      <span className="modern-table-th-label">{col}</span>
                      <span className={`modern-table-sort-icon${isActive ? " modern-table-sort-icon--active" : ""}`}>
                        {isActive ? arrow : " ↕"}
                      </span>
                    </span>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {visibleRows.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="modern-table-no-results">
                  Sin resultados para "{searchValue}"
                </td>
              </tr>
            ) : (
              visibleRows.map((row, rowIdx) => (
                <tr
                  key={rowIdx}
                  className={`modern-table-row${isClickable ? " modern-table-row--clickable" : ""}`}
                  onClick={isClickable ? () => onRowClick!(row) : undefined}
                  tabIndex={isClickable ? 0 : undefined}
                  onKeyDown={isClickable ? (e) => { if (e.key === "Enter" || e.key === " ") onRowClick!(row); } : undefined}
                  role={isClickable ? "button" : undefined}
                  aria-label={isClickable ? `Fila ${rowIdx + 1}` : undefined}
                >
                  {columns.map((col) => (
                    <td key={col} className="modern-table-td">
                      {String(row[col] ?? "")}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ── Footer ── */}
      <div className="modern-table-footer">
        <div className="modern-table-footer-info">
          <span className="modern-table-total">
            Total: <strong>{totalRows}</strong> registros
          </span>
          <div className="modern-table-page-size-group">
            <label
              htmlFor="modern-table-page-size"
              className="modern-table-page-size-label"
            >
              Mostrar
            </label>
            <select
              id="modern-table-page-size"
              className="modern-table-select"
              value={pageSize}
              onChange={handlePageSizeChange}
              aria-label="Registros por página"
            >
              {PAGE_SIZE_OPTIONS.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
            <span className="modern-table-page-size-label">por página</span>
          </div>
        </div>

        {hasPagination && (
          <div className="modern-table-pagination">
            <button
              className="modern-table-page-btn"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={safePage === 1}
              aria-label="Página anterior"
            >
              ‹
            </button>
            <span className="modern-table-page-info">
              Página <strong>{safePage}</strong> · registros del{" "}
              <strong>{firstIndex + 1}</strong> al{" "}
              <strong>{lastIndex}</strong>
            </span>
            <button
              className="modern-table-page-btn"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={safePage === totalPages}
              aria-label="Página siguiente"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// ─── Public component ─────────────────────────────────────────────────────────

export const Table = forwardRef<HTMLDivElement, TableProps>(({ data, onRowClick, accentColor = "#4767ac", ambient = "light" }, ref) => {
  if (!Array.isArray(data) || data.length === 0) return null;
  return <TableInner data={data} onRowClick={onRowClick} accentColor={accentColor} ambient={ambient} containerRef={ref} />;
});

Table.displayName = "Table";
