import { useCardStore } from "src/shared/stores/use-card-store";
import { useCheckboxStore } from "src/shared/stores/use-checkbox-store";
import { useCreateBenefit } from "../../api/mutations/use-create-benefit";
import { useImageStore } from "src/shared/stores";
import { useUploadBenefitCover } from "../../api/mutations/use-upload-image";
import { urlToFile } from "../utils/url-to-file";

export const useCreateBenefitLogic = () => {
  const {
    mutateAsync: createBenefit,
    error: errorCreate,
    isPending: isPendingCreate,
  } = useCreateBenefit();
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

  const handleSubmit = async () => {
    const checkedIds: number[] = checkboxes
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.id);

    const data = await createBenefit({
      name: name,
      card_name: subtext,
      text: description,
      categories: checkedIds,
    });

    console.log("response create benefit:", data.success.id, "|", imageSrc);

    const benefitId = data.success.id;

    if (!imageSrc) {
      throw new Error("Image source is missing");
    }

    const imageFile = await urlToFile(imageSrc, "cover");

    await uploadCover({ benefitId, imageFile });
  };

  return {
    handleSubmit,
    error: errorCreate || errorUpload,
    isPending: isPendingCreate || isPendingUpload,
  };
};
