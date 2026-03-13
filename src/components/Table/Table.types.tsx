
export interface TableProps {
  data?: Record<string, unknown>[];
  onRowClick?: (row: Record<string, unknown>) => void;
  accentColor?: string;
}
