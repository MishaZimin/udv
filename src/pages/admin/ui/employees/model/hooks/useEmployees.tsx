import { useQuery } from "@tanstack/react-query";
import { EmployeesApi } from "../../api/employees.api";

export const useEmployees = () => {
  const {
    data: employees,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      const response = await EmployeesApi.getEmployees();
      return response;
    },
    retry: 1,
  });

  return { employees, error, isLoading, refetch };
};
