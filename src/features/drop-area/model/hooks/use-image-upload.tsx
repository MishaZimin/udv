import { useState } from "react";
import { useImageStore } from "src/shared/stores/use-image-store";

export const useImageUpload = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { setImageSrc: setStoreImageSrc } = useImageStore();
  const { setImageName: setStoreImageName } = useImageStore();

  const handleImageUpload = (file: File | null) => {
    if (!file) return;

    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      setImageSrc(url);
      setFileName(file.name);
      setStoreImageName(file.name);
      console.log("file.name", file.name);
      setStoreImageSrc(url);
    };

    img.onerror = () => {
      setError("Невалидное изображение");
    };

    img.src = url;
  };

  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    handleImageUpload(file ?? null);
  };

  const clearImage = () => {
    setImageSrc(null);
    setFileName(null);
    setStoreImageSrc("");
  };

  return {
    imageSrc,
    fileName,
    error,
    handleFileInput,
    clearImage,
  };
};
