import axios from "axios";
import { Employee } from "src/features/modals/edit-employee";
import { getFromLocalStorage } from "src/shared/lib";

axios.defaults.baseURL = "https://udv-benefits.ru";

export const AddEmployeesApi = {
  async addEmployee(userData: Employee) {
    const response = await axios.post("/admin/users/add", userData, {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + getFromLocalStorage("token"),
        "Content-Type": "application/json",
      },
    });
    return response.data;
  },
};
