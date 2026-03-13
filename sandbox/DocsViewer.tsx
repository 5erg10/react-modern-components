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
        <CodeBlock>{`git clone https://github.com/5erg10/react-modern-components.git
cd react-modern-components`}</CodeBlock>
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
        <p>Crea un fichero en <code>sandbox/registryComponents/</code> siguiendo la estructura <code>ComponentEntry</code> definida en <code>sandbox/registry.tsx</code>, e impórtalo en el array <code>COMPS</code> de <code>sandbox/registryComponents/index.ts</code>.</p>
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
          <li><code>node scripts/generate-exports.js</code> — actualiza el campo <code>exports</code> del <code>package.json</code> para que cada componente tenga su propio subpath de importación.</li>
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
        <p><strong>Los estilos se incluyen automáticamente</strong> si tu bundler soporta la resolución del campo <code>style</code> en los exports del <code>package.json</code> (Vite lo soporta out of the box). Si no, impórtalos manualmente:</p>
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
