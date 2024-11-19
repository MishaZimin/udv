import { LoadersList } from "src/shared/ui/loader/LoadersList";
import { TextLoader } from "src/shared/ui/loader/TextLoader";

/* eslint-disable @typescript-eslint/no-explicit-any */
type Props = {
  profile: any;
  isLoading: boolean;
};

export const ProfileInfo = ({ profile, isLoading }: Props) => {
  const profileData = [
    { label: "Почта", value: profile.email },
    { label: "Должность", value: profile.position },
    { label: "Стаж в компании", value: profile.employment_date },
    { label: "Место работы", value: profile.place_of_employment },
  ];

  return (
    <div className="mb-[32px] flex w-full flex-col justify-between gap-[16px] rounded-[16px] bg-card pt-2">
      {isLoading ? (
        <LoadersList count={4}>
          <div className="flex w-4/12 flex-col gap-[4px]">
            <TextLoader height="20px" backgroundColor="bg-white" />
            <TextLoader height="22px" backgroundColor="bg-white" />
          </div>
        </LoadersList>
      ) : (
        <>
          {/* <LoadersList count={4}>
            <div className="flex w-4/12 flex-col gap-[4px]">
              <TextLoader height="20px" backgroundColor="bg-white" />
              <TextLoader height="22px" backgroundColor="bg-white" />
            </div>
          </LoadersList> */}
          {profileData.map((item, index) => (
            <div key={index} className="flex flex-col gap-[4px]">
              <p className="text-[14px] leading-[20px] opacity-[60%]">
                {item.label}
              </p>
              <p className="text-left text-[16px] leading-[22px]">
                {item.value}
              </p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};
