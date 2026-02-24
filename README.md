# modern-react-components

Colección de componentes React modernos, escritos en TypeScript y distribuidos como librería npm con soporte para ES Modules y CommonJS.

## Instalación

```bash
npm install modern-react-components
```

> **Peer dependencies:** React >=18 y react-dom >=18 deben estar instalados en tu proyecto.

## Estilos

Importa los estilos base una sola vez en el punto de entrada de tu aplicación:

```ts
import "modern-react-components/dist/styles/components.css";
```

---

## Componentes

### `<Button>`

Botón accesible que extiende todos los atributos nativos de `<button>`.

#### Props

| Prop | Tipo | Por defecto | Descripción |
|------|------|-------------|-------------|
| `variant` | `"primary" \| "secondary"` | `"primary"` | Estilo visual del botón |
| `...rest` | `ButtonHTMLAttributes` | — | Cualquier atributo HTML válido de `<button>` |

#### Ejemplo

```tsx
import { Button } from "modern-react-components";
// o import de submódulo:
import { Button } from "modern-react-components/button";

<Button variant="primary" onClick={() => alert("click")}>Guardar</Button>
<Button variant="secondary" disabled>Cancelar</Button>
```

---

### `<Modal>`

Modal accesible con cierre al hacer click en el backdrop. El click dentro del contenido **no** propaga el cierre.

#### Props

| Prop | Tipo | Descripción |
|------|------|-------------|
| `isOpen` | `boolean` | Controla si el modal es visible |
| `onClose` | `() => void` | Función llamada al hacer click fuera del contenido |
| `children` | `ReactNode` | Contenido del modal |

#### Ejemplo

```tsx
import { useState } from "react";
import { Modal, Button } from "modern-react-components";
// o import de submódulo:
import { Modal } from "modern-react-components/modal";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Abrir modal</Button>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h2>Título del modal</h2>
        <p>Contenido del modal</p>
        <Button variant="secondary" onClick={() => setOpen(false)}>Cerrar</Button>
      </Modal>
    </>
  );
}
```

---

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo con Vite |
| `npm run build` | Genera la distribución en `/dist` |
| `npm run type-check` | Verifica los tipos con TypeScript |

## Licencia

ISC
