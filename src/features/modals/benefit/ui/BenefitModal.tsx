import { Button, Input, useModal } from "src/shared/ui";
import { useBenefit } from "src/pages/benefit";
import Markdown from "react-markdown";
import { BigModal } from "src/shared/ui/modal/ui/BigModal";
import { useState } from "react";
import { TextLoader } from "src/shared/ui/loader/TextLoader";
import { LoadersList } from "src/shared/ui/loader/LoadersList";
import { ImageLoader } from "src/shared/ui/loader/ImageLoader";
import { FileUploaderMini } from "src/shared/ui/drop-area/ui/DropAreaMini";
import { SuccessModal } from "./SuccessModal";
import { ApplyApi } from "../api/services/apply.api";

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

  const [insuranceMember, setInsuranceMember] = useState<string>("");
  const [insuranceType, setInsuranceType] = useState<string>("");

  const isDMS = benefitId === String(102);

  const handleFileSelect = (newFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleFileClear = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  if (error) {
    return <p>error {error.message}</p>;
  }

  const submitRequest = async () => {
    if (files.length === 0 && (isDMS || benefitData.need_files)) {
      alert("Необходимо прикрепить чеки.");
      return;
    }

    setIsSubmitLoading(true);

    try {
      if (isDMS) {
        if (!insuranceMember || !insuranceType) {
          alert("Заполните все поля");
          setIsSubmitLoading(false);
          return;
        }

        const response = await ApplyApi.submitInsuranceRequest(
          benefitData.id,
          insuranceMember,
          insuranceType,
          files,
        );

        if (response.detail === "Benefit request successfully created") {
          openModalSuccess();
        } else {
          alert("Ошибка при отправке данных");
        }
      } else {
        const formData = new FormData();
        files.forEach((file) => {
          formData.append("files", file);
        });

        const response = await ApplyApi.applyBenefit(
          Number(benefitId),
          formData,
        );

        if (response.detail === "Benefit request successfully created") {
          openModalSuccess();
        } else {
          alert("Ошибка при отправке данных");
        }
      }
    } catch (error) {
      console.error("Ошибка при отправке данных", error);
      alert("Произошла ошибка при отправке данных.");
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

      {(benefitData.need_files || isDMS) && (
        <div>
          <FileUploaderMini
            onFileSelect={handleFileSelect}
            placeholderText={
              !isDMS ? "Прикрепить чеки PNG, JPG" : "Прикрепить фото паспорта"
            }
            acceptedFileTypes={"image/*"}
            files={files}
            clearFile={handleFileClear}
          />
        </div>
      )}

      {isDMS && (
        <div className="flex flex-col gap-2">
          <Input
            inputType={"default"}
            onChange={setInsuranceMember}
            value={insuranceMember}
            label="Кому"
          />
          <Input
            inputType={"default"}
            onChange={setInsuranceType}
            value={insuranceType}
            label="Тип страховки"
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
