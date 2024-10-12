import { create } from "zustand";

interface ImageState {
  imageSrc: string | null;
  setImageSrc: (src: string | null) => void;
}

export const useImageStore = create<ImageState>((set) => ({
  imageSrc: null,
  setImageSrc: (src: string | null) => set({ imageSrc: src }),
}));
