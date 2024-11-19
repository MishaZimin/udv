import { useMutation } from "@tanstack/react-query";

import { Employee } from "../../model/type/employee.type";
import { AddEmployeesApi } from "../services/inviting-employee.api";

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
