import { ModalProps } from "./Modal.types";
import "./Modal.css";

export const Modal = ({ isOpen, onClose, children }: ModalProps & { children?: React.ReactNode }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
