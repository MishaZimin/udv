import { create } from "zustand";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "../../../shared/helpers/local-storage";

type Props = {
  imageSrc: string;
  setImageSrc: (src: string) => void;
};

export const useImageStore = create<Props>((set) => ({
  imageSrc: getFromLocalStorage("imageSrc"),
  setImageSrc: (imageSrc: string) => {
    set({ imageSrc });
    saveToLocalStorage("imageSrc", imageSrc);
  },
}));
