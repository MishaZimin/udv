import { Input } from "src/shared/ui";
import Toggle from "src/shared/ui/toggle/Toggle";

type EmployeeData = {
  full_name: string;
  place_of_employment: string;
  position: string;
  employment_date: string;
  email: string;
};

type Props = {
  employeeData: EmployeeData;
  handleChange: (field: keyof EmployeeData, value: string) => void;
  isChecked: boolean;
  handleToggle: () => void;
};

const fields: {
  label: string;
  field: keyof EmployeeData;
  placeholder: string;
}[] = [
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

export const InvitingContent = ({
  employeeData,
  handleChange,
  isChecked,
  handleToggle,
}: Props) => {
  return (
    <>
      <p className="py-4">
        Для добавления сотрудника укажите почту, мы вышлем ссылку-приглашение.
        После подтверждения адреса почты он получит доступ в сервис.
      </p>

      {fields.map(({ label, field, placeholder }) => (
        <div key={field}>
          <Input
            inputType="default"
            value={employeeData[field]}
            label={label}
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
    </>
  );
};
