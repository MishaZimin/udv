import {
  useCardStore,
  useCheckboxStore,
  useImageStore,
} from "src//pages/settings";
import { useEditBenefit } from "./useEditBenefit";
import { getFromLocalStorage } from "src/shared/lib/local-storage";
import { useUploadBenefitCover } from "../upload/useUploadBenefitCover";
import { urlToFile } from "../../utils/UrlToFile";

export const useEditBenefitLogic = () => {
  const { mutate, error, isSuccess } = useEditBenefit();
  const { mutate: uploadCover } = useUploadBenefitCover();

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

    mutate({ id: getFromLocalStorage("edit-benefit-id"), data: updatedData });

    const benefitId = getFromLocalStorage("edit-benefit-id");
    const imageFile = await urlToFile(imageSrc, "cover");

    console.log("imageFile: ", imageFile);
    uploadCover({ benefitId, imageFile });
  };

  return { handleEdit, errorEdit, isSuccessEdit };
};
