import { useState } from "react";
import { Modal } from "src/shared/ui/modal";
import { Button } from "src/shared/ui";
import Toggle from "src/shared/ui/toggle/Toggle";
import { Input } from "src/shared/ui";
import { useAddEmployee } from "../model/hooks/useAddEmployee";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  closeBtn: boolean;
};

export const InvitingEmployeeModal = ({
  isOpen,
  closeModal,
  closeBtn,
}: Props) => {
  const { mutate: addEmployee, error } = useAddEmployee();

  const [isChecked, setIsChecked] = useState(false);
  const [employeeData, setEmployeeData] = useState({
    full_name: "",
    place_of_employment: "",
    position: "",
    employment_date: "2024-10-31",
    email: "",
    administration: false,
  });

  const handleChange = (field: keyof typeof employeeData, value: string) => {
    setEmployeeData((prev) => ({ ...prev, [field]: value }));
  };

  const handleToggle = () => {
    setIsChecked(!isChecked);
    setEmployeeData((prev) => ({ ...prev, administration: !isChecked }));
  };

  const handleSubmit = async () => {
    await addEmployee(employeeData);
    console.log(employeeData);
  };

  if (error) {
    return <p>error</p>;
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      position="right"
      closeBtn={!closeBtn}
    >
      <div className="relative z-10 mx-auto mb-8 mr-8 mt-8 flex h-[calc(100vh-64px)] w-[600px] flex-col gap-[0px] rounded-[16px] bg-card p-6 px-[32px] py-[24px]">
        <h1 className="border-b pb-4 text-[28px] leading-[36px]">
          Приглашение сотрудника
        </h1>
        <p className="py-4">
          Для добавления сотрудника укажите почту, мы вышлем ссылку-приглашение.
          После подтверждения адреса почты он получит доступ в сервис.
        </p>

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

        <div className="flex flex-row gap-[8px] pt-6">
          <Button
            text={"Пригласить"}
            textColor={"light"}
            buttonType={"primary"}
            onClick={handleSubmit}
            size={"sm"}
          />
          <Button
            onClick={closeModal}
            text={"Отмена"}
            textColor={"dark"}
            buttonType={"secondary"}
            size={"sm"}
          />
        </div>
      </div>
    </Modal>
  );
};
