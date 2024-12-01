import { useQuery } from "@tanstack/react-query";
import { getAdminRequest } from "../services/get-applicaition";

export const useAdminRequest = (requestId: number) => {
  return useQuery({
    queryKey: ["application", requestId],
    queryFn: () => getAdminRequest(requestId),
    staleTime: 1000,
  });
};
