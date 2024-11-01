import { useMutation } from "@tanstack/react-query";
import { EditEmployeesApi } from "../../api/edit-employee.api";
import { Employee } from "../type/employee.type";

export const useEditEmployee = (id: string) => {
  const mutation = useMutation({
    mutationFn: async (userData: Employee) => {
      const response = await EditEmployeesApi.editEmployee(id, userData);
      return response;
    },
    onError: (error) => {
      console.error("Ошибка при добавлении сотрудника:", error);
    },
  });

  return mutation;
};
