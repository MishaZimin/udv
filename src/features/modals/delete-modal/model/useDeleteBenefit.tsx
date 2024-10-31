import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BenefitApi } from "src/widgets/benefits/api/benefit.api";

export const useDeleteBenefit = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await BenefitApi.getBenefitDelete(id);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["benefits"] });
    },
    onError: (err) => {
      console.error("Error deleting benefit:", err);
    },
  });
  return mutation;
};
