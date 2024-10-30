import axios from "axios";
import { getFromLocalStorage } from "src/shared/lib/local-storage";

axios.defaults.baseURL = "http://89.169.137.145:8000";

axios.interceptors.request.use(
  (config) => {
    const token = getFromLocalStorage("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export const ProfileApi = {
  async getProfile() {
    const response = await axios.get("/users/profile", {
      headers: {
        Accept: "application/json",
      },
    });
    return response.data;
  },
};
