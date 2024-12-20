import { useState } from "react";
import { useEmployees } from "src/widgets/employees-list/api/queries/use-employees";
import { Employee } from "../type/employee.type";
import { useEditEmployee } from "./use-edit-employee";

export const useEditEmployeeModal = (
  employee: Employee | undefined,
  id: string,
  closeModal: () => void,
) => {
  const { mutateAsync: editEmployee, error, isPending } = useEditEmployee(id);
  const { refetch } = useEmployees();

  const [isChecked, setIsChecked] = useState(employee?.administration || false);
  const [employeeData, setEmployeeData] = useState({
    full_name: employee?.full_name || "",
    place_of_employment: employee?.place_of_employment || "",
    position: employee?.position || "",
    employment_date: employee?.employment_date || "",
    email: employee?.email || "",
    administration: isChecked,
  });

  const [formError, setFormError] = useState<string | null>(null);

  const handleChange = (field: keyof typeof employeeData, value: string) => {
    setEmployeeData((prev) => ({ ...prev, [field]: value }));
  };

  const handleToggle = () => {
    setIsChecked((prev) => !prev);
    setEmployeeData((prev) => ({
      ...prev,
      administration: !prev.administration,
    }));
  };

  const resetForm = () => {
    setEmployeeData({
      full_name: employee?.full_name || "",
      place_of_employment: employee?.place_of_employment || "",
      position: employee?.position || "",
      employment_date: employee?.employment_date || "",
      email: employee?.email || "",
      administration: isChecked,
    });
    setFormError(null);
  };

  const isFormValid = () => {
    const requiredFields = [
      "email",
      "full_name",
      "position",
      // "employment_date",
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
    console.log(employeeData);

    const data = {
      full_name: employeeData?.full_name || "",
      place_of_employment: employeeData?.place_of_employment || "",
      position: employeeData?.position || "",
      email: employeeData?.email || "",
      administration: isChecked,
    };
    await editEmployee(data);
    refetch();
    closeModal();
  };

  return {
    employeeData,
    isChecked,
    formError,
    isPending,
    error,
    handleChange,
    handleToggle,
    handleSubmit,
    resetForm,
  };
};
