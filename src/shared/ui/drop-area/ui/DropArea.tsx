import { ButtonIcon } from "src/shared/ui";
import { useDragAndDrop } from "../model/use-drag-and-drop";

interface FileUploaderProps {
  onFileSelect: (file: File) => void;
  placeholderText: string;
  acceptedFileTypes: string;
  errorText?: string;
  fileName: string;
  clearFile: () => void;
}

export const FileUploader = ({
  onFileSelect,
  placeholderText,
  acceptedFileTypes,
  fileName,
  clearFile,
}: FileUploaderProps) => {
  const { handleDragOver, handleDragLeave, handleDrop, isDragging } =
    useDragAndDrop(onFileSelect);

  return (
    <>
      <div
        className={`flex h-[240px] w-full flex-col gap-[8px] border ${
          isDragging || fileName ? "bg-graphite bg-opacity-[4%]" : ""
        } rounded-[8px] border-dashed`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}>
        <div className="my-auto">
          <p
            className={`text-center font-semibold ${isDragging || fileName ? "text-opacity-40" : ""}`}>
            {placeholderText}
          </p>
          <p
            className={`text-center ${isDragging || fileName ? "text-graphite text-opacity-40" : ""}`}>
            Перетащите файл или{" "}
            <label
              className={`cursor-pointer ${
                isDragging || fileName
                  ? "text-graphite text-opacity-40"
                  : "text-mint"
              }`}>
              нажмите загрузить
              <input
                type="file"
                accept={acceptedFileTypes}
                onChange={(e) =>
                  e.target.files && onFileSelect(e.target.files[0])
                }
                className="hidden"
              />
            </label>
          </p>
          {/* {(error || errorText) && <p className="mt-2 text-center text-red-600">{error || errorText}</p>} */}
        </div>
      </div>

      {fileName && (
        <div className="flex flex-row items-center gap-1">
          <p className="text-gray-700">{fileName}</p>
          <ButtonIcon iconName="Delete" onClick={clearFile} />
        </div>
      )}
    </>
  );
};
