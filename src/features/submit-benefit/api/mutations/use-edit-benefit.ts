import { IBenefitInfo } from "src/entities/benefit/model/types/benefit.type";
import { useMutation } from "@tanstack/react-query";
import { BenefitApi } from "src/entities/benefit/api/benefit.api";

export const useEditBenefit = () => {
  return useMutation({
    mutationFn: async ({ id, data }: { id: number; data: IBenefitInfo }) => {
      const response = await BenefitApi.editBenefit(id, data);
      return response;
    },
    onSuccess: (data) => {
      console.log("success EditBenefit:", data);
    },
    onError: (error) => {
      console.error("error EditBenefit:", error);
    },
  });
};
