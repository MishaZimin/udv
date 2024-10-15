import { useCardStore } from "..";
import { useCheckboxStore } from "..";
import { useImageStore } from "..";

export const validateFields = () => {
  const { name, subtext, description } = useCardStore.getState();
  const { imageSrc } = useImageStore.getState();
  const { checkboxes } = useCheckboxStore.getState();

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
