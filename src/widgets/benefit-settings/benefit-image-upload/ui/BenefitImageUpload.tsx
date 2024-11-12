import { DropArea } from "src/features/drop-area";

export const BenefitImageUpload = () => {
  return (
    <div className="flex w-full flex-col gap-[16px]">
      <p className="w-full">
        Загружайте изображение бенефита
        <br />
        на фоне цвета #EEF0F2
      </p>
      <DropArea />
    </div>
  );
};
