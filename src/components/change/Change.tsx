import { useNavigate } from "react-router-dom";

import Pencil from "src/shared/assets/svgs/Pencil.svg";
import { useCardStore, useImageStore } from "src/pages/create";

type Props = {
  title: string;
  subtext: string;
  image?: string;
  isNewTag: boolean;
  link: string;
};

export function ChangeBtn({ title, subtext, image }: Props) {
  const navigation = useNavigate();

  const setName = useCardStore((state) => state.setName);
  const setSubtext = useCardStore((state) => state.setSubtext);
  const setImageSrc = useImageStore((state) => state.setImageSrc);

  return (
    <button
      onClick={() => {
        setName(title);
        setSubtext(subtext);
        setImageSrc(image ? image : "");
        navigation("/create-benefit/details");
      }}
      className="animation cursor-pointer rounded-[8px] p-[4px] hover:bg-graphite hover:bg-opacity-[8%]"
    >
      <img src={Pencil} />
    </button>
  );
}
