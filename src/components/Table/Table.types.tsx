
export interface TableProps<T extends Record<string, unknown> = Record<string, unknown>> {
  data: T[];
}
