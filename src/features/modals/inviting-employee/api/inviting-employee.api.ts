import axios from "axios";
import { getFromLocalStorage } from "src/shared/lib";
import { Employee } from "../model/type/employee.type";

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
