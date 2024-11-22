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
  footer: React.ReactNode;
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
      <div className="md-full relative z-10 mx-0 mt-8 flex h-[calc(100vh-64px)] w-full flex-col gap-[0px] rounded-t-[16px] bg-card p-6 px-[32px] py-[24px] sm:mb-8 sm:ml-8 sm:mr-8 sm:rounded-[16px] md:w-[600px]">
        <div>
          {!isLoading ? (
            <h1 className="border-b pb-4 text-[28px] leading-[36px]">
              {header}
            </h1>
          ) : (
            <TextLoader />
          )}

          <button
            onClick={closeModal}
            className="z-60 absolute right-[24px] top-[24px] h-[28px] w-[28px]">
            <img className="h-[28px] w-[28px]" src={closeLine} />
          </button>
        </div>

        <div className="mt-4 flex max-h-[700px] w-full flex-1 flex-col gap-4 overflow-y-auto border-b">
          {children}
        </div>

        <div className="bottom-0 flex flex-row gap-[8px] pt-6">{footer}</div>
      </div>
    </Modal>
  );
};
