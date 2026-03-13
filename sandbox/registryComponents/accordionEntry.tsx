import { Accordion } from "../../src/components/Accordion";
import { ComponentEntry } from "../registry";

const DEMO_ITEMS = [
  {
    title: "¿Qué es React?",
    content: "React es una librería de JavaScript para construir interfaces de usuario declarativas y basadas en componentes.",
  },
  {
    title: "¿Qué es forwardRef?",
    content: "<p>Permite exponer el nodo DOM de un componente a su componente padre mediante una <code>ref</code>.</p><p style='margin-top:8px'>Es especialmente útil en librerías de componentes.</p>",
  },
  {
    title: "Sección deshabilitada",
    content: "Este contenido no es accesible porque el item está deshabilitado.",
    disabled: true,
  },
];

export const AccordionEntry: ComponentEntry = {
  id: "accordion",
  name: "Accordion",
  icon: "🧩",
  category: "ui",
  description: "Muestra una lista de secciones expandibles. Solo una puede estar abierta a la vez. Cada item puede estar deshabilitado individualmente, y existe también una prop disabled global.",
  props: [
    {
      name: "disabled",
      propName: "disabled",
      type: "boolean",
      description: "Deshabilita todo el accordion de forma global.",
      defaultValue: false,
    },
  ],
  render: ({ values }) => (
    <Accordion
      items={DEMO_ITEMS}
      disabled={values["disabled"] as boolean}
    />
  ),
  generateCode: (values) => {
    const disabledProp = values["disabled"] ? " disabled" : "";
    return (
`<Accordion${disabledProp}
  items={[
    { title: "Sección 1", content: "Contenido de la sección 1." },
    { title: "Sección 2", content: "<p>Contenido <strong>HTML</strong>.</p>" },
    { title: "Sección deshabilitada", content: "...", disabled: true },
  ]}
/>`
    );
  },
};
