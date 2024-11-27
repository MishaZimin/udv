import axios from "axios";
import { getFromLocalStorage } from "src/shared/lib";

axios.defaults.baseURL = "https://udv-benefits.ru";
const token = getFromLocalStorage("token");

export const ApplyApi = {
  async applyBenefit(id: number, formData: FormData) {
    const response = await axios.post(`/benefits/apply/${id}`, formData, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  },
};
