import { ReactNode } from "react";
import closeLine from "src/shared/assets/svgs/closeLine.svg";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  closeBtn?: boolean;
};

const Modal = ({ isOpen, onClose, children, closeBtn }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black opacity-[24%]"
        onClick={onClose}
      ></div>
      <div className="relative">
        {closeBtn && (
          <button
            onClick={onClose}
            className="absolute right-[12px] top-[12px] z-50 h-[28px] w-[28px]"
          >
            <img className="h-[28px] w-[28px]" src={closeLine} />
          </button>
        )}

        {children}
      </div>
    </div>
  );
};

export default Modal;
