import { forwardRef, useState, useMemo, useCallback } from "react";
import { TableProps } from "./Table.types";
import "./Table.css";

const PAGE_SIZE_OPTIONS = [10, 50, 100] as const;

export const Table = forwardRef<HTMLDivElement, TableProps>(({ data }, ref) => {
  const columns = useMemo<string[]>(() => {
    if (!data || data.length === 0) return [];
    const keySets = data.map((row) => new Set(Object.keys(row)));
    const common = [...keySets[0]].filter((key) =>
      keySets.every((set) => set.has(key))
    );
    return common;
  }, [data]);

  const [searchField, setSearchField] = useState<string>(() => columns[0] ?? "");
  const [searchValue, setSearchValue] = useState<string>("");
  const [pageSize, setPageSize] = useState<10 | 50 | 100>(10);
  const [page, setPage] = useState<number>(1);

  const filteredData = useMemo(() => {
    if (!searchValue.trim() || !searchField) return data;
    return data.filter((row) => {
      const cellValue = row[searchField];
      return String(cellValue ?? "")
        .toLowerCase()
        .includes(searchValue.toLowerCase());
    });
  }, [data, searchField, searchValue]);

  const totalRows = filteredData.length;
  const totalPages = Math.max(1, Math.ceil(totalRows / pageSize));

  const safePage = Math.min(page, totalPages);

  const firstIndex = (safePage - 1) * pageSize;
  const lastIndex = Math.min(firstIndex + pageSize, totalRows);

  const visibleRows = useMemo(
    () => filteredData.slice(firstIndex, lastIndex),
    [filteredData, firstIndex, lastIndex]
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

  if (!data || data.length === 0) {
    return (
      <div ref={ref} className="modern-table-wrapper">
        <p className="modern-table-empty">No hay datos para mostrar.</p>
      </div>
    );
  }

  return (
    <div ref={ref} className="modern-table-wrapper">

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
              {columns.map((col) => (
                <th key={col} className="modern-table-th">
                  {col}
                </th>
              ))}
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
                <tr key={rowIdx} className="modern-table-row">
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
            <label htmlFor="modern-table-page-size" className="modern-table-page-size-label">
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
});

Table.displayName = "Table";
