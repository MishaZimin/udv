import { ReactNode } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ isOpen, onClose, children }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black opacity-[24%]"
        onClick={onClose}
      ></div>
      <div className="relative z-10 w-[400px] rounded-[16px] bg-card p-6 px-[40px] py-[48px]">
        {children}
      </div>
    </div>
  );
};

export default Modal;
