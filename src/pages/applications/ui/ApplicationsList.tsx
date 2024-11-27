import { LoadersList } from "src/shared/ui/loader/LoadersList";
import { ApplicationItem } from "../../../entities/application/ui/ApplicationItem";
import { useState } from "react";
import { LoaderApplication } from "./LoaderApplication";
import { useAllApplications } from "../api/queries/use-all-applications";
import { TApplicationItem } from "../model/applicationItem.type";

export const AllApplicationsList = () => {
  // const { employees, error, isLoading } = useEmployees();
  const { applications, error, isLoading } = useAllApplications();

  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleToggle = (id: string | null) => {
    setActiveItem(id);
  };

  if (error) {
    return <p className="text-red-500">error</p>;
  }
  if (!isLoading) {
    console.log(applications);
  }

  return (
    <div className="w-full min-w-[1024px] overflow-x-auto bg-white pb-[28px]">
      <div className="relative flex flex-row gap-8 px-[8px] py-[16px] text-left">
        <div className="flex w-full flex-row gap-[32px]">
          <p className="my-auto w-[30%] text-left text-opacity-[60%]">
            Бенефит
          </p>
          <p className="my-auto w-[30%] text-left text-opacity-[60%]">
            Сотрудник
          </p>
          <p className="my-auto w-[15%] text-left text-opacity-[60%]">
            Дата подачи
          </p>
          <p className="my-auto w-[25%] text-left text-opacity-[60%]">Статус</p>
        </div>
        <div className="my-auto h-[22px] min-w-[22px] rounded-full bg-white"></div>
      </div>

      {isLoading ? (
        <LoadersList count={10}>
          <LoaderApplication />
        </LoadersList>
      ) : (
        <>
          {applications.map((application: TApplicationItem) => (
            <div
              key={application.request_id}
              onClick={(e) => e.stopPropagation()}>
              <ApplicationItem
                application={application}
                isActive={activeItem === String(application.request_id)}
                onToggle={handleToggle}
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
};
