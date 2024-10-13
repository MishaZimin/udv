import { ReactNode } from "react";

interface IModal {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: IModal) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black opacity-[24%]"
        onClick={onClose}
      ></div>
      <div className="relative z-10 w-[400px] rounded-[16px] bg-white p-6 px-[40px] py-[48px] shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default Modal;
