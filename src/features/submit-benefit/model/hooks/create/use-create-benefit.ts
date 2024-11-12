import { useMutation } from "@tanstack/react-query";
import { BenefitApi } from "src/entities/benefit/api/benefit.api";
import { useNavigate } from "react-router-dom";
import { IBenefitInfo } from "src/entities/benefit";

export const useCreateBenefit = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data: IBenefitInfo) => {
      const response = await BenefitApi.createBenefit(data);
      return response;
    },
    onSuccess: (data) => {
      console.log("success CreateBenefit:", data);
      navigate("/admin/benefit");
    },
    onError: (error) => {
      console.error("error CreateBenefit:", error);
    },
  });
};
