import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { LoginApi } from "../services/mail.api";

interface LoginRequest {
  email: string;
}

export const useLogin = (options?: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onError?: (error: any) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSuccess?: (data: any) => void;
}) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data: LoginRequest) => {
      const response = await LoginApi.postLogin(data);
      return response;
    },
    onSuccess: (data) => {
      console.log("success useLogin:", data);
      navigate("/check-mail");
      options?.onSuccess?.(data);
    },
    onError: (error) => {
      console.error("error useLogin:");
      options?.onError?.(error);
    },
  });
};
