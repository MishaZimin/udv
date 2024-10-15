import { Benefit } from "src/components/benefit/Benefit";
import { useImageStore } from "src/pages/create/stores/useImageStore";
import { useCardStore } from "src/pages/create/stores/useCardStore";

export function Preview() {
  const name = useCardStore((state) => state.name);
  const subtext = useCardStore((state) => state.subtext);
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
