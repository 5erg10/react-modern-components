import { Table } from "../../src/components/Table";
import { tableData } from "../data/componentsData";
import { ComponentEntry } from "../registry";

const TABLE_SAMPLE_DATA: any[] = tableData;

export const TableEntry: ComponentEntry = {
  id: "table",
  name: "Table",
  icon: "📋",
  category: "data",
  description:
    "A data table that accepts an array of objects and renders one column per " +
    "shared key. Includes a column selector + search bar to filter rows, " +
    "configurable page size (10 / 50 / 100), and pagination controls that " +
    "show the current page and the visible row range.",
  props: [],
  render: () => (
    <div style={{ width: "100%", padding: "1rem 0" }}>
      <Table data={TABLE_SAMPLE_DATA} />
    </div>
  ),
  generateCode: () => `
const data = [
  { id: 1, nombre: "Ana García",   departamento: "Ingeniería", cargo: "Dev Frontend",   salario: 42000, activo: "Sí" },
  { id: 2, nombre: "Carlos López", departamento: "Diseño",     cargo: "UI/UX Designer", salario: 38000, activo: "Sí" },
  // ...more rows
];

<Table data={data} />`,
};