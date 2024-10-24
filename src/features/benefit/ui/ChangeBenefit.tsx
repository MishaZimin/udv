import { Link } from "react-router-dom";

import Pencil from "src/shared/assets/svgs/Pencil.svg";
import { useCardStore, useImageStore } from "src/pages/settings";

type Props = {
  title: string;
  subtext: string;
  description?: string;
  image?: string;
  isNewTag: boolean;
  link: string;
};

export const ChangeBenefit = ({
  title,
  subtext,
  description,
  image,
}: Props) => {
  const setName = useCardStore((state) => state.setName);
  const setSubtext = useCardStore((state) => state.setSubtext);
  const setImageSrc = useImageStore((state) => state.setImageSrc);
  const setDescription = useCardStore((state) => state.setDescription);

  return (
    <Link
      to={"/create-benefit/details"}
      onClick={() => {
        setName(title);
        setSubtext(subtext);
        setDescription(description ? description : "");
        setImageSrc(image ? image : "");
      }}
      className="animation cursor-pointer rounded-[8px] p-[4px] hover:bg-graphite hover:bg-opacity-[8%]"
    >
      <img src={Pencil} />
    </Link>
  );
};
