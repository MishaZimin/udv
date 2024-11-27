import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sendAdminRequest } from "../services/admin-request.api";

export const useApplyRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => sendAdminRequest(id, "apply"),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allApplications"] });
    },
    onError: (error) => {
      console.error("error applying request:", error);
    },
  });
};
