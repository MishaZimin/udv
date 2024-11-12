import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { LoginApi } from "../services/mail.api";

interface LoginRequest {
  email: string;
}

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data: LoginRequest) => {
      const response = await LoginApi.postLogin(data);
      return response;
    },
    onSuccess: (data) => {
      console.log("success useLogin:", data);
      navigate("/check-mail");
    },
    onError: (error) => {
      console.error("error useLogin:", error);
    },
  });
};
