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

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 z-50 flex ${
        position === "right" ? "w-full justify-end" : "w-full justify-center"
      } items-end transition-all duration-300 sm:items-center ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}>
      <div
        className="absolute inset-0 bg-black transition-opacity duration-300"
        style={{
          opacity: isOpen ? 0.3 : 0,
        }}
        onClick={onClose}></div>

      <div
        className={`relative z-40 ${position === "right" ? "" : ""} w-auto transform rounded-[16px] bg-none transition-all duration-75 ${
          isOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-4 scale-95 opacity-0"
        }`}>
        {children}
      </div>
    </div>,
    document.body,
  );
};
