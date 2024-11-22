import { useState } from "react";
import { useImageStore } from "src/shared/stores";

export const useDragAndDrop = (onFileDrop: (file: File) => void) => {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const { setImageName: setStoreImageName } = useImageStore();

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);

    const file = event.dataTransfer.files?.[0] || null;
    setStoreImageName(file.name);
    onFileDrop(file);
    setFileName(file.name);
  };

  return {
    isDragging,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    fileName,
  };
};
