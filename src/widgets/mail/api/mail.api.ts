import axios from "axios";

interface LoginRequest {
  email: string;
}

axios.defaults.baseURL = "http://89.169.137.145:8000";

export const LoginApi = {
  async postLogin(data: LoginRequest) {
    const response = await axios.post("/users/login", data, {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    return response.data;
  },
};
