/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoadersList } from "src/shared/ui/loader/LoadersList";
import { ApplicationItem } from "./ApplicationItem";
import { useEmployees } from "src/widgets/employees-list/api/queries/use-employees";
import { useState } from "react";
import { LoaderApplication } from "./LoaderApplication";

export const AllApplicationsList = () => {
  const { employees, error, isLoading } = useEmployees();
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleToggle = (id: string | null) => {
    setActiveItem(id);
  };

  if (error) {
    return <p className="text-red-500">error</p>;
  }

  return (
    <div className="w-full min-w-[1024px] overflow-x-auto bg-white pb-28">
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
          {employees.map((employee: any) => (
            <div key={employee.user_uuid} onClick={(e) => e.stopPropagation()}>
              <ApplicationItem
                application={employee}
                isActive={activeItem === employee.user_uuid}
                onToggle={handleToggle}
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
};
