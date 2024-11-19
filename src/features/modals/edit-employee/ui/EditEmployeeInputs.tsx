import { useState } from "react";
import { Input } from "src/shared/ui";
import { Employee } from "../model/type/employee.type";

type Props = {
  employee: Employee;
};

export const EditEmployeeInputs = ({ employee }: Props) => {
  const [isChecked] = useState(employee?.administration || false);
  const [employeeData, setEmployeeData] = useState({
    full_name: employee?.full_name || "",
    place_of_employment: employee?.place_of_employment || "",
    position: employee?.position || "",
    employment_date: "",
    email: employee?.email || "",
    administration: isChecked,
  });

  const handleChange = (field: keyof typeof employeeData, value: string) => {
    setEmployeeData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
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
        <p className="text-[14px] leading-[20px] opacity-[60%]">Должность</p>
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
        <p className="text-[14px] leading-[20px] opacity-[60%]">Место работы</p>
        <Input
          inputType="default"
          value={employeeData.place_of_employment}
          onChange={(value) => handleChange("place_of_employment", value)}
        />
      </div>
    </>
  );
};
