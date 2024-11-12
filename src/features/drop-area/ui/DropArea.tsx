import { useImageStore } from "src/shared/stores/use-image-store";
import { useDragAndDrop, useImageUpload } from "..";
import Delete from "src/shared/assets/svgs/Delete.svg";

export const DropArea = () => {
  const { setImageSrc } = useImageStore();
  const { handleFileInput, error } = useImageUpload();
  const { handleDragOver, handleDragLeave, handleDrop, isDragging } =
    useDragAndDrop((file) => {
      if (file) {
        setImageSrc(URL.createObjectURL(file));
      }
    });

  const imageName = useImageStore((state) => state.imageName);
  const { setImageName: setStoreImageName } = useImageStore();
  const { setImageSrc: setStoreImageSrc } = useImageStore();

  const clearImage = () => {
    setStoreImageName("");
    setStoreImageSrc("");
  };

  return (
    <>
      <div
        className={`flex h-[240px] w-full flex-col gap-[8px] border ${
          isDragging || imageName ? "bg-graphite bg-opacity-[4%]" : ""
        } rounded-[8px] border-dashed`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}>
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
                onChange={handleFileInput}
                className="hidden"
              />
            </label>
          </p>
          {error && <p className="mt-2 text-center text-red-600">{error}</p>}
        </div>
      </div>

      {imageName && (
        <div className="mt-2 flex flex-row items-center gap-1">
          <p className="text-gray-700">{imageName}</p>
          <button onClick={clearImage} className="text-red-600">
            <img src={Delete} alt="Delete" />
          </button>
        </div>
      )}
    </>
  );
};
