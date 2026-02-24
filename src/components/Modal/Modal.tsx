import { ModalProps } from "./Modal.types";

export const Modal = ({ isOpen, onClose, children }: ModalProps & { children?: React.ReactNode }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content">{children}</div>
    </div>
  );
};