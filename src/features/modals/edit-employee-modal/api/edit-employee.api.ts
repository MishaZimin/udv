import axios from "axios";
import { getFromLocalStorage } from "src/shared/lib/local-storage";

axios.defaults.baseURL = "https://udv-benefits.ru";

export const EditEmployeesApi = {
  async editEmployee(
    id: string,
    userData: {
      full_name: string;
      place_of_employment: string;
      position: string;
      employment_date: string;
      email: string;
      administration: boolean;
    },
  ) {
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
