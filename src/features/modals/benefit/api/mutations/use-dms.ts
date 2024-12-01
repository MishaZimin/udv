import { useMutation } from "@tanstack/react-query";
import { ApplyApi } from "../services/apply.api";

export const usePostInsurance = () => {
  return useMutation({
    mutationFn: (data: FormData) => ApplyApi.postInsurance(data),
  });
};
