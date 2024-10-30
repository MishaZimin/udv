import { useState } from "react";
import { useImageStore } from "src/pages/settings/stores/useImageStore";

export const useImageUpload = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { setImageSrc: setStoreImageSrc } = useImageStore();

  const handleImageUpload = (file: File | null) => {
    if (!file) return;

    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      setImageSrc(url);
      setStoreImageSrc(url);
    };

    img.onerror = () => {
      setError("Невалидное изображение");
    };

    img.src = url;
  };

  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    handleImageUpload(file ? file : null);
  };

  return {
    imageSrc,
    error,
    handleFileInput,
  };
};
