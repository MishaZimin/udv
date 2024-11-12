import { create } from "zustand";
import { getFromLocalStorage, saveToLocalStorage } from "src/shared/lib";

type Props = {
  imageSrc: string;
  setImageSrc: (src: string) => void;

  imageName: string;
  setImageName: (src: string) => void;
};

export const useImageStore = create<Props>((set) => ({
  imageSrc: getFromLocalStorage("imageSrc"),
  setImageSrc: (imageSrc: string) => {
    set({ imageSrc });
    saveToLocalStorage("imageSrc", imageSrc);
  },

  imageName: getFromLocalStorage("imageName"),
  setImageName: (imageName: string) => {
    set({ imageName });
    saveToLocalStorage("imageName", imageName);
  },
}));
