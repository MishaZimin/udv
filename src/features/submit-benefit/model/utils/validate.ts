import {
  useCardStore,
  useCheckboxStore,
  useImageStore,
} from "src/shared/stores";

export const validateFields = () => {
  const { name, subtext, description } = useCardStore.getState();
  const { imageSrc } = useImageStore.getState();
  const { checkboxes } = useCheckboxStore.getState();

  const isNameValid = name.trim() !== "";
  const isSubtextValid = subtext.trim() !== "";
  const isDescriptionValid = description.trim() !== "";
  const isImageValid = imageSrc !== null && imageSrc.trim() !== "";
  const isCheckboxValid = checkboxes.some((checkbox) => checkbox.checked);

  return (
    isImageValid &&
    isCheckboxValid &&
    isDescriptionValid &&
    isNameValid &&
    isSubtextValid
  );
};
