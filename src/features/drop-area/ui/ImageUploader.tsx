import { useImageStore } from "src/shared/stores/use-image-store";
import { FileUploader } from "src/shared/ui/drop-area/ui/DropArea";

export const ImageUploader = () => {
  const { imageName, setImageSrc, setImageName } = useImageStore();

  const handleFileSelect = (file: File) => {
    setImageName(file.name);
    setImageSrc(URL.createObjectURL(file));
  };

  const clearImage = () => {
    setImageName("");
    setImageSrc("");
  };

  return (
    <FileUploader
      onFileSelect={handleFileSelect}
      placeholderText="Загрузите картинку 1280 x 720"
      acceptedFileTypes="image/*"
      fileName={imageName}
      clearFile={clearImage}
    />
  );
};
