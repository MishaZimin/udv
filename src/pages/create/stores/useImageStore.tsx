import { create } from "zustand";

type Props = {
  imageSrc: string | null;
  setImageSrc: (src: string | null) => void;
};

export const useImageStore = create<Props>((set) => ({
  imageSrc: null,
  setImageSrc: (src: string | null) => set({ imageSrc: src }),
}));
