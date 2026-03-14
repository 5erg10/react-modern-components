
export interface TableProps {
  data: Record<string, unknown>[];
  onRowClick?: (row: Record<string, unknown>) => void;
  ambient?: 'dark' | 'light';
  accentColor?: `#${string}` | `rgb(${number}, ${number}, ${number})`
}
