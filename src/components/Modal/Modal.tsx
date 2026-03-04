import { forwardRef } from "react";
import { ModalProps } from "./Modal.types";
import "./Modal.css";

export const Modal = forwardRef<HTMLDivElement, ModalProps & { children?: React.ReactNode }>(
  ({ isOpen, onClose, children }, ref) => {
    if (!isOpen) return null;
    return (
      <div className="modal-backdrop" onClick={onClose}>
        <div ref={ref} className="modal-content" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    );
  }
);

Modal.displayName = "Modal";
