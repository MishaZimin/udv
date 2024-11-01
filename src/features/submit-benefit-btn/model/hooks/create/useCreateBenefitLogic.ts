import { useCardStore } from "src//pages/settings/stores/useCardStore";
import { useCheckboxStore } from "src/pages/settings/stores/useCheckboxStore";
import { useCreateBenefit } from "./useCreateBenefit";
import { useImageStore } from "src/pages/settings";
import { useUploadBenefitCover } from "../upload/useUploadBenefitCover";
import { urlToFile } from "../../utils/UrlToFile";

export const useCreateBenefitLogic = () => {
  const { mutateAsync: createBenefit, error } = useCreateBenefit();
  const { mutateAsync: uploadCover } = useUploadBenefitCover();

  const errorCreate = error;

  const name = useCardStore((state) => state.name);
  const subtext = useCardStore((state) => state.subtext);
  const description = useCardStore((state) => state.description);
  const imageSrc = useImageStore((state) => state.imageSrc);
  const { checkboxes } = useCheckboxStore();

  const handleSubmit = async () => {
    const checkedIds: number[] = checkboxes
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.id);

    try {
      const data = await createBenefit({
        name: name,
        card_name: subtext,
        text: description,
        categories: checkedIds,
      });

      console.log("response create benefit:", data.success.id, "|", imageSrc);

      const benefitId = data.success.id;
      const imageFile = await urlToFile(imageSrc, "cover");
      console.log("imageSrc: ", imageSrc);
      console.log("imageFile: ", imageFile);

      await uploadCover({ benefitId, imageFile });

      console.log("benefitId: ", benefitId);
      console.log("imageFile: ", imageFile);
    } catch (error) {
      console.error("error create benefit:", error);
    }
  };

  return { handleSubmit, errorCreate };
};
