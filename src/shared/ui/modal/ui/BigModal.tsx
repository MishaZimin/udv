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
      <div className="relative z-10 mx-auto mb-8 mr-8 mt-8 flex h-[calc(100vh-64px)] w-[600px] flex-col gap-[0px] rounded-[16px] bg-card p-6 px-[32px] py-[24px]">
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
            className="z-60 absolute right-[16px] top-[16px] h-[28px] w-[28px]">
            <img className="h-[28px] w-[28px]" src={closeLine} />
          </button>
        </div>

        <div className="flex max-h-[700px] flex-1 flex-col gap-4 overflow-y-auto border-b pt-2">
          {children}
        </div>

        <div className="bottom-0 flex flex-row gap-[8px] pt-6">{footer}</div>
      </div>
    </Modal>
  );
};
