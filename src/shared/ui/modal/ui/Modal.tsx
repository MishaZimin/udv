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
      className={`fixed inset-0 flex w-full items-end sm:items-center ${
        position === "right" ? "z-30 justify-end" : "z-50 justify-center"
      } ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}>
      <div
        className="absolute inset-0 bg-black opacity-30"
        onClick={onClose}></div>
      <div
        className={`relative z-50 w-auto transform rounded-[16px] transition-all duration-300 ${
          isOpen ? "" : ""
        }`}>
        {children}
      </div>
    </div>,
    document.body,
  );
};
