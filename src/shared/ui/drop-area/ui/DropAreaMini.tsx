import { Button } from "src/shared/ui";
import { useDragAndDrop } from "../model/use-drag-and-drop";

interface Props {
  onFileSelect: (files: File[]) => void;
  placeholderText: string;
  acceptedFileTypes: string;
  errorText?: string;
  files: File[];
  clearFile: (index: number) => void;
}

export const FileUploaderMini = ({
  onFileSelect,
  placeholderText,
  acceptedFileTypes,
  files,
  clearFile,
}: Props) => {
  const { handleDragOver, handleDragLeave, handleDrop, isDragging } =
    useDragAndDrop((file) => {
      onFileSelect([file]);
    });

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      onFileSelect(selectedFiles);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {files.length > 0 && (
        <div className="flex flex-col gap-4">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-between gap-2">
              <p className="truncate text-gray-700">{file.name}</p>
              <Button
                text={"Удалить"}
                textColor={"red"}
                buttonType={"none"}
                postion="right"
                onClick={() => clearFile(index)}
              />
            </div>
          ))}
        </div>
      )}
      <div
        className={`group relative flex h-[40px] w-full flex-col gap-[8px] border ${
          isDragging ? "bg-graphite bg-opacity-[4%]" : ""
        } rounded-[8px] border-dashed`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}>
        <div className="my-auto text-center">
          <label
            className={`cursor-pointer text-graphite ${
              isDragging ? "text-graphite text-opacity-40" : ""
            }`}>
            {placeholderText}
            <input
              type="file"
              accept={acceptedFileTypes}
              multiple
              onChange={handleFileSelect}
              className="hidden"
            />
          </label>
          <p className="absolute bottom-[40px] left-1/2 z-50 hidden w-auto -translate-x-1/2 whitespace-nowrap rounded-[8px] bg-graphite p-2 text-[14px] leading-[20px] text-white group-hover:block">
            Прикрепите фото чека,
            <br /> чтобы отправить заявку
            <span className="absolute left-1/2 top-full -translate-x-1/2 border-[6px] border-transparent border-t-graphite"></span>
          </p>
        </div>
      </div>
    </div>
  );
};
