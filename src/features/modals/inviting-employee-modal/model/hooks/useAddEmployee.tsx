import { useMutation } from "@tanstack/react-query";
import { AddEmployeesApi } from "../../api/inviting-employee.api";

export const useAddEmployee = () => {
  const mutation = useMutation({
    mutationFn: async (userData: {
      full_name: string;
      place_of_employment: string;
      position: string;
      employment_date: string;
      email: string;
      administration: boolean;
    }) => {
      const response = await AddEmployeesApi.addEmployee(userData);
      return response;
    },
    onError: (error) => {
      console.error("Ошибка при добавлении сотрудника:", error);
    },
  });

  return mutation;
};
