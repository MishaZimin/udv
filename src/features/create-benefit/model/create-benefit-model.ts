import {
  useCardStore,
  useImageStore,
  useCheckboxStore,
} from "src/shared/stores";
import { usePossibilitiesStore } from "src/shared/stores/use-possibilities-store";
import { saveToLocalStorage } from "src/shared/lib";

export const resetCreateBenefit = () => {
  saveToLocalStorage("edit-benefit-id", null);

  useCardStore.getState().setName("");
  useCardStore.getState().setSubtext("");
  useCardStore.getState().setDescription("");
  useCheckboxStore.getState().setCheckboxesFromResponse([]);
  useImageStore.getState().setImageSrc("");
  useImageStore.getState().setImageName("");
  usePossibilitiesStore.getState().resetAll();
};
