import { useMutation } from "@tanstack/react-query";
import { EditEmployeesApi } from "../../api/edit-employee.api";

export const useEditEmployee = (id: string) => {
  const mutation = useMutation({
    mutationFn: async (userData: {
      full_name: string;
      place_of_employment: string;
      position: string;
      employment_date: string;
      email: string;
      administration: boolean;
    }) => {
      const response = await EditEmployeesApi.editEmployee(id, userData);
      return response;
    },
    onError: (error) => {
      console.error("Ошибка при добавлении сотрудника:", error);
    },
  });

  return mutation;
};
