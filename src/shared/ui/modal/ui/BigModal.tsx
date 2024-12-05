import React from "react";
import { Modal } from "src/shared/ui/modal";
import closeLine from "src/shared/assets/svgs/closeLine.svg";
import { TextLoader } from "../../loader/TextLoader";

type Props = {
  isOpen: boolean;
  onClose?: () => void;
  closeModal: () => void;
  header: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode | null;
  isLoading?: boolean;
};

export const BigModal = ({
  isOpen,
  closeModal,
  header,
  children,
  footer,
  isLoading,
}: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal} position="right">
      <div
        className={`relative z-30 mx-0 mt-8 flex h-[calc(100svh-32px)] w-screen flex-col gap-[0px] rounded-t-[16px] bg-card p-6 px-[32px] py-[24px] transition-all duration-300 sm:mb-8 sm:ml-8 sm:mr-8 sm:h-[calc(100svh-64px)] sm:w-[600px] sm:rounded-[16px]`}>
        <div className="w-full border-b">
          <div className="w-[93%]">
            {!isLoading ? (
              <h1 className="pb-4 text-[28px] leading-[36px]">{header}</h1>
            ) : (
              <TextLoader />
            )}

            <button
              onClick={closeModal}
              className="z-60 absolute right-[24px] top-[24px] h-[28px] w-[28px]">
              <img className="h-[28px] w-[28px]" src={closeLine} />
            </button>
          </div>
        </div>

        <div
          className={`flex w-full flex-1 flex-col gap-4 overflow-y-auto ${footer ? "border-b" : ""} pt-2`}>
          {children}
        </div>
        {footer && (
          <div className="bottom-0 flex flex-row gap-[8px] pt-6">{footer}</div>
        )}
      </div>
    </Modal>
  );
};
