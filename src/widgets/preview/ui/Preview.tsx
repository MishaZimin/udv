import { useEffect } from "react";
import { useImageStore, useCardStore } from "src/shared/stores";
import { Benefit, IBenefitCard } from "src/entities/benefit";
import Default from "src/shared/assets/svgs/Default.svg";

export const Preview = () => {
  const { name, subtext } = useCardStore((state) => ({
    name: state.name,
    subtext: state.subtext,
  }));
  const imageSrc = useImageStore((state) => state.imageSrc);

  useEffect(() => {
    console.log(imageSrc);
  }, [imageSrc]);

  const benefit: IBenefitCard = {
    id: 0,
    name,
    card_name: subtext,
    cover_url: imageSrc || Default,
  };

  return (
    <div className="z-10 flex flex-col gap-[16px]">
      <p className="text-[20px] font-semibold">Превью</p>
      <div className="h-[240px] w-[320px]">
        <Benefit benefit={benefit} isNewTag={false} preview={true} />
      </div>
    </div>
  );
};
