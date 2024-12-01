import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CancelMyApplications } from "../services/application.api";

export const useCancelApplication = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await CancelMyApplications(id);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["applications"] });
      queryClient.invalidateQueries({ queryKey: ["allApplications"] });
    },
    onError: (err) => {
      console.error("Error deleting benefit:", err);
    },
  });
  return mutation;
};
