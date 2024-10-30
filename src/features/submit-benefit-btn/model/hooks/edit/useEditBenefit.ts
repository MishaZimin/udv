import { useMutation } from "@tanstack/react-query";
import { Benefit } from "src/widgets/benefits";
import { BenefitApi } from "src/widgets/benefits/api/benefit.api";
import { useNavigate } from "react-router-dom";

export const useEditBenefit = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async ({ id, data }: { id: number; data: Benefit }) => {
      const response = await BenefitApi.editBenefit(id, data);
      return response;
    },
    onSuccess: (data) => {
      console.log("success EditBenefit:", data);
      navigate("/admin/benefit");
    },
    onError: (error) => {
      console.error("error EditBenefit:", error);
    },
  });
};
