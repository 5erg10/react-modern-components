import { forwardRef, useState, useMemo, useCallback } from "react";
import { TableProps } from "./Table.types";
import "./Table.css";

const PAGE_SIZE_OPTIONS = [10, 50, 100] as const;

type SortDirection = "asc" | "desc";

interface SortState {
  column: string;
  direction: SortDirection;
}

/* ── Inner component: hooks only run when data is a valid array ── */

interface TableInnerProps {
  data: Record<string, unknown>[];
  onRowClick?: (row: Record<string, unknown>) => void;
  containerRef: React.ForwardedRef<HTMLDivElement>;
}

const TableInner = ({ data, onRowClick, containerRef }: TableInnerProps) => {
  const columns = useMemo<string[]>(() => {
    const keySets = data.map((row) => new Set(Object.keys(row)));
    const common = [...keySets[0]].filter((key) =>
      keySets.every((set) => set.has(key))
    );
    return common;
  }, [data]);

  const [searchField, setSearchField] = useState<string>(columns[0] ?? "");
  const [searchValue, setSearchValue] = useState<string>("");
  const [pageSize, setPageSize] = useState<10 | 50 | 100>(10);
  const [page, setPage] = useState<number>(1);
  const [sort, setSort] = useState<SortState | null>(null);

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

  return (
    <div ref={containerRef} className="modern-table-wrapper">

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
                const arrow = isActive
                  ? sort!.direction === "asc" ? " ↑" : " ↓"
                  : "";
                return (
                  <th
                    key={col}
                    className={`modern-table-th modern-table-th--sortable${isActive ? " modern-table-th--active" : ""}`}
                    onClick={() => handleSortColumn(col)}
                    aria-sort={isActive ? (sort!.direction === "asc" ? "ascending" : "descending") : "none"}
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

/* ── Public component: guard before hooks ── */

export const Table = forwardRef<HTMLDivElement, TableProps>(({ data, onRowClick }, ref) => {
  if (!Array.isArray(data) || data.length === 0) return null;
  return <TableInner data={data} onRowClick={onRowClick} containerRef={ref} />;
});

Table.displayName = "Table";
