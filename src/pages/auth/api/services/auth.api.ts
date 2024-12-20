import axios from "axios";

axios.defaults.baseURL = "https://udv-benefits.ru";

export const AuthApi = {
  async getAuth(urlToken: string) {
    try {
      const response = await axios.get("/users/authorize/" + urlToken, {
        headers: {
          Accept: "application/json",
        },
      });
      console.log("Server response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching token:", error);
      throw error;
    }
  },
};
