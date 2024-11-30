import { ReactNode, useEffect } from "react";
import closeLine from "src/shared/assets/svgs/closeLine.svg";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  closeBtn?: boolean;
  position?: "center" | "right";
};

export const Modal = ({
  isOpen,
  onClose,
  children,
  closeBtn,
  position,
}: Props) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-30 flex w-full items-end ${
        position === "right" ? "justify-end" : "justify-center"
      } transition-all duration-300 sm:items-center ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}>
      <div
        className="fixed inset-0 h-svh bg-black transition-opacity duration-300"
        style={{
          opacity: isOpen ? 0.3 : 0,
        }}
        onClick={onClose}></div>
      <div
        className={`relative flex w-full transform transition-all duration-75 ${
          position === "right" ? "justify-end" : "justify-center"
        } ${
          isOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-0 scale-100 opacity-50"
        }`}>
        {closeBtn && (
          <button
            onClick={onClose}
            className="absolute right-[16px] top-[16px] z-50 h-[28px] w-[28px]">
            <img className="h-[28px] w-[28px]" src={closeLine} alt="Close" />
          </button>
        )}
        {children}
      </div>
    </div>
  );
};
