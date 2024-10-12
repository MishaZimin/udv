export const handleImageUpload = (
  file: File | null,
  onSuccess: (src: string) => void,
  onError: (error: string) => void,
) => {
  if (!file) return;

  const img = new Image();
  const url = URL.createObjectURL(file);

  img.onload = () => {
    onSuccess(url);
  };

  img.onerror = () => {
    onError("Невалидное изображение");
  };

  img.src = url;
};

export const handleFileInput = (
  event: React.ChangeEvent<HTMLInputElement>,
  setImageSrc: (src: string | null) => void,
  setError: (error: string | null) => void,
) => {
  const file = event.target.files?.[0];
  handleImageUpload(file ? file : null, setImageSrc, setError);
};

export const handleDragOver = (
  event: React.DragEvent<HTMLDivElement>,
  setIsDragging: (isDragging: boolean) => void,
) => {
  event.preventDefault();
  setIsDragging(true);
};

export const handleDragLeave = (
  setIsDragging: (isDragging: boolean) => void,
) => {
  setIsDragging(false);
};

export const handleDrop = (
  event: React.DragEvent<HTMLDivElement>,
  setIsDragging: (isDragging: boolean) => void,
  setImageSrc: (src: string | null) => void,
  setError: (error: string | null) => void,
) => {
  event.preventDefault();
  setIsDragging(false);

  const file = event.dataTransfer.files?.[0];
  handleImageUpload(file, setImageSrc, setError);
};
