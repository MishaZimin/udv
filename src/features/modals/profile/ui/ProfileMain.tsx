import { Button } from "src/shared/ui";
import { LoadersList } from "src/shared/ui/loader/LoadersList";
import { TextLoader } from "src/shared/ui/loader/TextLoader";
import { ApplicationsList } from "./ApplicationsList";
import { useProfileStore } from "../stores/use-profile-modal-store";

type Props = {
  profile: {
    email: string;
    position: string;
    employment_date: string;
    place_of_employment: string;
  };
  isLoading: boolean;
};

export const ProfileMain = ({ profile, isLoading }: Props) => {
  const { activeTab, setActiveTab } = useProfileStore();

  const profileData = [
    { label: "Почта", value: profile.email },
    { label: "Должность", value: profile.position },
    { label: "Стаж в компании", value: profile.employment_date },
    { label: "Место работы", value: profile.place_of_employment },
  ];

  if (isLoading) {
    return (
      <LoadersList count={4}>
        <div className="flex w-4/12 flex-col gap-[4px]">
          <TextLoader height="20px" backgroundColor="bg-white" />
          <TextLoader height="22px" backgroundColor="bg-white" />
        </div>
      </LoadersList>
    );
  }

  return (
    <div className="mb-[32px] flex w-full flex-col justify-between gap-[16px] rounded-[16px] bg-card pt-2">
      <div className="flex w-full flex-row gap-4">
        <div className="flex w-1/2 flex-col">
          <Button
            text={"Информация"}
            textColor={"dark"}
            buttonType={"secondary"}
            onClick={() => setActiveTab("info")}
          />
        </div>
        <div className="flex w-1/2 flex-col">
          <Button
            text={"Мои заявки"}
            textColor={"dark"}
            buttonType={"secondary"}
            onClick={() => setActiveTab("requests")}
          />
        </div>
      </div>

      {activeTab === "info" && (
        <div className="flex flex-col gap-[16px]">
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
        </div>
      )}

      {activeTab === "requests" && (
        <div>
          <ApplicationsList />
        </div>
      )}
    </div>
  );
};
