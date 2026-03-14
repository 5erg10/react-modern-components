import { useState } from "react";
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
  props: [
    { name: "Acent Color", propName: 'accentColor', type: "color", description: "Select color for enphasis table", defaultValue: "#4767ac" },
    { name: "Ambient", propName: 'ambient', type: "select", options: ["dark", "light"], description: "Select dark or light Theme", defaultValue: "dark" },
  ],
  render: ({values}) => {
    const [rowValue, setRowValue] = useState('');
    return (
      <>
        <div style={{ width: "100%", padding: "1rem 0" }}>
          <Table 
            accentColor={values["accentColor"] as `#${string}` | `rgb(${number}, ${number}, ${number})`}
            ambient={values["ambient"] as "dark" | "light"}
            data={TABLE_SAMPLE_DATA}
            onRowClick={(e) => setRowValue(JSON.stringify(e))}/>
        </div>
        <div style={{ position: "absolute", bottom: "2rem", left: "2rem", color: "#6b7280", textAlign: "left" }}>{rowValue}</div>
      </>
    )
  },
  generateCode: (values) => {
    const PROPS = [
      values["Acent Color"] ? `accentColor="${values["Acent Color"]}"` : "",
      values["Ambient"] ? `  ambient="${values["Ambient"]}"` : ""
    ].filter(p => p !== "").join("\n  ");
    return `
  const data = [
    { id: 1, nombre: "Ana García",   departamento: "Ingeniería", cargo: "Dev Frontend",   salario: 42000, activo: "Sí" },
    { id: 2, nombre: "Carlos López", departamento: "Diseño",     cargo: "UI/UX Designer", salario: 38000, activo: "Sí" }
  ];
  <Table
    ${PROPS}
    data={data}
    onRowClick={() => {}}/>`
  }  
};