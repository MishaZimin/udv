import { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  position?: "center" | "right";
};

export const Modal = ({
  isOpen,
  onClose,
  children,
  position = "center",
}: Props) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 z-50 flex w-full items-end transition-all duration-300 sm:items-center ${
        position === "right" ? "justify-end" : "justify-center"
      } ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}>
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-30"
        onClick={onClose}></div>

      {/* Modal Content */}
      <div
        className={`relative z-40 w-auto transform rounded-[16px] transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-100 opacity-50"
        }`}>
        {children}
      </div>
    </div>,
    document.body,
  );
};
