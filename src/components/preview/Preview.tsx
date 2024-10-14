import { Benefit } from "src/components/benefit/Benefit";
import { useImageStore } from "src/pages/createBenefit/store/useImageStore";
import { useBlockStore } from "src/pages/createBenefit/store/useBlockStore";

export function Preview() {
  const name = useBlockStore((state) => state.name);
  const subtext = useBlockStore((state) => state.subtext);
  const { imageSrc } = useImageStore();

  return (
    <div className="flex flex-col gap-[16px]">
      <p className="text-[20px] font-semibold">Превью</p>
      <Benefit
        title={name}
        subtext={subtext}
        image={imageSrc ? imageSrc : null}
        isNewTag={true}
        link={""}
      />
    </div>
  );
}
