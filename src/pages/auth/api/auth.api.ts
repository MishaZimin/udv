import axios from "axios";

axios.defaults.baseURL = "http://89.169.137.145:8000";

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
