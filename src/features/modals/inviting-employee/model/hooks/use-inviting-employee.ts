import { useState } from "react";

import { AxiosError } from "axios";
import { useAddEmployee } from "./use-add-employee";
import { useEmployees } from "src/widgets/employees-list/api/queryes/use-employees";

// Типы данных
type EmployeeData = {
  full_name: string;
  place_of_employment: string;
  position: string;
  employment_date: string;
  email: string;
  administration: boolean;
};

export const useInvitingEmployee = (closeModal: () => void) => {
  const { mutateAsync: addEmployee, error, isPending } = useAddEmployee();
  const { refetch } = useEmployees();

  // Состояния
  const [isChecked, setIsChecked] = useState(false);
  const [employeeData, setEmployeeData] = useState<EmployeeData>({
    full_name: "",
    place_of_employment: "",
    position: "",
    employment_date: "",
    email: "",
    administration: false,
  });
  const [validationError, setValidationError] = useState<string | null>(null);

  // Обработчики
  const handleChange = (field: keyof EmployeeData, value: string) => {
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
    // Валидация даты
    if (!isDateValid(employeeData.employment_date)) {
      setValidationError("Дата должна быть в формате ГГГГ-ММ-ДД");
      return;
    }

    // Проверка, заполнены ли все поля
    const isFormValid = Object.values(employeeData).every(
      (value) => value !== "",
    );
    if (!isFormValid) {
      setValidationError("Пожалуйста, заполните все поля");
      return;
    }

    // Сброс ошибок валидации
    setValidationError(null);

    // Попытка отправки данных
    try {
      await addEmployee(employeeData);
      refetch(); // Обновляем список сотрудников
      closeModal(); // Закрываем модалку после успешной отправки
    } catch (err) {
      const axiosError = err as AxiosError;
      if (axiosError.response?.status === 400) {
        setValidationError("Такой email уже занят");
      } else {
        setValidationError("Произошла ошибка");
      }
    }
  };

  // Возвращаем состояния и обработчики для использования в UI компоненте
  return {
    employeeData,
    isChecked,
    validationError,
    isPending,
    error,
    handleChange,
    handleToggle,
    handleSubmit,
  };
};
