import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ApplyApi } from "../api/apply.api";

export const useApply = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({ id, files }: { id: number; files: File[] }) => {
      const formData = new FormData();

      files.forEach((file) => formData.append("files", file));

      const response = await ApplyApi.applyBenefit(id, formData);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["apply"] });
    },
    onError: (err) => {
      console.error("Error applying benefit:", err);
    },
  });

  return mutation;
};
