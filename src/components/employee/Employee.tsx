import Profile from "src/shared/image/Profile.svg";

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
        <div className="flex flex-row gap-[32px]  text-left border-t py-[16px]">
            <div className="w-[54px] h-[48px] rounded-full bg-card my-auto">
                <img
                    src={Profile}
                    alt="avatar"
                    className="w-full p-[8px] my-auto"
                />
            </div>
            <div className="w-full flex flex-row  gap-[32px]">
                <p className="my-auto text-left w-[35%]">{name}</p>
                <p className="my-auto  text-left w-[35%]">{jobTitle}</p>

                <p className="my-auto text-left w-[30%]">{experience}</p>
            </div>
        </div>
    );
}
