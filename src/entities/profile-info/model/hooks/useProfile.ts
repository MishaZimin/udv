// src/hooks/useBenefits.ts
import { useQuery } from "@tanstack/react-query";
import { ProfileApi } from "../../api/profile.api";

export const useProfile = () => {
  const {
    data: profile,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const response = await ProfileApi.getProfile();
      return response;
    },
    retry: 1,
  });

  return { profile, error, isLoading };
};
