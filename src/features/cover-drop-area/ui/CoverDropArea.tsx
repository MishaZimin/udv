import { useImageStore } from "src/pages/settings/stores/useImageStore";
import { useDragAndDrop } from "../hooks/useDragAndDrop";
import { useImageUpload } from "../hooks/useImageUpload";

export const CoverDropArea = () => {
  const { setImageSrc } = useImageStore();
  const { error, handleFileInput } = useImageUpload();
  const { isDragging, handleDragOver, handleDragLeave, handleDrop } =
    useDragAndDrop((file) => {
      if (file) {
        setImageSrc(URL.createObjectURL(file));
      }
    });

  return (
    <div className="flex w-full flex-col gap-[16px]">
      <p className="w-full">
        Загружайте изображение бенефита
        <br />
        на фоне цвета #EEF0F2
      </p>
      <div
        className={`flex h-[240px] w-full flex-col gap-[8px] border ${
          isDragging ? "shadow-sm" : ""
        } rounded-[8px] border-dashed`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="my-auto">
          <p className="font-semibold text-center">
            Загрузите картинку 1280 x 720
          </p>
          <p className="text-center">
            Перетащите файл или{" "}
            <label className="cursor-pointer text-mint">
              нажмите загрузить
              <input
                type="file"
                accept="image/*"
                onChange={handleFileInput}
                className="hidden"
              />
            </label>
          </p>
          {error && <p className="mt-2 text-center text-red-600">{error}</p>}
        </div>
      </div>
    </div>
  );
};
