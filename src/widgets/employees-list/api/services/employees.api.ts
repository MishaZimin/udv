import axios from "axios";
import { getFromLocalStorage } from "src/shared/lib";

axios.defaults.baseURL = "https://udv-benefits.ru";

export const EmployeesApi = {
  async getEmployees() {
    const response = await axios.get("/admin/users", {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + getFromLocalStorage("token"),
      },
    });
    return response.data;
  },
};
