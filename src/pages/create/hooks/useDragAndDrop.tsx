import { useState } from "react";

export const useDragAndDrop = (onFileDrop: (file: File | null) => void) => {
  const [isDragging, setIsDragging] = useState(false);

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

    const file = event.dataTransfer.files?.[0];
    onFileDrop(file ? file : null);
  };

  return {
    isDragging,
    handleDragOver,
    handleDragLeave,
    handleDrop,
  };
};
