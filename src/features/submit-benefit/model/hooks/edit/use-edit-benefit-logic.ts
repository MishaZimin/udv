import {
  useCardStore,
  useCheckboxStore,
  useImageStore,
} from "src/shared/stores";
import { useEditBenefit } from "./use-edit-benefit";
import { getFromLocalStorage } from "src/shared/lib";
import { useUploadBenefitCover } from "../upload/use-upload-image";
import { urlToFile } from "../../utils/url-to-file";

export const useEditBenefitLogic = () => {
  const { mutateAsync, error, isSuccess, isPending } = useEditBenefit();
  const { mutateAsync: uploadCover } = useUploadBenefitCover();

  const errorEdit = error;
  const isSuccessEdit = isSuccess;

  const name = useCardStore((state) => state.name);
  const subtext = useCardStore((state) => state.subtext);
  const description = useCardStore((state) => state.description);
  const imageSrc = useImageStore((state) => state.imageSrc);

  const { checkboxes } = useCheckboxStore();

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

    console.log("updatedData", updatedData);

    await mutateAsync({
      id: getFromLocalStorage("edit-benefit-id"),
      data: updatedData,
    });

    const benefitId = getFromLocalStorage("edit-benefit-id");
    const imageFile = await urlToFile(imageSrc, "cover");

    await uploadCover({ benefitId, imageFile });
  };

  return { handleEdit, errorEdit, isSuccessEdit, isPending };
};
