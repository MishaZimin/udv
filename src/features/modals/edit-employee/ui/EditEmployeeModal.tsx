import { useState } from "react";
import { Modal } from "src/shared/ui/modal";
import { Button, Input } from "src/shared/ui";
import Toggle from "src/shared/ui/toggle/Toggle";
import { useEditEmployee } from "../model/hooks/use-edit-employee";
import { Employee } from "../model/type/employee.type";
import { useEmployees } from "src/widgets/employees-list/api/queryes/use-employees";
import { Loader } from "src/shared/ui";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  employee?: Employee;
  id: string;
};

export const EditEmployeeModal = ({
  isOpen,
  closeModal,
  employee,
  id,
}: Props) => {
  const { mutateAsync: editEmployee, error, isPending } = useEditEmployee(id);
  const { refetch } = useEmployees();

  const [isChecked, setIsChecked] = useState(employee?.administration || false);
  const [employeeData, setEmployeeData] = useState({
    full_name: employee?.full_name || "",
    place_of_employment: employee?.place_of_employment || "",
    position: employee?.position || "",
    employment_date: "",
    email: employee?.email || "",
    administration: isChecked,
  });

  const [formError, setFormError] = useState<string | null>(null);

  const handleChange = (field: keyof typeof employeeData, value: string) => {
    setEmployeeData((prev) => ({ ...prev, [field]: value }));
  };

  const handleToggle = () => {
    setIsChecked(!isChecked);
    setEmployeeData((prev) => ({ ...prev, administration: !isChecked }));
  };

  const isFormValid = () => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(employeeData.employment_date)) {
      setFormError("Дата должна быть в формате YYYY-MM-DD.");
      return false;
    }

    const requiredFields = [
      "email",
      "full_name",
      "position",
      "employment_date",
      "place_of_employment",
    ];
    for (const field of requiredFields) {
      if (!employeeData[field as keyof typeof employeeData]) {
        setFormError("Все поля должны быть заполнены.");
        return false;
      }
    }

    setFormError(null);
    return true;
  };

  const handleSubmit = async () => {
    if (!isFormValid()) return;

    console.log(employeeData, "|", id);
    await editEmployee(employeeData);
    refetch();
    closeModal();
  };

  if (isPending) {
    return <Loader />;
  }
  if (error) {
    return <p>Ошибка</p>;
  }

  return (
    <Modal isOpen={isOpen} onClose={closeModal} position="right">
      <div className="relative z-10 mx-auto mb-8 mr-8 mt-8 flex h-[calc(100vh-64px)] w-[600px] flex-col justify-between gap-[0px] rounded-[16px] bg-card p-6 px-[32px] py-[24px]">
        <div>
          <h1 className="border-b pb-4 text-[28px] leading-[36px]">
            Редактирование сотрудника
          </h1>
          <div className="flex max-h-[700px] flex-col gap-4 overflow-y-auto border-b pt-4">
            <div className="flex flex-col gap-1">
              <p className="text-[14px] leading-[20px] opacity-[60%]">Почта</p>
              <Input
                inputType="default"
                disabled={true}
                value={employeeData.email}
                onChange={(value) => handleChange("email", value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[14px] leading-[20px] opacity-[60%]">ФИО</p>
              <Input
                inputType="default"
                value={employeeData.full_name}
                onChange={(value) => handleChange("full_name", value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[14px] leading-[20px] opacity-[60%]">
                Должность
              </p>
              <Input
                inputType="default"
                value={employeeData.position}
                onChange={(value) => handleChange("position", value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[14px] leading-[20px] opacity-[60%]">
                Дата трудоустройства
              </p>
              <Input
                inputType="default"
                value={employeeData.employment_date}
                onChange={(value) => handleChange("employment_date", value)}
                placeholder={"2024-01-01"}
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[14px] leading-[20px] opacity-[60%]">
                Место работы
              </p>
              <Input
                inputType="default"
                value={employeeData.place_of_employment}
                onChange={(value) => handleChange("place_of_employment", value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 pt-4">
            <h1>Администрирование</h1>
            <p>
              Администратор может создавать, редактировать, удалять бенефиты и
              читать обращения сотрудников
            </p>
            <div className="flex flex-row gap-2">
              <Toggle isChecked={isChecked} onToggle={handleToggle} />
              <p>Администратор</p>
            </div>
          </div>
        </div>
        <div className="border-t">
          {formError && <p className="pt-0 text-red-500">{formError}</p>}
          <div className="mb-0 flex flex-row gap-[8px] pt-6">
            <Button
              text={"Сохранить"}
              textColor={"light"}
              buttonType={"primary"}
              size="sm"
              onClick={handleSubmit}
            />
            <Button
              onClick={() => {
                setFormError(null);
                setEmployeeData({
                  full_name: employee?.full_name || "",
                  place_of_employment: employee?.place_of_employment || "",
                  position: employee?.position || "",
                  employment_date: "",
                  email: employee?.email || "",
                  administration: isChecked,
                });
                closeModal();
              }}
              text={"Отмена"}
              textColor={"dark"}
              buttonType={"secondary"}
              size="sm"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};
