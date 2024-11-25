// ModalContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";
import ReactDOM from "react-dom";

type ModalContextType = {
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
  isOpen: boolean;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  return context;
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  const openModal = (content: ReactNode) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent(null);
  };

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      {isOpen &&
        modalContent &&
        ReactDOM.createPortal(
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              {modalContent}
            </div>
          </div>,
          document.body,
        )}
    </ModalContext.Provider>
  );
};
