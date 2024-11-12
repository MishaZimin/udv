import Default from "src/shared/assets/svgs/Default.svg";

type Props = {
  cover_url: string;
};

export const BenefitImage = ({ cover_url }: Props) => {
  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[8px] bg-graphite bg-opacity-[0%] pb-[51.4%]">
      <img
        className="absolute left-0 top-0 h-full w-full object-contain"
        src={cover_url ? cover_url : Default}
        alt="benefit img"
      />
    </div>
  );
};
