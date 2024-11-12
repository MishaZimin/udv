import { useProfile } from "../api/queryes/use-profile";
import { Loader } from "src/shared/ui";

export const ProfileInfo = () => {
  const { profile, error, isLoading } = useProfile();

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <p>error</p>;
  }

  const profileData = [
    { label: "ФИО", value: profile.full_name },
    { label: "Должность", value: profile.position },
    { label: "Опыт в компании", value: profile.employment_date },
    { label: "Место работы", value: profile.place_of_employment },
  ];

  return (
    <div className="mb-[32px] flex w-full flex-col justify-between gap-[16px] rounded-[16px] bg-card p-8 md:flex-row">
      {profileData.map((item, index) => (
        <div key={index} className="flex flex-col gap-[4px]">
          <p className="text-[14px] leading-[20px] opacity-[60%]">
            {item.label}
          </p>
          <p className="text-left text-[16px] font-semibold leading-[20px]">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
};
