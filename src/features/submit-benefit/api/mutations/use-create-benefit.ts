import { useMutation } from "@tanstack/react-query";
import { BenefitApi } from "src/entities/benefit/api/benefit.api";
import { IBenefitInfo } from "src/entities/benefit";

export const useCreateBenefit = () => {
  return useMutation({
    mutationFn: async (data: IBenefitInfo) => {
      const response = await BenefitApi.createBenefit(data);
      return response;
    },
    onSuccess: (data) => {
      console.log("success CreateBenefit:", data);
    },
    onError: (error) => {
      console.error("error CreateBenefit:", error);
    },
  });
};
