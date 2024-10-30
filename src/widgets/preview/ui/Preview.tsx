import { useImageStore } from "src/pages/settings/stores/useImageStore";
import { useCardStore } from "src/pages/settings/stores/useCardStore";
import { Benefit } from "src/entities/benefit";
import { IBenefitCard } from "src/widgets/benefits";

export const Preview = () => {
  const name = useCardStore((state) => state.name);
  const subtext = useCardStore((state) => state.subtext);
  const imageSrc = useImageStore((state) => state.imageSrc);

  const benefit: IBenefitCard = {
    id: 0,
    name: name,
    card_name: subtext,
    cover_url: imageSrc,
  };

  console.log(imageSrc);

  return (
    <div className="flex flex-col gap-[16px]">
      <p className="text-[20px] font-semibold">Превью</p>
      <div className="h-[240px] w-[320px]">
        <Benefit benefit={benefit} isNewTag={true} link={""} />
      </div>
    </div>
  );
};
