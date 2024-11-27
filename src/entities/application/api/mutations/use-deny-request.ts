import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sendAdminRequest } from "../services/admin-request.api";

export const useDenyRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => sendAdminRequest(id, "deny"),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allApplications"] });
    },
    onError: (error) => {
      console.error("error denying request:", error);
    },
  });
};
