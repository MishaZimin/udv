import { useState } from "react";
import { useImageStore } from "src/pages/createBenefit/store/useImageStore";
import {
  handleDragLeave,
  handleDragOver,
  handleDrop,
  handleFileInput,
} from "src/pages/createBenefit/modal/handle";

export function CoverDropArea() {
  const { setImageSrc } = useImageStore();
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="flex w-full flex-col gap-[16px]">
      <p className="text-[20px] font-semibold">Обложка</p>
      <p className="w-full">
        Загружайте изображение бенефита
        <br />
        на фоне цвета #EEF0F2
      </p>
      <div
        className={`flex h-[240px] w-full flex-col gap-[8px] border ${
          isDragging ? "shadow-md" : ""
        } rounded-[8px] border-dashed`}
        onDragOver={(e) => handleDragOver(e, setIsDragging)}
        onDragLeave={() => handleDragLeave(setIsDragging)}
        onDrop={(e) => handleDrop(e, setIsDragging, setImageSrc, setError)}
      >
        <div className="my-auto">
          <p className="text-center font-semibold">
            Загрузите картинку 1280 x 720
          </p>
          <p className="text-center">
            Перетащите файл или{" "}
            <label className="cursor-pointer text-mint">
              нажмите загрузить
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileInput(e, setImageSrc, setError)}
                className="hidden"
              />
            </label>
          </p>
          {error && <p className="mt-2 text-center text-red-600">{error}</p>}
        </div>
      </div>
    </div>
  );
}
