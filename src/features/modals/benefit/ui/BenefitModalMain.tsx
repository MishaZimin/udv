/* eslint-disable @typescript-eslint/no-explicit-any */
// components/Content.tsx
import Markdown from "react-markdown";
import { FileUploaderMini } from "src/shared/ui/drop-area/ui/DropAreaMini";
import { DropDown } from "src/shared/ui/drop-down/DropDown";

export const Content = ({
  isLoading,
  benefitData,
  isDMS,
  benefitImg,
  files,
  handleFileSelect,
  handleFileClear,
  insuranceMember,
  setInsuranceMember,
  insuranceType,
  setInsuranceType,
}: any) => {
  return isLoading ? (
    <div className="mt-2 flex flex-col gap-4">...</div>
  ) : (
    <div className="mb-[16px] flex flex-col gap-6">
      <img className="w-full rounded-[8px]" src={benefitImg || ""} />
      {isDMS && (
        <div className="flex flex-col gap-6">
          <DropDown
            inputType={"default"}
            options={["Для себя", "Для ребёнка", "Для родственника"]}
            onChange={setInsuranceMember}
            value={insuranceMember}
            label="Для кого"
          />
          <DropDown
            inputType={"default"}
            options={["Поликлиника база", "..."]}
            onChange={setInsuranceType}
            value={insuranceType}
            label="Тип страхования"
          />
        </div>
      )}
      {(benefitData.need_files || isDMS) && (
        <FileUploaderMini
          onFileSelect={handleFileSelect}
          files={files}
          clearFile={handleFileClear}
          isDMS={isDMS}
          placeholderText={""}
          acceptedFileTypes={""}
        />
      )}
      <div className="prose">
        <Markdown>{benefitData.text}</Markdown>
      </div>
    </div>
  );
};
