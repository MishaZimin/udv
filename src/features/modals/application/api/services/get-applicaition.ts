import axios from "axios";
import { getFromLocalStorage } from "src/shared/lib";

const api = axios.create({
  baseURL: "https://udv-benefits.ru",
  headers: {
    accept: "application/json",
  },
});
const token = getFromLocalStorage("token");

export const getAdminRequest = async (requestId: number) => {
  const { data } = await api.get(`/admin/requests/${requestId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
