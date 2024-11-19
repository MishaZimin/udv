import { ImageLoader } from "./ImageLoader";
import { TextLoader } from "./TextLoader";

export const CardLoader = () => {
  return (
    <div className="animation relative mx-auto flex w-full min-w-[320px] flex-col justify-between gap-[16px] rounded-[16px] bg-card px-[16px] py-[16px]">
      <div className="flex flex-col gap-2">
        <TextLoader height="20px" />
        <TextLoader height="16px" />
      </div>
      <ImageLoader height="card" />
    </div>
    // <div className="animation skeleton min-w-[320px] rounded-[16px] bg-card pb-[75%]"></div>
  );
};
