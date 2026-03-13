/* ============================================================
   DocsViewer — Documentación completa del proyecto
   ============================================================ */

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

const CodeBlock = ({ children }: { children: string }) => (
  <pre className="sb-docs-code">{children}</pre>
);

const sections: Section[] = [
  {
    id: "overview",
    title: "¿Qué es este proyecto?",
    content: (
      <>
        <p>
          <strong>modern-react-components</strong> es una librería de componentes React construida con
          TypeScript y Vite. Todos los componentes están implementados con{" "}
          <code>forwardRef</code>, lo que permite que los consumidores accedan directamente al nodo
          DOM subyacente cuando lo necesiten.
        </p>
        <p>El repositorio incluye también un <strong>sandbox</strong> integrado para explorar y probar cada componente de forma visual, sin necesidad de crear un proyecto aparte.</p>
        <p>Componentes disponibles: <code>Badge</code>, <code>Button</code>, <code>Card</code>, <code>Checkbox</code>, <code>DigitalClock</code>, <code>Dropdown</code>, <code>Input</code>, <code>Modal</code>, <code>Range</code>, <code>Table</code>.</p>
      </>
    ),
  },
  {
    id: "clone",
    title: "1. Clonar el repositorio",
    content: (
      <>
        <p>Clona el repositorio y entra en el directorio del proyecto:</p>
        <CodeBlock>{`git clone https://github.com/5erg10/react-modern-components.git\ncd react-modern-components`}</CodeBlock>
        <p>Si quieres trabajar sobre una rama concreta (por ejemplo, la rama de desarrollo activa):</p>
        <CodeBlock>{`git checkout feat/forward-ref`}</CodeBlock>
      </>
    ),
  },
  {
    id: "install",
    title: "2. Instalar dependencias",
    content: (
      <>
        <p>El proyecto usa <code>npm</code>. Instala todas las dependencias con:</p>
        <CodeBlock>{`npm install`}</CodeBlock>
        <p>
          Las dependencias de producción son <strong>peerDependencies</strong> (<code>react</code> y{" "}
          <code>react-dom</code> ≥18), por lo que no se instalan aquí. El resto son herramientas de
          desarrollo: Vite, TypeScript, vite-plugin-dts, etc.
        </p>
      </>
    ),
  },
  {
    id: "sandbox",
    title: "3. Usar el sandbox",
    content: (
      <>
        <p>
          El sandbox es la aplicación que estás viendo ahora mismo. Arranca un servidor de desarrollo
          Vite con una configuración propia (<code>vite.sandbox.config.ts</code>) separada de la
          build de la librería.
        </p>
        <CodeBlock>{`npm run sandbox`}</CodeBlock>
        <p>Esto levanta el sandbox en <code>http://localhost:5174</code> (o el puerto disponible).</p>
        <p><strong>Cómo usarlo:</strong></p>
        <ul>
          <li>En el menú lateral izquierdo encontrarás todas las secciones: <em>Documentación</em>, los componentes y la librería de iconos.</li>
          <li>Al seleccionar un componente se abre el visor con una preview en vivo, los controles para modificar sus props en tiempo real y un bloque de código JSX que puedes copiar directamente.</li>
          <li>El botón sol/luna del header cambia el tema claro/oscuro del canvas.</li>
        </ul>
        <p><strong>Cómo añadir un nuevo componente al sandbox:</strong></p>
        <p>Crea un fichero en <code>sandbox/registryComponents/</code> siguiendo la estructura <code>ComponentEntry</code> definida en <code>sandbox/registry.tsx</code>, e impórtalo en el array <code>COMPS</code> de <code>sandbox/registryComponents/index.ts</code>. También puedes usar el comando <code>npm run create-component</code> que lo hace automáticamente.</p>
      </>
    ),
  },
  {
    id: "build",
    title: "4. Build de la librería",
    content: (
      <>
        <p>Para compilar la librería y generar los artefactos en <code>dist/</code>:</p>
        <CodeBlock>{`npm run build`}</CodeBlock>
        <p>Este comando ejecuta tres pasos en secuencia:</p>
        <ol>
          <li><code>rimraf dist</code> — limpia el directorio de salida anterior.</li>
          <li><code>vite build</code> — compila los componentes en formato ESM (<code>.es.js</code>) y CJS (<code>.cjs.js</code>), y genera los tipos TypeScript (<code>.d.ts</code>) mediante <code>vite-plugin-dts</code>.</li>
          <li><code>node scripts/generate-exports.js</code> — actualiza el campo <code>exports</code> del <code>package.json</code> y registra los componentes nuevos en el sandbox.</li>
        </ol>
        <p>El resultado en <code>dist/</code> incluye un bundle completo y también un chunk independiente por componente, permitiendo <em>tree-shaking</em> granular.</p>
        <p>Para verificar que el código TypeScript compila sin errores antes del build:</p>
        <CodeBlock>{`npm run type-check`}</CodeBlock>
      </>
    ),
  },
  {
    id: "publish",
    title: "5. Publicar en npm",
    content: (
      <>
        <p>El proyecto está configurado para publicación pública en npm (<code>publishConfig.access: "public"</code>).</p>
        <p><strong>Requisitos previos:</strong></p>
        <ol>
          <li>Tener una cuenta en <a href="https://www.npmjs.com" target="_blank" rel="noreferrer">npmjs.com</a>.</li>
          <li>Haber iniciado sesión en la CLI: <CodeBlock>{`npm login`}</CodeBlock></li>
          <li>Asegurarte de que el campo <code>name</code> en <code>package.json</code> es único en el registro de npm. Actualmente es <code>modern-react-components</code>.</li>
        </ol>
        <p>Para publicar una nueva versión:</p>
        <CodeBlock>{`# 1. Sube la versión (patch | minor | major)
npm version patch

# 2. Publica (ejecuta automáticamente npm run build antes gracias a prepublishOnly)
npm publish`}</CodeBlock>
        <p>
          El script <code>prepublishOnly</code> ejecuta <code>npm run build</code> automáticamente
          antes de cada publicación, así que nunca se publica código sin compilar.
        </p>
        <p>Para publicar una versión en beta o <em>canary</em>:</p>
        <CodeBlock>{`npm version prerelease --preid=beta
npm publish --tag beta`}</CodeBlock>
      </>
    ),
  },
  {
    id: "consume",
    title: "6. Instalar y usar la librería en un proyecto",
    content: (
      <>
        <p>Una vez publicada (o instalada desde una ruta local con <code>npm link</code>), instálala en tu proyecto React:</p>
        <CodeBlock>{`npm install modern-react-components`}</CodeBlock>
        <p>La librería requiere <code>react</code> y <code>react-dom</code> ≥18 como <em>peer dependencies</em>, que ya deberías tener en tu proyecto.</p>
        <p><strong>Importación del bundle completo:</strong></p>
        <CodeBlock>{`import { Button, Input, Modal } from 'modern-react-components';`}</CodeBlock>
        <p><strong>Importación por subpath</strong> (mejor tree-shaking, recomendado):</p>
        <CodeBlock>{`import { Button } from 'modern-react-components/button';
import { Input }  from 'modern-react-components/input';
import { Modal }  from 'modern-react-components/modal';`}</CodeBlock>
        <p><strong>Los estilos se incluyen automáticamente.</strong> Si tu proyecto usa Vite, Webpack, Create React App o Next.js 13+, no necesitas hacer nada más allá de instalar la librería. El import del CSS ya está embebido dentro del código compilado de cada componente.</p>
        <p>El import manual solo sería necesario en entornos sin bundler (SSR puro, scripts sueltos, etc.):</p>
        <CodeBlock>{`import 'modern-react-components/dist/components/Button/Button.css';`}</CodeBlock>
        <p><strong>Ejemplo de uso:</strong></p>
        <CodeBlock>{`import { useState, useRef } from 'react';
import { Button, Modal, Input } from 'modern-react-components';

export function App() {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Abrir modal
      </Button>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <Input ref={inputRef} type="text" placeholder="Escribe algo..." />
        <Button variant="secondary" onClick={() => setOpen(false)}>
          Cerrar
        </Button>
      </Modal>
    </>
  );
}`}</CodeBlock>
        <p>Todos los componentes aceptan una <code>ref</code> gracias a <code>forwardRef</code>, lo que te permite acceder al nodo DOM directamente cuando lo necesites (foco, mediciones, animaciones, etc.).</p>
      </>
    ),
  },
  {
    id: "scripts",
    title: "7. Scripts del proyecto",
    content: (
      <>
        <p>
          Todos los scripts se ejecutan con <code>npm run &lt;nombre&gt;</code> desde la raíz del
          proyecto. A continuación se detalla qué hace cada uno.
        </p>

        {/* sandbox */}
        <p><strong>sandbox</strong></p>
        <CodeBlock>{`npm run sandbox`}</CodeBlock>
        <p>
          Arranca el servidor de desarrollo del sandbox usando <code>vite.sandbox.config.ts</code>.
          Es una configuración Vite independiente de la build de la librería, con su propio
          entry point en <code>sandbox/main.tsx</code>. Úsalo para explorar y probar los
          componentes visualmente mientras desarrollas.
        </p>

        {/* dev */}
        <p><strong>dev</strong></p>
        <CodeBlock>{`npm run dev`}</CodeBlock>
        <p>
          Arranca Vite en modo desarrollo usando la configuración principal (<code>vite.config.ts</code>),
          es decir, la misma configuración que genera la build de la librería pero en modo watch.
          Útil si necesitas inspeccionar el output de la librería en tiempo real, aunque para el
          desarrollo habitual del día a día se usa <code>npm run sandbox</code>.
        </p>

        {/* build */}
        <p><strong>build</strong></p>
        <CodeBlock>{`npm run build`}</CodeBlock>
        <p>Compila la librería para producción en tres pasos:</p>
        <ol>
          <li><strong>rimraf dist</strong> — elimina el directorio <code>dist/</code> anterior para evitar residuos de builds previas.</li>
          <li><strong>vite build</strong> — transpila todos los componentes de <code>src/</code> generando para cada uno un bundle ESM (<code>.es.js</code>), CJS (<code>.cjs.js</code>) y sus declaraciones de tipos (<code>.d.ts</code>). También preserva los ficheros CSS por componente.</li>
          <li><strong>npm run generate-exports</strong> — actualiza automáticamente el campo <code>exports</code> de <code>package.json</code> para que cada componente tenga su propio subpath de importación, y registra los componentes nuevos en el sandbox.</li>
        </ol>

        {/* type-check */}
        <p><strong>type-check</strong></p>
        <CodeBlock>{`npm run type-check`}</CodeBlock>
        <p>
          Ejecuta el compilador de TypeScript en modo <code>--noEmit</code>: valida que todo el
          código tipado es correcto sin generar ningún fichero. Útil para detectar errores de tipos
          antes de hacer la build o de abrir una PR.
        </p>

        {/* create-component */}
        <p><strong>create-component</strong></p>
        <CodeBlock>{`npm run create-component`}</CodeBlock>
        <p>
          Asistente interactivo de consola para crear un componente nuevo de principio a fin. Ejecuta
          dos pasos en secuencia:
        </p>
        <ol>
          <li>
            <strong>generate-component.js</strong> — te pregunta el nombre del componente (en
            camelCase si es compuesto). Valida que no contenga caracteres especiales, lo convierte
            a PascalCase y crea la carpeta <code>src/components/NombreComponente/</code> con cuatro
            ficheros vacíos listos para rellenar:{" "}
            <code>NombreComponente.tsx</code>, <code>NombreComponente.types.tsx</code>,{" "}
            <code>NombreComponente.css</code> e <code>index.ts</code>.
          </li>
          <li>
            <strong>generate-exports.js</strong> — detecta el componente recién creado, genera
            automáticamente su entrada en el sandbox (<code>sandbox/registryComponents/NombreComponenteEntry.tsx</code>)
            parseando las props del fichero <code>.types.tsx</code>, actualiza{" "}
            <code>sandbox/registryComponents/index.ts</code>, actualiza <code>src/index.ts</code> y
            actualiza el campo <code>exports</code> de <code>package.json</code>.
          </li>
        </ol>
        <p>
          Tras ejecutarlo, el componente ya aparece en el sandbox y está exportado en la librería.
          Solo queda implementar la lógica en los ficheros generados y ejecutar{" "}
          <code>npm run build</code> para compilarlo.
        </p>

        {/* delete-component */}
        <p><strong>delete-component</strong></p>
        <CodeBlock>{`npm run delete-component`}</CodeBlock>
        <p>
          Asistente interactivo para eliminar un componente existente de forma segura. Muestra un
          selector con todos los componentes disponibles, pide confirmación explícita y, si confirmas,
          realiza las siguientes acciones en orden:
        </p>
        <ol>
          <li>Elimina la carpeta <code>src/components/NombreComponente/</code> y todo su contenido.</li>
          <li>Elimina la entrada correspondiente del campo <code>exports</code> en <code>package.json</code>.</li>
          <li>Elimina el fichero <code>sandbox/registryComponents/NombreComponenteEntry.tsx</code>.</li>
          <li>Reconstruye <code>sandbox/registryComponents/index.ts</code> con los componentes restantes.</li>
          <li>Actualiza <code>src/index.ts</code> eliminando el export del componente borrado.</li>
        </ol>
        <p>
          Al finalizar recuerda ejecutar <code>npm run build</code> para que el directorio{" "}
          <code>dist/</code> refleje los cambios.
        </p>

        {/* generate-exports */}
        <p><strong>generate-exports</strong></p>
        <CodeBlock>{`npm run generate-exports`}</CodeBlock>
        <p>
          Script de sincronización que se ejecuta automáticamente como parte de{" "}
          <code>npm run build</code> y <code>npm run create-component</code>, pero también puede
          lanzarse manualmente si el estado de los ficheros de registro se ha desincronizado. Hace
          cuatro cosas:
        </p>
        <ol>
          <li>Lee todos los directorios de <code>src/components/</code> para obtener la lista de componentes.</li>
          <li>Reconstruye el campo <code>exports</code> de <code>package.json</code> con un subpath por componente.</li>
          <li>Detecta qué componentes no tienen todavía su fichero <code>Entry.tsx</code> en el sandbox y los genera automáticamente parseando sus props.</li>
          <li>Actualiza <code>sandbox/registryComponents/index.ts</code> y <code>src/index.ts</code> con el estado actual.</li>
        </ol>

        {/* generate-icons */}
        <p><strong>generate-icons</strong></p>
        <CodeBlock>{`npm run generate-icons`}</CodeBlock>
        <p>
          Genera todo el sistema de iconos de la librería a partir de los SVG crudos que hay en{" "}
          <code>public/icons/</code>. Para cada icono espera encontrar tres variantes:{" "}
          <code>duotone</code>, <code>fill</code> y <code>light</code>. El proceso es:
        </p>
        <ol>
          <li>Lee todos los ficheros <code>.svg</code> de <code>public/icons/duotone/</code> para obtener la lista de nombres base.</li>
          <li>Para cada icono, extrae el contenido SVG interno de las tres variantes y lo procesa: separa las capas primaria y secundaria del duotone, limpia los atributos <code>fill</code> redundantes.</li>
          <li>Genera <code>src/icons/icons-data.ts</code> con un objeto que mapea cada nombre de icono a sus tres variantes como strings de HTML embebido.</li>
          <li>Genera <code>src/icons/Icon.tsx</code> con el componente React <code>Icon</code> que renderiza el SVG correcto según la prop <code>variant</code>, <code>primaryColor</code> y <code>secondaryColor</code>.</li>
          <li>Genera <code>src/icons/index.ts</code> con los exports públicos del sistema de iconos.</li>
        </ol>
        <p>
          Ejecuta este script cada vez que añadas, elimines o modifiques SVGs en{" "}
          <code>public/icons/</code>. Los ficheros generados en <code>src/icons/</code> no deben
          editarse manualmente.
        </p>
      </>
    ),
  },
];

export const DocsViewer = () => {
  return (
    <main className="sb-canvas sb-docs">
      <div className="sb-canvas-topbar">
        <span>Documentación</span>
      </div>
      <div className="sb-docs-body">
        <div className="sb-docs-hero">
          <h1 className="sb-docs-hero-title">modern-react-components</h1>
          <p className="sb-docs-hero-sub">Guía de referencia del proyecto</p>
        </div>

        {sections.map((section) => (
          <section key={section.id} className="sb-docs-section">
            <h2 className="sb-docs-section-title">{section.title}</h2>
            <div className="sb-docs-section-content">{section.content}</div>
          </section>
        ))}
      </div>
    </main>
  );
};
