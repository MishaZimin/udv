import { useImageStore } from "src/pages/settings/stores/useImageStore";
import { useCardStore } from "src/pages/settings/stores/useCardStore";
import { Benefit } from "src/entities/benefit";

export const Preview = () => {
  const name = useCardStore((state) => state.name);
  const subtext = useCardStore((state) => state.subtext);
  const { imageSrc } = useImageStore();

  return (
    <div className="flex flex-col gap-[16px]">
      <p className="text-[20px] font-semibold">Превью</p>
      <div className="h-[240px] w-[320px]">
        <Benefit
          title={name}
          subtext={subtext}
          image={imageSrc ? imageSrc : null}
          isNewTag={true}
          link={""}
        />
      </div>
    </div>
  );
};
