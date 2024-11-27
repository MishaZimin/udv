import axios from "axios";
import { getFromLocalStorage } from "src/shared/lib";

axios.defaults.baseURL = "https://udv-benefits.ru";

export const ApplicationsApi = {
  async getApplications() {
    const response = await axios.get("/admin/requests", {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + getFromLocalStorage("token"),
      },
    });
    return response.data;
  },
};
