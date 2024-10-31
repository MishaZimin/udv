import { useQuery } from "@tanstack/react-query";
import { BenefitApi } from "../../api/benefit.api";

export const useBenefits = () => {
  const {
    data: benefits,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["benefits"],
    queryFn: async () => {
      const response = await BenefitApi.getBenefits();
      return response;
    },
    // retry: 1,
    staleTime: 0,
  });

  return { benefits, error, isLoading };
};
