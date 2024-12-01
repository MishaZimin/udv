import axios from "axios";
import { getFromLocalStorage } from "src/shared/lib";

const API_BASE_URL = "https://udv-benefits.ru";
const token = getFromLocalStorage("token");

export const getAnalyticsByBenefits = async () => {
  const response = await axios.get(`${API_BASE_URL}/analytics/by-benefits`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
