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
        <div className="flex flex-row gap-[32px] text-left border-t py-[16px]">
            <div className="min-w-[48px] h-[48px] rounded-full bg-card my-auto"></div>
            <div className="w-full flex flex-row  gap-[32px] items-center">
                <p className="text-left w-[35%]">{name}</p>
                <p className=" text-left w-[35%]">{jobTitle}</p>
                <p className=" text-left w-[30%]">{experience}</p>
            </div>
        </div>
    );
}
