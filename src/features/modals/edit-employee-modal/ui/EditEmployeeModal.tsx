import { useState } from "react";
import { Modal } from "src/shared/ui/modal";
import { Button, Input } from "src/shared/ui";
import Toggle from "src/shared/ui/toggle/Toggle";
import { useEditEmployee } from "../model/hooks/useEditEmployee";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  employee?: {
    full_name: string;
    place_of_employment: string;
    position: string;
    employment_date: string;
    email: string;
    administration: boolean;
  };
  id: string;
};

export const EditEmployeeModal = ({
  isOpen,
  closeModal,
  employee,
  id,
}: Props) => {
  const { mutate: editEmployee, error } = useEditEmployee(id);

  if (error) {
    return <p>error</p>;
  }

  const [isChecked, setIsChecked] = useState(employee?.administration || false);
  const [employeeData, setEmployeeData] = useState({
    full_name: employee?.full_name || "",
    place_of_employment: employee?.place_of_employment || "",
    position: employee?.position || "",
    employment_date: employee?.employment_date || "",
    email: employee?.email || "",
    administration: isChecked,
  });

  const handleChange = (field: keyof typeof employeeData, value: string) => {
    setEmployeeData((prev) => ({ ...prev, [field]: value }));
  };

  const handleToggle = () => {
    setIsChecked(!isChecked);
    setEmployeeData((prev) => ({ ...prev, administration: !isChecked }));
  };

  const handleSubmit = async () => {
    console.log(employeeData, "|", id);
    await editEmployee(employeeData);
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} position="right">
      <div className="relative z-10 mx-auto mb-8 mr-8 mt-8 flex h-[calc(100vh-64px)] w-[600px] flex-col justify-between gap-[0px] rounded-[16px] bg-card p-6 px-[32px] py-[24px]">
        <div>
          <h1 className="pb-4 text-[28px] leading-[36px]">
            Редактирование сотрудника
          </h1>
          <div className="flex max-h-[700px] flex-col gap-4 overflow-y-auto border-b">
            <div className="flex flex-col gap-1">
              <p>Почта</p>
              <Input
                inputType="default"
                value={employeeData.email}
                onChange={(value) => handleChange("email", value)}
              />
            </div>

            <div className="flex flex-col gap-1">
              <p>ФИО</p>
              <Input
                inputType="default"
                value={employeeData.full_name}
                onChange={(value) => handleChange("full_name", value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <p>Должность</p>
              <Input
                inputType="default"
                value={employeeData.position}
                onChange={(value) => handleChange("position", value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <p>Дата трудоустройства</p>
              <Input
                inputType="default"
                value={employeeData.employment_date}
                onChange={(value) => handleChange("employment_date", value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <p>Место работы</p>
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
        <div className="mb-0 flex flex-row gap-[8px] border-t pt-6">
          <Button
            text={"Сохранить"}
            textColor={"light"}
            buttonType={"primary"}
            size="sm"
            onClick={handleSubmit}
          />
          <Button
            onClick={closeModal}
            text={"Отмена"}
            textColor={"dark"}
            buttonType={"secondary"}
            size="sm"
          />
        </div>
      </div>
    </Modal>
  );
};
