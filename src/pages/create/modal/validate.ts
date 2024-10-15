import { useCardStore } from "../stores/useCardStore";
import { useCheckboxStore } from "../stores/useCheckboxStore";
import { useImageStore } from "../stores/useImageStore";

export const validateFields = () => {
  const { imageSrc } = useImageStore.getState();
  const { checkboxes } = useCheckboxStore.getState();
  const { name, subtext, description } = useCardStore.getState();

  const isNameValid = name.trim() !== "";
  const isSubtextValid = subtext.trim() !== "";
  const isDescriptionValid = description.trim() !== "";
  const isImageValid = imageSrc !== null;
  const isCheckboxValid = checkboxes.some((checkbox) => checkbox.checked);

  return (
    isImageValid &&
    isCheckboxValid &&
    isDescriptionValid &&
    isNameValid &&
    isSubtextValid
  );
};
