import { useState } from "react";
import { Modal } from "src/shared/ui/modal";
import { Button } from "src/shared/ui";
import Toggle from "src/shared/ui/toggle/Toggle";
import { Input } from "src/shared/ui";
import { useAddEmployee } from "../model/hooks/use-add-employee";
import { useEmployees } from "src/widgets/employees-list/api/queryes/use-employees";
import { Loader } from "src/shared/ui";
import { AxiosError } from "axios";

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
  const { mutateAsync: addEmployee, error, isPending } = useAddEmployee();
  const { refetch } = useEmployees();

  const [isChecked, setIsChecked] = useState(false);
  const [employeeData, setEmployeeData] = useState({
    full_name: "",
    place_of_employment: "",
    position: "",
    employment_date: "",
    email: "",
    administration: false,
  });
  const [validationError, setValidationError] = useState<string | null>(null);

  type EmployeeField = Exclude<keyof typeof employeeData, "administration">;
  const fields: Array<{
    label: string;
    field: EmployeeField;
    placeholder?: string;
  }> = [
    { label: "ФИО", field: "full_name", placeholder: "Введите ФИО" },
    { label: "Почта", field: "email", placeholder: "Введите email" },
    { label: "Должность", field: "position", placeholder: "Введите должность" },
    {
      label: "Дата трудоустройства",
      field: "employment_date",
      placeholder: "2024-01-01",
    },
    {
      label: "Место работы",
      field: "place_of_employment",
      placeholder: "Введите место работы",
    },
  ];

  const handleChange = (field: string, value: string) => {
    setEmployeeData((prev) => ({ ...prev, [field]: value }));
  };

  const handleToggle = () => {
    setIsChecked(!isChecked);
    setEmployeeData((prev) => ({ ...prev, administration: !isChecked }));
  };

  const isDateValid = (date: string) => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(date);
  };

  const handleSubmit = async () => {
    if (!isDateValid(employeeData.employment_date)) {
      setValidationError("Дата должна быть в формате ГГГГ-ММ-ДД");
      return;
    }

    const isFormValid = Object.values(employeeData).every(
      (value) => value !== "",
    );

    if (!isFormValid) {
      setValidationError("Пожалуйста, заполните все поля");
      return;
    }

    setValidationError(null);
    try {
      await addEmployee(employeeData);
      refetch();
      closeModal();
    } catch (err) {
      const axiosError = err as AxiosError;
      if (axiosError.response?.status === 400) {
        setValidationError("Такой email уже занят");
      } else {
        setValidationError("Произошла ошибка");
      }
    }
  };

  if (isPending) {
    return <Loader />;
  }
  if (error) {
    return <p>Произошла ошибка при отправке данных</p>;
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      position="right"
      closeBtn={!closeBtn}>
      <div className="relative z-10 mx-auto mb-8 mr-8 mt-8 flex h-[calc(100vh-64px)] w-[600px] flex-col gap-[0px] rounded-[16px] bg-card p-6 px-[32px] py-[24px]">
        <h1 className="border-b pb-4 text-[28px] leading-[36px]">
          Приглашение сотрудника
        </h1>
        <p className="py-4">
          Для добавления сотрудника укажите почту, мы вышлем ссылку-приглашение.
          После подтверждения адреса почты он получит доступ в сервис.
        </p>

        <div className="flex max-h-[700px] flex-col gap-4 overflow-y-auto border-b">
          {fields.map(({ label, field, placeholder }) => (
            <div key={field} className="flex flex-col gap-1">
              <p className="text-[14px] leading-[20px] opacity-[60%]">
                {label}
              </p>
              <Input
                inputType="default"
                value={employeeData[field]}
                onChange={(value) => handleChange(field, value)}
                placeholder={placeholder || ""}
              />
            </div>
          ))}

          <div className="mb-4 flex flex-col gap-4 pt-4">
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

        {validationError && (
          <p className="pt-4 text-red-500">{validationError}</p>
        )}

        <div className="flex flex-row gap-[8px] pt-6">
          <Button
            text={"Пригласить"}
            textColor={"light"}
            buttonType={"primary"}
            onClick={handleSubmit}
            size={"sm"}
          />
          <Button
            onClick={() => {
              setValidationError(null);
              closeModal();
            }}
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
