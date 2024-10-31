import axios from "axios";
import { getFromLocalStorage } from "src/shared/lib/local-storage";

axios.defaults.baseURL = "https://udv-benefits.ru";

export const EmployeeApi = {
  async deleteEmployee(id: string) {
    const response = await axios.delete("/admin/users/" + id, {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + getFromLocalStorage("token"),
      },
    });
    return response.data;
  },
};
