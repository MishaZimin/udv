import { ReactNode } from "react";
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
  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-30 flex w-full items-end ${isOpen ? "visible" : "invisible"} ${position == "right" ? "justify-end" : "justify-center"} sm:items-center`}>
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? "opacity-30" : "opacity-0"
        }`}
        onClick={onClose}></div>
      <div
        className={`relative flex w-full transition-all duration-300 ${position === "right" ? "w-full justify-end" : "justify-center"} ${
          isOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-10 scale-95 opacity-0"
        }`}>
        {closeBtn && (
          <button
            onClick={onClose}
            className="absolute right-[16px] top-[16px] z-50 h-[28px] w-[28px]">
            <img className="h-[28px] w-[28px]" src={closeLine} />
          </button>
        )}
        {children}
      </div>
    </div>
  );
};
