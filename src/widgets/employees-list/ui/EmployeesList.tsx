import { Employee } from "src/entities/employee";
import { InvitingEmployeeModal } from "src/features/modals";
import { useEmployees } from "src/widgets/employees-list/api/queries/use-employees";
import { Button } from "src/shared/ui";
import { useModal } from "src/shared/ui/modal";
import { LoadersList } from "src/shared/ui/loader/LoadersList";
import { IEmployee } from "src/entities/employee/model/types/employee.type";
import { useState } from "react";
import { LoaderEmployee } from "./LoaderEmployee";

export const EmployeesList = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const { employees, error, isLoading } = useEmployees();
  const [isModalPending, setIsModalPending] = useState(false);

  const handlePendingChange = (pending: boolean) => {
    setIsModalPending(pending);
  };
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleToggle = (id: string | null) => {
    setActiveItem(id);
  };

  if (error) {
    return <p className="text-red-500">error</p>;
  }

  return (
    <div className="mb-10 w-full min-w-[1024px] overflow-x-auto bg-white">
      <div className="relative flex flex-row gap-8 px-[8px] py-[16px] text-left">
        <div className="my-auto h-[22px] min-w-[22px] rounded-full bg-white"></div>
        <div className="flex w-full flex-row gap-[32px]">
          <p className="my-auto w-[30%] text-left text-opacity-[60%]">
            Сотрудник
          </p>
          <p className="my-auto w-[15%] text-left text-opacity-[60%]">
            Должность
          </p>
          <p className="my-auto w-[15%] text-left text-opacity-[60%]">Опыт</p>
          <p className="my-auto w-[40%] text-left text-opacity-[60%]">Почта</p>
        </div>
        <div className="my-auto h-[22px] min-w-[22px] rounded-full bg-white"></div>
        <div className="absolute right-0 top-2">
          <Button
            onClick={openModal}
            text="Пригласить"
            textColor="dark"
            buttonType="secondary"
            size="sm"
          />
        </div>
      </div>

      {isLoading ? (
        <LoadersList count={12}>
          <LoaderEmployee />
        </LoadersList>
      ) : (
        <>
          {/* <LoadersList count={12}>
            <LoaderEmployee />
          </LoadersList> */}
          {employees && employees.length > 0 ? (
            employees.map((employee: IEmployee) => (
              <div key={employee.user_uuid}>
                <Employee
                  employee={employee}
                  isActive={activeItem === employee.user_uuid}
                  onToggle={handleToggle}
                />
              </div>
            ))
          ) : (
            <p>Нет данных о сотрудниках</p>
          )}
          {isModalPending && <LoaderEmployee />}
        </>
      )}
      {isOpen && !isModalPending && (
        <InvitingEmployeeModal
          isOpen={isOpen}
          closeModal={closeModal}
          onPendingChange={handlePendingChange}
        />
      )}
    </div>
  );
};
