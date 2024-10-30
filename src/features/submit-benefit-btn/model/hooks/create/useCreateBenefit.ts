import { useMutation } from "@tanstack/react-query";
import { BenefitApi } from "src/widgets/benefits/api/benefit.api";
import { Benefit } from "src/widgets/benefits";
import { useNavigate } from "react-router-dom";

export const useCreateBenefit = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data: Benefit) => {
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
