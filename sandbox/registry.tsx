import { COMPS } from './registryComponents';

/* -------------------------------------------------------
   Types
------------------------------------------------------- */
export interface PropDef {
  name: string;
  type: "string" | "boolean" | "number" | "select" | "range" | "array";
  description: string;
  defaultValue: unknown;
  required?: boolean;
  options?: string[];
  range?: number[];
  multiline?: boolean;
  step?: string | number;
}

export interface ComponentEntry {
  id: string;
  name: string;
  icon: string;
  category: string;
  description: string;
  props: PropDef[];
  render: (args: { values: Record<string, unknown> }) => React.ReactNode;
  generateCode: (values: Record<string, unknown>) => string;
}


export const componentRegistry: ComponentEntry[] = COMPS;
