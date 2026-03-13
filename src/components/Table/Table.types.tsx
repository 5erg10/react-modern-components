
export interface TableProps {
  data?: Record<string, unknown>[];
  onRowClick?: (row: Record<string, unknown>) => void;
  ambient?: 'dark' | 'light';
  acentColor?: `#${string}` | `rgb(${number}, ${number}, ${number})`
}
