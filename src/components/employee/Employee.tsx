import Profile from "src/shared/assets/svgs/Profile.svg";

type Props = {
  name: string;
  jobTitle: string;
  experience: string;
  post: string;
};

export function Employee({ name, jobTitle, experience, post }: Props) {
  return (
    <div className="flex flex-row gap-[32px] border-b px-[8px] py-[16px] text-left">
      <div className="min-w-[22px]rounded-full my-auto mt-0 h-[22px] bg-opacity-[8%] bg-none">
        <img className="w-[22px]" src={Profile} />
      </div>
      <div className="flex w-full flex-row items-start gap-[32px]">
        <p className="w-[28%] text-left">{name}</p>
        <p className="w-[28%] text-left">{jobTitle}</p>
        <p className="w-[14%] text-left">{experience}</p>
        <p className="w-[28%] text-left">{post}</p>
      </div>
    </div>
  );
}
