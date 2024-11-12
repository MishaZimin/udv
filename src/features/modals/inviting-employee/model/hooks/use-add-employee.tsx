import { useMutation } from "@tanstack/react-query";
import { AddEmployeesApi } from "../../api/inviting-employee.api";
import { Employee } from "../type/employee.type";

export const useAddEmployee = () => {
  const mutation = useMutation({
    mutationFn: async (userData: Employee) => {
      const response = await AddEmployeesApi.addEmployee(userData);
      return response;
    },
    // onError: (error) => {
    //   console.error("Ошибка при добавлении сотрудника:", error);
    // },
  });

  return mutation;
};
