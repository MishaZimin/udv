import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EmployeeApi } from "../../api/delete.api";

export const useDeleteEmployee = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (id: string) => {
      const response = await EmployeeApi.deleteEmployee(id);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employee"] });
    },
    onError: (err) => {
      console.error("error delete employee", err);
    },
  });
  return mutation;
};
