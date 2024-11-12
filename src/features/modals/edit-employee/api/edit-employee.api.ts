import axios from "axios";
import { getFromLocalStorage } from "src/shared/lib";
import { Employee } from "./..";

axios.defaults.baseURL = "https://udv-benefits.ru";

export const EditEmployeesApi = {
  async editEmployee(id: string, userData: Employee) {
    const response = await axios.put("/admin/users/" + id, userData, {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + getFromLocalStorage("token"),
        "Content-Type": "application/json",
      },
    });
    return response.data;
  },
};
