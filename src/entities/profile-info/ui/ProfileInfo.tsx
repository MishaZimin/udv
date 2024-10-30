import { useProfile } from "../model/hooks/useProfile";
import Loader from "src/shared/ui/loader/Loader";

export const ProfileInfo = () => {
  const { profile, error, isLoading } = useProfile();
  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>error</p>;
  }

  console.log("benefits: ", profile);

  return (
    <>
      <div className="mb-[32px] flex w-full flex-col justify-between gap-[16px] rounded-[16px] bg-card p-8 md:flex-row">
        <div className="flex flex-col gap-[4px]">
          <p className="">ФИО</p>
          <p className="text-left text-[16px] font-semibold leading-[20px]">
            {profile.full_name}
          </p>
        </div>
        <div className="flex flex-col gap-[4px]">
          <p className="">Должность</p>
          <p className="text-left text-[16px] font-semibold leading-[20px]">
            {profile.position}
          </p>
        </div>
        <div className="flex flex-col gap-[4px]">
          <p className="">Опыт в компании</p>
          <p className="text-left text-[16px] font-semibold leading-[20px]">
            {profile.employment_date}
          </p>
        </div>
        <div className="flex flex-col gap-[4px]">
          <p className="">Место работы</p>
          <p className="text-left text-[16px] font-semibold leading-[20px]">
            {profile.place_of_employment}
            {/* ООО «UDV Group», UDV ITM */}
          </p>
        </div>
      </div>
    </>
  );
};
