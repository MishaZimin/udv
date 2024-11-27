import { SurveyBanner } from "src/widgets/survey/ui/SurveyBanner";
import { BackButton } from "src/shared/ui/button/BackButton";
import { ProfileInfo } from "src/widgets/profile-info/ui/ProfileInfo";
// import { Feedback } from "src/features/feedback/ui/Feedback";

export const ProfilePage = () => {
  return (
    <>
      <div className="mx-auto h-full w-full pt-[32px] lg:w-[1024px]">
        <div className="mx-4 flex flex-col rounded-[16px] bg-white p-[0px] sm:mx-10 lg:mx-0">
          <div className="flex flex-row gap-[24px] pb-[32px]">
            <div className="flex flex-row gap-[8px]">
              <BackButton link="back" />
              <p className="text-[28px] font-semibold leading-[36px]">
                Профиль
              </p>
            </div>
          </div>
          <SurveyBanner />
          <ProfileInfo />
        </div>
      </div>
      {/* <Feedback /> */}
    </>
  );
};
