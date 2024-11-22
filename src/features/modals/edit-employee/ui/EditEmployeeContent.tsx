import { Input } from "src/shared/ui";
import Toggle from "src/shared/ui/toggle/Toggle";
import { Employee } from "../model/type/employee.type";

type Props = {
  employeeData: Employee;
  handleChange: (field: keyof Employee, value: string) => void;
  isChecked: boolean;
  handleToggle: () => void;
};

export const EditEmployeeContent = ({
  employeeData,
  handleChange,
  isChecked,
  handleToggle,
}: Props) => {
  return (
    <div className="flex max-h-[700px] flex-col gap-4 overflow-y-auto">
      <Input
        inputType="default"
        disabled
        value={employeeData.email}
        onChange={(value) => handleChange("email", value)}
        label="Почта"
      />
      <Input
        inputType="default"
        value={employeeData.full_name}
        onChange={(value) => handleChange("full_name", value)}
        label="ФИО"
      />
      <Input
        inputType="default"
        value={employeeData.position}
        onChange={(value) => handleChange("position", value)}
        label="Должность"
      />
      <Input
        inputType="default"
        value={employeeData.employment_date}
        onChange={(value) => handleChange("employment_date", value)}
        label="Дата трудоустройства"
        placeholder="YYYY-MM-DD"
      />
      <Input
        inputType="default"
        value={employeeData.place_of_employment}
        onChange={(value) => handleChange("place_of_employment", value)}
        label="Место работы"
      />
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
  );
};
