import { useBlockStore } from "../store/useBlockStore";
import { useCheckboxStore } from "../store/useCheckboxStore";
import { useImageStore } from "../store/useImageStore";

export const validateFields = () => {
  const { imageSrc } = useImageStore.getState();
  const { checkboxes } = useCheckboxStore.getState();
  const { name, blocks } = useBlockStore.getState();

  const isNameValid = name.trim() !== "";

  const isImageValid = imageSrc !== null;

  const isCheckboxValid = checkboxes.some((checkbox) => checkbox.checked);

  const isBlockValid = blocks.every(
    (block) => block.title.trim() !== "" && block.description.trim() !== "",
  );

  return isImageValid && isCheckboxValid && isBlockValid && isNameValid;
};
