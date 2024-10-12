export function Employee({
  name,
  jobTitle,
  experience,
}: {
  name: string;
  jobTitle: string;
  experience: string;
}) {
  return (
    <div className="flex flex-row gap-[32px] border-t py-[16px] text-left">
      <div className="my-auto h-[48px] min-w-[48px] rounded-full bg-graphite bg-opacity-[8%]"></div>
      <div className="flex w-full flex-row items-center gap-[32px]">
        <p className="w-[35%] text-left">{name}</p>
        <p className="w-[35%] text-left">{jobTitle}</p>
        <p className="w-[30%] text-left">{experience}</p>
      </div>
    </div>
  );
}
