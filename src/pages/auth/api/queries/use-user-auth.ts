import { useQuery } from "@tanstack/react-query";
import { AuthApi } from "../services/auth.api";

export const useAuth = (urlToken: string) => {
  const {
    data: token,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["auth"],
    queryFn: async () => {
      const response = await AuthApi.getAuth(urlToken);
      return response;
    },
    retry: 1,
  });

  return { token, error, isLoading };
};
