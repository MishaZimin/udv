import {
  useCardStore,
  useCheckboxStore,
  useImageStore,
} from "src/shared/stores";
import { useEditBenefit } from "../../api/mutations/use-edit-benefit";
import { getFromLocalStorage } from "src/shared/lib";
import { useUploadBenefitCover } from "../../api/mutations/use-upload-image";
import { urlToFile } from "../utils/url-to-file";
import { useState } from "react";

export const useEditBenefitLogic = () => {
  const {
    mutateAsync: EditBenefit,
    error: errorEdit,
    isPending: isPendingEdit,
  } = useEditBenefit();
  const {
    mutateAsync: uploadCover,
    error: errorUpload,
    isPending: isPendingUpload,
  } = useUploadBenefitCover();

  const name = useCardStore((state) => state.name);
  const subtext = useCardStore((state) => state.subtext);
  const description = useCardStore((state) => state.description);
  const imageSrc = useImageStore((state) => state.imageSrc);
  const { checkboxes } = useCheckboxStore();

  const [isFileProcessing, setIsFileProcessing] = useState(false);

  const handleEdit = async () => {
    const checkedIds: number[] = checkboxes
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.id);

    const updatedData = {
      name: name,
      card_name: subtext,
      text: description,
      categories: checkedIds,
    };

    console.log("updatedData:", updatedData);

    await EditBenefit({
      id: getFromLocalStorage("edit-benefit-id"),
      data: updatedData,
    });

    const benefitId = getFromLocalStorage("edit-benefit-id");
    setIsFileProcessing(true);
    console.log("imageSrc.slice(0, 3)", imageSrc.slice(0, 5));
    if (!imageSrc) {
      throw new Error("Image source is missing");
    }

    if (imageSrc.slice(0, 5) === "blob:") {
      const imageFile = await urlToFile(imageSrc, "cover");
      await uploadCover({ benefitId, imageFile });
    }
  };

  return {
    handleEdit,
    error: errorUpload || errorEdit,
    isPending: isPendingUpload || isPendingEdit || isFileProcessing,
  };
};
