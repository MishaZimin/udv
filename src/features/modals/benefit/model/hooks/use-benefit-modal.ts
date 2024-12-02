/* eslint-disable @typescript-eslint/no-explicit-any */
// hooks/useBenefitModal.ts
import { useState } from "react";
import { ApplyApi } from "../../api/services/apply.api";

export const useBenefitModal = (
  benefitId: string,
  benefitData: any,
  closeModal: () => void,
  openModalSuccess: () => void,
  closeModalSuccess: () => void,
) => {
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [insuranceMember, setInsuranceMember] = useState<string>("");
  const [insuranceType, setInsuranceType] = useState<string>("");

  const isDMS = benefitId === String(102);

  const handleFileSelect = (newFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleFileClear = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

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
          setTimeout(() => {
            closeModalSuccess();
            closeModal();
          }, 3000);
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
          files.length === 0 ? "" : formData,
        );

        if (response.detail === "Benefit request successfully created") {
          openModalSuccess();
          setTimeout(() => {
            closeModalSuccess();
            closeModal();
          }, 3000);
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

  return {
    files,
    isSubmitLoading,
    insuranceMember,
    insuranceType,
    isDMS,
    setInsuranceMember,
    setInsuranceType,
    handleFileSelect,
    handleFileClear,
    submitRequest,
  };
};
