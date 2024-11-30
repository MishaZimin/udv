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
import { ApplyApi } from "../api/api/apply.api";

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
  const [isSubmitLoading, setIsSubmitLoading] = useState<boolean>(false);
  const handleFileSelect = (newFiles: File[]) => {
    console.log(newFiles);
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleFileClear = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  if (error) {
    return <p>error {error.message}</p>;
  }

  const submitRequest = async () => {
    if (benefitData.need_files && files.length === 0) {
      alert("Необходимо прикрепить чеки.");
      return;
    }

    setIsSubmitLoading(true);

    try {
      const formData = new FormData();

      const fileNames = files.map((file) => file.name).join(",");

      formData.append("files", fileNames);

      const response = await ApplyApi.applyBenefit(Number(benefitId), formData);
      console.log(response.detail);
      if (response.detail === "Benefit request successfully created") {
        openModalSuccess();
      } else {
        alert("Ошибка при отправке данных");
      }
    } catch (error) {
      console.error("Ошибка при отправке данных", error);
    } finally {
      setIsSubmitLoading(false);
    }
  };

  const header = isLoading ? (
    <TextLoader height="36px" backgroundColor="bg-white" />
  ) : (
    <>{benefitData.name}</>
  );

  const footer =
    !isLoading && benefitData.need_confirmation ? (
      <>
        <Button
          text={"Отправить заявку"}
          textColor={"light"}
          buttonType={"primary"}
          onClick={submitRequest}
          disabled={isSubmitLoading}
        />
        <Button
          text={"Отменить"}
          textColor={"dark"}
          buttonType={"secondary"}
          onClick={closeModal}
          disabled={isSubmitLoading}
        />
      </>
    ) : null;

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
    <div className="mb-[16px] flex flex-col gap-6">
      <div className="mt-2 w-full">
        <img className="w-full rounded-[8px]" src={benefitImg || ""} />
      </div>
      {benefitData.need_files && (
        <div>
          <FileUploaderMini
            onFileSelect={handleFileSelect}
            placeholderText={"Прикрепить чеки PNG, JPG"}
            acceptedFileTypes={"image/*"}
            files={files}
            clearFile={handleFileClear}
          />
        </div>
      )}

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
    <div>
      <BigModal
        isOpen={isOpen}
        onClose={closeModal}
        closeModal={closeModal}
        header={header}
        footer={footer}
        children={children}
      />
      <SuccessModal
        isOpen={isOpenSuccess}
        closeModal={closeModalSuccess}
        closeBtn={true}
        closeBigModal={closeModal}
      />
    </div>
  );
};
