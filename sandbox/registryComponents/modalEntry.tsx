import { useState } from "react";
import { ComponentEntry } from "../registry";
import { Button } from "../../src/components/Button";
import { Modal } from "../../src/components/Modal";

export const ModalEntry: ComponentEntry = {
  id: "modal",
  name: "Modal",
  icon: "🪟",
  category: "overlay",
  description:
    "A controlled modal dialog. Renders only when isOpen is true. " +
    "Clicking the backdrop calls onClose — clicks inside the content " +
    "do not propagate, preventing accidental dismissal.",
  props: [
    { name: "Content", propName: 'children', type: "string", description: "Content rendered inside the modal.", defaultValue: "Modal content goes here", multiline: true },
  ],
  render: ({ values }) => {
    const [open, setOpen] = useState(values["isOpen"] as boolean);
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
        <Button variant="primary" onClick={() => setOpen(true)}>Open Modal</Button>
        {open && (
          <Modal isOpen={open} onClose={() => setOpen(false)}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <h3 style={{ margin: 0, fontSize: 16, color: "#1f2937" }}>Modal title</h3>
              <p style={{ margin: 0, fontSize: 14, color: "#6b7280", lineHeight: 1.5 }}>{String(values["children"])}</p>
              <Button variant="secondary" onClick={() => setOpen(false)}>Close</Button>
            </div>
          </Modal>
        )}
      </div>
    );
  },
  generateCode: (values) =>
    `
const [isOpen, setIsOpen] = useState(false);
<Button onClick={() => setIsOpen(true)}> 
  Open Modal
</Button>
<Modal
  onClose={() => setIsOpen(false)}>
    ${values["children"]}
</Modal>`,
};