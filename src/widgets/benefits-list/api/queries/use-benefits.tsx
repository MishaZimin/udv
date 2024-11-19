import { useQuery } from "@tanstack/react-query";
import { BenefitApi } from "../../../../entities/benefit/api/benefit.api";

export const useBenefits = () => {
  const {
    data: benefits,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["benefits"],
    queryFn: async () => {
      const response = await BenefitApi.getBenefits();
      return response;
    },
    staleTime: 0,
  });

  return { benefits, error, isLoading, refetch };
};
