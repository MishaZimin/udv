import { ImageLoader } from "src/shared/ui/loader/ImageLoader";
import { TextLoader } from "src/shared/ui/loader/TextLoader";

export const LoaderApplication = () => {
  return (
    <div className="flex flex-row gap-8 px-[8px] py-[16px] text-left">
      <div className="flex w-full flex-row items-start gap-[32px]">
        <div className="w-[30%]">
          <TextLoader />
        </div>
        <div className="w-[30%]">
          <TextLoader />
        </div>
        <div className="w-[15%]">
          <TextLoader />
        </div>
        <div className="w-[25%]">
          <TextLoader />
        </div>
      </div>
      <div className="my-auto h-[22px] min-w-[22px] rounded-full bg-white">
        <ImageLoader />
      </div>
    </div>
  );
};
