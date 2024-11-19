import { useQuery } from "@tanstack/react-query";
import { ProfileApi } from "../services/profile.api";

export const useProfile = () => {
  const {
    data: profile,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const response = await ProfileApi.getProfile();
      return response;
    },
    retry: 1,
    // staleTime: 5000,
  });

  return { profile, error, isLoading, refetch };
};
