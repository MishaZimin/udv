import axios from "axios";
import { getFromLocalStorage } from "src/shared/lib/local-storage";

axios.defaults.baseURL = "https://udv-benefits.ru";

export const AddEmployeesApi = {
  async addEmployee(userData: {
    full_name: string;
    place_of_employment: string;
    position: string;
    employment_date: string;
    email: string;
    administration: boolean;
  }) {
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
