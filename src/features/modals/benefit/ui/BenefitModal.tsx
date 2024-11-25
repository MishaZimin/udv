import { Button, useModal } from "src/shared/ui";
import { useBenefit } from "src/pages/benefit";
import Markdown from "react-markdown";
import { BigModal } from "src/shared/ui/modal/ui/BigModal";
import { useState } from "react";
import { TextLoader } from "src/shared/ui/loader/TextLoader";
import { LoadersList } from "src/shared/ui/loader/LoadersList";
import { ImageLoader } from "src/shared/ui/loader/ImageLoader";
import { FileUploaderMini } from "src/shared/ui/drop-area/ui/DropAreaMini";
import { SuccessModal } from "./SuccessModal";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  benefitId: string;
  benefitImg?: string;
};

export const BenefitModal = ({
  isOpen,
  closeModal,
  benefitId,
  benefitImg,
}: Props) => {
  const { benefitData, error, isLoading } = useBenefit(Number(benefitId));
  const {
    isOpen: isOpenSuccess,
    openModal: openModalSuccess,
    closeModal: closeModalSuccess,
  } = useModal();

  const [files, setFiles] = useState<File[]>([]);

  const handleFileSelect = (newFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleFileClear = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  if (error) {
    return <p>error {error.message}</p>;
  }

  const submitRequest = () => {
    //запрос
    // closeModal();
    openModalSuccess();
  };

  const header = isLoading ? (
    <TextLoader height="36px" backgroundColor="bg-white" />
  ) : (
    <>{benefitData.name}</>
  );

  const footer = (
    <>
      <Button
        text={"Отправить заявку"}
        textColor={"light"}
        buttonType={"primary"}
        onClick={submitRequest}
        disabled={isLoading}
      />
      <Button
        text={"Отменить"}
        textColor={"dark"}
        buttonType={"secondary"}
        onClick={closeModal}
        disabled={isLoading}
      />
    </>
  );
  const children = isLoading ? (
    <div className="mt-2 flex flex-col gap-4">
      <ImageLoader height="card" />
      <ImageLoader height="40px" />

      <LoadersList count={3}>
        <div className="mb-4 w-1/2">
          <TextLoader backgroundColor="bg-white" />
        </div>
        <LoadersList count={3}>
          <div className="mb-4">
            <TextLoader backgroundColor="bg-white" />
          </div>
        </LoadersList>
      </LoadersList>
    </div>
  ) : (
    <div className="flex flex-col gap-6">
      <div className="mt-2 w-full">
        <img className="w-full" src={benefitImg || ""} />
      </div>
      {/* тут проверка на загоузку чеков */}
      <div className="">
        <FileUploaderMini
          onFileSelect={handleFileSelect}
          placeholderText={"Прикрепить чеки PNG, JPG"}
          acceptedFileTypes={"image/*"}
          files={files}
          clearFile={handleFileClear}
        />
      </div>
      <div className="prose">
        <Markdown
          components={{
            a: ({ href, children }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-mint no-underline visited:text-mintactive hover:text-minthover">
                {children}
              </a>
            ),
          }}>
          {benefitData.text}
        </Markdown>
      </div>
    </div>
  );
  return (
    <>
      <BigModal
        isOpen={isOpen}
        onClose={closeModal}
        closeModal={closeModal}
        header={header}
        footer={footer}
        children={children}></BigModal>
      <SuccessModal
        isOpen={isOpenSuccess}
        closeModal={closeModalSuccess}
        closeBtn={true}
        closeBigModal={closeModal}
      />
    </>
  );
};
